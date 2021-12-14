import { useState } from "react";
import AnimalCard from "../components/AnimalCard";

const RegionsPage = ({allAnimals, allRegions}) => {
    const [regionalAnimals, setRegionalAnimals] = useState([]);
    const [listFiltered, setListFiltered] = useState(false);
    
    const handleFilterClick = (e) => {
        const filteredList = []
        allAnimals.map(animal => {
            if (animal.region === e.target.value) {
                filteredList.push(animal)
            }
        })
        setRegionalAnimals(filteredList)
        if (!listFiltered) {
            setListFiltered(true)
        }
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
            <ul id="region-list" className="flex-row">
                {generateRegionList(allRegions)}
            </ul>
            {listFiltered && <div id="filtered-list">
                <h3> List of all animals by selected region </h3>
                <ul id="filtered-animal-list" className="flex-row">
                    {generateRegionalAnimalList(regionalAnimals)}
                </ul>
            </div>}
        </>
    )
}

export default RegionsPage;