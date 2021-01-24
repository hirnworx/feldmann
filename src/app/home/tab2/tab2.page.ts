import { Component } from '@angular/core';
import { ToastController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(public toastController: ToastController, public alertController: AlertController) {}
  wishlist = [
    {
      "product_id":1,
      "productImage":"../../../assets/products/39ed8e8d-01b0-4d86-8cb0-305b4869bb48.__CR288,248,496,496_PT0_SX300_V1___.jpg",
      "productName":"Briefkasten Edelstahl",
      "brand":"Feldmann",
      "shortName":"Briefkasten Design",
      "off":15,
      "productLongDescription":"A14 Bionic, the fastest chip in a smartphone. An edge-to-edge OLED display. Ceramic Shield with four times better drop performance. And Night mode on every camera. iPhone 12 has it all — in two perfect sizes.",
      "productShortDescription":"A14 Bionic, the fastest chip in a smartphone. An edge-to-edge OLED display.",
      "regularPrice":79.90,
      "salesPrice":57.90
  },
  {
      "product_id":2,
      "productImage":"../../../assets/products/b5b4e08c1b97e8ed0c403bebda20d789.jpg",
      "productName":"Briefkasten Superior",
      "brand":"Halife US",
      "off":45,
      "shortName":"Briefkasten Superior",
      "productLongDescription":"Testbeschreibung hier steht irgendwann die richtige Beschreibung",
      "productShortDescription":"Testbeschreibung hier steht irgendwann die richtige Beschreibung.",
      "regularPrice":55.90,
      "salesPrice":36.27
  }];

  
    async removeFromWishlist(i) {
      const alert = await this.alertController.create({
        header: 'Do you want to remove this item from your wishlist?',
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel',
            cssClass: 'secondary',
            handler: () => {
              console.log('Action cancelled');
            }
          }, {
            text: 'Yes!',
            handler: () => {
              this.toastAlert("Item removed from wishlist.", i);
            }
          }
        ]
      });
  
      await alert.present();
    }

    async toastAlert(msg, index) {
      const toast = await this.toastController.create({
        message: msg,
        duration: 1500
      });
      toast.present();
      this.wishlist.splice(index, 1);
    }


}
