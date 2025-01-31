import { context } from "@/context/context";
import { useContext } from "react";
import PopContainer from "./PopupContainer";
const ServicePopup = () => {
  const { serviceModal, setServiceModal } = useContext(context);
  return (
    <PopContainer nullValue={setServiceModal}>
      <div className="service_popup_informations">
        <div className="image">
          <img src="assets/img/thumbs/4-2.jpg" alt />
          <div
            className="main"
            data-img-url={serviceModal.img}
            style={{ backgroundImage: `url(${serviceModal.img})` }}
          />
        </div>
        <div className="main_title">
          <h3>{serviceModal.name}</h3>
        </div>
        <div className="descriptions">
          {serviceModal.description.map((des, i) => (
            <p key={i}>{des}</p>
          ))}
        </div>
      </div>
    </PopContainer>
  );
};
export default ServicePopup;
