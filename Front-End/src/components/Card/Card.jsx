import styles from "./Card.module.scss";
//react icons
import { BsFillDoorOpenFill } from "react-icons/bs";
import { IoIosBed } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";
import { FaBath } from "react-icons/fa";

import placeholder from "assets/five.jpg";
import { Link } from "react-router-dom";

const Card = ({ info, showInfo, secondClass }) => {
  //CONVERT PRICE FUNC
  const convertPrice = (price) => {
    if (price >= 1000 && price < 999999) {
      price /= 1000;
      price = Math.round(price * 100) / 100;
      return `${price}k `;
    }
    if (price >= 1000000) {
      price /= 1000000;
      price = Math.round(price * 100) / 100;
      return `${price}m `;
    }
    return price;
  };

  //CONVERT RENT FUNC
  const covnertRent = (rent) => {
    if (rent >= 1000) {
      rent /= 1000
      rent = Math.round(rent * 100) / 100;
      return `${rent}k `;
    }
    return rent;
  };

  return (
    <div className={`${styles.card_container} ${secondClass}`}>
      {/* IMAGE */}
      <div className={styles.image_container}>
        <div className={styles.image_buy_btn}>
          <Link to="/">{info.category}</Link>
        </div>
        <img src={info.imageSource} alt="building" />
        {/* CITY */}
        <h3>{info.city}</h3>
        <h4>
          {/* <p className={styles.neighborhood}>{info.neighborhood}</p> */}
          <p className={styles.street}>{info.street}</p>
        </h4>
        {/* ROOMS ETC */}
        <div className={styles.info}>
          {/* ROW1 */}
          <div className={styles.row1}>
            {/* ROOMS */}
            <div className={styles.rooms}>
              <BsFillDoorOpenFill />
              <span>{`${info.rooms} Rooms`}</span>
            </div>
            {/* BEDROOMS */}
            <div className={styles.bedrooms}>
              <IoIosBed />
              <span>{`${info.bedrooms} Bedrooms`}</span>
            </div>
          </div>
          {/* ROW2 */}
          <div className={styles.row2}>
            {/* BATHROOMS */}
            <div className={styles.bathrooms}>
              <FaBath />
              <span>{`${info.bathrooms} Bathrooms`}</span>
            </div>
            {/* Short Address (Airport Code) */}
            <div className={styles.shortAddress}>
              <IoLocationSharp />
              <span>{`${info.shortAddress}`}</span>
            </div>
          </div>
        </div>

        <div className={styles.card_buy}>
          {/* PRICES */}
          <div className={styles.prices}>
            <h2
              style={showInfo.price ? {} : { display: "none" }}
            >{`${convertPrice(info.price)}$`}</h2>
            <h2
              style={showInfo.rent ? {} : { display: "none" }}
            >{`$${covnertRent(info.rent)} per month`}</h2>
          </div>
          {/* SEE MORE BUTTON */}
          <div className={styles.card_btn}>
            <Link to={`/property/${info.id}`}>See More</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

//default Props
Card.defaultProps = {
  info: {
    id: undefined,
    imageSource: placeholder,
    category: "Buy",
    city: "Default City",
    neighborhood: "Default Neighborhood",
    street: "Default Street",
    rooms: 6,
    bedrooms: 3,
    bathrooms: 2,
    shortAddress: "Default",
    price: 325000,
    rent: 0,
  },
  showInfo: {
    price: true,
    rent: false,
  },
  secondClass: "undefined",
};

export default Card;
