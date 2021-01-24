import { Component, OnInit } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.page.html',
  styleUrls: ['./checkout.page.scss'],
})
export class CheckoutPage implements OnInit {

  constructor(public toastController: ToastController, public alertController: AlertController) { }

  
  ngOnInit(){
    this.doTotalCalculation();
  }

  totalCost = 0;
  grandTotal = 0;
  shippingCost = 45;
  discount = 0;
  couponCode = "";
  couponApplied = false;
  cart = [
    {
        "product_id":1,
        "productImage":"https://shop.feldmann-gmbh.com/media/image/a6/55/5d/CR-VA40-04-S-CORNECT-T-Stueck-mit-seitlichem-Abgang-Set-1_1920x1920.jpg",
        "productName":"Eckstück Cornect",
        "brand":"Cornect",
        "shortName":"Eckstück Cornectg",
        "off":15,
        "quantity":100,
        "productLongDescription":"A14 Bionic, the fastest chip in a smartphone. An edge-to-edge OLED display. Ceramic Shield with four times better drop performance. And Night mode on every camera. iPhone 12 has it all — in two perfect sizes.",
        "productShortDescription":"A14 Bionic, the fastest chip in a smartphone. An edge-to-edge OLED display.",
        "regularPrice":980,
        "salesPrice":850
    },
    {
        "product_id":2,
        "productImage":"https://shop.feldmann-gmbh.com/media/image/a6/55/5d/CR-VA40-04-S-CORNECT-T-Stueck-mit-seitlichem-Abgang-Set-1_1920x1920.jpg",
        "productName":"Eckstück Cornect",
        "brand":"Cornect",
        "off":45,
        "quantity":2,
        "shortName":"Eckstück Cornect",
        "productLongDescription":"A14 Bionic rockets past every other smartphone chip. The Pro camera system takes low-light photography to the next level — with an even bigger jump on iPhone 12 Pro Max. And Ceramic Shield delivers four times better drop performance. Let’s see what this thing can do.",
        "productShortDescription":"A14 Bionic rockets past every other smartphone chip.",
        "regularPrice":1200,
        "salesPrice":999
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

    applyCoupon(){
      if (this.couponCode == "SALE100"){
        this.discount = 100;
        this.doTotalCalculation();
       this.simpleAlert("Hurray! Coupon Applied."); 
       this.couponApplied = true;
      }else{
       this.simpleAlert("Invalid Coupon Code!"); 
      }
    }

    removeCoupon(){
      this.couponCode = "";
      this.discount = 0;
      this.couponApplied = false;
      this.doTotalCalculation();
      this.simpleAlert("Coupon Removed!"); 
    }

    doTotalCalculation(){
      this.totalCost = 0;
      this.grandTotal = 0;
      for(let item of this.cart){
        this.totalCost += (item.salesPrice * item.quantity);
      }
      this.grandTotal = ((this.shippingCost + this.totalCost) - this.discount);
    }

  
    async removeFromCart(i) {
      const alert = await this.alertController.create({
        header: 'Do you want to remove this item?',
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

    async simpleAlert(msg) {
      const toast = await this.toastController.create({
        message: msg,
        duration: 1500
      });
      toast.present();
    }

     
}
