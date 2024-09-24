function init() {
  getFromLocalStorage();
  renderMainDishes();
  renderAsideDishes();
  renderDessertDishes();
  respShowBasket();
  showBasket();
}

function saveIt() {
  respShowBasket();
  showBasket();
  saveToLocalStorage();
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
  let existingProduct = basketArray.find(
    (item) => item.name === productList[index].name
  );

  if (existInArray(productList, index) === true) {
    existingProduct.amount += 1;
  } else {
    basketArray.unshift(JSON.parse(JSON.stringify(productList[index])));
  }
  saveIt();
}

function showBasket() {
  if (basketArray.length == 0) {
    document.getElementById("basketList").innerHTML = getPlaceholderBasket();
    document.getElementById("cashout").innerHTML = "";
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

function respShowBasket() {
  if (basketArray.length == 0) {
    document.getElementById("respShowBasket").innerHTML =
      getPlaceholderBasket();
  } else {
    document.getElementById("respShowBasket").innerHTML = "";
    for (let index = 0; index < basketArray.length; index++) {
      document.getElementById("respShowBasket").innerHTML +=
        getRespBasketList(index);
      respPriceCalculator(index);
    }
    document.getElementById("respCashout").innerHTML = getRespPayment();
    document.getElementById("respSumUp").innerHTML = "CHF " + sumBasket();
  }
}

function priceCalculator(index) {
  let total = basketArray[index].amount * basketArray[index].price;

  document.getElementById(`calculatorPrice${index}`).innerHTML =
    "CHF " + total.toFixed(2);
  sumUp.push(total);
}

function respPriceCalculator(index) {
  let total = basketArray[index].amount * basketArray[index].price;

  document.getElementById(`respCalculatorPrice${index}`).innerHTML =
    "CHF " + total.toFixed(2);
  sumUp.push(total);
}

function existInArray(productList, index) {
  return basketArray.some((dish) => dish.name === productList[index].name);
}

function changeAmount(index, value) {
  if (basketArray[index].amount == 1 && value == -1) {
    basketArray.splice(index, 1);
    saveIt();
  } else {
    basketArray[index].amount += value;
    saveIt();
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

function submitOrder() {
  basketArray = [];
  sumUp = [];
  saveIt();
}

function showMenu() {
  document.getElementById("menu").classList.add("show-overlay-menu");
  document.getElementById("respCart").src = "/assets/icons/x-solid.svg";
  document.getElementById("respCart").setAttribute("onClick", "closeMenu()");
  document.body.style.overflow = "hidden";
  respShowBasket();
}

function closeMenu() {
  document.getElementById("menu").classList.remove("show-overlay-menu");
  document.getElementById("respCart").src = "/assets/icons/cart-white.svg";
  document.getElementById("respCart").setAttribute("onClick", "showMenu()");
  document.body.style.overflow = "";
}

function saveToLocalStorage() {
  localStorage.setItem("basketArrayLS", JSON.stringify(basketArray));
  localStorage.setItem("sumUpLS", JSON.stringify(sumUp));
  localStorage.setItem("mainDishesLS", JSON.stringify(mainDishes));
  localStorage.setItem("asideDishesLS", JSON.stringify(asideDishes));
  localStorage.setItem("dessertDishesLS", JSON.stringify(dessertDishes));
}

function getFromLocalStorage() {
  basketArray =
    JSON.parse(localStorage.getItem("basketArrayLS")) || basketArray;
  sumUp = JSON.parse(localStorage.getItem("sumUpLS")) || sumUp;
  mainDishes = JSON.parse(localStorage.getItem("mainDishesLS")) || mainDishes;
  asideDishes =
    JSON.parse(localStorage.getItem("asideDishesLS")) || asideDishes;
  dessertDishes =
    JSON.parse(localStorage.getItem("dessertDishesLS")) || dessertDishes;
}
