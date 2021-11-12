import { Divider } from "@lumx/react";
import logo from "../../assets/superconnectr-logo.png";

export const NavBar = () => {
  return (
    <div>
      <img style={{ marginLeft: "5vw", width: "200px" }} src={logo} />
      <Divider/>
    </div>
  );
};

NavBar.displayName = "NavBar";
