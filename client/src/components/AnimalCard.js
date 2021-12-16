const AnimalCard = ({animal, showModal, selectedAnimal, setSelectedAnimal}) =>{

    const handleCardClick = () => {
        setSelectedAnimal(animal);
            showModal()
    }

    return (
        <li>
            <button className="animal-card" onClick={handleCardClick}>
                <img className="animal-card-image" src={animal.images[0]} alt="hello"/>
                <h4>{animal.name}</h4>
            </button>
        </li>
    )
}
export default AnimalCard;