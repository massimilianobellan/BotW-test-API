import { useQuery } from "@tanstack/react-query";
import MonsterCard from "./MonsterCard";
import { MonsterInterface } from "../../interfaces/MonsterInterface";
import { Grid, Loading, Text } from "@nextui-org/react";

export default function Monsters() {
  const fetchMonsters = async () => {
    const response = await fetch(
      "https://botw-compendium.herokuapp.com/api/v2/category/monsters"
    );
    return response.json();
  };

  const { data, status, fetchStatus } = useQuery(["monsters"], fetchMonsters, {
    refetchOnWindowFocus: false,
  });

  if (fetchStatus === "fetching") {
    return (
      <Grid.Container gap={3} justify={"center"}>
        <Grid xs={1}>
          <Loading />
        </Grid>
        <Grid xs={1}>
          <Text h3>Loading...</Text>
        </Grid>
      </Grid.Container>
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
      {data.data.map((monster: MonsterInterface) => (
        <Grid md={6} key={monster.id}>
          <MonsterCard monster={monster} />
        </Grid>
      ))}
    </Grid.Container>
  );
}
