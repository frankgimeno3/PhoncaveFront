import "./PhoneDetails.css";
import { useParams } from "react-router-dom";

function PhoneDetails({phonesjson}) {
  const { id } = useParams();
  const phone = phonesjson.find((phone) => phone.id === parseInt(id));
  console.log(phone)
  return (
 
      <div className="countryCcolumn">
        <h2>{phone.name}</h2>
        <h3>Description</h3>
        <p>{phone.description}</p>
        <p>Manufacturer: {phone.manufacturer}</p>
        <p>Price: {phone.price}</p>
        <p>Processor: {phone.processor}</p>
        <p>Ram {phone.ram}</p>
        <p>Screen {phone.screen}</p>
      </div>
  );
}
export default PhoneDetails;
