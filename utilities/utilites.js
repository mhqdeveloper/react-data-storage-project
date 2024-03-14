//get the element and convert to parse
const getStoredCart = () => {
    const storedCart = localStorage.getItem('cart')
    if (storedCart) {
        return JSON.parse(storedCart)
    }
    return []
}

//save the local storage 
const saveStoreCart = cart => localStorage.setItem('cart', JSON.stringify(cart))


// added and get item call it
     const addToCart = (id) => {
         const cart = getStoredCart()
         cart.push(id)
         saveStoreCart(cart) 
     }

//remove data from localStorage: 
const removeDataLS = (id) => {
    const cart = getStoredCart()
   const  removeCart = cart.filter(itemId => itemId !== id)
    saveStoreCart(removeCart)
}


     export {addToCart, getStoredCart, removeDataLS}