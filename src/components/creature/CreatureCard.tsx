import { CreatureInterface } from "../../interfaces/CreatureInterface";
import { Card, Text, Grid } from "@nextui-org/react";

export interface IProps {
  creature: CreatureInterface;
}

export default function CreatureCard({ creature }: IProps) {
  return (
    <Card>
      <Card.Header>
        <Text h3 transform="capitalize">
          {creature.name}
        </Text>
      </Card.Header>
      <Card.Divider />
      <Card.Body>
        <Grid.Container gap={1}>
          <Grid xs={4}>
            <Card.Image src={creature.image}></Card.Image>
          </Grid>
          <Grid xs={8}>
            <Text>{creature.description}</Text>
          </Grid>
        </Grid.Container>
        <Card.Divider />
        <Grid.Container gap={1} justify={"center"}>
          <Grid xs={4}>
            <Text h3>Hearts Recovered: {creature.hearts_recovered}</Text>
          </Grid>
        </Grid.Container>
      </Card.Body>
    </Card>
  );
}
