import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { AngularFireStorage, AngularFireUploadTask, AngularFireStorageReference } from 'angularfire2/storage';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabaseModule, AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { FirebaseListObservable } from 'angularfire2/database-deprecated';
import * as firebase from 'firebase/app';
import { storage } from 'firebase/app';

@Component({
  selector: 'app-intro-page',
  templateUrl: './intro-page.component.html',
  styleUrls: ['./intro-page.component.scss'],
  providers: [AngularFireStorage]
})
export class IntroPageComponent implements OnInit {
  ref: AngularFireStorageReference;
  task: AngularFireUploadTask;
  uploadProgress: Observable<number>;
  downloadURL: Observable<string>;
  files = [];
  images: Object[];

  news: Object[];

  constructor(public authService: AuthService, private afStorage: AngularFireStorage,
    private af: AngularFireDatabase) {
    af.list('images').valueChanges().subscribe(
      image => {
        this.images = image;
      }
    );
    af.list('news').valueChanges().subscribe(
      news => {
        this.news = news;
      }
    );
   }

  ngOnInit() {
  }

  upload(event) {
    const id = Math.random().toString(36).substring(2);
    this.ref = this.afStorage.ref(id);
    this.task = this.ref.put(event.target.files[0]);
    this.uploadProgress = this.task.percentageChanges();
    this.downloadURL = this.task.downloadURL();
    console.log(this.downloadURL);

    firebase.database().ref('images/').push({
      url: 'https://firebasestorage.googleapis.com/v0/b/userlist-3b.appspot.com/o/' + id + '?alt=media&token='
    });
  }

  submitNew(title, body) {
    firebase.database().ref('news/').push({
      title: title,
      body: body
    });
  }
}
