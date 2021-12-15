import ReactModal from "react-modal"

const AnimalProfile = ({animal, modalOpen, setModalOpen}) => {

    const handleModalClose = () => {
        setModalOpen(false);
    }

    const animalFacts = (animal) => {
        return animal.facts.map(fact => <li>{fact}</li>)
    }

    const capitalizeString = (string) => {
        return string[0].toUpperCase() + string.slice(1)
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
                <div className="spacer"/>
                <div className="animal-profile-left column">
                    <div>
                        <h3>Stats</h3>
                        <table>
                            <tbody>
                                <tr>
                                    <td className="left-column">
                                        Region
                                    </td>
                                    <td>
                                        {capitalizeString(animal.region)}
                                    </td>
                                </tr>
                                <tr>
                                    <td className="left-column">
                                        Class
                                    </td>
                                    <td>
                                        {capitalizeString(animal.type)}
                                    </td>
                                </tr>
                                <tr>
                                    <td className="left-column">
                                        Diet
                                    </td>
                                    <td>
                                        {capitalizeString(animal.diet)}
                                    </td>
                                </tr>
                                <tr>
                                    <td className="left-column">
                                        Population
                                    </td>
                                    <td>
                                        {animal.population}
                                    </td>
                                </tr>
                                <tr>
                                    <td className="left-column">
                                        Status 
                                    </td>
                                    <td>
                                        {capitalizeString(animal.status)}
                                    </td>
                                </tr>
                                <tr>
                                    <td className="left-column">
                                        Lifespan (years)
                                    </td>
                                    <td>
                                        {animal.lifespan}
                                    </td>
                                </tr>
                                <tr>
                                    <td className="left-column">
                                        Average weight (g)
                                    </td>
                                    <td>
                                        {animal.weight}
                                    </td>
                                </tr>
                                <tr>
                                    <td className="left-column">
                                        Average length (mm)
                                    </td>
                                    <td>
                                        {animal["body-length"]}
                                    </td>
                                </tr>
                                <tr>
                                    <td className="left-column">
                                        Top speed (km/h)
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
                        <h3>Facts</h3>
                        <ul id="facts-list">
                            {animalFacts(animal)}
                        </ul>
                    </div>
                </div>
            </div>
        </ReactModal>
       
    )
}

export default AnimalProfile