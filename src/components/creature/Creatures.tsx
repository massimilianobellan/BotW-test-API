import { Loading, Text, Grid } from "@nextui-org/react";
import { useQuery } from "@tanstack/react-query";
import { CreatureInterface } from "../../interfaces/CreatureInterface";
import CreatureCard from "./CreatureCard";

export default function Creatures() {
  const fetchCreatures = async () => {
    const response = await fetch(
      "https://botw-compendium.herokuapp.com/api/v2/category/creatures"
    );
    return response.json();
  };

  const { data, status, fetchStatus } = useQuery(["creature"], fetchCreatures, {
    refetchOnWindowFocus: false,
  });

  if (fetchStatus === "fetching") {
    return (
      <div>
        <Loading />
        <Text>Loading...</Text>
      </div>
    );
  }

  if (status === "error" || data.message === "Not found") {
    return (
      <div>
        <Text>Error</Text>
      </div>
    );
  }

  return (
    <Grid.Container gap={2}>
      {data.data.food.map((creature: CreatureInterface) => (
        <Grid md={6} key={creature.id}>
          <CreatureCard creature={creature} />
        </Grid>
      ))}
    </Grid.Container>
  );
}
