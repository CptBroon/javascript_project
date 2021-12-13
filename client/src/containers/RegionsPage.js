import AnimalCard from "../components/AnimalCard";

const RegionsPage = ({allAnimals}) => {

    const newList = ({allAnimals}) =>{
        const animalsByRegion = allAnimals.find((region) =>{
            return animalsByRegion;
             
        })
    // second list which is a filtered list
    const animalsList = allAnimals.map((region)  =>{
      return <AnimalCard animal={region}/>
            });


    return (
        <>
        <h2> List of all animals by selected region </h2>
        <h2> {animalsList} </h2>
        <h2> {animalsByRegion} </h2>
        </>
    )

    // return list of animals for each region
    //takes an argument / props of region, and return animals
    // filter for region
    //each list item is a clickable link which takes you to the animal card
}
}
export default RegionsPage;

