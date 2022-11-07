import "./App.css";
import Monsters from "./components/monster/Monsters";
import { QueryClientProvider, QueryClient } from "react-query";
import { Container, Navbar, Button } from "@nextui-org/react";
import logo from "../src/assets/logo.png";
import { useState } from "react";

const queryClient = new QueryClient();
function App() {
  const [menu, setMenu] = useState("monster");

  return (
    <div className="App">
      <Navbar isBordered variant={"floating"}>
        <Navbar.Brand>
          <img src={logo} alt="logo" width={100}></img>
        </Navbar.Brand>
        <Navbar.Content hideIn={"xs"}>
          <Button
            auto
            color={"gradient"}
            bordered
            ghost
            onPress={() => setMenu("monster")}
          >
            Monsters
          </Button>
          <Button
            auto
            color={"gradient"}
            bordered
            ghost
            onPress={() => setMenu("equipment")}
          >
            Equipment
          </Button>
          <Button
            auto
            color={"gradient"}
            bordered
            ghost
            onPress={() => setMenu("metarials")}
          >
            Materials
          </Button>
          <Button
            auto
            color={"gradient"}
            bordered
            ghost
            onPress={() => setMenu("creatures")}
          >
            Creatures
          </Button>
          <Button
            auto
            color={"gradient"}
            bordered
            ghost
            onPress={() => setMenu("treasure")}
          >
            Treasure
          </Button>
        </Navbar.Content>
      </Navbar>
      <Container>
        <QueryClientProvider client={queryClient}>
          {menu === "monster" && <Monsters />}
        </QueryClientProvider>
      </Container>
    </div>
  );
}

export default App;
