import React from "react";

const Item = ({item}) => {
    console.log(item);
    return (
    <h1>{item.id}</h1>
    );
}

export default Item;
