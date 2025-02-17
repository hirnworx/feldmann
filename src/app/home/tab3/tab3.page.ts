import { Component, OnInit } from '@angular/core';
import { ToastController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {

  constructor(public toastController: ToastController, public alertController: AlertController) {}
  
  ngOnInit(){
    this.doTotalCalculation();
  }

  totalCost = 0;
  cart = [
    {
        "product_id":1,
        "productImage":"../../../assets/products/39ed8e8d-01b0-4d86-8cb0-305b4869bb48.__CR288,248,496,496_PT0_SX300_V1___.jpg",
        "productName":"Briefkasten Design",
        "brand":"Feldmann",
        "shortName":"Briefkasten Design",
        "off":15,
        "quantity":1,
        "productLongDescription":"Description",
        "productShortDescription":"A14 Bionic, the fastest chip in a smartphone. An edge-to-edge OLED display.",
        "regularPrice":88.20,
        "salesPrice":72.90
    },
    {
        "product_id":2,
        "productImage":"../../../assets/products/b5b4e08c1b97e8ed0c403bebda20d789.jpg",
        "productName":"Briefkasten Superior",
        "brand":"Feldmann",
        "off":45,
        "quantity":2,
        "shortName":"Briefkasten Superior",
        "productLongDescription":"A14 Bionic rockets past every other smartphone chip. The Pro camera system takes low-light photography to the next level — with an even bigger jump on iPhone 12 Pro Max. And Ceramic Shield delivers four times better drop performance. Let’s see what this thing can do.",
        "productShortDescription":"A14 Bionic rockets past every other smartphone chip.",
        "regularPrice":77.89,
        "salesPrice":56.40
    }];

    lessQty(index){
      if(this.cart[index].quantity > 0){
        this.cart[index].quantity = this.cart[index].quantity-1;
        this.doTotalCalculation(); 
      }
      if(this.cart[index].quantity == 0){
       this.removeFromCart(index);
      }  
         
    }

    addQty(index){ 
      if(this.cart[index].quantity >= 0 && this.cart[index].quantity <= 25){
        this.cart[index].quantity = this.cart[index].quantity+1;
    }
    this.doTotalCalculation();
    }

    doTotalCalculation(){
      this.totalCost = 0;
      for(let item of this.cart){
        this.totalCost += (item.salesPrice * item.quantity);
      }
    }
    
  
    async removeFromCart(i) {
      const alert = await this.alertController.create({
        header: 'Do you want to remove this item from your cart?',
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
              this.toastAlert("Item removed from cart.", i);
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
      this.cart.splice(index, 1);
      this.doTotalCalculation(); 
    }

}
