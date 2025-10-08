import NextAuth, { NextAuthOptions } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import CredentialsProvider from 'next-auth/providers/credentials';
import { MongoDBAdapter } from '@auth/mongodb-adapter';
import clientPromise from '@/lib/mongodb/client';

export const authOptions: NextAuthOptions = {
  // Temporarily remove MongoDB adapter to isolate session issue
  // adapter: MongoDBAdapter(clientPromise),
  secret: process.env.NEXTAUTH_SECRET,
  debug: false, // Disable debug mode for mobile
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' }
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }

        try {
          const { MongoClient } = await import('mongodb');
          const client = new MongoClient(process.env.MONGODB_URI!);
          await client.connect();
          const db = client.db();
          
          const user = await db.collection('users').findOne({ 
            email: credentials.email 
          }, {
            // Only select the fields we need to reduce data size
            projection: {
              _id: 1,
              email: 1,
              displayName: 1,
              fullName: 1,
              name: 1,
              isAdmin: 1,
              country: 1,
              phoneNumber: 1,
              password: 1
            }
          });
          await client.close();
          
          if (!user) {
            console.log('User not found:', credentials.email);
            return null;
          }

          // Compare hashed passwords
          const bcrypt = await import('bcryptjs');
          const isValidPassword = await bcrypt.compare(credentials.password, user.password);
          if (!isValidPassword) {
            console.log('Invalid password for user:', credentials.email);
            return null;
          }

          console.log('User authenticated successfully:', credentials.email);
          
          // Return minimal user data
          return {
            id: user._id.toString(),
            email: user.email,
            name: user.displayName || user.name || '',
            fullName: user.fullName || '',
            isAdmin: user.isAdmin || false,
            country: user.country || '',
            phoneNumber: user.phoneNumber || ''
          };
        } catch (error) {
          console.error('Auth error:', error);
          return null;
        }
      }
    })
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        // Store only essential user data in token
        token.userId = user.id;
        token.isAdmin = user.isAdmin;
        token.displayName = user.name || undefined;
        token.fullName = user.fullName || undefined;
        token.country = user.country;
        token.phoneNumber = user.phoneNumber;
      }
      
      console.log('JWT Token Size Check:', {
        tokenKeys: Object.keys(token),
        tokenSize: JSON.stringify(token).length
      });
      
      return token;
    },
    async session({ session, token }) {
      // Ensure session.user exists
      if (!session.user) {
        session.user = {} as any;
      }
      
      // Set minimal user properties from token
      session.user.id = token.userId as string || token.sub as string;
      session.user.email = token.email as string;
      session.user.isAdmin = token.isAdmin as boolean || false;
      session.user.displayName = token.displayName as string;
      session.user.fullName = token.fullName as string;
      session.user.country = token.country as string;
      session.user.phoneNumber = token.phoneNumber as string;
      
      console.log('Session created successfully:', { 
        userId: session.user.id, 
        userEmail: session.user.email, 
        isAdmin: session.user.isAdmin,
        country: session.user.country,
        phoneNumber: session.user.phoneNumber,
        tokenCountry: token.country,
        tokenPhoneNumber: token.phoneNumber
      });
      
      return session;
    }
  },
  session: {
    strategy: 'jwt'
  },
  pages: {
    error: '/login' // Redirect to login on error
  }
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };