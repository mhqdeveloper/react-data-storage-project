import { useEffect } from "react";
import { useState } from "react";
import Phone from "../Phone/Phone";
import '../Phones/Phones.css'
import { addToCart, getStoredCart, removeDataLS } from "../../../utilities/utilites";
import Cart from "../Cart";

const Phones = () => {
    const [phones, setPhones] = useState([])
    const [orderPhone, setOrderPhone] = useState([])

    useEffect(() => {
        fetch('phone.json')
        .then(res => res.json())
        .then(data => setPhones(data))
    }, [])


    useEffect(()=> {
        console.log(`this is length checker useEffect`, phones.length);
        // console.log(getStoredCart())
        if(phones.length){
            const storedCart = getStoredCart()
            console.log(`this is storedCart`,storedCart);

            let saveCart = [];
            for (const id of storedCart) {
                const phone = phones.find(phone => phone.id === id)
                if (phone) {
                    saveCart.push(phone)
                }
            }

            console.log(`this is update array`, saveCart);
            setOrderPhone(saveCart)
        }
    }, [phones])

    const handleOrderClick = (phone) => {
         setOrderPhone([...orderPhone, phone])
         addToCart(phone.id) //added the Cart LS
    }

    const handleRemoveCart = id => {
        //remove from UI
       const remainingCart = orderPhone.filter(phone => phone.id !== id);
       setOrderPhone(remainingCart);

        //remove from LS
        removeDataLS(id)
    }
    return (
        <>
        <div>
            <h3>Phones Store: {phones.length}</h3>
        </div>
        <Cart cart={orderPhone} handleRemoveCart={handleRemoveCart}></Cart>

        <div className='phones-container'>
            {
                phones.map(phone => <Phone 
                    key={phone.id} 
                    phone={phone}
                    handleOrderClick={handleOrderClick} >
                    </Phone>)
            }
        </div>
        </>
    );

    
};

export default Phones;