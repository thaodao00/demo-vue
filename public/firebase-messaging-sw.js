// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here. Other Firebase libraries
// are not available in the service worker.
importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing in
// your app's Firebase config object.
// https://firebase.google.com/docs/web/setup#config-object
firebase.initializeApp({
    apiKey: "AIzaSyAybS4iUmKE1ifGPgjV33NHf22w5fX6ZZA",
    authDomain: "vue-pwa-notification-a0025.firebaseapp.com",
    projectId: "vue-pwa-notification-a0025",
    storageBucket: "vue-pwa-notification-a0025.appspot.com",
    messagingSenderId: "30081941634",
    appId: "1:30081941634:web:5e71516abebcfa5e52349b"
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
    console.log(
        '[firebase-messaging-sw.js] Received background message ',
        payload
    );
    // Customize notification here
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: playload.notification.body,
        icon: '/favicon-32x32.png'
    };

    self.registration.showNotification(notificationTitle, notificationOptions);
});