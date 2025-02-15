import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import color from "./data/color.json";
import price from "./data/price.json";

function App() {
  
  const extraImages = document.querySelectorAll('.extra-image');
  const sizeVarients = document.querySelectorAll('.size-varients');
  const [selectedColor, setColor] = useState(color.black);
  const [selectedImage, setImage] = useState(selectedColor[1]);
  const [selectSize, setSize] = useState(price.m);
  const [lang, setlang] = useState();

  const {t} = useTranslation();
  const {i18n} = useTranslation();

  const languages = [
    { value: "en", text: `${t("english")}` },
    { value: "mal", text: `${t("malayalam")}` }
  ];

  function changeLanguage(e) {
    setlang(e.target.value);
    i18n.changeLanguage(e.target.value);
  }

  const products = [
    { 
      src: "img/product/suggestion/suggestion1.jpg",
      product: "Product 1",
      price: "$30.00",
      company: "Alan Jones"
    },
    { 
      src: "img/product/suggestion/suggestion2.jpg",
      product: "Product 2",
      price: "$30.00",
      company: "Alan Jones"
    },
    { 
      src: "img/product/suggestion/suggestion3.jpg",
      product: "Product 3",
      price: "$30.00",
      company: "Alan Jones"
    },
    { 
      src: "img/product/suggestion/suggestion4.jpg",
      product: "Product 4",
      price: "$30.00",
      company: "Alan Jones"
    },
  ]

  const months = [
    `${t("january")}`,
    `${t("february")}`,
    `${t("march")}`,
    `${t("april")}`,
    `${t("may")}`,
    `${t("june")}`, 
    `${t("july")}`,
    `${t("august")}`,
    `${t("september")}`,
    `${t("october")}`,
    `${t("november")}`,
    `${t("december")}`
  ];
  
  const reviews = [
    {
      count: 5, 
      review: "It is an awesome product. I got the product the same week i ordered. I'm very satisfied with this hoodie. I suggest everyone this product.",
      date: new Date("February 09 2025 14:05:06"),
      imgsrc: "img/noimage.jpg",
      username: "Helen "
    },
    {
      count: 5, 
      review: "This is an excellent product.",
      date: new Date("December 14 2024 10:00:00"),
      imgsrc: "img/noimage.jpg",
      username: "John Smith"
    },
    {
      count: 4, 
      review: "It is good product.",
      date: new Date("December 29 2024"),
      imgsrc: "img/noimage.jpg",
      username: "Alan Walker"
    },
    {
      count: 3, 
      review: "Quality is average",
      date: new Date("April 2 2024"),
      imgsrc: "img/noimage.jpg",
      username: "Joseph"
    },
  ]
  // let targetDate = new Date(reviews[0].date)
  // console.log(reviews[0].date.getDate())
  // targetDate = new Date("February 06 2025 09:00:00").getTime()

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
            <input type="text" placeholder={t("search")} className="search-input"/>
            <img src="img/icons/search.png" alt="" className="icons"/>
          </div>

          <select className="dropdown" value={lang} onChange={changeLanguage}>
            {
              languages.map((item)=> {
                return(
                  <option key={item.value} value={item.value}>{item.text}</option>
                )
              })
            }
          </select>

          <img src="img/icons/shopping-cart.png" alt="" className="icons cart"/>
          <img src="img/icons/user.png" alt="" className="icons account"/>
          <img src="img/icons/menu-burger.png" alt="" className="icons menu"/>
        </div>
      </div>

      <div className="nav">
        <a href="" className="inactive-nav">{t("home")}</a> 
        &nbsp; &gt; &nbsp; 
        <a href="" className="inactive-nav">{t("men")}</a> 
        &nbsp; &gt; &nbsp; 
        <a href="" className="inactive-nav">{t("hoodies")}</a> 
        &nbsp; &gt; &nbsp; 
        <a href="" className="active-nav">{t("sweatshirt")}</a>
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
            <div className="creator-name gray"> {t("creator")} </div>
            <div className="product-name"> {t("productName")} </div>

            <div className="price-rating">
              
              <div className="price">
                <div className="old-price line-through font-thin gray"> {selectSize.oldPrice} </div>
                <div className="new-price font-extrabold text-2xl"> {selectSize.newPrice} </div>
              </div>

              <div className="rating">
                {/* <div className="sold-count gray"> 1238 sold </div> */}
                <img src="img/icons/star.png" alt="" className="h-5"/>
                <div className=" font-extrabold text-xl"> 4.5 </div>
              </div>
              
            </div>
          </div>

          <div className="color-section ">
            <div className="color-name gray">
              {t("color")} : <span className="text-black font-bold">{t(`${selectedColor.id}`)}</span>
            </div>
            <div className="color-list">
              <div className="bg-black color" data-value="black" onClick={updateColor}></div>
              <div className="bg-blue-500 color" data-value="blue" onClick={updateColor} ></div>
              <div className="bg-orange-500  color" data-value="orange" onClick={updateColor} ></div>
              <div className="bg-yellow-300 color" data-value="yellow" onClick={updateColor} ></div>
            </div>
          </div>
          
          <div className="text-description">
            <div className="text-lg font-bold">{t("description")} : </div>
            <div className="description text-sm gray"> {t("productDesc")} </div>
          </div>

          <div className="size-section">
            <span className="gray">{t("size")} : <span className="text-black font-bold">{selectSize.id}</span></span>
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
            <div className="add-cart"> {t("cart")} </div>
            <div className="checkout"> {t("checkout")} </div>
          </div>

        </div>
      </div>

      <div className="dotted-margin"></div>

      <div className="suggestion">
        <div className="suggestion-texts">
          <span className="suggestion-text text-3xl font-bold">{t("suggestionText")}</span>
          <span className="flex justify-end w-full gray">
            <span className="hover:text-black cursor-pointer">
              {t("viewAll")}
            </span>
          </span>
        </div>
        <div className="suggestion-products">
            {
              products.map((item)=>{
                return(
                  <div className="item" key={item.product}>
                    <img src={item.src} alt="" className="item-image"/>
                    <span className="item-name text-xl font-bold">{item.product}</span>
                    <span className="item-price">{item.price}</span>
                    <span className="item-company gray text-sm">{item.company}</span>
                  </div>
                )
              })
            }
        </div>
      </div>

      <div className="dotted-margin"></div>

      <div className="reviews">
        <span className="review-header text-3xl font-bold">{t("productReview")}</span>
        <div className="review-ratings">
          <div className="rating-total flex items-center justify-center"> 
            <img src="img/icons/star.png" alt="" className="rating-image"/>  
            <span className=" text-6xl font-extrabold">4.5</span>
          </div>
          <div className="review-graph">
              <span className="rating-num">5</span>
              <div className="graph-line w-3/4"></div>
              <span className="rating-num">4</span>
              <div className="graph-line w-3/6"></div>
              <span className="rating-num">3</span>
              <div className="graph-line w-2/6"></div>
              <span className="rating-num">2</span>
              <div className="graph-line w-1/6"></div>
              <span className="rating-num">1</span>
              <div className="graph-line w-1/12"></div>
          </div>
        </div>
        <div className="review-main">
          <div className="review-filter">
            <span className="filter text-2xl w-full flex items-center m-4 font-semibold">{t("filter")}</span>
            <div className="dotted-margin"></div>
            <div className="star-list m-4 flex flex-col gap-2">
              <span className="font-semibold ">{t("rating")}</span>
              <div className="flex gap-1 text-lg items-center">
                <input type="checkbox" name="" id="" className="h-4 w-4"/>
                <img src="img/icons/star.png" alt="" className="h-6" />
                <span>5</span>
              </div>
              <div className="flex gap-1 text-lg items-center">
                <input type="checkbox" name="" id="" className="h-4 w-4"/>
                <img src="img/icons/star.png" alt="" className="h-6" />
                <span>4</span>
              </div>
              <div className="flex gap-1 text-lg items-center">
                <input type="checkbox" name="" id="" className="h-4 w-4"/>
                <img src="img/icons/star.png" alt="" className="h-6" />
                <span>3</span>
              </div>
              <div className="flex gap-1 text-lg items-center">
                <input type="checkbox" name="" id="" className="h-4 w-4"/>
                <img src="img/icons/star.png" alt="" className="h-6" />
                <span>2</span>
              </div>
              <div className="flex gap-1 text-lg items-center">
                <input type="checkbox" name="" id="" className="h-4 w-4"/>
                <img src="img/icons/star.png" alt="" className="h-6" />
                <span>1</span>
              </div>
            </div>
            <div className="dotted-margin"></div>
            <span className="filter text-2xl w-full flex items-center m-4 font-semibold">{t("sort")}</span>
            <div className="dotted-margin"></div>
            <div className="star-list m-4 flex flex-col gap-2">
              <div className="flex gap-1 text-lg items-center">
                <input type="radio" name="sort" id="" className="h-4 w-4"/>
                <span>{t("topReview")}</span>
              </div>
              <div className="flex gap-1 text-lg items-center">
                <input type="radio" name="sort" id="" className="h-4 w-4"/>
                <span>{t("mostRecent")}</span>
              </div>
            </div>
          </div>
          <div className="review-users">
            <div>
              <div className="review-header grid grid-cols-2 items-center">
                <span className="filter text-2xl  flex items-center m-4 font-semibold">{t("review")}</span>
                <img src="img/icons/filter.png" alt="" className="filter-icon h-7 "/>
              </div>
              <div className="dotted-margin "></div>
            </div>
            <div className="overflow-y-scroll">
            {
              reviews.map((review)=>{
                let stars = [];
                for(let i=0;i<review.count;i++){
                  stars.push(<img src="img/icons/star.png" className="h-5"/>);
                }
                return(
                  <>
                    <div className="user-statement m-4 flex flex-col gap-2 w-13/14">
                      <div className="stars flex gap-2">{stars}</div>
                      <span className="user-text text-lg">{review.review}</span>
                      <span className="user-date gray">{months[review.date.getMonth()]} {review.date.getDate()} {review.date.getFullYear()}</span>
                      <div className="user-details flex gap-4 w-full items-center">
                        <img src={review.imgsrc} alt="" className="h-8 w-8  rounded-full"/>
                        <span className="text-lg">{review.username}</span>
                      </div>
                    </div>
                    <div className="dotted-margin"></div>
                  </>
                )
              })
            }
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default App;