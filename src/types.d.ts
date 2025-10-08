// Type declarations for missing packages
declare module 'caseless' {
  const content: any;
  export = content;
}

declare module 'd3-path' {
  const content: any;
  export = content;
}

declare module 'd3-time' {
  const content: any;
  export = content;
}

declare module 'd3-timer' {
  const content: any;
  export = content;
}

declare module 'long' {
  const content: any;
  export = content;
}

declare module 'tough-cookie' {
  const content: any;
  export = content;
}

// NextAuth type extensions
import NextAuth from 'next-auth';

declare module 'next-auth' {
  interface User {
    isAdmin?: boolean;
    displayName?: string;
    country?: string;
    phoneNumber?: string;
    photoURL?: string;
  }

  interface Session {
    user: {
      id: string;
      name?: string | null;
      email?: string | null;
      image?: string | null;
      isAdmin?: boolean;
      displayName?: string;
      country?: string;
      phoneNumber?: string;
      photoURL?: string;
    }
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    isAdmin?: boolean;
    displayName?: string;
    country?: string;
    phoneNumber?: string;
    photoURL?: string;
  }
}

// Global type augmentations
declare global {
  interface Window {
    // Add any global window properties here if needed
  }
}

export {};
