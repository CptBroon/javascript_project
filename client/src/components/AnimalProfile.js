import ReactModal from "react-modal"

const AnimalProfile = ({animal, modalOpen, setModalOpen}) => {

    const handleModalClose = () => {
        setModalOpen(false);
    }

    const animalFacts = (animal) => {
        return animal.facts.map(fact => <li>{fact}</li>)
    }

    return (
        <ReactModal
            isOpen= {modalOpen}
            shouldCloseOnOverlayClick={true}
            shouldCloseOnEsc={true}
            onRequestClose={handleModalClose}
        >
            <div className="modal-content">
                <button className="close-btn" onClick={handleModalClose}>x</button>
                <div id="image-container">
                    <img id="animal-profile-image" src={animal.images[0]}></img>
                </div>
                <h3 id="animal-profile-name">{animal.name}</h3>
                <div className="animal-profile-left column">
                    <div>
                        <h4>Stats</h4>
                        <table>
                            <tbody>
                                <tr>
                                    <td>
                                        Region
                                    </td>
                                    <td>
                                        {animal.region}
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        Class
                                    </td>
                                    <td>
                                        {animal.type}
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        Diet
                                    </td>
                                    <td>
                                        {animal.diet}
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        Population
                                    </td>
                                    <td>
                                        {animal.population}
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        Status 
                                    </td>
                                    <td>
                                        {animal.status}
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        Lifespan 
                                    </td>
                                    <td>
                                        {animal.lifespan}
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        Average weight 
                                    </td>
                                    <td>
                                        {animal.weight}
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        Average length
                                    </td>
                                    <td>
                                        {animal["body-length"]}
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        Top speed
                                    </td>
                                    <td>
                                        {animal["top-speed"]}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="animal-profile-right column">
                    <div>
                        <h4>facts</h4>
                        <ul>
                            {animalFacts(animal)}
                        </ul>
                    </div>
                </div>
            </div>
        </ReactModal>
       
    )
}

export default AnimalProfile