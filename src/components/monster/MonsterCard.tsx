import { MonsterInterface } from "../../interfaces/MonsterInterface";
import { Card, Text, Grid } from "@nextui-org/react";

export interface IProps {
  monster: MonsterInterface;
}

function titleCase(str: string) {
  var splitStr = str.toLowerCase().split(" ");
  for (var i = 0; i < splitStr.length; i++) {
    splitStr[i] =
      splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
  }
  return splitStr.join(" ");
}

export default function MonsterCard({ monster }: IProps) {
  return (
    <Card>
      <Card.Header>
        <Text h3>{titleCase(monster.name)}</Text>
      </Card.Header>
      <Card.Divider />
      <Card.Body>
        <Grid.Container gap={1}>
          <Grid xs={4}>
            <Card.Image src={monster.image}></Card.Image>
          </Grid>
          <Grid xs={8}>
            <Text>{monster.description}</Text>
          </Grid>
        </Grid.Container>
        <Card.Divider />
        <Grid.Container gap={1}>
          <>
            <Grid xs={12}>
              <Text h4>Drops:</Text>
            </Grid>
            {monster.drops != null &&
              monster.drops.map((drop, index) => (
                <Grid xs={4} key={index}>
                  <Text>- {titleCase(drop)}</Text>
                </Grid>
              ))}
          </>
        </Grid.Container>
      </Card.Body>
    </Card>
  );
}
