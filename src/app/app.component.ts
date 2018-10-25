import { Component } from '@angular/core';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor() {
    // Initialize Firebase
    var config = {
      apiKey: "AIzaSyAE4hkpmRIQITQuCpkj2qGhU4yfFOMytTM",
      authDomain: "bookshelves-demo.firebaseapp.com",
      databaseURL: "https://bookshelves-demo.firebaseio.com",
      projectId: "bookshelves-demo",
      storageBucket: "bookshelves-demo.appspot.com",
      messagingSenderId: "272657330815"
    };
    firebase.initializeApp(config);
  }
}
