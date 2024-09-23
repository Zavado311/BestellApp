let basketArray = [];
let sumUp = [];

let mainDishes = [
  {
    name: "Margherita",
    price: 10,
    description:
      "Eine klassische Pizza mit frischem Basilikum, Mozzarella und Tomatensauce.",
    amount: 1,
  },
  {
    name: "Salami",
    price: 11.9,
    description:
      "Pizza belegt mit würziger Salami und einer kräftigen Tomatensauce.",
    amount: 1,
  },
  {
    name: "Americano",
    price: 10.9,
    description:
      "Pizza mit Tomatensauce, Mozzarella, Peperoni und einem Hauch von italienischen Kräutern.",
    amount: 1,
  },
  {
    name: "Quattro Formaggi",
    price: 12.5,
    description:
      "Pizza belegt mit vier verschiedenen Käsesorten: Mozzarella, Gorgonzola, Parmesan und Taleggio.",
    amount: 1,
  },
  {
    name: "Prosciutto e Funghi",
    price: 12.9,
    description:
      "Pizza mit Tomatensauce, Mozzarella, Schinken und frischen Champignons.",
    amount: 1,
  },
  {
    name: "Lasagne al Forno",
    price: 13.5,
    description:
      "Schichtnudeln mit Rinderhackfleisch, Tomatensauce, Béchamelsauce und Käse, im Ofen gebacken.",
    amount: 1,
  },
];

let asideDishes = [
  {
    name: "Bruschetta",
    price: 6.5,
    description:
      "Geröstete Brotscheiben belegt mit frischen Tomaten, Basilikum und Knoblauch.",
    amount: 1,
  },
  {
    name: "Caprese Salad",
    price: 7.9,
    description:
      "Ein leichter Salat mit Mozzarella, Tomaten, frischem Basilikum und Olivenöl.",
    amount: 1,
  },
  {
    name: "Antipasti-Platte",
    price: 10.5,
    description:
      "Eine Auswahl an italienischen Vorspeisen wie Oliven, Schinken, Käse und eingelegtem Gemüse.",
    amount: 1,
  },
  {
    name: "Knoblauchbrot",
    price: 5.0,
    description:
      "Frisches Brot mit Knoblauchbutter und Kräutern, knusprig gebacken.",
    amount: 1,
  },
  {
    name: "Focaccia",
    price: 5.5,
    description:
      "Italienisches Fladenbrot, gewürzt mit Rosmarin und grobem Salz.",
    amount: 1,
  },
  {
    name: "Olivenmischung",
    price: 4.9,
    description:
      "Eine Auswahl an schwarzen und grünen Oliven, mariniert in Kräutern und Olivenöl.",
    amount: 1,
  },
];

let dessertDishes = [
  {
    name: "Cheesecake",
    price: 5.9,
    description:
      "Ein cremiger Käsekuchen mit einer knusprigen Keksbasis und einem Hauch von Vanille.",
    amount: 1,
  },
  {
    name: "Tiramisu",
    price: 6.5,
    description:
      "Ein klassisches italienisches Dessert mit Schichten von Mascarpone, Espresso und Kakaopulver.",
    amount: 1,
  },
  {
    name: "Affogato",
    price: 4.9,
    description:
      "Ein Dessert aus Vanilleeis, das mit heißem Espresso übergossen wird.",
    amount: 1,
  },
  {
    name: "Panna Cotta",
    price: 5.5,
    description:
      "Ein cremiges Dessert aus Sahne und Vanille, serviert mit einer fruchtigen Beerensauce.",
    amount: 1,
  },
  {
    name: "Profiteroles",
    price: 6.9,
    description:
      "Gefüllte Brandteigkrapfen mit einer feinen Schokoladensauce überzogen.",
    amount: 1,
  },
  {
    name: "Zabaione",
    price: 5.9,
    description:
      "Ein luftiger italienischer Nachtisch aus Eiern, Zucker und Marsala-Wein, leicht warm serviert.",
    amount: 1,
  },
];
