import { Component } from '@angular/core';
import { NavController} from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { GroceriesService } from '../groceries.service';
import { InputDialogServiceService } from '../input-dialog-service.service';
//import { SocialSharing } from '@ionic-native/social-sharing/ngx';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  title = "Groceries";

  constructor(public navCtrl: NavController, public toastCtrl: ToastController, public alertCtrl: AlertController, public dataService: GroceriesService, public inputDialogService: InputDialogServiceService) {

  }

  loadItems() {
    return this.dataService.getItems();
  }

   // Add Item
  addItem() {
    console.log('Adding Item...');
    this.inputDialogService.showAlert();
  } 

  // Edit Item
  async editItem(item, index) {
    console.log('Edit Item: ', item, index);
    const toast = this.toastCtrl.create({
      message: 'Updating Item: ' + index + "...",
      duration: 3000
    });
    (await toast).present();
    this.inputDialogService.showAlert(item, index);
  }

  // Remove Item
 async removeItem(item, index) {
    console.log("Removing Item - ", item.name);
    const toast = this.toastCtrl.create({
      message: 'Removing Item - ' + item.name + " ...",
      duration: 3000
      });
    (await toast).present(); 
    this.dataService.removeItem(index);
 }
/*
 // Sharing Item
 async shareItem(item, index) {
  console.log("Sharing Item - ", item.name);
  const toast = this.toastCtrl.create({
    message: 'Sharing Item - ' + item.name + " ...",
    duration: 3000
    });
  (await toast).present(); 

  let message = "Grocery Item - Name : " + item.name + " - Quantity: " + item.quantity;
  let subject = "Shared via Groceries app";

  this.socialSharing.share(message, subject).then(() => {
    // Sharing via email is possible
    console.log("Shared successfully!");
  }).catch((error) => {
   console.error("Error while sharing", error);
    // Sharing via email is not possible 
  }); 
} */
}