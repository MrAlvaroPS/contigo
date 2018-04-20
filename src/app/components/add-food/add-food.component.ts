import { Component, OnInit } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { FirebaseListObservable } from 'angularfire2/database-deprecated';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute, Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';


@Component({
  selector: 'app-add-food',
  templateUrl: './add-food.component.html',
  styleUrls: ['./add-food.component.scss']
})
export class AddFoodComponent implements OnInit {
  foods: Object[];
  email: string;
  password: string;
  user = this.firebaseAuth;

  constructor(
    private af: AngularFireDatabase,
    private routes: ActivatedRoute,
    private router: Router,
    private firebaseAuth: AngularFireAuth
  ) { }

  ngOnInit() {
  }
  addFoodFirst(firstPlate1, firstPlate2, firstPlate3) {
    console.log('añadiendo  comida');
    firebase.database().ref('primeros/').push({
      Primer: firstPlate1,
      Primer2: firstPlate2,
      Primer3: firstPlate3
    });
  }
  addFoodSec(firstPlate1, firstPlate2, firstPlate3) {
    console.log('añadiendo  comida');
    firebase.database().ref('segundos/').push({
      Primer: firstPlate1,
      Primer2: firstPlate2,
      Primer3: firstPlate3
    });
  }
  addFoodThird(firstPlate1, firstPlate2, firstPlate3) {
    console.log('añadiendo  comida');
    firebase.database().ref('terceros/').push({
      Primer: firstPlate1,
      Primer2: firstPlate2,
      Primer3: firstPlate3
    });
  }
  addFoodDes(firstPlate1, firstPlate2, firstPlate3) {
    console.log('añadiendo  comida');
    firebase.database().ref('postres/').push({
      Primer: firstPlate1,
      Primer2: firstPlate2,
      Primer3: firstPlate3
    });
  }
}
