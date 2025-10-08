import { initializeApp } from 'firebase/app';
import { getStorage, ref, uploadBytes, getDownloadURL, deleteObject } from 'firebase/storage';
import { getStorage as getAdminStorage } from 'firebase-admin/storage';
import { initializeApp as initializeAdminApp, getApps } from 'firebase-admin/app';

// Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

// Brochure upload function
export const uploadBrochure = async (file: File, productName: string): Promise<string> => {
  try {
    // Create a unique filename
    const timestamp = Date.now();
    const fileName = `${productName.toLowerCase().replace(/\s+/g, '-')}-${timestamp}.pdf`;
    const storageRef = ref(storage, `brochures/${fileName}`);
    
    // Upload file
    const snapshot = await uploadBytes(storageRef, file);
    
    // Get download URL
    const downloadURL = await getDownloadURL(snapshot.ref);
    
    return downloadURL;
  } catch (error) {
    console.error('Error uploading brochure:', error);
    throw new Error('Failed to upload brochure');
  }
};

// Thumbnail upload function
export const uploadThumbnail = async (file: File, productName: string): Promise<string> => {
  try {
    // Create a unique filename
    const timestamp = Date.now();
    const fileName = `${productName.toLowerCase().replace(/\s+/g, '-')}-thumb-${timestamp}.${file.name.split('.').pop()}`;
    const storageRef = ref(storage, `thumbnails/${fileName}`);
    
    // Upload file
    const snapshot = await uploadBytes(storageRef, file);
    
    // Get download URL
    const downloadURL = await getDownloadURL(snapshot.ref);
    
    return downloadURL;
  } catch (error) {
    console.error('Error uploading thumbnail:', error);
    throw new Error('Failed to upload thumbnail');
  }
};

// Initialize Firebase Admin if not already initialized
const initializeFirebaseAdmin = () => {
  if (getApps().length === 0) {
    const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT_KEY || '{}');
    initializeAdminApp({
      credential: require('firebase-admin').credential.cert(serviceAccount),
      storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    });
  }
};

// Product image upload function using Admin SDK
export const uploadProductImage = async (file: File, productName: string): Promise<string> => {
  try {
    // Initialize Firebase Admin
    initializeFirebaseAdmin();
    
    // Get admin storage
    const adminStorage = getAdminStorage();
    const bucket = adminStorage.bucket();
    
    // Create a unique filename
    const timestamp = Date.now();
    const fileName = `${productName.toLowerCase().replace(/\s+/g, '-')}-${timestamp}.${file.name.split('.').pop()}`;
    const filePath = `products/${fileName}`;
    
    // Convert File to Buffer
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    
    // Upload file to Firebase Storage
    const fileUpload = bucket.file(filePath);
    await fileUpload.save(buffer, {
      metadata: {
        contentType: file.type,
      },
    });
    
    // Make the file publicly accessible
    await fileUpload.makePublic();
    
    // Get the public URL
    const publicUrl = `https://storage.googleapis.com/${bucket.name}/${filePath}`;
    
    return publicUrl;
  } catch (error) {
    console.error('Error uploading product image:', error);
    throw new Error('Failed to upload product image');
  }
};

// Brochure delete function
export const deleteBrochure = async (fileUrl: string): Promise<void> => {
  try {
    // Extract the file path from the URL
    const url = new URL(fileUrl);
    const pathSegments = url.pathname.split('/');
    
    // Find the 'o' segment and get everything after it
    const oIndex = pathSegments.indexOf('o');
    if (oIndex !== -1 && oIndex < pathSegments.length - 1) {
      const filePath = pathSegments.slice(oIndex + 1).join('/');
      const storageRef = ref(storage, filePath);
      await deleteObject(storageRef);
    } else {
      // Fallback: try to extract from the end of the URL
      const fileName = pathSegments[pathSegments.length - 1];
      const storageRef = ref(storage, `brochures/${fileName}`);
      await deleteObject(storageRef);
    }
  } catch (error: any) {
    // If the file doesn't exist, that's okay - just log it
    if (error.code === 'storage/object-not-found') {
      console.log('File not found in Firebase Storage, skipping delete:', fileUrl);
      return;
    }
    console.error('Error deleting brochure:', error);
    throw new Error('Failed to delete brochure');
  }
};



export { storage };
