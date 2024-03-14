import PropTypes from 'prop-types';
import { useState } from 'react';
import '../Phone/Phone.css'

const Phone = ({phone, handleOrderClick}) => {
    const [clicked, setClicked] = useState(false)
    const {id, brand, price, category, image} = phone;

    const handleClick = () => {
        handleOrderClick(phone)
        setClicked(true)
    }

    return (
        <div className={`phone ${clicked && 'phone-bg'}`}>
            <img src={image} alt="" />
            <p><small>Id: {id}</small></p>
            <h3>Name: {brand}</h3>
            <p>Price: {price}</p>
            <p>category: {category}</p>
            <button onClick={handleClick} style={{backgroundColor: clicked && 'green'}}>Order Now</button>
        </div>
    );

};
Phone.propTypes = {
    phone: PropTypes.object.isRequired,
    handleOrderClick: PropTypes.func.isRequired
}

export default Phone;