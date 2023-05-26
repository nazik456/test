import NavBar from "../NavBar/NavBar";
import "./Drawer.css"

function Drawer({ open, toggle }) {
  const drawerClassNames = `Drawer ${open ? "open" : ""}`;

  return (
    <div className={drawerClassNames}>
      <div onClick={toggle} className="backdrop"></div>
      <div className="content">
        <NavBar/>
      </div>
    </div>
  );
}

export default Drawer; 