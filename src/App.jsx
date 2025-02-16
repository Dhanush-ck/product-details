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
      product: t("product1"),
      price: "$34.99",
      company: "Boldfit"
    },
    { 
      src: "img/product/suggestion/suggestion2.jpg",
      product: t("product2"),
      price: "$32.99",
      company: "ADRO"
    },
    { 
      src: "img/product/suggestion/suggestion3.jpg",
      product: t("product3"),
      price: "$28.99",
      company: "Alan Jones"
    },
    { 
      src: "img/product/suggestion/suggestion4.jpg",
      product: t("product4"),
      price: "$27.00",
      company: "fanideaz"
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

  const [sortKey, setSortKey] = useState(1);
  const [filterKey, setFilterKey] = useState(0);
  const [reviews, setReview] = useState([
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
    {
      count: 3, 
      review: "good quality",
      date: new Date("May 7 2024"),
      imgsrc: "img/noimage.jpg",
      username: "Lucy"
    },
    {
      count: 2, 
      review: "Just okay product",
      date: new Date("May 7 2024"),
      imgsrc: "img/noimage.jpg",
      username: "James"
    },
  ]);

  const filteredReviews = [...reviews].filter((item)=>{
    if(filterKey === 0) return true;
    if(filterKey === item.count) return item.count === filterKey;
  })

  const modifiedReviews = [...filteredReviews].sort((a, b)=>{
    if(sortKey == 1) return b.count - a.count;
    if(sortKey == 2) return b.date - a.date;
  })

  var userReviews;

  function handleSort(e) {
    (e.target.value == 1)? setSortKey(1) : setSortKey(2);
  }

  function handleFilter(e) {
    if(e.target.value == 1){
      setFilterKey(1)
    }
    else if(e.target.value == 2){
      setFilterKey(2)
    }
    else if(e.target.value == 3){
      setFilterKey(3)
    }
    else if(e.target.value == 4){
      setFilterKey(4)
    }
    else if(e.target.value == 5){
      setFilterKey(5)
    }
    else {
      setFilterKey(0)
    }
  }

  function returnReview() {
    var val = [];
    modifiedReviews.map((review, index)=>{
      let stars = [];
      for(let i=0;i<review.count;i++){
        stars.push(<img src="img/icons/star.png" className="h-5" key={"star"+i}/>);
      }
      val.push(
        <div key={review.username + index}>
          <div className="user-statement m-4 flex flex-col gap-2 w-13/140">
            <div className="stars flex gap-2">{stars}</div>
            <span className="user-text text-lg">{review.review}</span>
            <span className="user-date gray">{months[review.date.getMonth()]} {review.date.getDate()} {review.date.getFullYear()}</span>
            <div className="user-details flex gap-4 w-full items-center">
              <img src={review.imgsrc} alt="" className="h-8 w-8  rounded-full"/>
              <span className="text-lg">{review.username}</span>
            </div>
          </div>
          <div className="dotted-margin"></div>
        </div>
      )
    })
    userReviews = val;
  }
  returnReview();

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

  const [isVisible, setIsVisible] = useState(false);
  const [isFilterVisible, setIsFilterVisible] = useState(false);

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
    <>
      {isVisible && (
        <div className="size-modal">
          <div className="size-chart">
            <div className="flex w-full justify-end">
              <img src="img/icons/close.png" alt="" className="cross" onClick={()=>setIsVisible(false)}/>
            </div>
            <div className="chart">
              <div className="head">
                <span>Brand Size</span>
                <span>Chest</span>
                <span>Front length</span>
              </div>
              <div className="sub">
                <span>XS</span>
                <span>36</span>
                <span>25</span>
              </div>
              <div className="sub">
                <span>S</span>
                <span>38</span>
                <span>26</span>
              </div>
              <div className="sub">
                <span>M</span>
                <span>40</span>
                <span>27</span>
              </div>
              <div className="sub">
                <span>L</span>
                <span>42</span>
                <span>28</span>
              </div>
              <div className="sub">
                <span>XL</span>
                <span>44</span>
                <span>28.5</span>
              </div>
            </div>
          </div>
        </div>
      )}
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
              <img src={selectedColor[1]} alt="" className="extra-image" style={{"--i": "1"}}/>
              <img src={selectedColor[2]} alt="" className="extra-image" style={{"--i": "2"}}/>
              <img src={selectedColor[3]} alt="" className="extra-image" style={{"--i": "3"}}/>
              <img src={selectedColor[4]} alt="" className="extra-image" style={{"--i": "4"}}/>
              <img src={selectedColor[5]} alt="" className="extra-image" style={{"--i": "5"}}/>
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
                <div className="bg-black color" data-value="black" onClick={updateColor} style={{"--i": "1"}}></div>
                <div className="bg-blue-800 color" data-value="blue" onClick={updateColor} style={{"--i": "2"}}></div>
                <div className="bg-orange-500  color" data-value="orange" onClick={updateColor} style={{"--i": "3"}}></div>
                <div className="bg-yellow-300 color" data-value="yellow" onClick={updateColor} style={{"--i": "4"}}></div>
              </div>
            </div>
            
            <div className="text-description">
              <div className="text-lg font-bold">{t("description")} : </div>
              <div className="description text-sm gray"> {t("productDesc")} </div>
            </div>

            <div className="size-section">
              <div className="grid grid-cols-2">
                <span className="gray">{t("size")} : <span className="text-black font-bold">{selectSize.id}</span></span>
                <span className="flex justify-end w-full gray">
                  <span className="hover:text-black cursor-pointer see-chart" onClick={()=>setIsVisible(true)}>
                    {t("sizeChart")}
                  </span>
                </span>
              </div>
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
                  <input type="radio" name="filter" id="" className="h-4 w-4" value={5} onChange={handleFilter}/>
                  <img src="img/icons/star.png" alt="" className="h-6" />
                  <span>5</span>
                </div>
                <div className="flex gap-1 text-lg items-center">
                  <input type="radio" name="filter" id="" className="h-4 w-4" value={4} onChange={handleFilter}/>
                  <img src="img/icons/star.png" alt="" className="h-6" />
                  <span>4</span>
                </div>
                <div className="flex gap-1 text-lg items-center">
                  <input type="radio" name="filter" id="" className="h-4 w-4" value={3} onChange={handleFilter}/>
                  <img src="img/icons/star.png" alt="" className="h-6" />
                  <span>3</span>
                </div>
                <div className="flex gap-1 text-lg items-center">
                  <input type="radio" name="filter" id="" className="h-4 w-4" value={2} onChange={handleFilter}/>
                  <img src="img/icons/star.png" alt="" className="h-6" />
                  <span>2</span>
                </div>
                <div className="flex gap-1 text-lg items-center">
                  <input type="radio" name="filter" id="" className="h-4 w-4" value={1} onChange={handleFilter}/>
                  <img src="img/icons/star.png" alt="" className="h-6" />
                  <span>1</span>
                </div>
                <div className="flex gap-1 text-lg items-center">
                  <input type="radio" name="filter" id="" className="h-4 w-4" value={0} onChange={handleFilter} defaultChecked/>
                  <span>{t("viewAll")}</span>
                </div>
              </div>
              <div className="dotted-margin"></div>
              <span className="filter text-2xl w-full flex items-center m-4 font-semibold">{t("sort")}</span>
              <div className="dotted-margin"></div>
              <div className="star-list m-4 flex flex-col gap-2">
                <div className="flex gap-1 text-lg items-center">
                  <input type="radio" name="sort" id="" className="h-4 w-4" defaultChecked onChange={handleSort} value={1}/>
                  <span>{t("topReview")}</span>
                </div>
                <div className="flex gap-1 text-lg items-center">
                  <input type="radio" name="sort" id="" className="h-4 w-4" onClick={handleSort} value={2}/>
                  <span>{t("mostRecent")}</span>
                </div>
              </div>
            </div>
            <div className="filer-modal" style={{ display: isFilterVisible ? "flex" : "none" }}>
              <div className="filter-preview">
              <span className="filter text-2xl w-full grid grid-cols-2 items-center m-4 font-semibold">
                {t("filter")}
                <img src="img/icons/close.png" alt="" className="flex justify-end h-4 cursor-pointer" onClick={()=>setIsFilterVisible(!isFilterVisible)}/>
                </span>
              <div className="dotted-margin"></div>
              <div className="star-list m-4 flex flex-col gap-2">
                <span className="font-semibold ">{t("rating")}</span>
                <div className="flex gap-1 text-lg items-center">
                  <input type="radio" name="filter" id="" className="h-4 w-4" value={5} onChange={handleFilter}/>
                  <img src="img/icons/star.png" alt="" className="h-6" />
                  <span>5</span>
                </div>
                <div className="flex gap-1 text-lg items-center">
                  <input type="radio" name="filter" id="" className="h-4 w-4" value={4} onChange={handleFilter}/>
                  <img src="img/icons/star.png" alt="" className="h-6" />
                  <span>4</span>
                </div>
                <div className="flex gap-1 text-lg items-center">
                  <input type="radio" name="filter" id="" className="h-4 w-4" value={3} onChange={handleFilter}/>
                  <img src="img/icons/star.png" alt="" className="h-6" />
                  <span>3</span>
                </div>
                <div className="flex gap-1 text-lg items-center">
                  <input type="radio" name="filter" id="" className="h-4 w-4" value={2} onChange={handleFilter}/>
                  <img src="img/icons/star.png" alt="" className="h-6" />
                  <span>2</span>
                </div>
                <div className="flex gap-1 text-lg items-center">
                  <input type="radio" name="filter" id="" className="h-4 w-4" value={1} onChange={handleFilter}/>
                  <img src="img/icons/star.png" alt="" className="h-6" />
                  <span>1</span>
                </div>
                <div className="flex gap-1 text-lg items-center">
                  <input type="radio" name="filter" id="" className="h-4 w-4" value={0} onChange={handleFilter} defaultChecked/>
                  <span>{t("viewAll")}</span>
                </div>
              </div>
              <div className="dotted-margin"></div>
              <span className="filter text-2xl w-full flex items-center m-4 font-semibold">{t("sort")}</span>
              <div className="dotted-margin"></div>
              <div className="star-list m-4 flex flex-col gap-2">
                <div className="flex gap-1 text-lg items-center">
                  <input type="radio" name="sort" id="" className="h-4 w-4" defaultChecked onChange={handleSort} value={1}/>
                  <span>{t("topReview")}</span>
                </div>
                <div className="flex gap-1 text-lg items-center">
                  <input type="radio" name="sort" id="" className="h-4 w-4" onClick={handleSort} value={2}/>
                  <span>{t("mostRecent")}</span>
                </div>
              </div>
              </div>
            </div>
            <div className="review-users">
              <div>
                <div className="review-header grid grid-cols-2 items-center">
                  <span className="filter text-2xl  flex items-center m-4 font-semibold">{t("review")}</span>
                  <img src="img/icons/filter.png" alt="" className="filter-icon h-7 " onClick={()=>setIsFilterVisible(!isFilterVisible)}/>
                </div>
                <div className="dotted-margin "></div>
              </div>
              <div className="overflow-y-scroll">
              {
              // userReviews
              modifiedReviews.map((review, index)=>{
                let stars = [];
                for(let i=0;i<review.count;i++){
                  stars.push(<img src="img/icons/star.png" className="h-5" key={"star"+i}/>);
                }
                return(
                  <div key={review.username + index}>
                    <div className="user-statement m-4 flex flex-col gap-2 w-13/140">
                      <div className="stars flex gap-2">{stars}</div>
                      <span className="user-text text-lg">{review.review}</span>
                      <span className="user-date gray">{months[review.date.getMonth()]} {review.date.getDate()} {review.date.getFullYear()}</span>
                      <div className="user-details flex gap-4 w-full items-center">
                        <img src={review.imgsrc} alt="" className="h-8 w-8  rounded-full"/>
                        <span className="text-lg">{review.username}</span>
                      </div>
                    </div>
                    <div className="dotted-margin"></div>
                  </div>
                )
              })
              }
              </div>
            </div>
          </div>
        </div>

      </div>

      <div className="footer-section">
        <div className="footer-info">
            <>
              <span className="footer-info-items">{t("about")}</span>
            </>
            <>
              <span className="footer-info-items">{t("contact")}</span>
            </>
            <>
              <span className="footer-info-items">{t("faq")}</span>
            <>
              <span className="footer-info-items">{t("guides")}</span>
            </>
            </>
            <>
              <span className="footer-info-items">{t("payment")}</span>
            </>
            <>
              <span className="footer-info-items">{t("partner")}</span>
            </>
        </div>
        <div className="footer-contact">
              <img src="img/icons/social-media.png" alt="" className="fb"/>
              <img src="img/icons/instagram.png" alt="" className="insta"/>
              <img src="img/icons/twitter.png" alt="" className="twitter"/>
              <img src="img/icons/youtube.png" alt="" className="yt"/>
              <img src="img/icons/email.png" alt="" className="mail"/>
        </div>
        <div className="copyright text-white">
          © 2025 Clothing, Inc. {t("copyright")}
        </div>
      </div>
    </>
  )
}

export default App;