exports.id = 689;
exports.ids = [689];
exports.modules = {

/***/ 328:
/***/ ((module) => {

// Exports
module.exports = {
	"default": "container_default__p_ifr",
	"large": "container_large__5EZ9T container_default__p_ifr"
};


/***/ }),

/***/ 1572:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_ICSS_IMPORT_0___ = __webpack_require__(9754);
// Exports
module.exports = {
	"flexContainer": "hero_flexContainer__9jEje " + ___CSS_LOADER_ICSS_IMPORT_0___["sideBySideCenter"] + "",
	"text": "hero_text__su18k",
	"title": "hero_title__1JBI0",
	"subtitle": "hero_subtitle__EvCTN",
	"image": "hero_image__8WLza"
};


/***/ }),

/***/ 9754:
/***/ ((module) => {

// Exports
module.exports = {
	"spaceBetween": "utils_spaceBetween__6dILr",
	"sideBySide": "utils_sideBySide__9iGYL",
	"sideBySideCenter": "utils_sideBySideCenter___XZ9l utils_sideBySide__9iGYL"
};


/***/ }),

/***/ 959:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Container)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styles_container_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(328);
/* harmony import */ var styles_container_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styles_container_module_css__WEBPACK_IMPORTED_MODULE_1__);


function Container({ children , large =false  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: large ? (styles_container_module_css__WEBPACK_IMPORTED_MODULE_1___default().large) : (styles_container_module_css__WEBPACK_IMPORTED_MODULE_1___default()["default"]),
        children: children
    });
}


/***/ }),

/***/ 7556:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Hero)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./styles/hero.module.css
var hero_module = __webpack_require__(1572);
var hero_module_default = /*#__PURE__*/__webpack_require__.n(hero_module);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./images/cube.jpg
/* harmony default export */ const cube = ({"src":"/_next/static/media/cube.1d218720.jpg","height":1300,"width":1500,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAcACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABwEBAAAAAAAAAAAAAAAAAAAAAf/aAAwDAQACEAMQAAAAqoT/xAAcEAABBAMBAAAAAAAAAAAAAAASAQQREwACobH/2gAIAQEAAT8AreI/MtqJKCQR9nmf/8QAFhEBAQEAAAAAAAAAAAAAAAAAAREA/9oACAECAQE/AFs3/8QAFhEBAQEAAAAAAAAAAAAAAAAAAREA/9oACAEDAQE/AAl3/9k=","blurWidth":8,"blurHeight":7});
;// CONCATENATED MODULE: ./components/hero.js




function Hero({ title , subtitle , imageOn =false  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (hero_module_default()).flexContainer,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (hero_module_default()).text,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                        className: (hero_module_default()).title,
                        children: title
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: (hero_module_default()).subtitle,
                        children: subtitle
                    })
                ]
            }),
            imageOn && /*#__PURE__*/ jsx_runtime_.jsx("figure", {
                className: (hero_module_default()).image,
                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                    src: cube,
                    alt: "",
                    layout: "responsive",
                    sizes: "(min-width: 1152px) 576px, (min-width: 768px) 50vw, 100vw",
                    priority: true,
                    placeholder: "blur"
                })
            })
        ]
    });
}


/***/ })

};
;