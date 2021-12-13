import { useState } from "react";
import AnimalCard from "../components/AnimalCard";

const RegionsPage = ({allAnimals, allRegions}) => {
    const [regionalAnimals, setRegionalAnimals] = useState([]);
    
    const handleFilterClick = (e) => {
        const filteredList = []
        allAnimals.map(animal => {
            if (animal.region === e.target.value) {
                filteredList.push(animal)
            }
        })
        setRegionalAnimals(filteredList)
    }

    const createRegionLink = (region) => {
        console.log(region)
        return (
            <li className="region-title">
                <button onClick={handleFilterClick} value={region}>
                    {region[0].toUpperCase() + region.slice(1)}
                </button>
            </li>
        )
    }

    const generateRegionList = (regionList) => {
        if (allRegions.length) {
            return regionList.map(region => createRegionLink(region))
        }
    }

    const generateRegionalAnimalList = (regionalList) => {
        if (regionalList.length) {
            return regionalList.map(animal => <AnimalCard animal={animal}/>)
        }
    }

    return (
        <>
        <h1> Regions </h1>
        <ul>
            {generateRegionList(allRegions)}
        </ul>
        <p>i </p>
        <h2> List of all animals by selected region </h2>
        {generateRegionalAnimalList(regionalAnimals)}
        </>
    )
    // return list of animals for each region
    //takes an argument / props of region, and return animals
    // filter for region
    //each list item is a clickable link which takes you to the animal card
}

export default RegionsPage;