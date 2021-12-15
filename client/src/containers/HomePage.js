import Slideshow from "../components/Slideshow";
import AnimalCard from "../components/AnimalCard";
import AnimalProfile from "../components/AnimalProfile";
import { useEffect } from "react";


const HomePage = ({allAnimals, randomAnimals, showModal, modalOpen, setModalOpen, selectedAnimal, setSelectedAnimal}) => {

    const data = [
        {
          image: "/img/desert.jpeg",
          caption: "Desert"
        },
        {
          image: "/img/ocean.jpeg",
          caption: "Ocean"
        },
        {
          image: "/img/plains.jpeg",
          caption: "Plains"
        },
        {
          image: "/img/rainforest.jpeg",
          caption: "Rainforest"
        },
        {
          image: "/img/tundra.jpeg",
          caption: "Tundra"
        }
      ];
      const captionStyle = {
        fontSize: '2em',
        fontWeight: 'bold',
      }
      const slideNumberStyle = {
        fontSize: '20px',
        fontWeight: 'bold',
      }

    const createAnimalCard = (animal) => {
        return <AnimalCard animal={animal} showModal={showModal} setSelectedAnimal={setSelectedAnimal}/>
    }

    const animals = randomAnimals.map(createAnimalCard)

    return (
      <>
        {/* <button }>show</button> */}
        {selectedAnimal && <AnimalProfile animal={selectedAnimal} modalOpen={modalOpen} setModalOpen={setModalOpen}/>}
        <div className="flex-column">
            <div id="region-images-carousel">
                    <Slideshow data={data} captionStyle={captionStyle} slideNumberStyle={slideNumberStyle}/>
            </div>
            <div id="random-species-section">
                <ul id="random-species-list">
                    {animals}
                </ul>
            </div>
        </div>
      </>
    )
}

export default HomePage;