import { EqiupmentInterface } from "../../interfaces/Equipment";
import { Card, Text, Grid } from "@nextui-org/react";

export interface IProps {
  equipment: EqiupmentInterface;
}

export default function EquipmentCard({ equipment }: IProps) {
  return (
    <Card>
      <Card.Header>
        <Text h3 transform="capitalize">
          {equipment.name}
        </Text>
      </Card.Header>
      <Card.Divider />
      <Card.Body>
        <Grid.Container gap={1}>
          <Grid xs={4}>
            <Card.Image src={equipment.image}></Card.Image>
          </Grid>
          <Grid xs={8}>
            <Text>{equipment.description}</Text>
          </Grid>
        </Grid.Container>
        <Card.Divider />
        <Grid.Container gap={1} justify={"center"}>
          <Grid xs={2}>
            <Text h3>{equipment.attack === 0 ? "Defense: " : "Attack: "}</Text>
          </Grid>
          <Grid xs={2}>
            <Text h3>
              {equipment.attack === 0 ? equipment.defense : equipment.attack}
            </Text>
          </Grid>
        </Grid.Container>
      </Card.Body>
    </Card>
  );
}
