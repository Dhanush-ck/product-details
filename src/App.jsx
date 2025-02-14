import React, { useEffect, useRef, useState } from "react";
import color from "./data/color.json";
import price from "./data/price.json";

function App() {
  
  const extraImages = document.querySelectorAll('.extra-image');
  const sizeVarients = document.querySelectorAll('.size-varients');
  const [selectedColor, setColor] = useState(color.black);
  const [selectedImage, setImage] = useState(selectedColor[1]);
  const [selectSize, setSize] = useState(price.m);

  function updateColor(e) {
    setColor(color[e.target.dataset.value]);
    setImage(color[e.target.dataset.value][1]);
    for(let val in extraImages) {
      if(val == 0)
        extraImages[val].classList.add('active-image');
      else
        extraImages[val].classList.remove('active-image');
    }
  }
  
  function updateSize(e) {
    setSize(price[e.target.dataset.value]);
    for(let val in sizeVarients) {
      if( price[e.target.dataset.value].index == val)
        sizeVarients[val].classList.add('active-size');
      else
        sizeVarients[val].classList.remove('active-size');
    }
  }

  useEffect(()=>{
    extraImages.forEach((ei)=>{
      ei.addEventListener('click', ()=>{
        setImage(ei.src);
        extraImages.forEach((image)=> {
          if(image.src == ei.src){
            image.classList.add('active-image');
          }
          else {
            image.classList.remove('active-image');
          }
        })
      })
    })
  })


  return(
    <div className="container">

      {/* Header  */}
      <div className="header">
        <div className="brand">
          CLOTHING
        </div>

        <div className="right-header">

          <div className="search">
            <input type="text" placeholder="Search" className="search-input"/>
            <img src="img/icons/search.png" alt="" className="icons"/>
          </div>

          <select className="dropdown" value={"Language"}>
            <option value={"Eng"} key={"eng"}>English</option>
            <option value={"Mal"} key={"mal"}>Malayalam</option>
          </select>

          <img src="img/icons/shopping-cart.png" alt="" className="icons"/>
          <img src="img/icons/user.png" alt="" className="icons"/>
        </div>
      </div>

      <div className="nav">
        <a href="" className="inactive-nav">Home</a> 
        &nbsp; &gt; &nbsp; 
        <a href="" className="inactive-nav">Men</a> 
        &nbsp; &gt; &nbsp; 
        <a href="" className="inactive-nav">Hoodies</a> 
        &nbsp; &gt; &nbsp; 
        <a href="" className="active-nav">Hooded Sweatshirt</a>
      </div>

      {/* Main Content  */}
      <div className="details">

        <div className="image-section">
          <div className="main-image">
            <img src={selectedImage} alt="" />
          </div>
          <div className="sub-image">
            <img src={selectedColor[1]} alt="" className="extra-image"/>
            <img src={selectedColor[2]} alt="" className="extra-image"/>
            <img src={selectedColor[3]} alt="" className="extra-image"/>
            <img src={selectedColor[4]} alt="" className="extra-image"/>
            <img src={selectedColor[5]} alt="" className="extra-image"/>
          </div>
        </div>

        <div className="text-section">

          <div className="text-head">
            <div className="creator-name gray"> Alan Jones </div>
            <div className="product-name"> Hooded Sweatshirt </div>

            <div className="price-rating">
              
              <div className="price">
                <div className="old-price line-through font-thin gray"> {selectSize.oldPrice} </div>
                <div className="new-price font-extrabold text-2xl"> {selectSize.newPrice} </div>
              </div>

              <div className="rating">
                {/* <div className="sold-count gray"> 1238 sold </div> */}
                <div className="rating font-extrabold text-xl"> 4.5 </div>
              </div>
              
            </div>
          </div>

          <div className="text-description">
            <div className="text-lg font-bold">Description : </div>
            <div className="description text-sm gray">
            Upgrade your wardrobe with the Alan Jones Men's Poly-Cotton Hooded Sweatshirt, designed for both style and comfort. Made from premium export-quality poly-cotton fabric, this full-sleeve sweatshirt offers a soft and cozy feel, making it perfect for everyday wear. Featuring a solid pattern and a fashionable hoodie style, it adds a trendy touch to your casual look. The zip closure ensures easy wear, while the side pockets provide warmth and convenience. Ideal for winters, night drives, and casual outings, this lightweight 200g sweatshirt is a must-have for effortless style.
            </div>
          </div>

          <div className="color-section ">
            <div className="color-name gray">
              Color : <span className="text-black font-bold">{selectedColor.id}</span>
            </div>
            <div className="color-list">
              <div className="bg-black color" data-value="black" onClick={updateColor}></div>
              <div className="bg-blue-500 color" data-value="blue" onClick={updateColor} ></div>
              <div className="bg-orange-500  color" data-value="orange" onClick={updateColor} ></div>
              <div className="bg-yellow-300 color" data-value="yellow" onClick={updateColor} ></div>
            </div>
          </div>

          <div className="size-section">
            <span className="gray">Size : <span className="text-black font-bold">{selectSize.id}</span></span>
            <div className="size-list">
              <span className="size-varients" data-value="xs" onClick={updateSize}>XS</span>
              <span className="size-varients" data-value="s" onClick={updateSize}>S</span>
              <span className="size-varients active-size" data-value="m" onClick={updateSize}>M</span>
              <span className="size-varients" data-value="l" onClick={updateSize}>L</span>
              <span className="size-varients" data-value="xl" onClick={updateSize}>XL</span>
              <span className="size-varients" data-value="xxl" onClick={updateSize}>XXL</span>
            </div>
          </div>

          <div className="order-section">
            <div className="add-cart"> Add To Cart</div>
            <div className="checkout"> Checkout Now</div>
          </div>

        </div>
      </div>

    </div>
  )
}

export default App;