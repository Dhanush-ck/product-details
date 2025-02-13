import React from "react";

function App() {
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
            <img src="img/product/hoodie/black1.jpg" alt="" />
          </div>
          <div className="sub-image">
            <img src="img/product/hoodie/black1.jpg" alt="" />
            <img src="img/product/hoodie/black2.jpg" alt="" />
            <img src="img/product/hoodie/black3.jpg" alt="" />
            <img src="img/product/hoodie/black4.jpg" alt="" />
            <img src="img/product/hoodie/black5.jpg" alt="" />
          </div>
        </div>

        <div className="text-section">

          <div className="text-head">
            <div className="creator-name gray"> Alan Jones </div>
            <div className="product-name"> Hooded Sweatshirt </div>

            <div className="price-rating">
              
              <div className="price">
                <div className="old-price line-through font-thin gray"> $40.00 </div>
                <div className="new-price font-extrabold text-xl"> $28.00 </div>
              </div>

              <div className="rating">
                <div className="sold-count gray"> 1238 sold </div>
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
              Color: <span className="text-black font-bold">Black</span>
            </div>
            <div className="color-list">
              <div className="bg-black color"></div>
              <div className="bg-yellow-300 color"></div>
              <div className="bg-blue-500 color"></div>
              <div className="bg-red-500  color"></div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default App;