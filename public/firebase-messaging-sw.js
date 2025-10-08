// Firebase messaging service worker for push notifications
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js');

// Firebase configuration
const firebaseConfig = {
  "projectId": "rnz-cropwise",
  "appId": "1:244303809991:web:60e7c13fd6750561b85de2",
  "storageBucket": "rnz-cropwise.firebasestorage.app",
  "apiKey": "AIzaSyDnqpYIOlUS08DHS0-R_rIW0C-UXkVsBzg",
  "authDomain": "rnz-cropwise.firebaseapp.com",
  "messagingSenderId": "244303809991"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize Firebase Cloud Messaging
const messaging = firebase.messaging();

// Handle background messages
messaging.onBackgroundMessage((payload) => {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);

  const notificationTitle = payload.notification.title || 'RNZ CropWise';
  const notificationOptions = {
    body: payload.notification.body || 'You have a new notification',
    icon: '/logo.png',
    badge: '/logo.png',
    tag: 'admin_notification',
    data: payload.data || {},
    actions: [
      {
        action: 'open',
        title: 'Open App'
      },
      {
        action: 'close',
        title: 'Close'
      }
    ]
  };

  // Show notification
  return self.registration.showNotification(notificationTitle, notificationOptions);
});

// Handle notification clicks
self.addEventListener('notificationclick', (event) => {
  console.log('[firebase-messaging-sw.js] Notification click received.');

  event.notification.close();

  if (event.action === 'open') {
    // Open the app when notification is clicked
    event.waitUntil(
      clients.openWindow('/')
    );
  }
});

// Handle notification close
self.addEventListener('notificationclose', (event) => {
  console.log('[firebase-messaging-sw.js] Notification closed.');
});
