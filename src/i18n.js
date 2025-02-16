import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import {initReactI18next} from "react-i18next";

i18n.use(LanguageDetector).use(initReactI18next).init({
    debug: true,
    fallbackLng: 'en',
    lng: 'en',
    returnObjects: true,
    resources: {
        en: {
            translation: {
                "search": "Search",
                "english": "English",
                "malayalam": "Malayalam",
                "language": "Language",
                "home": "Home",
                "men": "Men",
                "hoodies": "Hoodies",
                "sweatshirt": "Hooded Sweatshirt",
                "creator": "Alan Jones",
                "productName": "Hooded Sweatshirt",
                "description": "Description",
                "productDesc": "Upgrade your wardrobe with the Alan Jones Men's Poly-Cotton Hooded Sweatshirt, designed for both style and comfort. Made from premium export-quality poly-cotton fabric, this full-sleeve sweatshirt offers a soft and cozy feel, making it perfect for everyday wear. Featuring a solid pattern and a fashionable hoodie style, it adds a trendy touch to your casual look. The zip closure ensures easy wear, while the side pockets provide warmth and convenience. Ideal for winters, night drives, and casual outings, this lightweight 200g sweatshirt is a must-have for effortless style.",
                "color": "Color", 
                "size": "Size",
                "sizeChart": "Size Chart",
                "cart": "Add to cart",
                "checkout": "Checkout now",
                "Black": "Black",
                "Blue": "Blue",
                "Orange": "Orange",
                "Yellow": "Yellow",
                "suggestionText": "Related Products",
                "viewAll": "View All",
                "productReview": "Product Reviews",
                "filter": "Filter",
                "rating": "Rating",
                "sort": "Sort",
                "review": "Review",
                "topReview": "Top Reviews",
                "mostRecent": "Most Recent",
                "january": "January",
                "february": "February",
                "march": "March",
                "april": "April",
                "may": "May",
                "june": "June",
                "july": "July",
                "august": "August",
                "september": "September",
                "october": "October",
                "november": "November",
                "december": "December",
                "about": "About us",
                "contact": "Contact us",
                "faq": "FAQ",
                "guides": "Guides",
                "payment": "Payment",
                "partner": "Partners",
                "copyright": "All rights reserved.",
                "product1": "Sweatshirt Men's Jacket",
                "product2": "Men Hooded Fleece Sweatshirt",
                "product3": "Cotten Blend Hooded Neck Hoodies",
                "product4": "Cotton Hooded Sweatshirt with Zip"
            }
        },
        mal: {
            translation: {
                "search": "തിരയുക",
                "english": "ഇംഗ്ലീഷ്",
                "malayalam": "മലയാളം",
                "language": "ഭാഷ",
                "home": "ഹോം",
                "men": "ആൺ",
                "hoodies": "ഹൂഡീസ്",
                "sweatshirt": "ഹുഡ്ഡ് സ്വീറ്റ്ഷർട്ട്",
                "creator": "അലൻ ജോൺസ്",
                "productName": "ഹുഡ്ഡ് സ്വീറ്റ്ഷർട്ട്",
                "description": "വിവരണം",
                "productDesc": "അലൻ ജോൺസ് പുരുഷന്മാരുടെ പോളി-കോട്ടൺ ഹൂഡഡ് സ്വീറ്റ്ഷർട്ട് ഉപയോഗിച്ച് നിങ്ങളുടെ വാർഡ്രോബ് അപ്‌ഗ്രേഡുചെയ്യുക, സ്റ്റൈലിനും സൗകര്യത്തിനും വേണ്ടി രൂപകൽപ്പന ചെയ്‌തിരിക്കുന്നു. പ്രീമിയം എക്‌സ്‌പോർട്ട് നിലവാരമുള്ള പോളി-കോട്ടൺ ഫാബ്രിക്കിൽ നിന്ന് നിർമ്മിച്ച ഈ ഫുൾ സ്ലീവ് സ്വീറ്റ്‌ഷർട്ട് മൃദുവും സുഖപ്രദവുമായ അനുഭവം പ്രദാനം ചെയ്യുന്നു, ഇത് ദൈനംദിന വസ്ത്രങ്ങൾക്ക് അനുയോജ്യമാക്കുന്നു. ഒരു സോളിഡ് പാറ്റേണും ഫാഷനബിൾ ഹൂഡി ശൈലിയും ഫീച്ചർ ചെയ്യുന്നു, ഇത് നിങ്ങളുടെ കാഷ്വൽ ലുക്കിന് ഒരു ട്രെൻഡി ടച്ച് നൽകുന്നു. സൈഡ് പോക്കറ്റുകൾ ഊഷ്മളതയും സൗകര്യവും നൽകുമ്പോൾ സിപ്പ് ക്ലോഷർ എളുപ്പമുള്ള വസ്ത്രം ഉറപ്പാക്കുന്നു. ശീതകാലം, നൈറ്റ് ഡ്രൈവുകൾ, കാഷ്വൽ ഔട്ടിംഗുകൾ എന്നിവയ്ക്ക് അനുയോജ്യമാണ്, ഈ കനംകുറഞ്ഞ 200 ഗ്രാം വിയർപ്പ് ഷർട്ട് ആയാസരഹിതമായ ശൈലിക്ക് നിർബന്ധമായും ഉണ്ടായിരിക്കണം.",
                "color": "നിറം",
                "size": "വലിപ്പം",
                "sizeChart": "വലുപ്പ ചാർട്ട്",
                "cart": "കാർട്ടിലേക്ക് ചേർക്കുക",
                "checkout": "ഇപ്പോൾ ചെക്ക്ഔട്ട് ചെയ്യുക",
                "Black": "കറുപ്പ്",
                "Blue": "നീല",
                "Orange": "ഓറഞ്ച്",
                "Yellow": "മഞ്ഞ",
                "suggestionText": "അനുബന്ധ ഉൽപ്പന്നങ്ങൾ",
                "viewAll": "എല്ലാം കാണുക",
                "productReview": "ഉൽപ്പന്ന അവലോകനങ്ങൾ",
                "filter": "ഫിൽട്ടർ ചെയ്യുക",
                "rating": "റേറ്റിംഗ്",
                "sort": "അടുക്കുക",
                "review": "അവലോകനം",
                "topReview": "മികച്ച അവലോകനങ്ങൾ",
                "mostRecent": "ഏറ്റവും പുതിയത്",
                "january": "ജനുവരി",
                "february": "ഫെബ്രുവരി",
                "march": "മാർച്ച്",
                "april": "ഏപ്രിൽ",
                "may": "മെയ്",
                "june": "ജൂൺ",
                "july": "ജൂലൈ",
                "august": "ഓഗസ്റ്റ്",
                "september": "സെപ്റ്റംബർ",
                "october": "ഒക്ടോബർ",
                "november": "നവംബർ",
                "december": "ഡിസംബർ",
                "about": "ഞങ്ങളേക്കുറിച്ച്",
                "contact": "ഞങ്ങളെ സമീപിക്കുക",
                "faq": "പതിവുചോദ്യങ്ങൾ",
                "guides": "വഴികാട്ടികൾ",
                "payment": "പേയ്മെൻ്റ്",
                "partner": "പങ്കാളികൾ",
                "copyright": "എല്ലാ അവകാശങ്ങളും നിക്ഷിപ്തം.",
                "product1": "സ്വീറ്റ്ഷർട്ട് പുരുഷന്മാരുടെ ജാക്കറ്റ്",
                "product2": "പുരുഷന്മാർ ഹുഡ്ഡ് ഫ്ലീസ് സ്വീറ്റ്ഷർട്ട്",
                "product3": "കോട്ടൺ ബ്ലെൻഡ് ഹൂഡഡ് നെക്ക് ഹൂഡീസ്",
                "product4": "സിപ്പുള്ള കോട്ടൺ ഹുഡ്ഡ് സ്വീറ്റ്ഷർട്ട്"
            }
        }
    }
})