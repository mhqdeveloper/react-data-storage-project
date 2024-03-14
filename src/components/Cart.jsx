import PropTypes from 'prop-types';

const Cart = ({ cart, handleRemoveCart }) => {
    return (
        <div>
            <h3>Cart : {cart.length}</h3>

            {
                cart.map(phone => <div key={phone.id}>

                    <li >{phone.brand} </li>
                    <img style={{ width: '30px' }} src={phone.image} alt="" />
                    <button onClick={() => handleRemoveCart(phone.id)}>Remove</button>
                </div>
                )}
        </div>
    )
}
Cart.propTypes = {
    cart: PropTypes.array.isRequired,
    handleRemoveCart: PropTypes.func.isRequired,
}
export default Cart;