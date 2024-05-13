<script setup>
import HelloWorld from './components/HelloWorld.vue'
import { ref } from 'vue'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage  } from "firebase/messaging";


const firebaseConfig = {
  apiKey: "AIzaSyBFiEobeuSKdAWSRzUHJxJDSJHsqF3JRdk",
  authDomain: "phonic-impact-414801.firebaseapp.com",
  projectId: "phonic-impact-414801",
  storageBucket: "phonic-impact-414801.appspot.com",
  messagingSenderId: "903995567197",
  appId: "1:903995567197:web:d06b0cc09c4d7e288931b4",
  measurementId: "G-2BXTLNNEV6"
};

let token = ref();


const app = initializeApp(firebaseConfig);


// Get registration token. Initially this makes a network call, once retrieved
// subsequent calls to getToken will return from cache.
const messaging = getMessaging();
onMessage(messaging, (payload) => {
    console.log('Message received. ', payload);
    // ...
});

getToken(messaging, { vapidKey: 'BPiYqUMnf_M2jIKjs_Gx-qPTKoHX2o9-ib2jt2Mo83J5D6zE8E_fnng-iAEVQuriFy2Dm78y6_MNLKZ6W6aFeIo' }).then((currentToken) => {
    if (currentToken) {
        // Send the token to your server and update the UI if necessary
        token.value = currentToken;

        console.log("Token is:",currentToken);
        // ...
    } else {
        // Show permission request UI
        console.log('No registration token available. Request permission to generate one.');
        // ...
    }

}).catch((err) => {
    console.log('An error occurred while retrieving token. ', err);
    // ...
});

</script>

<template>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <HelloWorld msg="Vue PWA Push Notification" />
    <p>TOKEN</p>
  <p>{{token}}</p>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
