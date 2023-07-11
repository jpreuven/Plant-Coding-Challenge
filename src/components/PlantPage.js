import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    let url = "http://localhost:6001/plants";
    if (search) {
      url += `?q=${search}`;
    }
    fetch(url)
      .then((r) => r.json())
      .then((data) => setData(data));
  }, [search]);

  function handleSubmit(plant) {
    setData([...data, plant]);
    console.log(plant);

    fetch("http://localhost:6001/plants", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(plant),
    });
  }

  return (
    <main>
      <NewPlantForm handleSubmit={handleSubmit} />
      <Search search={search} setSearch={setSearch} />
      <PlantList data={data} />
    </main>
  );
}

export default PlantPage;
