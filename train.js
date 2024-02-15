/*D-TASK: 

Shunday class tuzing tuzing nomi Shop, va uni constructoriga 3 hil mahsulot pass bolsin,
 hamda classning 3ta methodi bolsin, biri qoldiq, biri sotish va biri qabul. 
 Har bir method ishga tushgan vaqt ham log qilinsin.
MASALAN: const shop = new Shop(4, 5, 2); shop.qoldiq() return hozir 20:40da 4ta non, 5ta lagmon va 2ta cola mavjud! 
shop.sotish('non', 3) & shop.qabul('cola', 4) & shop.qoldiq() return hozir 20:50da 1ta non, 5ta lagmon va 6ta cola mavjud!

@MITASK
*/

class Shop {

  product1; product2; product3;

  constructor(product1, product2, product3) {
    this.product1 = product1;
    this.product2 = product2;
    this.product3 = product3;
  }

  qoldiq() {
    const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: "2-digit" })
    console.log(`hozir ${time} da ${this.product1}ta non, ${this.product2}ta lagmon va ${this.product3}ta cola mavjud!`)
  }
  
  sotish(productType, productCount) {
    if(productType === "non") {
      this.product1 -= productCount;
    } else if (productType === "lagmon") {
      this.product2 -= productCount;
    } else if (productType === "cola") {
      this.product3 -= productCount;
    } else {
      console.log("Bunday mahsulot mavjud emas, iltimos mahsulot turini tekshirib keyin kiriting.")
    }
  }
  
  qabul(productType, productCount) {
    if(productType === "non") {
      this.product1 += productCount;
    } else if (productType === "lagmon") {
      this.product2 += productCount;
    } else if (productType === "cola") {
      this.product3 += productCount;
    } else {
      console.log("Bunday mahsulot mavjud emas, iltimos mahsulot turini tekshirib keyin kiriting.")
    }
  }
}

const shop = new Shop(4, 5, 2);
shop.qoldiq();
shop.sotish('non', 3);
shop.qabul('cola', 4);
shop.qoldiq()