let amount = Number(document.getElementById("amount").innerHTML);

function minus() {
   amount--;
   document.getElementById("amount").innerHTML = amount;
}

function plus() {
   amount++;
   document.getElementById("amount").innerHTML = amount;
}

function addCart() {
   let price = document.getElementById("price").innerHTML;
   let amount = document.getElementById("amount").innerHTML;
   let pay = price * amount;
   if (pay == pay) {
      document.getElementById("cart").innerHTML = `${amount}-ta mahsulot. Narxi ${pay} so'm`;
   } else {
      document.getElementById("cart").innerHTML = `Mahsulotni tanlang`;
   }
}

function thanks() {
   let buy = "Xaridingiz uchun rahmat!";
   alert(buy);
}

function openBasket() {
   document.getElementsByClassName("basket")[0].style.display = "flex";
   document.getElementById("btn1").style.display = "none";
   document.getElementById("btn2").style.display = "block";
}

function closeBasket() {
   document.getElementsByClassName("basket")[0].style.display = "none";
   document.getElementById("btn1").style.display = "block";
   document.getElementById("btn1").style.position = "absolute";
   document.getElementById("btn1").style.right = "18px";
   document.getElementById("btn1").style.top = "18px";
   document.getElementById("btn2").style.display = "none";
}


