import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  
  constructor( private router: Router, private menu: MenuController) {}

  categories = {
    "categories": [
      "Eisen",
      "Glas",
      "Kataloge",
      "Geländer",
      "Halter",
      "Licht",
      "Haus"
    ]
  }; 


  mobiles = [
    {
        "product_id":1,
        "productImage":"../../../assets/products/glaspunkthalter.jpg",
        "productName":"Oberteil von 62mm Glaspunkthalter ",
        "brand":"Feldmann",
        "shortName":"Glaspunkthalter",
        "off":45,
        "productLongDescription":"Oberteil von 62mm Glaspunkthalter, inkl. Gummipaar, ohne Schraube, V2A",
        "productShortDescription":"Oberteil von 62mm Glaspunkthalter, inkl. Gummipaar, ohne Schraube, V2A",
        "regularPrice":8.40,
        "salesPrice":6.30
    },
    {
        "product_id":2,
        "productImage":"../../../assets/products/handlaufhalter.jpg",
        "productName":"Handlaufhalter eckig mit gerader Halteplatte",
        "brand":"Feldmann",
        "off":45,
        "shortName":"Handlaufhalter",
        "productLongDescription":"Handlaufhalter aus Edelstahl",
        "productShortDescription":"A14 Bionic rockets past every other smartphone chip.",
        "regularPrice":15.25,
        "salesPrice":13.25
    },
    {
        "product_id":3,
        "productImage":"../../../assets/products/handlaufhalter.jpg",
        "productName":"Handlaufhalter eckig mit gerader Halteplatte",
        "brand":"Feldmann",
        "off":45,
        "shortName":"Handlaufhalter",
        "productLongDescription":"Handlaufhalter aus Edelstahl",
        "productShortDescription":"A14 Bionic rockets past every other smartphone chip.",
        "regularPrice":15.25,
        "salesPrice":13.25
    },
    {
        "product_id":4,
        "productImage":"../../../assets/products/handlaufhalter.jpg",
        "productName":"Handlaufhalter eckig mit gerader Halteplatte",
        "brand":"Feldmann",
        "off":45,
        "shortName":"Handlaufhalter",
        "productLongDescription":"Handlaufhalter aus Edelstahl",
        "productShortDescription":"A14 Bionic rockets past every other smartphone chip.",
        "regularPrice":15.25,
        "salesPrice":13.25
    },
    {
        "product_id":5,
        "productImage":"../../../assets/products/handlaufhalter.jpg",
        "productName":"Handlaufhalter eckig mit gerader Halteplatte",
        "brand":"Feldmann",
        "off":45,
        "shortName":"Handlaufhalter",
        "productLongDescription":"Handlaufhalter aus Edelstahl",
        "productShortDescription":"A14 Bionic rockets past every other smartphone chip.",
        "regularPrice":15.25,
        "salesPrice":13.25
    },
    {
        "product_id":6,
        "productImage":"../../../assets/products/handlaufhalter.jpg",
        "productName":"Handlaufhalter eckig mit gerader Halteplatte",
        "brand":"Feldmann",
        "off":45,
        "shortName":"Handlaufhalter",
        "productLongDescription":"Handlaufhalter aus Edelstahl",
        "productShortDescription":"A14 Bionic rockets past every other smartphone chip.",
        "regularPrice":15.25,
        "salesPrice":13.25
    },
    {
        "product_id":7,
        "productImage":"../../../assets/products/handlaufhalter.jpg",
        "productName":"Handlaufhalter eckig mit gerader Halteplatte",
        "brand":"Feldmann",
        "off":45,
        "shortName":"Handlaufhalter",
        "productLongDescription":"Handlaufhalter aus Edelstahl",
        "productShortDescription":"A14 Bionic rockets past every other smartphone chip.",
        "regularPrice":15.25,
        "salesPrice":13.25
    }
];



newArrivals = [
  {
      "product_id":1,
      "productImage":"../../../assets/products/39ed8e8d-01b0-4d86-8cb0-305b4869bb48.__CR288,248,496,496_PT0_SX300_V1___.jpg",
      "productName":"Briefkasten Design",
      "brand":"Bagger IN",
      "shortName":"Briefkasten Design",
      "off":15,
      "productLongDescription":"A14 Bionic, the fastest chip in a smartphone. An edge-to-edge OLED display. Ceramic Shield with four times better drop performance. And Night mode on every camera. iPhone 12 has it all — in two perfect sizes.",
      "productShortDescription":"A14 Bionic, the fastest chip in a smartphone. An edge-to-edge OLED display.",
      "regularPrice":78.80,
      "salesPrice":52.50
  },
  {
      "product_id":2,
      "productImage":"../../../assets/products/b5b4e08c1b97e8ed0c403bebda20d789.jpg",
      "productName":"Briefkasten Superior",
      "brand":"Halife US",
      "off":45,
      "shortName":"Briefkasten Superior",
      "productLongDescription":"A14 Bionic rockets past every other smartphone chip. The Pro camera system takes low-light photography to the next level — with an even bigger jump on iPhone 12 Pro Max. And Ceramic Shield delivers four times better drop performance. Let’s see what this thing can do.",
      "productShortDescription":"A14 Bionic rockets past every other smartphone chip.",
      "regularPrice":33.90,
      "salesPrice":30.20
  },
   {
      "product_id":1,
      "productImage":"../../../assets/products/39ed8e8d-01b0-4d86-8cb0-305b4869bb48.__CR288,248,496,496_PT0_SX300_V1___.jpg",
      "productName":"Briefkasten Design",
      "brand":"Bagger IN",
      "shortName":"Briefkasten Design",
      "off":15,
      "productLongDescription":"A14 Bionic, the fastest chip in a smartphone. An edge-to-edge OLED display. Ceramic Shield with four times better drop performance. And Night mode on every camera. iPhone 12 has it all — in two perfect sizes.",
      "productShortDescription":"A14 Bionic, the fastest chip in a smartphone. An edge-to-edge OLED display.",
      "regularPrice":78.80,
      "salesPrice":52.50
  },
  {
      "product_id":2,
      "productImage":"../../../assets/products/b5b4e08c1b97e8ed0c403bebda20d789.jpg",
      "productName":"Briefkasten Superior",
      "brand":"Halife US",
      "off":45,
      "shortName":"Briefkasten Superior",
      "productLongDescription":"A14 Bionic rockets past every other smartphone chip. The Pro camera system takes low-light photography to the next level — with an even bigger jump on iPhone 12 Pro Max. And Ceramic Shield delivers four times better drop performance. Let’s see what this thing can do.",
      "productShortDescription":"A14 Bionic rockets past every other smartphone chip.",
      "regularPrice":33.90,
      "salesPrice":30.20
  },
  {
      "product_id":1,
      "productImage":"../../../assets/products/39ed8e8d-01b0-4d86-8cb0-305b4869bb48.__CR288,248,496,496_PT0_SX300_V1___.jpg",
      "productName":"Briefkasten Design",
      "brand":"Bagger IN",
      "shortName":"Briefkasten Design",
      "off":15,
      "productLongDescription":"A14 Bionic, the fastest chip in a smartphone. An edge-to-edge OLED display. Ceramic Shield with four times better drop performance. And Night mode on every camera. iPhone 12 has it all — in two perfect sizes.",
      "productShortDescription":"A14 Bionic, the fastest chip in a smartphone. An edge-to-edge OLED display.",
      "regularPrice":78.80,
      "salesPrice":52.50
  },
  {
      "product_id":2,
      "productImage":"../../../assets/products/b5b4e08c1b97e8ed0c403bebda20d789.jpg",
      "productName":"Briefkasten Superior",
      "brand":"Halife US",
      "off":45,
      "shortName":"Briefkasten Superior",
      "productLongDescription":"A14 Bionic rockets past every other smartphone chip. The Pro camera system takes low-light photography to the next level — with an even bigger jump on iPhone 12 Pro Max. And Ceramic Shield delivers four times better drop performance. Let’s see what this thing can do.",
      "productShortDescription":"A14 Bionic rockets past every other smartphone chip.",
      "regularPrice":33.90,
      "salesPrice":30.20
  },
  {
          "product_id":2,
      "productImage":"../../../assets/products/b5b4e08c1b97e8ed0c403bebda20d789.jpg",
      "productName":"Briefkasten Superior",
      "brand":"Halife US",
      "off":45,
      "shortName":"Briefkasten Superior",
      "productLongDescription":"A14 Bionic rockets past every other smartphone chip. The Pro camera system takes low-light photography to the next level — with an even bigger jump on iPhone 12 Pro Max. And Ceramic Shield delivers four times better drop performance. Let’s see what this thing can do.",
      "productShortDescription":"A14 Bionic rockets past every other smartphone chip.",
      "regularPrice":33.90,
      "salesPrice":30.20
  }
];


doSearch(){
this.router.navigateByUrl("/search");
}

openMenu(){
    this.menu.enable(true, 'first');
    this.menu.open('first');
}


}
