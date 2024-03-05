import UnbxdSearch from "../../../../search-JS-library/src/index";
import UnbxdImageSearch from "../../src/index"
// import UnbxdSearch from "@unbxd-ui/vanilla-search-library";
import def from "./defaultLogo.png"
import "./unbxdStyles.css"
//import "../../../../search-JS-library/demo/js/unbxdStyles.css"
import "../../style.css"
import "../../testtemplate.css"

let routeTemplate = `
<div class="UNX-header">
			<div class="UNX-header-inner">
                    <img src=${def} class="UNX-header-logo"></img>
                <nav id="categoryLinks" class="UNX-nav UNX-naviagtion-wrap">
                    <button data-id="categoryPath:cat700001" class="nav-links" data-path="/men">Men</a>
                    <button data-id="categoryPath:cat120002" class="nav-links" data-path="/women">Women</button>
                    <button data-id='categoryPath:"LAUNDRY>WASHING MACHINES"' class="nav-links" data-path="/washingMachine">Washing machines</button>
                    <button data-id='categoryPath:"KITCHEN & COOKING>MICROWAVES>CONVECTION MICROWAVE OVENS"' class="nav-links" data-path="/kitchen-and-cooking/microwaves/convection-microwave-ovens-0">Convention micro ovens</button>
                    <button data-id='categoryPath:"FURNITURE ZONE>BEDROOM FURNITURE>BASES & BEDHEADS"' class="nav-links" data-path="/furniture-and-bedding/bedroom-furniture/bases-bedheads">Bases and bedheads</button>
                    </nav>
				<div class="UNX-right-header">
					<div id="autoSuggestInput" class="UNX-input-wrapper">
						<input
							id="unbxdInput"
							placeholder="Search here..."
							class="UNX-input"
							autocomplete="off"
						/>
                    <button id="searchBtn" class="fa fa-search UNX-search-btn"></button>
                    <i id="unbxdvsicon" class="fa fa-camera"></i>                        
					</div>
				</div>
			</div>
		</div>
		<div class="search-preview">
			<div class="UNX-results-container">
				<div class="UNX-head-wrapper">
					<div class="UNX-selected-actions">
						<div class="UNX-bread-wrapper" id="breadcrumpContainer"></div>
					</div>
				</div>
				<div class="UNX-product-results">
					<div class="UNX-facet-wrapper">
                    <div id="imageContainer" class="UNX-Image-box-Wrapper"></div>
						<h2 class="UNX-filter-header">Filter By</h2>
						<div class="UNX-fxd-facet">
							<div
								class="UNX-selected-facet-wrapper UNX-selected-f-m"
								id="selectedMFacetWrapper"
							></div>
							<div class="UNX-text-facet-block" id="facetsWrapper"></div>
							<div class="UNX-m-facet-row">
								<button
									data-action="applyFacets"
									class="UNX-primary-btn UNX-facet-trigger"
								>
									Apply
								</button>
								<button
									data-action="clearFacets"
									class="UNX-default-btn UNX-facet-trigger"
								>
									Clear
								</button>
							</div>
						</div>
						<div class="UNX-m-facet-row">
							<button
								class="UNX-m-facet-btn UNX-facet-trigger fa fa-filter"
							></button>
						</div>
					</div>
					<div class="UNX-product-list">
						<div id="didYouMeanWrapper"></div>
						<div class="UNX-result-header">
                        <div class="row-1">
                        <div class="UNX-sort-wrapper" id="sortWrapper"></div>
                        <div class="UNX-change-products" id="changeNoOfProducts"></div>
                        </div>
							<div class="UNX-result-right">
								
								<div
									class="UNX-product-type-block"
									id="productViewTypeContainer"
								></div>
							</div>
						</div>
						<div id="bannerContainer"></div>
                        <div
                        class="UNX-selected-facet-wrapper"
                        id="selectedFacetWrapper"
                    ></div>
						<div class="UNX-product-wrapper" id="searchResultsWrapper"></div>
                        <div id="" class="UNX-change-pagination-wrap unxPagination" ></div>
						<div id="" class="UNX-change-pagination-wrap UNX-m-page unxLoadMorePagination" ></div>
					</div>
				</div>
				<div class="UNX-loader-container" id="loaderEl"></div>
				<div id="noResultWrapper"></div>
				<div id="clickScrollContainer"></div>
			</div>
			<div class="UNX-footer-main">
				<div class="UNX-footer-container">
					<div class="UNX-footer-features">
						<div class="UNX-feature-item">
							<span class="UNX-footer-icon UNX-icons UNX-icon-truck"></span>
							<label class="UNX-footer-label">We ship worldwide</label>
						</div>
						<div class="UNX-feature-item UNX-money">
							<span class="UNX-icons UNX-icon-call"></span>
							<label class="UNX-footer-label">Call 18000 765 00000</label>
						</div>
						<div class="UNX-feature-item UNX-money">
							<span class="UNX-icons UNX-icon-money-back"></span>
							<label class="UNX-footer-label">Money Back Guarantee</label>
						</div>
						<div class="UNX-feature-item UNX-money">
							<span class="UNX-icons UNX-icon-return"></span>
							<label class="UNX-footer-label">30 Days Return</label>
						</div>
					</div>
				</div>
			</div>
			<div class="UNX-company-footer">
				<div class="UNX-footer-container UNX-company-footer-wrap">
					<div class="UNX-footer-info-column">
						<h6 class="UNX-footer-info-head">Online Shopping</h6>
						<div class="UNX-link-wrapper">
							<a href="#">Men</a>
							<a href="#">Women</a>
							<a href="#">Kids</a>
							<a href="#">Home & Living</a>
							<a href="#">Discover</a>
							<a href="#">Gift Cards</a>
						</div>
					</div>
					<div class="UNX-footer-info-column">
						<h6 class="UNX-footer-info-head">Policy</h6>
						<div class="UNX-link-wrapper">
							<a href="#">Contact Us</a>
							<a href="#">FAQ</a>
							<a href="#">T&C</a>
							<a href="#">Track Orders</a>
							<a href="#">Shipping</a>
							<a href="#">Cancellation</a>
						</div>
					</div>
					<div class="UNX-footer-info-column">
						<h6 class="UNX-footer-info-head">About</h6>
						<div class="UNX-link-wrapper">
							<a href="#">Contact Us</a>
							<a href="#">About Us</a>
							<a href="#">Press</a>
						</div>
					</div>
					<div class="UNX-footer-info-column">
						<h6 class="UNX-footer-info-head">Registered Office Address</h6>
						<div class="UNX-link-wrapper">
							<a href="#">Company</a>
							<a href="#">Careers</a>
							<a href="#">Contact Us</a>
						</div>
					</div>
					<div class="UNX-footer-info-column">
						<h6 class="UNX-footer-info-head">Keep in Touch</h6>
						<div class="UNX-link-wrapper UNX-keep-touch">
							<a class="UNX-link-icon UNX-icons UNX-icon-linkedin" href="#"></a>
							<a class="UNX-link-icon UNX-icons UNX-icon-twitter" href="#"></a>
							<a class="UNX-link-icon UNX-icons UNX-icon-youtube" href="#"></a>
						</div>
					</div>
				</div>
			</div>
			<div class="UNX-privacy-footer-wrap">
				<div class="UNX-footer-container">
					<p>
						In case of any concern,
						<a class="UNX-contact-link" href="#">Contact Us</a>
					</p>
				</div>
			</div>
		</div>
        <div id="myModal" class="visual-search-container" style="display:none;">
            <i class="fas fa-times" aria-hidden="true" id="modalclose" ></i>
                <div class="visual-inner">
                    <div class="visual-featured-images">
                      <span>Dont have a photo? Get inspired from our specially curated images for you</span>
                      <div class="visual-images-grid" id="clickable-search-image">
                        <div class="column">
                  <img src="https://media.wforwoman.com/product/23AUW19718-122183/300/23AUW19718-122183_7sep23.jpg?format=webp&amp;w=300&amp;dpr=2.0">
            
                  <img src="https://images.bestsellerclothing.in/data/18-nov-2023/245835301_g0.jpg?width=415&amp;height=550&amp;mode=fill&amp;fill=blur&amp;format=auto">
            
                </div>
            
                <div class="column">
                  <img src="https://images.bestsellerclothing.in/data/JJ/3-aug-2023/295073704_g0.jpg?width=415&amp;height=550&amp;mode=fill&amp;fill=blur&amp;format=auto">
            
                  <img src="https://media.wforwoman.com/product/23AUSP11442-122624/300/23AUSP11442-122624_4oct23.jpg?format=webp&amp;w=300&amp;dpr=2.0">
            
                </div>
                      </div>
                    </div>
                    <div class="visual-image-upload-section">
                       <h1 class="search-title-visual">
                         Snap &amp; search
                       </h1>
                       <span class="search-subtitle">Upload a photo, and we will look for similar styles on our site</span>
                       <img class="upload-image-pic" src="https://i.postimg.cc/9FPrws0z/image-upload.png">
            <div class="upload-button">
            <i class="fas fa-solid fa-camera visual-cam" aria-hidden="true"></i>
            UPLOAD A PHOTO
              <input type="file" id="upload-image" name="img" accept="image/*">
            </div>
            <h2 class="or-text"><span>or</span></h2>
            <span class="search-text">Search via image URL</span>
            <div style="width: 300px;">
            <input type="text" id="userInfo" placeholder="Add url here">
            <button class="upload-url-button" id ="visualsearchbutton">Submit</button>
                </div>
                <div id="image-upload-errors" class="error-message"></div>
            </div>
          </div>
`;

const routes = {
    '/': routeTemplate,
    '/search': routeTemplate,
    '/men': routeTemplate,
    '/women': routeTemplate,
    '/washingMachine': routeTemplate,
    '/kitchen-and-cooking/microwaves/convection-microwave-ovens-0': routeTemplate,
    '/furniture-and-bedding/bedroom-furniture/bases-bedheads': routeTemplate,
};

routes[window.location.pathname] = routeTemplate

const rootDiv = document.getElementById('root');
rootDiv.innerHTML = routes[ window.location.pathname ];

const setCategory = function (e) {
    const el = e.target;
    const {
        dataset
    } = el;
    if (dataset && dataset.id) {
        window.history.pushState(null, null, dataset.path);
        // rootDiv.innerHTML = routes[el.pathname];
        window.UnbxdAnalyticsConf = {
            page: dataset.id
        };
        window.unbxdSearch.getCategoryPage();
    }

};

const navElem = document.getElementById("categoryLinks");
navElem.addEventListener("click", setCategory);


const checkRangeTemplate = function (range, selectedRange, facet) {
    const {
        displayName,
        facetName,
        values,
        gap
    } = range;
    let valueUI = ``;
    const {
        facetClass,
        selectedFacetClass,
        applyMultipleFilters,
        applyButtonText,
        clearButtonText,
    } = facet;
    const selected = selectedRange.length > 0 ? true : false;
    values.forEach(item => {
        const {
            from,
            end
        } = item;
        const isSelected = this.isSelectedRange(facetName, item);
        const btnCss = (isSelected) ? `UNX-selected-facet-btn ${facetClass} ${selectedFacetClass}` : `${facetClass}`;
        valueUI += [ `<button class="${btnCss} UNX-range-facet UNX-change-facet" data-action="setRange" data-facet-name="${facetName}" data-start="${from.dataId}" data-end="${end.dataId}" >`,
        `<span class="UNX-facet-text">${from.name}  -  ${end.name}</span>`,
        `<span class="UNX-facet-count">(${from.count})</span>`,
            `</button>`
        ].join('');
    });
    let clearBtn = ``;
    let applyBtn = ``;
    if (selected) {
        if (applyMultipleFilters) {
            applyBtn = `<button class="UNX-default-btn ${facetClass} UNX-facet-primary" data-action="applyRange"> ${applyButtonText}</button>`;
        }
        clearBtn = `<button class="UNX-default-btn UNX-facet-clear  ${facetClass}" data-action="clearRangeFacets">${clearButtonText}</button>`;
    }
    return [ `<div class="UNX-range-wrapper">`,
        valueUI,
        `<div class="UNX-price-action-row">`,
        applyBtn, clearBtn,
        `<div>`,
        `</div>`
    ].join('')
}

const unbxdCallbackEcma = function (instance, type, data) {
    console.log(type, data, 'type,data');
    if (type === "AFTER_RENDER") {
        if (localStorage.getItem('unx_product_clicked') && document.getElementById(localStorage.getItem('unx_product_clicked'))) {
            document.getElementById(localStorage.getItem('unx_product_clicked')).scrollIntoView()
            localStorage.removeItem('unx_product_clicked');
        }
    }
}

let showFacet = false;
window.resizeTimer = null;

const facetBlock = document.querySelector(".UNX-fxd-facet");

const checkMobile = () => {
    const w = window.innerWidth;
    if (w < 980) {
        return true;
    }
    return false;
};

const toggleMobileFacets = (e) => {
    showFacet = !showFacet;imageContainer
    const {
        action
    } = e.target.dataset;
    if (action === "applyFacets") {
        window.unbxdSearch.setPageStart(0);
        window.unbxdSearch.getResults();
    }
    if (action === "clearFacets") {
        window.unbxdSearch.clearAllFacets();
        window.unbxdSearch.setPageStart(0);
        window.unbxdSearch.getResults();
    }
    if (showFacet) {
        facetBlock.classList.add("UNX-show-facets")
    } else {
        facetBlock.classList.remove("UNX-show-facets")
    }
}

const btnEls = document.querySelectorAll(".UNX-facet-trigger");
btnEls.forEach(item => {
    item.addEventListener("click", toggleMobileFacets)
});

let performRouteActions = () => {
    if (location.pathname === "/men") {
        window.UnbxdAnalyticsConf = {
            page: "categoryPath:cat700001"
        };
        unbxdSearch.options.productType = "CATEGORY";
    } else if (location.pathname === "/women") {
        window.UnbxdAnalyticsConf = {
            page: "categoryPath:cat120002"
        };
        unbxdSearch.options.productType = "CATEGORY";
    } else if (location.pathname === "/washingMachine") {
        window.UnbxdAnalyticsConf = {
            page: 'categoryPath:"LAUNDRY>WASHING MACHINES"'
        };
        unbxdSearch.options.productType = "CATEGORY";
    
    } else if (location.pathname === "/kitchen-and-cooking/microwaves/convection-microwave-ovens-0") {
        window.UnbxdAnalyticsConf = {
            page: 'categoryPath:"KITCHEN & COOKING>MICROWAVES>CONVECTION MICROWAVE OVENS"'
        };
        unbxdSearch.options.productType = "CATEGORY";
    } else if (location.pathname === "/furniture-and-bedding/bedroom-furniture/bases-bedheads") {
        window.UnbxdAnalyticsConf = {
            page: 'categoryPath:"FURNITURE ZONE>BEDROOM FURNITURE>BASES & BEDHEADS"'
        };
        unbxdSearch.options.productType = "CATEGORY";
    } else {
        window.UnbxdAnalyticsConf = {};
        unbxdSearch.options.productType = "SEARCH";
    }
}

window.addEventListener('popstate', () => {
    performRouteActions();
});

let searchButtonEl = document.getElementById("searchBtn");
let searchBoxEl = document.getElementById("unbxdInput");
 let camerabutton = document.getElementById("unbxdvsicon");
 let vssearchmodal = document.getElementById("myModal");
 let modalclose = document.getElementById("modalclose");
let clickable = document.getElementById("clickable-search-image")
clickable.addEventListener("click",(e)=>{
console.log(e.target)
const elementType = e.target.tagName.toLowerCase();

      // Get src attribute if the element is an image
      if (elementType === 'img') {
        const srcAttribute = e.target.src;
        console.log('Clicked element is an image with src:', srcAttribute);
        window.unbxdImageSearch.setImageValue(srcAttribute);

      }
})
searchButtonEl.addEventListener("click", () => {
    if (unbxdSearch.options.productType !== 'SEARCH') {
        window.UnbxdAnalyticsConf = {};
        unbxdSearch.options.productType = 'SEARCH';
        window.history.pushState({
            replace: true
        }, "", "/search?")
    }
});

camerabutton.addEventListener("click", () => {

    if (vssearchmodal) {
        vssearchmodal.style.display = "block";
    }
})

modalclose.addEventListener("click", () => {
    if (vssearchmodal) {
        vssearchmodal.style.display = "none";
    }
})

searchBoxEl.addEventListener("keydown", (e) => {
    const val = e.target.value;
    if (e.key === "Enter") {
        if (val !== "") {
            if (unbxdSearch.options.productType !== 'SEARCH') {
                window.UnbxdAnalyticsConf = {};
                unbxdSearch.options.productType = 'SEARCH';
                window.history.pushState({
                    replace: true
                }, "", "/search?")
            }
        }
    }
});

let productType = "";

if (location.pathname === "/men") {
    window.UnbxdAnalyticsConf = {
        page: "categoryPath:cat700001"
    };
    productType = "CATEGORY";
} else if (location.pathname === "/women") {
    window.UnbxdAnalyticsConf = {
        page: "categoryPath:cat120002"
    };
    productType = "CATEGORY";
} else if (location.pathname === "/washingMachine") {
    window.UnbxdAnalyticsConf = {
        page: 'categoryPath:"LAUNDRY>WASHING MACHINES"'
    };
    productType = "CATEGORY";
} else if (location.pathname === "/kitchen-and-cooking/microwaves/convection-microwave-ovens-0") {
    window.UnbxdAnalyticsConf = {
        page: 'categoryPath:"KITCHEN & COOKING>MICROWAVES>CONVECTION MICROWAVE OVENS"'
    };
    productType = "CATEGORY";
} else if (location.pathname === "/furniture-and-bedding/bedroom-furniture/bases-bedheads") {
    window.UnbxdAnalyticsConf = {
        page: 'categoryPath:"FURNITURE ZONE>BEDROOM FURNITURE>BASES & BEDHEADS"'
    };
    productType = "CATEGORY";
} else {
    window.UnbxdAnalyticsConf = {};
    productType = "SEARCH";
}
 window.unbxdImageSearch = new UnbxdImageSearch({
     siteKey : "ss-unbxd-dev-kalkifashion40591677139544",
     apiKey: "58eb2c685361e5bcae7be4d829b25eb5",
     enabled: true,
     uploadConfig: {
         button: document.getElementById("visualsearchbutton"),
         input: document.getElementById("upload-image"),
         el: document.getElementById("userInfo"),
     },
     imgErrDiv : document.getElementById("image-upload-errors"),
     imageBox: {
         el: document.getElementById("imageContainer"),
         imageWrapperClass: "UNX-VS-Image-box-Wrapper",
         action:"click",
         afterImageBoxRender : function(){
            console.log(":bounding is rendered fully")
//             window.addEventListener("scroll", (e)=> {
//                 //     console.log("htthtu8htuhtthu8htuhtu8thtuhthuth")
//                 if (window.scrollY > 500 && !this.state.screenstate) {
// console.log("scrollling detected");
//                 }
//                 })
            }
     }
 })

window.unbxdSearch = new UnbxdSearch({
    siteKey : "ss-unbxd-dev-kalkifashion40591677139544",
    apiKey: "58eb2c685361e5bcae7be4d829b25eb5",
    // siteKey: "stage_express_com-u1456154339513",
    // apiKey: "fb853e3332f2645fac9d71dc63e09ec2",
    // onError: function(err) {
    //     console.error('onError', err)
    // },
    searchBoxEl: document.getElementById("unbxdInput"),
    searchTrigger: "click",
    searchButtonEl: document.getElementById("searchBtn"),
    unbxdAnalytics: true,
    setCategoryId: function (param, self) {
        const {
            level,
            parent,
            name,
            action
        } = param;
        let page = ``;
        let pathArr = [];
        const l = Number(level);
        const breadCrumbs = self.getBreadCrumbsList("categoryPath");
        breadCrumbs.forEach((element, i) => {
            const {
                level,
                value
            } = element;
            if (l > Number(level) || Number(level) === 1) {
                pathArr.push(value);
            }
        });
        if (action !== "clearCategoryFilter") {
            pathArr.push(decodeURIComponent(name));
        }
        page = pathArr.join(">");
        if (window.UnbxdAnalyticsConf) {
            window.UnbxdAnalyticsConf.page = "categoryPath:\"" + page + "\"";
        }
    },
    products: { 
        el: document.getElementById("searchResultsWrapper"),
        productType: productType,
        onProductClick: function (product, e) {
            localStorage.setItem('unx_product_clicked', product.uniqueId);
            window.location.href = 'https://www.google.com';
        },
        attributesMap: {
            'unxTitle': 'title',
            'unxImageUrl': 'imageUrl',
            'unxPrice': 'price',
            'unxStrikePrice': 'displayPrice',
            'unxId': 'uniqueId',
            'unxDescription': 'productDescription'
        },
        template: function(product,idx,swatchUI,productViewType,products ){
            const {
                unxTitle,
                unxImageUrl,
                uniqueId,
                unxStrikePrice,
                unxPrice,
                unxDescription
            } = product; 
            const {
                productItemClass,
                defaultImage
            }  = products;
            let imgUrl = Array.isArray(unxImageUrl) ? unxImageUrl[0]:unxImageUrl;
            if(!imgUrl) {
                imgUrl = defaultImage;
            }
            let imagesUI = `<div class="UNX-img-wrapper"><img class="UNX-img-block" width="100%" height="100%" alt="${unxTitle}" src="${imgUrl}"/></div>`;
            const priceUI = `<span class="UNX-sale-price">$${unxPrice}</span>`;
            let strikeUi = ``;
            if(unxStrikePrice) {
                strikeUi = `<span class="UNX-strike-price">${unxStrikePrice}<span>`
            }
            let cardType = ``;
            let descUI = ``;
            if(productViewType === "GRID") {
                cardType = "UNX-grid-card"
            } else {
                cardType = "UNX-list-card";
                descUI = `<p class="UNX-description">${unxDescription}</p>`;
            }
            let swatchBtnUI = ``;
            const {
                btnList,
                imgList 
            } = swatchUI || {};
            if(btnList) {
                swatchBtnUI = `<div class="UNX-swatch-wrapper">${btnList}</div>`;
            }
            if(imgList) {
                imagesUI = imgList; 
            }
            return [`<div id="${uniqueId}" data-id="${uniqueId}" data-prank="${idx}" data-item="product" class="UNX-product-col ${cardType} ${productItemClass}">`,
            `<h3 class="UNX-product-number">${Math.floor(idx)}</h3>`,            
            `<div class="UNX-images-block">${imagesUI}</div>`,
                        `<div class="UNX-product-content">`,
                            `<h3 class="UNX-product-title">${unxTitle}</h3>`,
                            swatchBtnUI,
                            descUI,
                            `<div class="UNX-price-row">${priceUI} ${strikeUi}</div>`,
                        `</div>`,
                    `</div>`].join('')
        }
    },
    spellCheck: {
        enabled: true,
        el: document.getElementById("didYouMeanWrapper")
    },
    noResults: {
        el: document.getElementById("noResultWrapper")
    },
    selectedFacets: {
        el: document.getElementById("selectedFacetWrapper")
    },
    facet: {
        facetsEl: document.getElementById("facetsWrapper"),
        selectedFacetsEl: document.getElementById("selectedFacetWrapper"),
        selectedFacetClass: "UNX-selected-facet-btn",
        isCollapsible: true,
        isSearchable: false,
        defaultOpen: "FIRST",
        viewMoreLimit: 2,
        enableViewMore: true,
        viewMoreText: ["+ Show More", "- Show less"],
      },
    // facet: {
    //     isCollapsible: true,
    //     defaultOpen: "FIRST",
    //     viewMoreLimit: 2,
    //     enableViewMore: true,
    //     facetsEl: document.getElementById("facetsWrapper"),
    //     selectedFacetsEl: document.getElementById("selectedFacetWrapper"),
    //     selectedFacetClass: "UNX-selected-facet-btn",
    //     viewMoreText: ["+ Show More", "- Show less"],
    //     facetTemplate: function(facetObj, children, isExpanded,facetSearchTxt, facet) {
    //         const {
    //             displayName,
    //             facetName,
    //             multiLevelField,
    //             facetType,
    //             values
    //         } = facetObj;
    //         const {
    //             facetClass,
    //             applyMultipleFilters,
    //             isCollapsible,
    //             isSearchable,
    //             searchPlaceHolder,
    //             textFacetWrapper,
    //             enableViewMore,
    //             viewMoreText,
    //             viewMoreLimit,
    
    //             applyButtonText,
    //             clearButtonText,
    
    //         } = facet;
    //         const {
    //             actionBtnClass,
    //             actionChangeClass
    //         } = this.options;
    //         const {
    //             openBtn,
    //             closeBtn
    //         } = this.cssList;
    //         let viewMoreUi = ``;
    //         let viewMoreCss=``;
    //         const selected = this.getSelectedFacets()[facetName];
    //         const isFtr = (selected && selected.length >0)?true:false;
    //         if(enableViewMore && facetType==="text" && values.length > viewMoreLimit ) {
    //             viewMoreCss="UNX-view-more";
    //             viewMoreUi = `<div class="UNX-view-more-row "><button class="${actionBtnClass}" data-facet-name="${facetName}" data-action="viewMore" data-id="${viewMoreText[0]}">${viewMoreText[0]}</button></div>`;
    //         }
    //         let clearUI = ``;
    //         let applyBtn = ``;
    //         if(isFtr){
    //             clearUI = `<button class="UNX-facet-clear ${facetClass} "data-facet-action="deleteFacet" data-facet-name="${facetName}">${clearButtonText}</button>`;
    //         }
    //         if(applyMultipleFilters && isFtr) {
    //             applyBtn = `<button class="UNX-facet-primary ${facetClass} "data-facet-action="applyFacets" >${applyButtonText}</button>`
    //         }
    //         let collapsibleUI = ``;
    //         let searchInput = ``;
    //         if(isCollapsible){
    //             if(isExpanded) {
    //                 collapsibleUI = `<button class="UNX-collapse-btn ${openBtn} ${actionBtnClass}" data-facet-name="${facetName}" data-facet-action="facetClose"></button>`
    //             } else {
    //                 collapsibleUI = `<button class="UNX-collapse-btn ${closeBtn} ${actionBtnClass}" data-facet-name="${facetName}" data-facet-action="facetOpen"></button>`
    //             }
    //         }
    //         if(isSearchable && facetSearchTxt !== null) {
    //             searchInput =`<div class="UNX-searchable-facets"><input data-test-id="${this.testIds.UNX_searchFacets}" class="UNX-facet-search ${actionChangeClass}" value="${facetSearchTxt}"  data-facet-name="${facetName}" data-facet-action="searchFacets" type="text" placeholder="${searchPlaceHolder}"/></div>`
    //         }
    //         return [`<div class="UNX-text-facet-wrap">`,
    //                     `<div class="UNX-facet-header"> <h3>${displayName}</h3> ${collapsibleUI}</div>`,
    //                     `<div class="UNX-facets-all">`,
    //                         searchInput,
    //                         `<div class="UNX-facets ${textFacetWrapper} ${viewMoreCss}">${children}</div>`,
    //                         viewMoreUi,
    //                         `<div class="UNX-facet-footer">${applyBtn} ${clearUI}</div>`,
    //                     `</div>`,
    //                `</div>`].join('');
    //     },  
    //     facetItemTemplate: function (facet, value, facetSearchTxt) {
    //         const {
    //             facetName,
    //             isSelected,
    //             multiLevelFacetSelectorClass,
    //             displayName
    //         } = facet;
    //         const {
    //             name,
    //             count,
    //             dataId
    //         } = value;
    //         let {
    //             facetClass,
    //             selectedFacetClass
    //         } = this.options.facet;
    //         const {
    //             UNX_uFilter
    //         } = this.testIds;

    //         let action = "changeFacet";
    //         let selectedFacet = 'disable';
    //         let liCss = '';
    //         let hightlighted = '';
    //         if (isSelected) {
    //             selectedFacet = 'checked';
    //             hightlighted = 'highlight';
    //             facetClass += ` ${selectedFacetClass} `
    //             action = "deleteFacetValue";
    //             liCss = (isSelected) ? 'selected' : '';
    //         }
    //         return [ `<li class="facets__item facets__item--comfort level js-filter-item js-filter-item-${displayName} count-${count} ${liCss} ${facetName}" data-search-facet-value="${dataId}">
    //             <label data-search-facet-label="${name}" data-id="${dataId}" class="facet-checkbox facet-checkbox-${displayName} UNX-change-facet ${facetClass} " data-facet-action="${action}" data-test-id="${UNX_uFilter}" data-facet-name="${facetName}" data-handler-init="true">
    //               <input data-search-facet-input="" ${selectedFacet} class="js-filter-checkbox" type="checkbox" value="${name}">
    //             <span class="${hightlighted}">${name} (${count})</span>
    //             </label>
    //             </li>`].join('');
    //     },
    //     selectedFacetTemplate: function (selections, facet, selectedFacetsConfig) {
    //         const {
    //             clearAllText,
    //             clearFacetsSelectorClass
    //         } = facet;
    //         const selectedFClass = (this.selectedFacetClass) ? this.selectedFacetClass : selectedFacetsConfig.selectedFacetClass;

    //         if (selections.length > 0) {
    //             return [ `<div class="collection__active-filters UNX-facets-selections">`,
    //                 `${selections}`,
    //                 `</div>` ].join('');
    //         } else {
    //             return ``;
    //         }
    //     },
    //     selectedFacetItemTemplate: function (selectedFacet, selectedFacetItem, facetConfig, selectedFacetsConfig) {
    //         const {
    //             facetName,
    //             facetType
    //         } = selectedFacet;
    //         const {
    //             name,
    //             count,
    //             dataId
    //         } = selectedFacetItem;
    //         const {
    //             facetClass,
    //             selectedFacetClass,
    //             removeFacetsSelectorClass
    //         } = this.options.facet;
    //         const {
    //             UNX_uFilter
    //         } = this.testIds;
    //         let action = "deleteSelectedFacetValue";

    //         const css = ` ${facetClass} ${selectedFacetClass} `;

    //         return [ `<a data-test-id="${UNX_uFilter}" class="collection__active-filters-btn btn btn--tertiary search-facet-display-name search-facet-remove-only ${css}" data-facet-name-value="metaf_${facetName}" data-facet-action="${action}" 
    //                  data-facet-name="${facetName}" data-facet-value="${facetName}" data-id="${dataId}" data-handler-init="true">${name}
    //                  <i class="collection__active-filters-icon icon icon--close-blue" 
    //                  data-facet-action="${action}" data-facet-name="${facetName}" data-facet-value="${facetName}" data-id="${dataId}" >
    //                  </i> </a>`].join('');
    //     },
    // },


    pagination: {
        // type: 'CLICK_N_SCROLL',
        type: 'FIXED_PAGINATION',
        // type: 'INFINITE_SCROLL',
        el: document.querySelector('.unxPagination'),
        // usePageAndCount: false,
        virtualization: false,
        bufferPages: 1,
        heightDiffToTriggerNextPage: 100,
        infiniteScrollTriggerEl: document.getElementById('searchResultsWrapper'),
        onPaginate: function (data) { console.log(data, "data") }
    },
    url: {
        hashMode: false,
        allowExternalUrlParams: false,
        seoFriendlyUrl: true,
        orderOfQueryParams: ["QUERY",  "FILTERS", "PAGE_NUMBER" ,"PAGE_SIZE","SORT","VIEW_TYPE"], //defaults.
        
        queryParamSeparator: "&",
        searchQueryParam: {
            addToUrl: true,
            algo: "KEY_VALUE_REPLACER",
            keyReplacer: "query"
        },
        browseQueryParam: {
            addToUrl: true,
            algo: "DEFAULT",
            keyReplacer: "pppp"
        },
        pageViewParam: {
            addToUrl: true,
            algo: "KEY_VALUE_REPLACER",
            keyReplacer: "view",
            valuesReplacer: {
                "GRID": "GRID",
                "LIST": "LI@ST(list)"
            }
        },
        sortParam: { 
            addToUrl: false,
            algo: "DEFAULT", 
            keyReplacer: "sortBy",
            valueReplacer: {
                "price desc": "p&d",
                "price asc": "p-a"
            }
        },
        pageNoParam: { 
            addToUrl: true,
            algo: "DEFAULT",
            keyReplacer: 'p', 
            usePageNo: true // uses page no. when turned on.else , index
        },
        pageSizeParam: {
            addToUrl: false,
            algo: "DEFAULT",
            keyReplacer: "count"
        },
        facetsParam: {
            addToUrl: false,
            algo: "KEY_VALUE_REPLACER",
            multiValueSeparator: ",",
            keyReplacer: {
                "color_uFilter": "color",
                "size_uFilter": "size",
                "gender_uFilter": "gender",
                "occasion_uFilter": "occasion",
                "fit_uFilter": "fit",
                "type_uFilter":"type"
            },
            valueReplacer: {
                "color_uFilter": {
                    "Multi": "multi",
                    "White": "whitee"
                },
                "occasion_uFilter": {
                    "Wear to Work": "Wear-to-work"
                }
            },
            facetsOrderInUrl: ["gender_uFilter","color_uFilter","price","category-filter"],
            rangeFacets: ["price"],
            rangeSeparator: "-"
        }
    },
    breadcrumb: {
        el: document.getElementById("breadcrumpContainer")
    },
    pagesize: {
        enabled: true,
        el: document.getElementById("changeNoOfProducts"),
        pageSize: 10,
        options: [10, 20, 30, 40]
    },

    sort: {
        enabled: true,
        el: document.getElementById("sortWrapper"),
        options: [ {
            value: "price desc",
            text: "Price High to Low"
        },
        {
            value: "price asc",
            text: " Price Low to High"
        }
        ]
    },
    loader: {
        el: document.getElementById("loaderEl")
    },
    productView: {
        el: document.getElementById("productViewTypeContainer"),
        defaultViewType: "GRID"
    },
    banner: {
        el: document.getElementById("bannerContainer"),
        count: 1
    },
    swatches: {
        enabled: true,
        attributesMap: {
            swatchList: "color",
            swatchImgs: "unbxd_color_mapping",
            swatchColors: "color"
        }
    },
    // extraParams: {
    //     // test: function(){
    //     //     return new Date().getMilliseconds()
    //     // }
    // },
    onAction: function (e, ctx) { },
    onEvent: function (instance, type, data) {
        if (type === "AFTER_VS_API_SUCCESS") {
          //  console.log("hit herererere" , document.getElementById("myModal"))
            document.getElementById("myModal").style.display = "none";
            window.unbxdImageSearch.handleVisualSearch(type , data , instance);
        }
        if (type === "AFTER_VS_API_ERROR") {
          //  console.log("hit herererere" , document.getElementById("myModal"))
            document.getElementById("myModal").style.display = "block";
            window.unbxdImageSearch.handleApiErrors();
        }
        if(type === "CHANGE_INPUT"){
            console.log("hithitihthihtithithht")
            window.unbxdImageSearch.clearVisualSearchState();
        }
        
        if (type === "AFTER_RENDER") {
            if (localStorage.getItem('unx_product_clicked') && document.getElementById(localStorage.getItem('unx_product_clicked'))) {
                document.getElementById(localStorage.getItem('unx_product_clicked')).scrollIntoView()
                localStorage.removeItem('unx_product_clicked');
            }
        }
    }
    
});


//window.unbxdSearch.getResults('*')
