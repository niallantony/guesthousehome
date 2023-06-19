/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/enjoystay.js":
/*!**************************!*\
  !*** ./src/enjoystay.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   enjoyStayLoad: () => (/* binding */ enjoyStayLoad)
/* harmony export */ });
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header */ "./src/header.js");
/* harmony import */ var _initial__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./initial */ "./src/initial.js");



function enjoyStayLoad () {

    const content = document.getElementById('content');
    content.innerHTML = '';
    const header = (0,_header__WEBPACK_IMPORTED_MODULE_0__.makeHeader)();
    content.appendChild(header.header);
    const enjoyStay = document.createElement('div');
    enjoyStay.classList.add('enjoy-stay');
    content.appendChild(enjoyStay);

    const sideBar = document.createElement('div');
    sideBar.classList.add('sidebar');
    sideBar.innerHTML = '<em>Ilhyun Cottage</em>';
    sideBar.addEventListener('click', (e) => {
        content.innerHTML = '';
        (0,_initial__WEBPACK_IMPORTED_MODULE_1__.initialLoad)();
    });

    enjoyStay.appendChild(sideBar);

    const cards = document.createElement('div');
    cards.classList.add('cards');
    enjoyStay.appendChild(cards);

    const cardList = [
        {
            subtitle:'garden',
            text:'Take a rest in the garden of Ilhyun cottage, designed as a place to connect with nature. You can have your dinner on the porch, light a fire at night and watch the many bumblebees and butterflies that call our garden home. If you are lucky, one of the many neighborhood cats might introduce themselves. Be sure to give them something to eat if they do!'
        },
        {
            subtitle:'living room',
            text:'Take a rest in the garden of Ilhyun cottage, designed as a place to connect with nature. You can have your dinner on the porch, light a fire at night and watch the many bumblebees and butterflies that call our garden home. If you are lucky, one of the many neighborhood cats might introduce themselves. Be sure to give them something to eat if they do!'
        },
        {
            subtitle:'bathroom',
            text:'Take a rest in the garden of Ilhyun cottage, designed as a place to connect with nature. You can have your dinner on the porch, light a fire at night and watch the many bumblebees and butterflies that call our garden home. If you are lucky, one of the many neighborhood cats might introduce themselves. Be sure to give them something to eat if they do!'
        },
        {
            subtitle:'bedroom',
            text:'Take a rest in the garden of Ilhyun cottage, designed as a place to connect with nature. You can have your dinner on the porch, light a fire at night and watch the many bumblebees and butterflies that call our garden home. If you are lucky, one of the many neighborhood cats might introduce themselves. Be sure to give them something to eat if they do!'
        },
        {
            subtitle:'kitchen',
            text:'Take a rest in the garden of Ilhyun cottage, designed as a place to connect with nature. You can have your dinner on the porch, light a fire at night and watch the many bumblebees and butterflies that call our garden home. If you are lucky, one of the many neighborhood cats might introduce themselves. Be sure to give them something to eat if they do!'
        },
        {
            subtitle:'gallery',
            text:'Take a rest in the garden of Ilhyun cottage, designed as a place to connect with nature. You can have your dinner on the porch, light a fire at night and watch the many bumblebees and butterflies that call our garden home. If you are lucky, one of the many neighborhood cats might introduce themselves. Be sure to give them something to eat if they do!'
        },
        {
            subtitle:'outdoor bath',
            text:'Take a rest in the garden of Ilhyun cottage, designed as a place to connect with nature. You can have your dinner on the porch, light a fire at night and watch the many bumblebees and butterflies that call our garden home. If you are lucky, one of the many neighborhood cats might introduce themselves. Be sure to give them something to eat if they do!'
        },
    ]
    cardList.forEach((card) => {
        const cardDiv = document.createElement('div');
        const pictureDiv = document.createElement('div');
        const subtitleDiv = document.createElement('div');
        const textDiv = document.createElement('div');
        cardDiv.classList.add('card');
        pictureDiv.classList.add('picture');
        subtitleDiv.classList.add('subtitle');
        textDiv.classList.add('text');
        cardDiv.appendChild(pictureDiv);
        cardDiv.appendChild(subtitleDiv);
        cardDiv.appendChild(textDiv);
        subtitleDiv.textContent = card.subtitle;
        textDiv.textContent = card.text;
        cards.appendChild(cardDiv);
    })
}



/***/ }),

/***/ "./src/explore.js":
/*!************************!*\
  !*** ./src/explore.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   exploreLoad: () => (/* binding */ exploreLoad)
/* harmony export */ });
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header */ "./src/header.js");
/* harmony import */ var _initial__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./initial */ "./src/initial.js");



function exploreLoad () {

    const content = document.getElementById('content');
    content.innerHTML = '';
    const header = (0,_header__WEBPACK_IMPORTED_MODULE_0__.makeHeader)();
    content.appendChild(header.header);
    const explore = document.createElement('div');
    explore.classList.add('explore');
    content.appendChild(explore);

    const sideBar = document.createElement('div');
    sideBar.classList.add('sidebar');
    sideBar.innerHTML = '<em>Ilhyun Cottage</em>';
    explore.appendChild(sideBar);

    const cards = document.createElement('div');
    cards.classList.add('cards');
    explore.appendChild(cards);
    sideBar.addEventListener('click', (e) => {
        content.innerHTML = '';
        (0,_initial__WEBPACK_IMPORTED_MODULE_1__.initialLoad)();
    });


    const cardList = [
        {
            subtitle:'place one',
            text:'Take a rest in the garden of Ilhyun cottage, designed as a place to connect with nature. You can have your dinner on the porch, light a fire at night and watch the many bumblebees and butterflies that call our garden home. If you are lucky, one of the many neighborhood cats might introduce themselves. Be sure to give them something to eat if they do!'
        },
        {
            subtitle:'place two',
            text:'Take a rest in the garden of Ilhyun cottage, designed as a place to connect with nature. You can have your dinner on the porch, light a fire at night and watch the many bumblebees and butterflies that call our garden home. If you are lucky, one of the many neighborhood cats might introduce themselves. Be sure to give them something to eat if they do!'
        },
        {
            subtitle:'place three',
            text:'Take a rest in the garden of Ilhyun cottage, designed as a place to connect with nature. You can have your dinner on the porch, light a fire at night and watch the many bumblebees and butterflies that call our garden home. If you are lucky, one of the many neighborhood cats might introduce themselves. Be sure to give them something to eat if they do!'
        },
        {
            subtitle:'place four',
            text:'Take a rest in the garden of Ilhyun cottage, designed as a place to connect with nature. You can have your dinner on the porch, light a fire at night and watch the many bumblebees and butterflies that call our garden home. If you are lucky, one of the many neighborhood cats might introduce themselves. Be sure to give them something to eat if they do!'
        },
        {
            subtitle:'place five',
            text:'Take a rest in the garden of Ilhyun cottage, designed as a place to connect with nature. You can have your dinner on the porch, light a fire at night and watch the many bumblebees and butterflies that call our garden home. If you are lucky, one of the many neighborhood cats might introduce themselves. Be sure to give them something to eat if they do!'
        },
    ]
    cardList.forEach((card) => {
        const cardDiv = document.createElement('div');
        const pictureDiv = document.createElement('div');
        const subtitleDiv = document.createElement('div');
        const textDiv = document.createElement('div');
        cardDiv.classList.add('card');
        pictureDiv.classList.add('picture');
        subtitleDiv.classList.add('subtitle');
        textDiv.classList.add('text');
        cardDiv.appendChild(pictureDiv);
        cardDiv.appendChild(subtitleDiv);
        cardDiv.appendChild(textDiv);
        subtitleDiv.textContent = card.subtitle;
        textDiv.textContent = card.text;
        cards.appendChild(cardDiv);
    })
}



/***/ }),

/***/ "./src/header.js":
/*!***********************!*\
  !*** ./src/header.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   makeHeader: () => (/* binding */ makeHeader)
/* harmony export */ });
/* harmony import */ var _ourstory_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ourstory.js */ "./src/ourstory.js");
/* harmony import */ var _enjoystay_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./enjoystay.js */ "./src/enjoystay.js");
/* harmony import */ var _explore_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./explore.js */ "./src/explore.js");



function makeHeader() {

    const makeButton = (buttonId) => {
        const listItem = document.createElement('li');
        header.appendChild(listItem);
        const buttonItem = document.createElement('button');
        buttonItem.id = buttonId;
        listItem.appendChild(buttonItem);
        return buttonItem;
    }

    const header = document.createElement('ul');
    header.classList.add('header-buttons');
    const ourStory = makeButton('ourStory');
    const enjoyStay = makeButton('enjoyStay');
    const exploreArea = makeButton('exploreArea');
    ourStory.textContent = 'Our Story';
    enjoyStay.textContent = 'Enjoy your Stay';
    exploreArea.textContent = 'Explore the Area';

    ourStory.addEventListener('click', _ourstory_js__WEBPACK_IMPORTED_MODULE_0__.ourStoryLoad );
    enjoyStay.addEventListener('click', _enjoystay_js__WEBPACK_IMPORTED_MODULE_1__.enjoyStayLoad );
    exploreArea.addEventListener('click', _explore_js__WEBPACK_IMPORTED_MODULE_2__.exploreLoad );

    return {header};
}



/***/ }),

/***/ "./src/initial.js":
/*!************************!*\
  !*** ./src/initial.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initialLoad: () => (/* binding */ initialLoad)
/* harmony export */ });
/* harmony import */ var _header_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header.js */ "./src/header.js");


const initialLoad = () => {
    const content = document.getElementById('content');
    content.innerHtml = '';
    const header = (0,_header_js__WEBPACK_IMPORTED_MODULE_0__.makeHeader)();
    const container = document.createElement('div');
    container.classList.add('container');
    const title = document.createElement('div');
    title.classList.add('title');
    title.innerHTML = '<em>ilhyeon cottage <hr><span class="korean">일현가옥</span></em>';
    container.appendChild(title);

    content.appendChild(header.header);
    content.appendChild(container);
}



/***/ }),

/***/ "./src/ourstory.js":
/*!*************************!*\
  !*** ./src/ourstory.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ourStoryLoad: () => (/* binding */ ourStoryLoad)
/* harmony export */ });
/* harmony import */ var _header_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header.js */ "./src/header.js");
/* harmony import */ var _initial_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./initial.js */ "./src/initial.js");



const ourStoryLoad = () => {
    const content = document.getElementById('content');
    content.innerHTML = '';
    const header = (0,_header_js__WEBPACK_IMPORTED_MODULE_0__.makeHeader)();
    content.appendChild(header.header);
    const ourStory = document.createElement('div');
    ourStory.classList.add('our-story');
    content.appendChild(ourStory);

    const sideBar = document.createElement('div');
    sideBar.classList.add('sidebar');
    sideBar.innerHTML = '<em>Ilhyun Cottage</em>';
    sideBar.addEventListener('click', (e) => {
        content.innerHTML = '';
        (0,_initial_js__WEBPACK_IMPORTED_MODULE_1__.initialLoad)();
    });
    const info = document.createElement('div');
    info.classList.add('info');
    const divOrder = [
        {
            type: 'image',
            text: ''
        },
        {
            type: 'subtitle',
            text: 'What is Ilhyun Cottage?'
        },
        {
            type: 'text',
            text: 'Ilhyun Cottage is the work of Niall Craven and Seohyeon Kim. In 2022 they purchased a 70 year old Hanok house in a small village called Gugil-li near the historical Silla capital of Korea, Gyeongju. With a deep respect for the natural surroundings and the history of the house they worked to make a place where they could leave their own imprint in an area already so full of character.'
        },
        {
            type: 'text',
            text: 'Ilhyun Cottage is a place where we hope to share the things that we enjoy. We hope that visitors will be able to take pleasure in country life, surrounded by the sounds, sights and smells of a truly beautiful neighbourhood.'
        },
        {
            type: 'image',
            text: ''
        },
        {
            type: 'subtitle',
            text: 'A Work in Progress'
        },
        {
            type: 'text',
            text: "We don't believe that the renovation of Ilhyun Cottage is something that has a definitive end. In fact we believe that the process is ongoing, not only in the sense that an old structure such as this needs constant care and attention, but also in the sense that we hope the history of this building is something that will continue to be added to, both by us and our visitors. We very much see Ilhyun Cottage as an organic place, surrounded with life and possessing a life of its own, and we will continue to respect it as such."
        },
        {
            type: 'image',
            text: ''
        },
        {
            type: 'subtitle',
            text: 'Our Beliefs'
        },
        {
            type: 'text',
            text: 'We believe that Ilhyun Cottage can be a place for anybody to come and experience the recharging atmosphere of the countryside. We believe in living slowly, taking time to appreciate the joys of small day-to-day tasks which we usually take for advantage. While we tried to fit Ilhyun Cottage with enough conveniences to make anyone at home, we hope that visitors will try to get a taste of life in the countryside.'
        },
        {
            type: 'text',
            text: 'We do believe that the main purpose of Ilhyun Cottage is to provide a healing environment for guests to unwind, and have tried to accommodate for this as much as possible. We hope that visitors can escape their busy lives and slow down with fresh country air and natural surroundings.'
        }
    ]

    divOrder.forEach((div) => {
        const newDiv = document.createElement('div');
        newDiv.classList.add(div.type);
        newDiv.textContent = div.text;
        info.appendChild(newDiv);
    })

    ourStory.appendChild(sideBar);
    ourStory.appendChild(info);
}



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/explore.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztVRU5BO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ3Vlc3Rob3VzZWhvbWUvLi9zcmMvZW5qb3lzdGF5LmpzIiwid2VicGFjazovL2d1ZXN0aG91c2Vob21lLy4vc3JjL2V4cGxvcmUuanMiLCJ3ZWJwYWNrOi8vZ3Vlc3Rob3VzZWhvbWUvLi9zcmMvaGVhZGVyLmpzIiwid2VicGFjazovL2d1ZXN0aG91c2Vob21lLy4vc3JjL2luaXRpYWwuanMiLCJ3ZWJwYWNrOi8vZ3Vlc3Rob3VzZWhvbWUvLi9zcmMvb3Vyc3RvcnkuanMiLCJ3ZWJwYWNrOi8vZ3Vlc3Rob3VzZWhvbWUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZ3Vlc3Rob3VzZWhvbWUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2d1ZXN0aG91c2Vob21lL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZ3Vlc3Rob3VzZWhvbWUvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9ndWVzdGhvdXNlaG9tZS93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL2d1ZXN0aG91c2Vob21lL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9ndWVzdGhvdXNlaG9tZS93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbWFrZUhlYWRlciB9IGZyb20gXCIuL2hlYWRlclwiO1xuaW1wb3J0IHsgaW5pdGlhbExvYWQgfSBmcm9tIFwiLi9pbml0aWFsXCI7XG5cbmZ1bmN0aW9uIGVuam95U3RheUxvYWQgKCkge1xuXG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG4gICAgY29udGVudC5pbm5lckhUTUwgPSAnJztcbiAgICBjb25zdCBoZWFkZXIgPSBtYWtlSGVhZGVyKCk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChoZWFkZXIuaGVhZGVyKTtcbiAgICBjb25zdCBlbmpveVN0YXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBlbmpveVN0YXkuY2xhc3NMaXN0LmFkZCgnZW5qb3ktc3RheScpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZW5qb3lTdGF5KTtcblxuICAgIGNvbnN0IHNpZGVCYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBzaWRlQmFyLmNsYXNzTGlzdC5hZGQoJ3NpZGViYXInKTtcbiAgICBzaWRlQmFyLmlubmVySFRNTCA9ICc8ZW0+SWxoeXVuIENvdHRhZ2U8L2VtPic7XG4gICAgc2lkZUJhci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIGNvbnRlbnQuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgIGluaXRpYWxMb2FkKCk7XG4gICAgfSk7XG5cbiAgICBlbmpveVN0YXkuYXBwZW5kQ2hpbGQoc2lkZUJhcik7XG5cbiAgICBjb25zdCBjYXJkcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNhcmRzLmNsYXNzTGlzdC5hZGQoJ2NhcmRzJyk7XG4gICAgZW5qb3lTdGF5LmFwcGVuZENoaWxkKGNhcmRzKTtcblxuICAgIGNvbnN0IGNhcmRMaXN0ID0gW1xuICAgICAgICB7XG4gICAgICAgICAgICBzdWJ0aXRsZTonZ2FyZGVuJyxcbiAgICAgICAgICAgIHRleHQ6J1Rha2UgYSByZXN0IGluIHRoZSBnYXJkZW4gb2YgSWxoeXVuIGNvdHRhZ2UsIGRlc2lnbmVkIGFzIGEgcGxhY2UgdG8gY29ubmVjdCB3aXRoIG5hdHVyZS4gWW91IGNhbiBoYXZlIHlvdXIgZGlubmVyIG9uIHRoZSBwb3JjaCwgbGlnaHQgYSBmaXJlIGF0IG5pZ2h0IGFuZCB3YXRjaCB0aGUgbWFueSBidW1ibGViZWVzIGFuZCBidXR0ZXJmbGllcyB0aGF0IGNhbGwgb3VyIGdhcmRlbiBob21lLiBJZiB5b3UgYXJlIGx1Y2t5LCBvbmUgb2YgdGhlIG1hbnkgbmVpZ2hib3Job29kIGNhdHMgbWlnaHQgaW50cm9kdWNlIHRoZW1zZWx2ZXMuIEJlIHN1cmUgdG8gZ2l2ZSB0aGVtIHNvbWV0aGluZyB0byBlYXQgaWYgdGhleSBkbyEnXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHN1YnRpdGxlOidsaXZpbmcgcm9vbScsXG4gICAgICAgICAgICB0ZXh0OidUYWtlIGEgcmVzdCBpbiB0aGUgZ2FyZGVuIG9mIElsaHl1biBjb3R0YWdlLCBkZXNpZ25lZCBhcyBhIHBsYWNlIHRvIGNvbm5lY3Qgd2l0aCBuYXR1cmUuIFlvdSBjYW4gaGF2ZSB5b3VyIGRpbm5lciBvbiB0aGUgcG9yY2gsIGxpZ2h0IGEgZmlyZSBhdCBuaWdodCBhbmQgd2F0Y2ggdGhlIG1hbnkgYnVtYmxlYmVlcyBhbmQgYnV0dGVyZmxpZXMgdGhhdCBjYWxsIG91ciBnYXJkZW4gaG9tZS4gSWYgeW91IGFyZSBsdWNreSwgb25lIG9mIHRoZSBtYW55IG5laWdoYm9yaG9vZCBjYXRzIG1pZ2h0IGludHJvZHVjZSB0aGVtc2VsdmVzLiBCZSBzdXJlIHRvIGdpdmUgdGhlbSBzb21ldGhpbmcgdG8gZWF0IGlmIHRoZXkgZG8hJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBzdWJ0aXRsZTonYmF0aHJvb20nLFxuICAgICAgICAgICAgdGV4dDonVGFrZSBhIHJlc3QgaW4gdGhlIGdhcmRlbiBvZiBJbGh5dW4gY290dGFnZSwgZGVzaWduZWQgYXMgYSBwbGFjZSB0byBjb25uZWN0IHdpdGggbmF0dXJlLiBZb3UgY2FuIGhhdmUgeW91ciBkaW5uZXIgb24gdGhlIHBvcmNoLCBsaWdodCBhIGZpcmUgYXQgbmlnaHQgYW5kIHdhdGNoIHRoZSBtYW55IGJ1bWJsZWJlZXMgYW5kIGJ1dHRlcmZsaWVzIHRoYXQgY2FsbCBvdXIgZ2FyZGVuIGhvbWUuIElmIHlvdSBhcmUgbHVja3ksIG9uZSBvZiB0aGUgbWFueSBuZWlnaGJvcmhvb2QgY2F0cyBtaWdodCBpbnRyb2R1Y2UgdGhlbXNlbHZlcy4gQmUgc3VyZSB0byBnaXZlIHRoZW0gc29tZXRoaW5nIHRvIGVhdCBpZiB0aGV5IGRvISdcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgc3VidGl0bGU6J2JlZHJvb20nLFxuICAgICAgICAgICAgdGV4dDonVGFrZSBhIHJlc3QgaW4gdGhlIGdhcmRlbiBvZiBJbGh5dW4gY290dGFnZSwgZGVzaWduZWQgYXMgYSBwbGFjZSB0byBjb25uZWN0IHdpdGggbmF0dXJlLiBZb3UgY2FuIGhhdmUgeW91ciBkaW5uZXIgb24gdGhlIHBvcmNoLCBsaWdodCBhIGZpcmUgYXQgbmlnaHQgYW5kIHdhdGNoIHRoZSBtYW55IGJ1bWJsZWJlZXMgYW5kIGJ1dHRlcmZsaWVzIHRoYXQgY2FsbCBvdXIgZ2FyZGVuIGhvbWUuIElmIHlvdSBhcmUgbHVja3ksIG9uZSBvZiB0aGUgbWFueSBuZWlnaGJvcmhvb2QgY2F0cyBtaWdodCBpbnRyb2R1Y2UgdGhlbXNlbHZlcy4gQmUgc3VyZSB0byBnaXZlIHRoZW0gc29tZXRoaW5nIHRvIGVhdCBpZiB0aGV5IGRvISdcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgc3VidGl0bGU6J2tpdGNoZW4nLFxuICAgICAgICAgICAgdGV4dDonVGFrZSBhIHJlc3QgaW4gdGhlIGdhcmRlbiBvZiBJbGh5dW4gY290dGFnZSwgZGVzaWduZWQgYXMgYSBwbGFjZSB0byBjb25uZWN0IHdpdGggbmF0dXJlLiBZb3UgY2FuIGhhdmUgeW91ciBkaW5uZXIgb24gdGhlIHBvcmNoLCBsaWdodCBhIGZpcmUgYXQgbmlnaHQgYW5kIHdhdGNoIHRoZSBtYW55IGJ1bWJsZWJlZXMgYW5kIGJ1dHRlcmZsaWVzIHRoYXQgY2FsbCBvdXIgZ2FyZGVuIGhvbWUuIElmIHlvdSBhcmUgbHVja3ksIG9uZSBvZiB0aGUgbWFueSBuZWlnaGJvcmhvb2QgY2F0cyBtaWdodCBpbnRyb2R1Y2UgdGhlbXNlbHZlcy4gQmUgc3VyZSB0byBnaXZlIHRoZW0gc29tZXRoaW5nIHRvIGVhdCBpZiB0aGV5IGRvISdcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgc3VidGl0bGU6J2dhbGxlcnknLFxuICAgICAgICAgICAgdGV4dDonVGFrZSBhIHJlc3QgaW4gdGhlIGdhcmRlbiBvZiBJbGh5dW4gY290dGFnZSwgZGVzaWduZWQgYXMgYSBwbGFjZSB0byBjb25uZWN0IHdpdGggbmF0dXJlLiBZb3UgY2FuIGhhdmUgeW91ciBkaW5uZXIgb24gdGhlIHBvcmNoLCBsaWdodCBhIGZpcmUgYXQgbmlnaHQgYW5kIHdhdGNoIHRoZSBtYW55IGJ1bWJsZWJlZXMgYW5kIGJ1dHRlcmZsaWVzIHRoYXQgY2FsbCBvdXIgZ2FyZGVuIGhvbWUuIElmIHlvdSBhcmUgbHVja3ksIG9uZSBvZiB0aGUgbWFueSBuZWlnaGJvcmhvb2QgY2F0cyBtaWdodCBpbnRyb2R1Y2UgdGhlbXNlbHZlcy4gQmUgc3VyZSB0byBnaXZlIHRoZW0gc29tZXRoaW5nIHRvIGVhdCBpZiB0aGV5IGRvISdcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgc3VidGl0bGU6J291dGRvb3IgYmF0aCcsXG4gICAgICAgICAgICB0ZXh0OidUYWtlIGEgcmVzdCBpbiB0aGUgZ2FyZGVuIG9mIElsaHl1biBjb3R0YWdlLCBkZXNpZ25lZCBhcyBhIHBsYWNlIHRvIGNvbm5lY3Qgd2l0aCBuYXR1cmUuIFlvdSBjYW4gaGF2ZSB5b3VyIGRpbm5lciBvbiB0aGUgcG9yY2gsIGxpZ2h0IGEgZmlyZSBhdCBuaWdodCBhbmQgd2F0Y2ggdGhlIG1hbnkgYnVtYmxlYmVlcyBhbmQgYnV0dGVyZmxpZXMgdGhhdCBjYWxsIG91ciBnYXJkZW4gaG9tZS4gSWYgeW91IGFyZSBsdWNreSwgb25lIG9mIHRoZSBtYW55IG5laWdoYm9yaG9vZCBjYXRzIG1pZ2h0IGludHJvZHVjZSB0aGVtc2VsdmVzLiBCZSBzdXJlIHRvIGdpdmUgdGhlbSBzb21ldGhpbmcgdG8gZWF0IGlmIHRoZXkgZG8hJ1xuICAgICAgICB9LFxuICAgIF1cbiAgICBjYXJkTGlzdC5mb3JFYWNoKChjYXJkKSA9PiB7XG4gICAgICAgIGNvbnN0IGNhcmREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29uc3QgcGljdHVyZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb25zdCBzdWJ0aXRsZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb25zdCB0ZXh0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNhcmREaXYuY2xhc3NMaXN0LmFkZCgnY2FyZCcpO1xuICAgICAgICBwaWN0dXJlRGl2LmNsYXNzTGlzdC5hZGQoJ3BpY3R1cmUnKTtcbiAgICAgICAgc3VidGl0bGVEaXYuY2xhc3NMaXN0LmFkZCgnc3VidGl0bGUnKTtcbiAgICAgICAgdGV4dERpdi5jbGFzc0xpc3QuYWRkKCd0ZXh0Jyk7XG4gICAgICAgIGNhcmREaXYuYXBwZW5kQ2hpbGQocGljdHVyZURpdik7XG4gICAgICAgIGNhcmREaXYuYXBwZW5kQ2hpbGQoc3VidGl0bGVEaXYpO1xuICAgICAgICBjYXJkRGl2LmFwcGVuZENoaWxkKHRleHREaXYpO1xuICAgICAgICBzdWJ0aXRsZURpdi50ZXh0Q29udGVudCA9IGNhcmQuc3VidGl0bGU7XG4gICAgICAgIHRleHREaXYudGV4dENvbnRlbnQgPSBjYXJkLnRleHQ7XG4gICAgICAgIGNhcmRzLmFwcGVuZENoaWxkKGNhcmREaXYpO1xuICAgIH0pXG59XG5cbmV4cG9ydCB7ZW5qb3lTdGF5TG9hZH0iLCJpbXBvcnQgeyBtYWtlSGVhZGVyIH0gZnJvbSBcIi4vaGVhZGVyXCI7XG5pbXBvcnQgeyBpbml0aWFsTG9hZCB9IGZyb20gXCIuL2luaXRpYWxcIjtcblxuZnVuY3Rpb24gZXhwbG9yZUxvYWQgKCkge1xuXG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG4gICAgY29udGVudC5pbm5lckhUTUwgPSAnJztcbiAgICBjb25zdCBoZWFkZXIgPSBtYWtlSGVhZGVyKCk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChoZWFkZXIuaGVhZGVyKTtcbiAgICBjb25zdCBleHBsb3JlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZXhwbG9yZS5jbGFzc0xpc3QuYWRkKCdleHBsb3JlJyk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChleHBsb3JlKTtcblxuICAgIGNvbnN0IHNpZGVCYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBzaWRlQmFyLmNsYXNzTGlzdC5hZGQoJ3NpZGViYXInKTtcbiAgICBzaWRlQmFyLmlubmVySFRNTCA9ICc8ZW0+SWxoeXVuIENvdHRhZ2U8L2VtPic7XG4gICAgZXhwbG9yZS5hcHBlbmRDaGlsZChzaWRlQmFyKTtcblxuICAgIGNvbnN0IGNhcmRzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY2FyZHMuY2xhc3NMaXN0LmFkZCgnY2FyZHMnKTtcbiAgICBleHBsb3JlLmFwcGVuZENoaWxkKGNhcmRzKTtcbiAgICBzaWRlQmFyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgY29udGVudC5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgaW5pdGlhbExvYWQoKTtcbiAgICB9KTtcblxuXG4gICAgY29uc3QgY2FyZExpc3QgPSBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIHN1YnRpdGxlOidwbGFjZSBvbmUnLFxuICAgICAgICAgICAgdGV4dDonVGFrZSBhIHJlc3QgaW4gdGhlIGdhcmRlbiBvZiBJbGh5dW4gY290dGFnZSwgZGVzaWduZWQgYXMgYSBwbGFjZSB0byBjb25uZWN0IHdpdGggbmF0dXJlLiBZb3UgY2FuIGhhdmUgeW91ciBkaW5uZXIgb24gdGhlIHBvcmNoLCBsaWdodCBhIGZpcmUgYXQgbmlnaHQgYW5kIHdhdGNoIHRoZSBtYW55IGJ1bWJsZWJlZXMgYW5kIGJ1dHRlcmZsaWVzIHRoYXQgY2FsbCBvdXIgZ2FyZGVuIGhvbWUuIElmIHlvdSBhcmUgbHVja3ksIG9uZSBvZiB0aGUgbWFueSBuZWlnaGJvcmhvb2QgY2F0cyBtaWdodCBpbnRyb2R1Y2UgdGhlbXNlbHZlcy4gQmUgc3VyZSB0byBnaXZlIHRoZW0gc29tZXRoaW5nIHRvIGVhdCBpZiB0aGV5IGRvISdcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgc3VidGl0bGU6J3BsYWNlIHR3bycsXG4gICAgICAgICAgICB0ZXh0OidUYWtlIGEgcmVzdCBpbiB0aGUgZ2FyZGVuIG9mIElsaHl1biBjb3R0YWdlLCBkZXNpZ25lZCBhcyBhIHBsYWNlIHRvIGNvbm5lY3Qgd2l0aCBuYXR1cmUuIFlvdSBjYW4gaGF2ZSB5b3VyIGRpbm5lciBvbiB0aGUgcG9yY2gsIGxpZ2h0IGEgZmlyZSBhdCBuaWdodCBhbmQgd2F0Y2ggdGhlIG1hbnkgYnVtYmxlYmVlcyBhbmQgYnV0dGVyZmxpZXMgdGhhdCBjYWxsIG91ciBnYXJkZW4gaG9tZS4gSWYgeW91IGFyZSBsdWNreSwgb25lIG9mIHRoZSBtYW55IG5laWdoYm9yaG9vZCBjYXRzIG1pZ2h0IGludHJvZHVjZSB0aGVtc2VsdmVzLiBCZSBzdXJlIHRvIGdpdmUgdGhlbSBzb21ldGhpbmcgdG8gZWF0IGlmIHRoZXkgZG8hJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBzdWJ0aXRsZToncGxhY2UgdGhyZWUnLFxuICAgICAgICAgICAgdGV4dDonVGFrZSBhIHJlc3QgaW4gdGhlIGdhcmRlbiBvZiBJbGh5dW4gY290dGFnZSwgZGVzaWduZWQgYXMgYSBwbGFjZSB0byBjb25uZWN0IHdpdGggbmF0dXJlLiBZb3UgY2FuIGhhdmUgeW91ciBkaW5uZXIgb24gdGhlIHBvcmNoLCBsaWdodCBhIGZpcmUgYXQgbmlnaHQgYW5kIHdhdGNoIHRoZSBtYW55IGJ1bWJsZWJlZXMgYW5kIGJ1dHRlcmZsaWVzIHRoYXQgY2FsbCBvdXIgZ2FyZGVuIGhvbWUuIElmIHlvdSBhcmUgbHVja3ksIG9uZSBvZiB0aGUgbWFueSBuZWlnaGJvcmhvb2QgY2F0cyBtaWdodCBpbnRyb2R1Y2UgdGhlbXNlbHZlcy4gQmUgc3VyZSB0byBnaXZlIHRoZW0gc29tZXRoaW5nIHRvIGVhdCBpZiB0aGV5IGRvISdcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgc3VidGl0bGU6J3BsYWNlIGZvdXInLFxuICAgICAgICAgICAgdGV4dDonVGFrZSBhIHJlc3QgaW4gdGhlIGdhcmRlbiBvZiBJbGh5dW4gY290dGFnZSwgZGVzaWduZWQgYXMgYSBwbGFjZSB0byBjb25uZWN0IHdpdGggbmF0dXJlLiBZb3UgY2FuIGhhdmUgeW91ciBkaW5uZXIgb24gdGhlIHBvcmNoLCBsaWdodCBhIGZpcmUgYXQgbmlnaHQgYW5kIHdhdGNoIHRoZSBtYW55IGJ1bWJsZWJlZXMgYW5kIGJ1dHRlcmZsaWVzIHRoYXQgY2FsbCBvdXIgZ2FyZGVuIGhvbWUuIElmIHlvdSBhcmUgbHVja3ksIG9uZSBvZiB0aGUgbWFueSBuZWlnaGJvcmhvb2QgY2F0cyBtaWdodCBpbnRyb2R1Y2UgdGhlbXNlbHZlcy4gQmUgc3VyZSB0byBnaXZlIHRoZW0gc29tZXRoaW5nIHRvIGVhdCBpZiB0aGV5IGRvISdcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgc3VidGl0bGU6J3BsYWNlIGZpdmUnLFxuICAgICAgICAgICAgdGV4dDonVGFrZSBhIHJlc3QgaW4gdGhlIGdhcmRlbiBvZiBJbGh5dW4gY290dGFnZSwgZGVzaWduZWQgYXMgYSBwbGFjZSB0byBjb25uZWN0IHdpdGggbmF0dXJlLiBZb3UgY2FuIGhhdmUgeW91ciBkaW5uZXIgb24gdGhlIHBvcmNoLCBsaWdodCBhIGZpcmUgYXQgbmlnaHQgYW5kIHdhdGNoIHRoZSBtYW55IGJ1bWJsZWJlZXMgYW5kIGJ1dHRlcmZsaWVzIHRoYXQgY2FsbCBvdXIgZ2FyZGVuIGhvbWUuIElmIHlvdSBhcmUgbHVja3ksIG9uZSBvZiB0aGUgbWFueSBuZWlnaGJvcmhvb2QgY2F0cyBtaWdodCBpbnRyb2R1Y2UgdGhlbXNlbHZlcy4gQmUgc3VyZSB0byBnaXZlIHRoZW0gc29tZXRoaW5nIHRvIGVhdCBpZiB0aGV5IGRvISdcbiAgICAgICAgfSxcbiAgICBdXG4gICAgY2FyZExpc3QuZm9yRWFjaCgoY2FyZCkgPT4ge1xuICAgICAgICBjb25zdCBjYXJkRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnN0IHBpY3R1cmVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29uc3Qgc3VidGl0bGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29uc3QgdGV4dERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjYXJkRGl2LmNsYXNzTGlzdC5hZGQoJ2NhcmQnKTtcbiAgICAgICAgcGljdHVyZURpdi5jbGFzc0xpc3QuYWRkKCdwaWN0dXJlJyk7XG4gICAgICAgIHN1YnRpdGxlRGl2LmNsYXNzTGlzdC5hZGQoJ3N1YnRpdGxlJyk7XG4gICAgICAgIHRleHREaXYuY2xhc3NMaXN0LmFkZCgndGV4dCcpO1xuICAgICAgICBjYXJkRGl2LmFwcGVuZENoaWxkKHBpY3R1cmVEaXYpO1xuICAgICAgICBjYXJkRGl2LmFwcGVuZENoaWxkKHN1YnRpdGxlRGl2KTtcbiAgICAgICAgY2FyZERpdi5hcHBlbmRDaGlsZCh0ZXh0RGl2KTtcbiAgICAgICAgc3VidGl0bGVEaXYudGV4dENvbnRlbnQgPSBjYXJkLnN1YnRpdGxlO1xuICAgICAgICB0ZXh0RGl2LnRleHRDb250ZW50ID0gY2FyZC50ZXh0O1xuICAgICAgICBjYXJkcy5hcHBlbmRDaGlsZChjYXJkRGl2KTtcbiAgICB9KVxufVxuXG5leHBvcnQge2V4cGxvcmVMb2FkfSIsImltcG9ydCB7IG91clN0b3J5TG9hZCB9IGZyb20gXCIuL291cnN0b3J5LmpzXCI7XG5pbXBvcnQgeyBlbmpveVN0YXlMb2FkIH0gZnJvbSBcIi4vZW5qb3lzdGF5LmpzXCI7XG5pbXBvcnQgeyBleHBsb3JlTG9hZCB9IGZyb20gXCIuL2V4cGxvcmUuanNcIjtcbmZ1bmN0aW9uIG1ha2VIZWFkZXIoKSB7XG5cbiAgICBjb25zdCBtYWtlQnV0dG9uID0gKGJ1dHRvbklkKSA9PiB7XG4gICAgICAgIGNvbnN0IGxpc3RJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgICAgaGVhZGVyLmFwcGVuZENoaWxkKGxpc3RJdGVtKTtcbiAgICAgICAgY29uc3QgYnV0dG9uSXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBidXR0b25JdGVtLmlkID0gYnV0dG9uSWQ7XG4gICAgICAgIGxpc3RJdGVtLmFwcGVuZENoaWxkKGJ1dHRvbkl0ZW0pO1xuICAgICAgICByZXR1cm4gYnV0dG9uSXRlbTtcbiAgICB9XG5cbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICAgIGhlYWRlci5jbGFzc0xpc3QuYWRkKCdoZWFkZXItYnV0dG9ucycpO1xuICAgIGNvbnN0IG91clN0b3J5ID0gbWFrZUJ1dHRvbignb3VyU3RvcnknKTtcbiAgICBjb25zdCBlbmpveVN0YXkgPSBtYWtlQnV0dG9uKCdlbmpveVN0YXknKTtcbiAgICBjb25zdCBleHBsb3JlQXJlYSA9IG1ha2VCdXR0b24oJ2V4cGxvcmVBcmVhJyk7XG4gICAgb3VyU3RvcnkudGV4dENvbnRlbnQgPSAnT3VyIFN0b3J5JztcbiAgICBlbmpveVN0YXkudGV4dENvbnRlbnQgPSAnRW5qb3kgeW91ciBTdGF5JztcbiAgICBleHBsb3JlQXJlYS50ZXh0Q29udGVudCA9ICdFeHBsb3JlIHRoZSBBcmVhJztcblxuICAgIG91clN0b3J5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgb3VyU3RvcnlMb2FkICk7XG4gICAgZW5qb3lTdGF5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZW5qb3lTdGF5TG9hZCApO1xuICAgIGV4cGxvcmVBcmVhLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXhwbG9yZUxvYWQgKTtcblxuICAgIHJldHVybiB7aGVhZGVyfTtcbn1cblxuZXhwb3J0IHttYWtlSGVhZGVyfTsiLCJpbXBvcnQge21ha2VIZWFkZXJ9IGZyb20gJy4vaGVhZGVyLmpzJztcblxuY29uc3QgaW5pdGlhbExvYWQgPSAoKSA9PiB7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG4gICAgY29udGVudC5pbm5lckh0bWwgPSAnJztcbiAgICBjb25zdCBoZWFkZXIgPSBtYWtlSGVhZGVyKCk7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NvbnRhaW5lcicpO1xuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGl0bGUuY2xhc3NMaXN0LmFkZCgndGl0bGUnKTtcbiAgICB0aXRsZS5pbm5lckhUTUwgPSAnPGVtPmlsaHllb24gY290dGFnZSA8aHI+PHNwYW4gY2xhc3M9XCJrb3JlYW5cIj7snbztmITqsIDsmKU8L3NwYW4+PC9lbT4nO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aXRsZSk7XG5cbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGhlYWRlci5oZWFkZXIpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcbn1cblxuZXhwb3J0IHtpbml0aWFsTG9hZH07IiwiaW1wb3J0IHttYWtlSGVhZGVyfSBmcm9tICcuL2hlYWRlci5qcyc7XG5pbXBvcnQgeyBpbml0aWFsTG9hZCB9IGZyb20gJy4vaW5pdGlhbC5qcyc7XG5cbmNvbnN0IG91clN0b3J5TG9hZCA9ICgpID0+IHtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcbiAgICBjb250ZW50LmlubmVySFRNTCA9ICcnO1xuICAgIGNvbnN0IGhlYWRlciA9IG1ha2VIZWFkZXIoKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGhlYWRlci5oZWFkZXIpO1xuICAgIGNvbnN0IG91clN0b3J5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgb3VyU3RvcnkuY2xhc3NMaXN0LmFkZCgnb3VyLXN0b3J5Jyk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChvdXJTdG9yeSk7XG5cbiAgICBjb25zdCBzaWRlQmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgc2lkZUJhci5jbGFzc0xpc3QuYWRkKCdzaWRlYmFyJyk7XG4gICAgc2lkZUJhci5pbm5lckhUTUwgPSAnPGVtPklsaHl1biBDb3R0YWdlPC9lbT4nO1xuICAgIHNpZGVCYXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBjb250ZW50LmlubmVySFRNTCA9ICcnO1xuICAgICAgICBpbml0aWFsTG9hZCgpO1xuICAgIH0pO1xuICAgIGNvbnN0IGluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBpbmZvLmNsYXNzTGlzdC5hZGQoJ2luZm8nKTtcbiAgICBjb25zdCBkaXZPcmRlciA9IFtcbiAgICAgICAge1xuICAgICAgICAgICAgdHlwZTogJ2ltYWdlJyxcbiAgICAgICAgICAgIHRleHQ6ICcnXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHR5cGU6ICdzdWJ0aXRsZScsXG4gICAgICAgICAgICB0ZXh0OiAnV2hhdCBpcyBJbGh5dW4gQ290dGFnZT8nXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgICAgICAgIHRleHQ6ICdJbGh5dW4gQ290dGFnZSBpcyB0aGUgd29yayBvZiBOaWFsbCBDcmF2ZW4gYW5kIFNlb2h5ZW9uIEtpbS4gSW4gMjAyMiB0aGV5IHB1cmNoYXNlZCBhIDcwIHllYXIgb2xkIEhhbm9rIGhvdXNlIGluIGEgc21hbGwgdmlsbGFnZSBjYWxsZWQgR3VnaWwtbGkgbmVhciB0aGUgaGlzdG9yaWNhbCBTaWxsYSBjYXBpdGFsIG9mIEtvcmVhLCBHeWVvbmdqdS4gV2l0aCBhIGRlZXAgcmVzcGVjdCBmb3IgdGhlIG5hdHVyYWwgc3Vycm91bmRpbmdzIGFuZCB0aGUgaGlzdG9yeSBvZiB0aGUgaG91c2UgdGhleSB3b3JrZWQgdG8gbWFrZSBhIHBsYWNlIHdoZXJlIHRoZXkgY291bGQgbGVhdmUgdGhlaXIgb3duIGltcHJpbnQgaW4gYW4gYXJlYSBhbHJlYWR5IHNvIGZ1bGwgb2YgY2hhcmFjdGVyLidcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgICAgICAgdGV4dDogJ0lsaHl1biBDb3R0YWdlIGlzIGEgcGxhY2Ugd2hlcmUgd2UgaG9wZSB0byBzaGFyZSB0aGUgdGhpbmdzIHRoYXQgd2UgZW5qb3kuIFdlIGhvcGUgdGhhdCB2aXNpdG9ycyB3aWxsIGJlIGFibGUgdG8gdGFrZSBwbGVhc3VyZSBpbiBjb3VudHJ5IGxpZmUsIHN1cnJvdW5kZWQgYnkgdGhlIHNvdW5kcywgc2lnaHRzIGFuZCBzbWVsbHMgb2YgYSB0cnVseSBiZWF1dGlmdWwgbmVpZ2hib3VyaG9vZC4nXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHR5cGU6ICdpbWFnZScsXG4gICAgICAgICAgICB0ZXh0OiAnJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICB0eXBlOiAnc3VidGl0bGUnLFxuICAgICAgICAgICAgdGV4dDogJ0EgV29yayBpbiBQcm9ncmVzcydcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgICAgICAgdGV4dDogXCJXZSBkb24ndCBiZWxpZXZlIHRoYXQgdGhlIHJlbm92YXRpb24gb2YgSWxoeXVuIENvdHRhZ2UgaXMgc29tZXRoaW5nIHRoYXQgaGFzIGEgZGVmaW5pdGl2ZSBlbmQuIEluIGZhY3Qgd2UgYmVsaWV2ZSB0aGF0IHRoZSBwcm9jZXNzIGlzIG9uZ29pbmcsIG5vdCBvbmx5IGluIHRoZSBzZW5zZSB0aGF0IGFuIG9sZCBzdHJ1Y3R1cmUgc3VjaCBhcyB0aGlzIG5lZWRzIGNvbnN0YW50IGNhcmUgYW5kIGF0dGVudGlvbiwgYnV0IGFsc28gaW4gdGhlIHNlbnNlIHRoYXQgd2UgaG9wZSB0aGUgaGlzdG9yeSBvZiB0aGlzIGJ1aWxkaW5nIGlzIHNvbWV0aGluZyB0aGF0IHdpbGwgY29udGludWUgdG8gYmUgYWRkZWQgdG8sIGJvdGggYnkgdXMgYW5kIG91ciB2aXNpdG9ycy4gV2UgdmVyeSBtdWNoIHNlZSBJbGh5dW4gQ290dGFnZSBhcyBhbiBvcmdhbmljIHBsYWNlLCBzdXJyb3VuZGVkIHdpdGggbGlmZSBhbmQgcG9zc2Vzc2luZyBhIGxpZmUgb2YgaXRzIG93biwgYW5kIHdlIHdpbGwgY29udGludWUgdG8gcmVzcGVjdCBpdCBhcyBzdWNoLlwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHR5cGU6ICdpbWFnZScsXG4gICAgICAgICAgICB0ZXh0OiAnJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICB0eXBlOiAnc3VidGl0bGUnLFxuICAgICAgICAgICAgdGV4dDogJ091ciBCZWxpZWZzJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICB0eXBlOiAndGV4dCcsXG4gICAgICAgICAgICB0ZXh0OiAnV2UgYmVsaWV2ZSB0aGF0IElsaHl1biBDb3R0YWdlIGNhbiBiZSBhIHBsYWNlIGZvciBhbnlib2R5IHRvIGNvbWUgYW5kIGV4cGVyaWVuY2UgdGhlIHJlY2hhcmdpbmcgYXRtb3NwaGVyZSBvZiB0aGUgY291bnRyeXNpZGUuIFdlIGJlbGlldmUgaW4gbGl2aW5nIHNsb3dseSwgdGFraW5nIHRpbWUgdG8gYXBwcmVjaWF0ZSB0aGUgam95cyBvZiBzbWFsbCBkYXktdG8tZGF5IHRhc2tzIHdoaWNoIHdlIHVzdWFsbHkgdGFrZSBmb3IgYWR2YW50YWdlLiBXaGlsZSB3ZSB0cmllZCB0byBmaXQgSWxoeXVuIENvdHRhZ2Ugd2l0aCBlbm91Z2ggY29udmVuaWVuY2VzIHRvIG1ha2UgYW55b25lIGF0IGhvbWUsIHdlIGhvcGUgdGhhdCB2aXNpdG9ycyB3aWxsIHRyeSB0byBnZXQgYSB0YXN0ZSBvZiBsaWZlIGluIHRoZSBjb3VudHJ5c2lkZS4nXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgICAgICAgIHRleHQ6ICdXZSBkbyBiZWxpZXZlIHRoYXQgdGhlIG1haW4gcHVycG9zZSBvZiBJbGh5dW4gQ290dGFnZSBpcyB0byBwcm92aWRlIGEgaGVhbGluZyBlbnZpcm9ubWVudCBmb3IgZ3Vlc3RzIHRvIHVud2luZCwgYW5kIGhhdmUgdHJpZWQgdG8gYWNjb21tb2RhdGUgZm9yIHRoaXMgYXMgbXVjaCBhcyBwb3NzaWJsZS4gV2UgaG9wZSB0aGF0IHZpc2l0b3JzIGNhbiBlc2NhcGUgdGhlaXIgYnVzeSBsaXZlcyBhbmQgc2xvdyBkb3duIHdpdGggZnJlc2ggY291bnRyeSBhaXIgYW5kIG5hdHVyYWwgc3Vycm91bmRpbmdzLidcbiAgICAgICAgfVxuICAgIF1cblxuICAgIGRpdk9yZGVyLmZvckVhY2goKGRpdikgPT4ge1xuICAgICAgICBjb25zdCBuZXdEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgbmV3RGl2LmNsYXNzTGlzdC5hZGQoZGl2LnR5cGUpO1xuICAgICAgICBuZXdEaXYudGV4dENvbnRlbnQgPSBkaXYudGV4dDtcbiAgICAgICAgaW5mby5hcHBlbmRDaGlsZChuZXdEaXYpO1xuICAgIH0pXG5cbiAgICBvdXJTdG9yeS5hcHBlbmRDaGlsZChzaWRlQmFyKTtcbiAgICBvdXJTdG9yeS5hcHBlbmRDaGlsZChpbmZvKTtcbn1cblxuZXhwb3J0IHtvdXJTdG9yeUxvYWR9IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9leHBsb3JlLmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9