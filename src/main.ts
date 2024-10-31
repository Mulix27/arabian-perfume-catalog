// src/main.ts
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app/app.routes';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBGdvvPK-OXbP8xKoFTLYnFNjIOPEVb1U4",
  authDomain: "smashes-cat-arab.firebaseapp.com",
  projectId: "smashes-cat-arab",
  storageBucket: "smashes-cat-arab.firebasestorage.app",
  messagingSenderId: "853552502150",
  appId: "1:853552502150:web:4cdd391b823d2d85908807",
  measurementId: "G-7ZRPN3CGF1"
};


bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(appRoutes),
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideFirestore(() => getFirestore())
  ]
}).catch(err => console.error(err));
