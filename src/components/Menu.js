import React from "react";
import burger from "../images/burger.jpeg";
import greekSalad from "../images/greeksalad.jpeg";
import salad from "../images/salad.jpeg";
import Cards from "../utils/Cards";

const Menu = () => {
  const cardsData = [
    {
      title: "Ceasar Salad",
      price: "$" + 10.99,
      content:
        "Classic salad with romaine lettuce, croutons, Parmesan, and Caesar dressing.",
      imageUrl: salad,
    },
    {
      title: "Greek Salad",
      price: "$" + 8.99,
      content:
        "Refreshing salad with tomatoes, cucumbers, olives, feta, and Greek dressing.",
      imageUrl: greekSalad,
    },
    {
      title: "CheeseBurger",
      price: "$" + 12.99,
      content:
        "American favorite - beef patty with melted cheese in a bun, topped with condiments.",
      imageUrl: burger,
    },
  ];
  return (
    <div>
      <Cards cards={cardsData} />
    </div>
  );
};

export default Menu;
