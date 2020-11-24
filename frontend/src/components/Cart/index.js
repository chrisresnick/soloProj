import React, {useState, useEffect} from "react";
import {useSelector} from "react-redux";
import {useHistory} from "react-router-dom";
import {fetch}  from "../../store/csrf";
import Item from "./Item";
import "./cart.css"


const Cart = () => {
    const [cart, setCart] = useState([])
    const {id} = useSelector(state => state.session.user);
    const [cartIsRefreshed, setCartIsRefreshed] = useState(false);
    const history = useHistory();
    const total = cart.reduce((acc, item) => acc+item.Listing.priceCents*item.participants, 0);

    const checkOut = async (e) => {
        const res = await fetch("/api/cart/checkout", {
            method: "POST",
            body: JSON.stringify({id})
        })
        if(res.data.success) {
            setCart([]);
            history.push("/");
        }
    };

    useEffect(() => {
        if(cartIsRefreshed) return;
        (async () => {
            const res = await fetch(`/api/cart/${id}`);
            console.log(res);
            setCart(res.data);
        })()
        setCartIsRefreshed(true);
        // return () => setCartIsRefreshed(false);
    }, [cartIsRefreshed, id])

    const delFromCart = async (listing) => {
        const res = await fetch(`/api/cart/${listing}`, {
            method: "DELETE",
        });
        setCart(cart.filter(item => item.id !== res.data.deleted));
    }

    // const html = !cartIsRefreshed ? (<h1>Loading Cart...</h1>) : (
    //     <>
    //         {cart.map(item => <Item key={item.id} item={item} />)}
    //     </>
    // );

    return  cartIsRefreshed ? (
        <div className="cart">
            <div className="items">
                <div className="empty-cart">{cart.length ? null : "Your Cart is Empty"}</div>
                {cart.map(item => <Item key={item.id} ITEM={item} delFromCart={delFromCart}/>)}
            </div>
            <div className ="checkout">
                <h2>Check Out</h2>
                <div className="chInfo">
                    <p>Total ${(total/100).toFixed(2)}</p>
                </div>
                <div className="chButton">
                    <i class="fas fa-cash-register" onClick={checkOut}></i>
                </div>
            </div>
        </div>
    ) : (
        <h1>Loading cart...</h1>
    )
}

export default Cart;
