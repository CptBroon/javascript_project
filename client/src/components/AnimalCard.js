//receives single animal object as json, it can show animal.name etc


const AnimalCard = ({animal}) =>{

    return (
    <> 
    <p>Name: {animal.name}</p>
    <p>Type: {animal.type}</p>


     </>


    )
}
export default AnimalCard;