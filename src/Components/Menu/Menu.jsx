/* eslint-disable react/prop-types */
import "./Menu.css";
import pizzaFocacia from "../../assets/images/focaccia.jpg";
import pizzaMargherita from "../../assets/images/margherita.jpg";
import pizzaSpinaci from "../../assets/images/spinaci.jpg";
import pizzaFunghi from "../../assets/images/funghi.jpg";
import pizzaSalamino from "../../assets/images/salamino.jpg";
import pizzaProsciutto from "../../assets/images/prosciutto.jpg";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: pizzaFocacia,
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: pizzaMargherita,
    soldOut: true,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: pizzaSpinaci,
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: pizzaFunghi,
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: pizzaSalamino,
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: pizzaProsciutto,
    soldOut: false,
  },
];

const Menu = () => {
  return (
    <main className="main-section">
      <h2 className="main__title">Our Menu</h2>
      <p className="main__text">
        Authentic Italian cuisine. 6 creative dishes to choose from. All from
        our stone oven, all organic, all delicious.
      </p>
      <MenuList />
    </main>
  );
};

//Menu list wrapper

const MenuList = () => {
  return (
    <ul className="main-list">
      {pizzaData.map((item, index) => (
        <MenuItem key={index} item={item} />
      ))}
    </ul>
  );
};

const MenuItem = ({ item }) => {
  const soldClass = item.soldOut ? "sold-out" : "";

  return (
    <li className={`main-item ${soldClass}`}>
      <img
        className="main-img"
        src={item.photoName}
        alt={item.name}
        width={400}
        height={400}
      />
      {soldClass && <div className="sold">Sold out</div>}
      <h3 className="main-item__title">{item.name}</h3>
      <p className="main-item__text">{item.ingredients}</p>
      <span className="main-item__price"> Price: {item.price}$</span>
    </li>
  );
};

export default Menu;
