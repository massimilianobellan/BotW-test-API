import { useQuery } from "react-query";
import { EqiupmentInterface } from "../../interfaces/Equipment";
import { Grid, Loading, Text } from "@nextui-org/react";
import EquipmentCard from "./EquipmentCard";

export default function Equipments() {
  const fetchEquipments = async () => {
    const response = await fetch(
      "https://botw-compendium.herokuapp.com/api/v2/category/equipment"
    );
    return response.json();
  };

  const { data, status } = useQuery("equipments", fetchEquipments, {
    refetchOnWindowFocus: false,
  });

  if (status === "loading") {
    return (
      <div>
        <Loading />
        <Text>Loading...</Text>
      </div>
    );
  }

  if (status === "error") {
    return (
      <div>
        <Text>Error</Text>
      </div>
    );
  }

  return (
    <Grid.Container gap={2}>
      {data.data.map((equipment: EqiupmentInterface) => (
        <Grid md={6} key={equipment.id}>
          <EquipmentCard equipment={equipment} />
        </Grid>
      ))}
    </Grid.Container>
  );
}
