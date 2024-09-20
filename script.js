function init() {
  renderMainDishes();
  renderAsideDishes();
  renderDessertDishes();
  showBasket();
}

function renderMainDishes() {
  for (let index = 0; index < mainDishes.length; index++) {
    document.getElementById("mainDishlist").innerHTML += getMainDishes(index);
  }
}

function renderAsideDishes() {
  for (let index = 0; index < asideDishes.length; index++) {
    document.getElementById("asideDishlist").innerHTML += getAsideDishes(index);
  }
}

function renderDessertDishes() {
  for (let index = 0; index < dessertDishes.length; index++) {
    document.getElementById("dessertDishlist").innerHTML +=
      getDessertDishes(index);
  }
}

function addBasket(productList, index) {
  if (existInArray(productList, index) === true) {
    productList[index].amount += 1;
  } else {
    basketArray.unshift(productList[index]);
  }
  showBasket();
}

function showBasket() {
  if (basketArray.length == 0) {
    document.getElementById("basketList").innerHTML = getPlaceholderBasket();
  } else {
    document.getElementById("basketList").innerHTML = "";
    for (let index = 0; index < basketArray.length; index++) {
      document.getElementById("basketList").innerHTML += getBasketList(index);
      priceCalculator(index);
    }
    document.getElementById("cashout").innerHTML = getPayment();
    document.getElementById("sumUp").innerHTML = "CHF " + sumBasket();
  }
}

function priceCalculator(index) {
  let total = basketArray[index].amount * basketArray[index].price;

  document.getElementById(`calculatorPrice${index}`).innerHTML =
    "CHF " + total.toFixed(2);
  sumUp.push(total);
}

function existInArray(productList, index) {
  return basketArray.some((dish) => dish.name === productList[index].name);
}

function changeAmount(index, value) {
  basketArray[index].amount += value;
  if (basketArray[index].amount == 0) {
    basketArray.splice(index);
    showBasket();
  } else {
    showBasket();
  }
}

function sumBasket() {
  let total = 0;
  for (let i = 0; i < sumUp.length; i++) {
    total = total += sumUp[i];
  }
  sumUp = [];
  return total.toFixed(2);
}

function respBasket() {
  if (basketArray.length == 0) {
    document.getElementById("RespBasket").innerHTML = getPlaceholderBasket();
  } else {
    document.getElementById("RespBasket").innerHTML = "";
    for (let index = 0; index < basketArray.length; index++) {
      document.getElementById("RespBasket").innerHTML += getRespBasketList(index);
      priceCalculator(index);
    }
    document.getElementById("cashout").innerHTML = getPayment();
    document.getElementById("sumUp").innerHTML = "CHF " + sumBasket();
  }
}

function showMenu() { 
  document.getElementById("menu").classList.add("show-overlay-menu");
  document.getElementById("respCart").src = "/assets/icons/x-solid.svg";
  document.getElementById('respCart').setAttribute( "onClick", "closeMenu()" );
  document.body.style.overflow = "hidden"; // Scrollen deaktivieren
  respBasket();
}

function closeMenu() {
    document.getElementById("menu").classList.remove("show-overlay-menu");
    document.getElementById("respCart").src = "/assets/icons/cart-white.svg";
    document.getElementById('respCart').setAttribute( "onClick", "showMenu()" );
  document.body.style.overflow = ""; // Scrollen wieder aktivieren
}

function name(params) {
}