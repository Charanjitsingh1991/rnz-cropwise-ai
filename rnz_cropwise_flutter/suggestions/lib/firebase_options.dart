import 'package:firebase_core/firebase_core.dart' show FirebaseOptions;
import 'package:flutter/foundation.dart'
    show defaultTargetPlatform, kIsWeb, TargetPlatform;

/// Default [FirebaseOptions] for use with your Firebase apps.
class DefaultFirebaseOptions {
  static FirebaseOptions get currentPlatform {
    if (kIsWeb) {
      return web;
    }
    switch (defaultTargetPlatform) {
      case TargetPlatform.android:
        return android;
      case TargetPlatform.iOS:
        return ios;
      case TargetPlatform.macOS:
        return macos;
      case TargetPlatform.windows:
        return windows;
      case TargetPlatform.linux:
        throw UnsupportedError(
          'DefaultFirebaseOptions have not been configured for linux - '
          'you can reconfigure this by running the FlutterFire CLI again.',
        );
      default:
        throw UnsupportedError(
          'DefaultFirebaseOptions are not supported for this platform.',
        );
    }
  }

  static const FirebaseOptions web = FirebaseOptions(
    apiKey: 'AIzaSyDnqpYIOlUS08DHS0-R_rIW0C-UXkVsBzg',
    appId: '1:244303809991:web:60e7c13fd6750561b85de2',
    messagingSenderId: '244303809991',
    projectId: 'rnz-cropwise',
    authDomain: 'rnz-cropwise.firebaseapp.com',
    storageBucket: 'rnz-cropwise.firebasestorage.app',
  );

  static const FirebaseOptions android = FirebaseOptions(
    apiKey: 'AIzaSyDnqpYIOlUS08DHS0-R_rIW0C-UXkVsBzg',
    appId: '1:244303809991:android:60e7c13fd6750561b85de2',
    messagingSenderId: '244303809991',
    projectId: 'rnz-cropwise',
    storageBucket: 'rnz-cropwise.firebasestorage.app',
  );

  static const FirebaseOptions ios = FirebaseOptions(
    apiKey: 'AIzaSyDnqpYIOlUS08DHS0-R_rIW0C-UXkVsBzg',
    appId: '1:244303809991:ios:60e7c13fd6750561b85de2',
    messagingSenderId: '244303809991',
    projectId: 'rnz-cropwise',
    storageBucket: 'rnz-cropwise.firebasestorage.app',
    iosClientId: '244303809991-ios-client-id',
    iosBundleId: 'com.rnz.cropwise.mobile',
  );

  static const FirebaseOptions macos = FirebaseOptions(
    apiKey: 'AIzaSyDnqpYIOlUS08DHS0-R_rIW0C-UXkVsBzg',
    appId: '1:244303809991:macos:60e7c13fd6750561b85de2',
    messagingSenderId: '244303809991',
    projectId: 'rnz-cropwise',
    storageBucket: 'rnz-cropwise.firebasestorage.app',
    iosClientId: '244303809991-macos-client-id',
    iosBundleId: 'com.rnz.cropwise.mobile',
  );

  static const FirebaseOptions windows = FirebaseOptions(
    apiKey: 'AIzaSyDnqpYIOlUS08DHS0-R_rIW0C-UXkVsBzg',
    appId: '1:244303809991:windows:60e7c13fd6750561b85de2',
    messagingSenderId: '244303809991',
    projectId: 'rnz-cropwise',
    storageBucket: 'rnz-cropwise.firebasestorage.app',
  );
}
