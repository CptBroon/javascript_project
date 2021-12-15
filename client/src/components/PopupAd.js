import ReactModal from "react-modal";

const PopupAd = ({popupStatus, setPopupStatus}) => {

    const handleModalClose = () => {
        setPopupStatus(false)
    }

    return (
        <ReactModal
            isOpen= {popupStatus}
            shouldCloseOnOverlayClick={false}
            shouldCloseOnEsc={true}
            onRequestClose={handleModalClose}
            style={
                {overlay: {
                    backgroundColor: "rgba(0, 0, 0, 0.5)"
                },
                content: {
                    inset: "10% 5%",
                    backgroundColor: "#E9004B",
                    animation: "borderColor 0.5s infinite linear",
                    borderRadius: "50px",
                    border: "20px solid white"
                }}
            }
        >
            <>
                <div id="ros-logo-container">
                    <img id="ros-logo" src={"/img/ros-logo.png"}/>
                </div>
                <div id="popup-text">
                    <h2>PROPERTY IN SCOTLAND??</h2>
                    <h2>SUBMIT AN APPLICATION TODAY!</h2>
                    <h2>WE PROMISE&#x2122; IT WILL BE REGISTERED BY 2024</h2>
                </div>
                
                
            </>
        </ReactModal>
    )
}

export default PopupAd