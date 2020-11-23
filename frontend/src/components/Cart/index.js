import React, {useState, useEffect} from "react";
import {useSelector} from "react-redux";
import {fetch}  from "../../store/csrf";
import Item from "./Item";
import "./cart.css"


const Cart = () => {
    const [cart, setCart] = useState([])
    const {id} = useSelector(state => state.session.user);
    const [cartIsRefreshed, setCartIsRefreshed] = useState(false);

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

    // const html = !cartIsRefreshed ? (<h1>Loading Cart...</h1>) : (
    //     <>
    //         {cart.map(item => <Item key={item.id} item={item} />)}
    //     </>
    // );

    return  cartIsRefreshed ? (
        <>
            {cart.map(item => <Item key={item.id} item={item} />)}
        </>
    ) : (
        <h1>Loading cart...</h1>
    )
}

export default Cart;
