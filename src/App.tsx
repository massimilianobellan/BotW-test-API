import "./App.css";
import Monsters from "./components/monster/Monsters";
import { QueryClientProvider, QueryClient } from "react-query";
import { Navbar, Container } from "@nextui-org/react";
import logo from "../src/assets/logo.png";

const queryClient = new QueryClient();

function App() {
  return (
    <div className="App">
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
      <Container>
        <QueryClientProvider client={queryClient}>
          <Monsters />
        </QueryClientProvider>
      </Container>
    </div>
  );
}

export default App;
