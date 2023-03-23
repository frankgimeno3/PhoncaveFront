import "./Phonelist.css";
import { Link  } from "react-router-dom";
function Phonelist({phonesjson}) {
  console.log(phonesjson)
   return (
    <div className="phonescolumn">
      <h1>Our Phones</h1>
      <h2>See below our phone list. You can click details to know more about them.</h2>
    <ul>
      {phonesjson.map((phone) => (
        <li key={phone._id}>
          <h3>{phone.name} </h3>
          <p>Manufacturer: {phone.manufacturer}</p>
            <Link to={`/phones/${phone.id}`}>
              See more details
            </Link>
        </li>
    ))}
    </ul>
    </div>
  );
}

export default Phonelist;
