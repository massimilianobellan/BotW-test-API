import { useQuery } from "@tanstack/react-query";
import { EqiupmentInterface } from "../../interfaces/EquipmentInterface";
import { Grid, Loading, Text } from "@nextui-org/react";
import EquipmentCard from "./EquipmentCard";

export default function Equipments() {
  const fetchEquipments = async () => {
    const response = await fetch(
      "https://botw-compendium.herokuapp.com/api/v2/category/equipment"
    );
    return response.json();
  };

  const { data, status, fetchStatus } = useQuery(
    ["equipments"],
    fetchEquipments,
    {
      refetchOnWindowFocus: false,
    }
  );

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
      {data.data.map((equipment: EqiupmentInterface) => (
        <Grid md={6} key={equipment.id}>
          <EquipmentCard equipment={equipment} />
        </Grid>
      ))}
    </Grid.Container>
  );
}
