import { Navbar } from "@nextui-org/react";
import logo from "../../assets/logo.png";

export default function NavigationBar() {
  return (
    <Navbar isBordered variant={"floating"}>
      <Navbar.Brand>
        <img src={logo} alt="logo" width={100}></img>
      </Navbar.Brand>
      <Navbar.Content hideIn={"xs"}>
        <Navbar.Link href="#">Monsters</Navbar.Link>
        <Navbar.Link href="#">Equipment</Navbar.Link>
        <Navbar.Link href="#">Materials</Navbar.Link>
        <Navbar.Link href="#">Creatures</Navbar.Link>
        <Navbar.Link href="#">Treasure</Navbar.Link>
      </Navbar.Content>
    </Navbar>
  );
}
