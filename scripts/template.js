function getMainDishes(index) {
  return `
    <div class="product">
    <div class="productDescription">
      <div class="productName">${mainDishes[index].name}</div>
      <div>${mainDishes[index].description}</div>
    </div>
    <div class="basketArea">
    <div>CHF ${mainDishes[index].price.toFixed(2)}</div>
    <div class="basketButton" onclick="addBasket(mainDishes, ${index})"><div class="inBasketText">In den Warenkorb</div><img class="basketIcon" src="/assets/icons/cart-shopping-solid.svg" alt=""></div>
    </div>
    `;
}

function getAsideDishes(index) {
  return `
    <div class="product">
    <div class="productDescription">
      <div class="productName">${asideDishes[index].name}</div>
      <div>${asideDishes[index].description}</div>
    </div>
    <div class="basketArea">
    <div>CHF ${asideDishes[index].price.toFixed(2)}</div>
    <div class="basketButton" onclick="addBasket(asideDishes, ${index})"><div class="inBasketText">In den Warenkorb</div><img class="basketIcon" src="/assets/icons/cart-shopping-solid.svg" alt=""></div>
    </div>
    `;
}

function getDessertDishes(index) {
  return `
    <div class="product">
    <div class="productDescription">
      <div class="productName">${dessertDishes[index].name}</div>
      <div>${dessertDishes[index].description}</div>
    </div>
      <div class="basketArea">
        <div>CHF ${dessertDishes[index].price.toFixed(2)}</div>
        <div class="basketButton" onclick="addBasket(dessertDishes, ${index})"><div class="inBasketText">In den Warenkorb</div><img class="basketIcon" src="/assets/icons/cart-shopping-solid.svg" alt=""></div>
    </div>
    </div>
    `;
}

function getBasketList(index) {
  return `
    <div class="productBox">
    <div class="basketProductTitle">${basketArray[index].name}</div>
    <div class="aboutPrice">
    <div class="changeAmount">
      <div onclick="changeAmount(${index}, -1)">-</div>
      <div>${basketArray[index].amount}</div>
      <div onclick="changeAmount(${index}, 1)">+</div>
    </div>
    <div class="priceProduct">
      <div id="calculatorPrice${[index]}"></div>
    </div></div>
    </div>
    `;
}

function getRespBasketList(index) {
  return `
    <div class="productBox">
    <div class="basketProductTitle">${basketArray[index].name}</div>
    <div class="aboutPrice">
    <div class="changeAmount">
      <div onclick="changeAmount(${index}, -1)">-</div>
      <div>${basketArray[index].amount}</div>
      <div onclick="changeAmount(${index}, 1)">+</div>
    </div>
    <div class="priceProduct">
      <div id="respCalculatorPrice${[index]}"></div>
    </div></div>
    </div>
    `;
}

function getPayment() {
  return `
  <div class="sumUp">
    <div>Total</div>
    <div id="sumUp"></div>
  </div>
  
  <a class="sendOrder" href="/confirm.html" onclick="submitOrder()">Bezahlen</a>
  `;
}

function getRespPayment() {
  return `
  <div class="sumUp">
    <div>Total</div>
    <div id="respSumUp"></div>
  </div>
  <a class="sendOrder" href="/confirm.html" onclick="submitOrder()">Bezahlen</a>
  `;
}

function getPlaceholderBasket() {
  return `
  <div class="basketPlaceholder">
  <div class="overImgBasketPlaceholder"><img class="imgBasketPlaceholder" src="/assets/img/desert.png"></div>
    <div class="textBasketPlaceholder">Ganz schön leer hier!</div>
  </div>
  `;
}
