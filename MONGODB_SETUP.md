# MongoDB Migration Setup Guide

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install mongodb mongoose next-auth @auth/mongodb-adapter bcryptjs
npm install -D @types/mongodb @types/bcryptjs
```

### 2. Environment Variables
Create `.env.local` file in your project root:
```env
# MongoDB
MONGODB_URI=mongodb://localhost:27017/rnz-cropwise

# NextAuth
NEXTAUTH_SECRET=your-secret-key-here-change-this-in-production
NEXTAUTH_URL=http://localhost:3000

# Google OAuth (get from Google Cloud Console)
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
```

### 3. Setup MongoDB

#### Option A: Local MongoDB
```bash
# Install MongoDB locally or use Docker
docker run -d -p 27017:27017 --name mongodb mongo:latest
```

#### Option B: MongoDB Atlas (Recommended for Production)
1. Go to [mongodb.com/cloud/atlas](https://mongodb.com/cloud/atlas)
2. Create free cluster
3. Get connection string
4. Update MONGODB_URI in .env.local

### 4. Run Migration Scripts

#### Create Admin User
```bash
node scripts/create-admin-user.js
```
**Default Admin Credentials:**
- Email: `admin@rnz-group.com`
- Password: `admin123`

#### Change Admin Password (IMPORTANT!)
```bash
node scripts/change-admin-password.js
```

#### Migrate Local Data
```bash
node scripts/migrate-local-data.js
```

### 5. Start Development Server
```bash
npm run dev
```

## 🔐 Authentication

### Admin Login
- **Email:** admin@rnz-group.com
- **Password:** (whatever you set using the password change script)

### Google OAuth
1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create new project or select existing
3. Enable Google+ API
4. Create OAuth 2.0 credentials
5. Add authorized redirect URIs:
   - `http://localhost:3000/api/auth/callback/google` (development)
   - `https://yourdomain.com/api/auth/callback/google` (production)

## 📊 Database Collections

The migration will create these collections:
- `users` - User accounts and profiles
- `products` - Product catalog
- `brochures` - Brochure information
- `supportTickets` - Support tickets
- `quoteRequests` - Quote requests
- `faqs` - Frequently asked questions
- `config` - Configuration data (filter options)

## 🚨 Important Notes

1. **Change Default Password:** The admin password is set to `admin123` by default. Change it immediately!
2. **Google OAuth:** You must set up Google OAuth credentials for Google sign-in to work
3. **Environment Variables:** Never commit `.env.local` to version control
4. **Production:** Use strong, unique secrets for production deployment

## 🔧 Troubleshooting

### Common Issues

1. **MongoDB Connection Failed**
   - Check if MongoDB is running
   - Verify MONGODB_URI in .env.local
   - Check firewall settings

2. **Authentication Errors**
   - Verify NextAuth configuration
   - Check Google OAuth credentials
   - Ensure environment variables are set

3. **Migration Scripts Fail**
   - Check MongoDB connection
   - Verify data.ts file exists
   - Check file permissions

## 📱 Features

✅ **User Authentication** (Email/Password + Google OAuth)
✅ **Admin Panel** (Products, Brochures, Support, Quotes)
✅ **Product Catalog** with filtering
✅ **Support Ticket System**
✅ **Quote Request System**
✅ **AI Crop Advisor** (using local data)
✅ **Responsive Design** (Mobile + Desktop)

## 🚀 Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Connect repository to Vercel
3. Set environment variables in Vercel dashboard
4. Deploy

### Other Platforms
- **Netlify:** Similar to Vercel
- **Railway:** Good for full-stack apps
- **DigitalOcean:** More control, requires server management

## 📞 Support

If you encounter issues:
1. Check the troubleshooting section
2. Verify all environment variables are set
3. Check MongoDB connection
4. Review browser console for errors
