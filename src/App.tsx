import "./App.css";
import Monsters from "./components/monster/Monsters";
import { QueryClientProvider, QueryClient } from "react-query";
import { Container } from "@nextui-org/react";
import NavigationBar from "./components/navbar/NavigationBar";

const queryClient = new QueryClient();

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Container>
        <QueryClientProvider client={queryClient}>
          <Monsters />
        </QueryClientProvider>
      </Container>
    </div>
  );
}

export default App;
