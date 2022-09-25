import React from "react"

const ItemCart = ( {img, name, desc, quantity, price  }) => {
  return (
    <div className="cartItem">
                    <div className="boxImage">
                        <img src={img}  alt={name} />
                    </div>
                    <div className="aboutProduct">
                        <h1 className="title">{name}</h1>
                        <h3 className="subtitle">{desc}</h3>
                        {/* <img src="images/veg.png" style={{ height="30px" }}/> */}
                    </div>
                    <div className="counter">
                        {/* <div class="btn">+</div>
                        <div class="count">2</div>
                        <div class="btn">-</div> */}
                    </div>
                    <div className="prices">

                    </div>
    </div>
  )
}
export default ItemCart