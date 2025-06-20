import { ReactComponent as Logo } from "../logo.svg";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import "./NavBar.scss";

function NavBar() {
  const moveArrow = () => {
    let root = document.getElementById("root");
    let arrow = document.getElementById("arrow");
    if (arrow.style.transform !== "rotate(-180deg)") {
      arrow.style.transform = "rotate(-180deg)";
      root.style.left = "calc(100vw - 60px)";
      root.style.borderRadius = "30px";
    } else {
      arrow.style.transform = "rotate(0deg)";
      root.style.left = "0px";
      root.style.borderRadius = "0px";
    }
  }
  return (
    <nav>
      <span>
        <FaRegArrowAltCircleRight id="arrow" onClick={() => moveArrow()} />
      </span>
      <div id="logo">
        <Logo />
        <h3>jdavid.ram</h3>
      </div>
    </nav>
  );
}

export { NavBar };