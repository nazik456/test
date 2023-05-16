import CartLink from "../CartLink/CartLink";
import CategoryList from "../CategoryList/CategoryList";
import Logo from "../Logo/Logo";
import Nav from "../Nav/Nav";
import Auth from "../Auth/Auth";
import "./Layout.css";
import Footer from "../Footer/Footer";


export default function Layout(props) {
  return (
    <div className="Layout">
      <header>
      <div className="inside-div-in-header">
        <Logo />
        <Nav />
        <CartLink />
        <Auth/>
      </div>
      </header>
      <div className="fd">
        <aside>
          <CategoryList />
        </aside>
      </div>
      <main>{props.children}</main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}