import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';



export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes), 
    provideClientHydration(), provideAnimationsAsync(), 
    importProvidersFrom(provideFirebaseApp(() => initializeApp({"projectId":"ring-of-fire-b6ea4","appId":"1:30876770781:web:9893f717372e8bbbec1634","storageBucket":"ring-of-fire-b6ea4.appspot.com","apiKey":"AIzaSyDLy0FYjS6DU46MF5G0XjERHSviBsErnn8","authDomain":"ring-of-fire-b6ea4.firebaseapp.com","messagingSenderId":"30876770781"}))), importProvidersFrom(provideFirestore(() => getFirestore()))]
};
