export async function getEquipment() {

    const response =
      await fetch("/data/equipment.json");
  
    const equipment =
      await response.json();
  
    return equipment;
  }