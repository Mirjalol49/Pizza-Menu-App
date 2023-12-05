import MenuImg from "../../assets/icons/menu.png";
import "./Header.css";
const Header = () => {
  return (
    <header className="main-header">
      <h1 className="header__title">Pizza Menu</h1>
      <img src={MenuImg} alt="menu img" width={100} height={100} />
    </header>
  );
};

export default Header;
