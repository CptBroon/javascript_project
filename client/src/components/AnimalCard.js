//receives single animal object as json, it can show animal.name etc


const AnimalCard = ({newList}) =>{

    return (
    <> 
    <h1>Name: {newList.name}</h1>
    <p>Type: {newList.type}</p>


     </>


    )
}
export default AnimalCard;