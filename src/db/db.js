import pizzaImg from "../images/pizza.png";
import burgerImg from "../images/burger.png";
import cocaImg from "../images/coca.png";
import saladImg from "../images/salad.png";
import waterImg from "../images/water.png";
import iceCreamImg from "../images/icecream.png";
import kebabImg from "../images/kebab.png";

export function getData() {
  return [
    { title: "Pizza", price: 2500, Image: pizzaImg,id:1 },
    { title: "Burger", price: 1000, Image: burgerImg,id:2 },
    { title: "Coca", price: 500, Image: cocaImg ,id:3},
    { title: "Kebab", price: 5000, Image: kebabImg,id:4 },
    { title: "Salad", price: 500, Image: saladImg,id:5 },
    { title: "Water", price: 300, Image: waterImg,id:6 },
    { title: "Ice cream", price: 2000, Image: iceCreamImg,id:7 },
  ];
}
