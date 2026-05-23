declare const process: any;

export const environment = {
  production: true,
  firebaseConfig: {
    apiKey: process.env['NGX_APP_FIREBASE_API_KEY'],
    authDomain: process.env['NGX_APP_FIREBASE_AUTH_DOMAIN'],
    projectId: process.env['NGX_APP_FIREBASE_PROJECT_ID'],
    storageBucket: process.env['NGX_APP_FIREBASE_STORAGE_BUCKET'],
    messagingSenderId: process.env['NGX_APP_FIREBASE_MESSAGING_SENDER_ID'],
    appId: process.env['NGX_APP_FIREBASE_APP_ID'],
    measurementId: process.env['NGX_APP_FIREBASE_MEASUREMENT_ID']
  }
};