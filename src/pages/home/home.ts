import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  // start constructor and setup authentication system
  constructor(private afAuth: AngularFireAuth, private toast: ToastController,
    public navCtrl: NavController, public navParams: NavParams) {
  }

  // loading request to firebase and show toast if authorized
  ionViewDidLoad() {
    this.afAuth.authState.subscribe(data => {
      if (data && data.email && data.uid) {
        this.toast.create({
          message: `Welcome again ${data.email} at Ionic Private Storage`,
          duration: 3000
        }).present();
      } else {
        this.toast.create({
          message: `Your session is not valid, please login again!`,
          duration: 3000
        }).present();
      }
    });
  }

}
