import React, {useState, useEffect} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";
import SortButtons from "./SortButtons";


function PlantPage() {
  const [plants, setPlants] = useState([])

  const [name, setName] = useState("")
  const [image, setImage] = useState("")
  const [price, setPrices] = useState("")

  const [searchInput, setSearchInput] = useState("")

  const [sortHighLow, setSortHighLow] = useState(false)
  const [sortLowHigh, setSortLowHigh] = useState(false)



  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((r) => r.json())
      .then((plantsData) => setPlants(plantsData));
  }, []);

  // console.log(plants)

  function nameInput(event){
    console.log(event.target.value)
    setName(event.target.value)
  }

  function imageInput(event){
    console.log(event.target.value)
    setImage(event.target.value)
  }

  function priceInput(event){
    console.log(event.target.value)
    setPrices(event.target.value)
  }

  function formSumbitHandle(event){
    event.preventDefault()

    // console.log(name, image, price)
    const newPlant = {
      name: name,
      image:image,
      price: price
    }

    if(newPlant.descrinameption === "" || newPlant.image === "" || newPlant.price === "" ) return

    fetch("http://localhost:6001/plants", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPlant),
    })
      .then((r) => r.json())
      .then((newPlantData) => setPlants([...plants, newPlantData]));
  }




  console.log("search input", searchInput)

  const searchedPlants = plants.filter((plant) => 
  plant.name.toLowerCase().includes(searchInput.toLowerCase())).sort((plant1, plant2) => helpSort(sortLowHigh, sortHighLow, plant1, plant2))


  function searchHandle(event){
    setSearchInput(event.target.value)
  }



  // color for button ()

  function helpSort(sortLowHigh, sortHighLow, plant1, plant2){
    if(sortLowHigh === true){
      return plant1.price - plant2.price
    }
    if((sortHighLow === true)){
      return plant2.price - plant1.price
    }
  }

  // const sortedPlants = plants.sort((plant1, plant2) => {
  //   if(sortLowHigh === true){
	// 		return plant1.price - plant2.price
	// 	}
	// 	if((sortHighLow === true)){
	// 		return plant2.price - plant1.price
	// 	}
	// 	}
  // )

  // const sortedPlants = plants.sort((plant1, plant2) => helpSort(sortLowHigh, sortHighLow, plant1, plant2))


  function sortHandleHighLow(event){
    setSortHighLow((prevState) => !prevState)
    setSortLowHigh(false)
  }

  function sortHandleLowHigh(event){
    setSortLowHigh((prevState) => !prevState) 
    setSortHighLow(false)
  }

  function handleDelPlant(deletedPlant){
    console.log(deletedPlant)
    const updatedPlants = plants.filter((plant) => plant.id !== deletedPlant.id);
    setPlants(updatedPlants)
  }

  function priceSubmitHandle(updatedPlant){
    console.log(updatedPlant)

    const updatedPlants = plants.map((plant) => {
      if (plant.id === updatedPlant.id) {
        return updatedPlant
      } else {
        return plant
      }
    })

    setPlants(updatedPlants);

  }

  return (
    <main>
      <NewPlantForm nameInput={nameInput} imageInput={imageInput} priceInput={priceInput} formSumbitHandle={formSumbitHandle}/>
      <Search searchHandle={searchHandle}/>
      <SortButtons sortHandleHighLow={sortHandleHighLow} sortHandleLowHigh={sortHandleLowHigh} sortHighLow={sortHighLow} sortLowHigh={sortLowHigh}/>
      <PlantList plants={searchedPlants} handleDelPlant={handleDelPlant} priceSubmitHandle={priceSubmitHandle}/>
    </main>
  );
}

export default PlantPage;
