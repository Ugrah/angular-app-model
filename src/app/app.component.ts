import { Component } from '@angular/core';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor() {
<<<<<<< HEAD
    var config = {
      apiKey: "AIzaSyAE4hkpmRIQITQuCpkj2qGhU4yfFOMytTM",
      authDomain: "bookshelves-demo.firebaseapp.com",
      databaseURL: "https://bookshelves-demo.firebaseio.com",
      projectId: "bookshelves-demo",
      storageBucket: "",
      messagingSenderId: '272657330815'
    };
=======
    var config = {};
>>>>>>> 611105eb1bc93bfd5c562c4ba960ce09167c35a2
    firebase.initializeApp(config);
  }
}
