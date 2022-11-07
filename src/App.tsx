import "./App.css";
import Monsters from "./components/monster/Monsters";
import { QueryClientProvider, QueryClient } from "react-query";
import { Navbar, Container } from "@nextui-org/react";

const queryClient = new QueryClient();

function App() {
  return (
    <div className="App">
      <header>
        <Navbar></Navbar>
      </header>
      <Container>
        <QueryClientProvider client={queryClient}>
          <Monsters />
        </QueryClientProvider>
      </Container>
    </div>
  );
}

export default App;
