import React from "react";
import ReactDOM from "react-dom";

const img = "https://picsum.photos/200";

// In React to use CSS classes we use className instead of class
//  - We also use the camelcase version of html attributes, so contenteditable becomes contentEditable
// Picsum allows images to be turned grayscale by appending ?grayscale to the url
ReactDOM.render(
  <div>
    <h1 className="heading" contentEditable="true" spellCheck="false">
      My Favourite Foods
    </h1>
    <ul>
      <li>Bacon</li>
      <li>Jamon</li>
      <li>Noodles</li>
    </ul>
    <div>
      <img
        className="food-img"
        src="https://www.justonecookbook.com/wp-content/uploads/2023/04/Spicy-Shoyu-Ramen-8055-I.jpg"
        alt="Rmane 1"
      ></img>
      <img
        className="food-img"
        src="https://www.foodandwine.com/thmb/0AXGLeY6dYnY8sEXFqxBa8opDrs=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Tonkotsu-Ramen-FT-BLOG1122-8fe6c12d609a4fd4ab246bea3aae140e.jpg"
        alt="Ramen 2"
      ></img>
      <img
        className="food-img"
        src="https://hips.hearstapps.com/hmg-prod/images/190208-delish-ramen-horizontal-093-1550096715.jpg?crop=0.8893333333333334xw:1xh;center,top&resize=1200:*"
        alt="Ramen 3"
      ></img>
    </div>
    <div>
      <img src={img + "?grayscale"} alt="random" />
    </div>
  </div>,
  document.getElementById("root")
);
