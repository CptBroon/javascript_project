import desert from "../img/desert.jpeg";
import ocean from "../img/ocean.jpeg";
import plains from "../img/plains.jpeg";
import rainforest from "../img/rainforest.jpeg";
import tundra from "../img/tundra.jpeg";

const HomePage = ({allAnimals}) => {
    
    const generateRandomIndex = (lengthOfArray) => {
        return Math.floor(Math.random() * lengthOfArray)
    }

    const selectRandomAnimal = (animalArray) => {
        return animalArray[generateRandomIndex(animalArray.length)]
    }

    const generateRandomAnimalList = (numberOfAnimals, animalArray) => {
        const randomAnimals = []
        for (let i=0; i < numberOfAnimals; i++) {
            const animal = selectRandomAnimal(animalArray)
            randomAnimals.push(animal) 
        }
        return randomAnimals
    }

    const createAnimalCard = (animal) => {
        return (
            <li key={animal._id} className="animal-card">
                {animal.name}
            </li>
        )
    }
    
    const generateRandomAnimalsGrid = () => {
        if (allAnimals.length) {
            const animals = generateRandomAnimalList(6, allAnimals)
            return animals.map(createAnimalCard) 
        }
    }

    return (
        <div className="flex-column">
            <div id="region-images-carousel">
            </div>
            <div id="random-species-section">
                <ul id="random-species-list">
                    {generateRandomAnimalsGrid()}
                </ul>
            </div>
        </div>
    )
}

export default HomePage;