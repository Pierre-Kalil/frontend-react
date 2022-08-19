import { Mobile } from "./mobile";
import "./styles.scss";

const Header = () => {
  return (
    <header className="header-container">
      <h1>Store</h1>
      <Mobile />
    </header>
  );
};

export default Header;
