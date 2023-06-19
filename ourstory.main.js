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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/ourstory.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7VUVOQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2d1ZXN0aG91c2Vob21lLy4vc3JjL2Vuam95c3RheS5qcyIsIndlYnBhY2s6Ly9ndWVzdGhvdXNlaG9tZS8uL3NyYy9leHBsb3JlLmpzIiwid2VicGFjazovL2d1ZXN0aG91c2Vob21lLy4vc3JjL2hlYWRlci5qcyIsIndlYnBhY2s6Ly9ndWVzdGhvdXNlaG9tZS8uL3NyYy9pbml0aWFsLmpzIiwid2VicGFjazovL2d1ZXN0aG91c2Vob21lLy4vc3JjL291cnN0b3J5LmpzIiwid2VicGFjazovL2d1ZXN0aG91c2Vob21lL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2d1ZXN0aG91c2Vob21lL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9ndWVzdGhvdXNlaG9tZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2d1ZXN0aG91c2Vob21lL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZ3Vlc3Rob3VzZWhvbWUvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9ndWVzdGhvdXNlaG9tZS93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vZ3Vlc3Rob3VzZWhvbWUvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IG1ha2VIZWFkZXIgfSBmcm9tIFwiLi9oZWFkZXJcIjtcbmltcG9ydCB7IGluaXRpYWxMb2FkIH0gZnJvbSBcIi4vaW5pdGlhbFwiO1xuXG5mdW5jdGlvbiBlbmpveVN0YXlMb2FkICgpIHtcblxuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuICAgIGNvbnRlbnQuaW5uZXJIVE1MID0gJyc7XG4gICAgY29uc3QgaGVhZGVyID0gbWFrZUhlYWRlcigpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaGVhZGVyLmhlYWRlcik7XG4gICAgY29uc3QgZW5qb3lTdGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZW5qb3lTdGF5LmNsYXNzTGlzdC5hZGQoJ2Vuam95LXN0YXknKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGVuam95U3RheSk7XG5cbiAgICBjb25zdCBzaWRlQmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgc2lkZUJhci5jbGFzc0xpc3QuYWRkKCdzaWRlYmFyJyk7XG4gICAgc2lkZUJhci5pbm5lckhUTUwgPSAnPGVtPklsaHl1biBDb3R0YWdlPC9lbT4nO1xuICAgIHNpZGVCYXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBjb250ZW50LmlubmVySFRNTCA9ICcnO1xuICAgICAgICBpbml0aWFsTG9hZCgpO1xuICAgIH0pO1xuXG4gICAgZW5qb3lTdGF5LmFwcGVuZENoaWxkKHNpZGVCYXIpO1xuXG4gICAgY29uc3QgY2FyZHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjYXJkcy5jbGFzc0xpc3QuYWRkKCdjYXJkcycpO1xuICAgIGVuam95U3RheS5hcHBlbmRDaGlsZChjYXJkcyk7XG5cbiAgICBjb25zdCBjYXJkTGlzdCA9IFtcbiAgICAgICAge1xuICAgICAgICAgICAgc3VidGl0bGU6J2dhcmRlbicsXG4gICAgICAgICAgICB0ZXh0OidUYWtlIGEgcmVzdCBpbiB0aGUgZ2FyZGVuIG9mIElsaHl1biBjb3R0YWdlLCBkZXNpZ25lZCBhcyBhIHBsYWNlIHRvIGNvbm5lY3Qgd2l0aCBuYXR1cmUuIFlvdSBjYW4gaGF2ZSB5b3VyIGRpbm5lciBvbiB0aGUgcG9yY2gsIGxpZ2h0IGEgZmlyZSBhdCBuaWdodCBhbmQgd2F0Y2ggdGhlIG1hbnkgYnVtYmxlYmVlcyBhbmQgYnV0dGVyZmxpZXMgdGhhdCBjYWxsIG91ciBnYXJkZW4gaG9tZS4gSWYgeW91IGFyZSBsdWNreSwgb25lIG9mIHRoZSBtYW55IG5laWdoYm9yaG9vZCBjYXRzIG1pZ2h0IGludHJvZHVjZSB0aGVtc2VsdmVzLiBCZSBzdXJlIHRvIGdpdmUgdGhlbSBzb21ldGhpbmcgdG8gZWF0IGlmIHRoZXkgZG8hJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBzdWJ0aXRsZTonbGl2aW5nIHJvb20nLFxuICAgICAgICAgICAgdGV4dDonVGFrZSBhIHJlc3QgaW4gdGhlIGdhcmRlbiBvZiBJbGh5dW4gY290dGFnZSwgZGVzaWduZWQgYXMgYSBwbGFjZSB0byBjb25uZWN0IHdpdGggbmF0dXJlLiBZb3UgY2FuIGhhdmUgeW91ciBkaW5uZXIgb24gdGhlIHBvcmNoLCBsaWdodCBhIGZpcmUgYXQgbmlnaHQgYW5kIHdhdGNoIHRoZSBtYW55IGJ1bWJsZWJlZXMgYW5kIGJ1dHRlcmZsaWVzIHRoYXQgY2FsbCBvdXIgZ2FyZGVuIGhvbWUuIElmIHlvdSBhcmUgbHVja3ksIG9uZSBvZiB0aGUgbWFueSBuZWlnaGJvcmhvb2QgY2F0cyBtaWdodCBpbnRyb2R1Y2UgdGhlbXNlbHZlcy4gQmUgc3VyZSB0byBnaXZlIHRoZW0gc29tZXRoaW5nIHRvIGVhdCBpZiB0aGV5IGRvISdcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgc3VidGl0bGU6J2JhdGhyb29tJyxcbiAgICAgICAgICAgIHRleHQ6J1Rha2UgYSByZXN0IGluIHRoZSBnYXJkZW4gb2YgSWxoeXVuIGNvdHRhZ2UsIGRlc2lnbmVkIGFzIGEgcGxhY2UgdG8gY29ubmVjdCB3aXRoIG5hdHVyZS4gWW91IGNhbiBoYXZlIHlvdXIgZGlubmVyIG9uIHRoZSBwb3JjaCwgbGlnaHQgYSBmaXJlIGF0IG5pZ2h0IGFuZCB3YXRjaCB0aGUgbWFueSBidW1ibGViZWVzIGFuZCBidXR0ZXJmbGllcyB0aGF0IGNhbGwgb3VyIGdhcmRlbiBob21lLiBJZiB5b3UgYXJlIGx1Y2t5LCBvbmUgb2YgdGhlIG1hbnkgbmVpZ2hib3Job29kIGNhdHMgbWlnaHQgaW50cm9kdWNlIHRoZW1zZWx2ZXMuIEJlIHN1cmUgdG8gZ2l2ZSB0aGVtIHNvbWV0aGluZyB0byBlYXQgaWYgdGhleSBkbyEnXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHN1YnRpdGxlOidiZWRyb29tJyxcbiAgICAgICAgICAgIHRleHQ6J1Rha2UgYSByZXN0IGluIHRoZSBnYXJkZW4gb2YgSWxoeXVuIGNvdHRhZ2UsIGRlc2lnbmVkIGFzIGEgcGxhY2UgdG8gY29ubmVjdCB3aXRoIG5hdHVyZS4gWW91IGNhbiBoYXZlIHlvdXIgZGlubmVyIG9uIHRoZSBwb3JjaCwgbGlnaHQgYSBmaXJlIGF0IG5pZ2h0IGFuZCB3YXRjaCB0aGUgbWFueSBidW1ibGViZWVzIGFuZCBidXR0ZXJmbGllcyB0aGF0IGNhbGwgb3VyIGdhcmRlbiBob21lLiBJZiB5b3UgYXJlIGx1Y2t5LCBvbmUgb2YgdGhlIG1hbnkgbmVpZ2hib3Job29kIGNhdHMgbWlnaHQgaW50cm9kdWNlIHRoZW1zZWx2ZXMuIEJlIHN1cmUgdG8gZ2l2ZSB0aGVtIHNvbWV0aGluZyB0byBlYXQgaWYgdGhleSBkbyEnXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHN1YnRpdGxlOidraXRjaGVuJyxcbiAgICAgICAgICAgIHRleHQ6J1Rha2UgYSByZXN0IGluIHRoZSBnYXJkZW4gb2YgSWxoeXVuIGNvdHRhZ2UsIGRlc2lnbmVkIGFzIGEgcGxhY2UgdG8gY29ubmVjdCB3aXRoIG5hdHVyZS4gWW91IGNhbiBoYXZlIHlvdXIgZGlubmVyIG9uIHRoZSBwb3JjaCwgbGlnaHQgYSBmaXJlIGF0IG5pZ2h0IGFuZCB3YXRjaCB0aGUgbWFueSBidW1ibGViZWVzIGFuZCBidXR0ZXJmbGllcyB0aGF0IGNhbGwgb3VyIGdhcmRlbiBob21lLiBJZiB5b3UgYXJlIGx1Y2t5LCBvbmUgb2YgdGhlIG1hbnkgbmVpZ2hib3Job29kIGNhdHMgbWlnaHQgaW50cm9kdWNlIHRoZW1zZWx2ZXMuIEJlIHN1cmUgdG8gZ2l2ZSB0aGVtIHNvbWV0aGluZyB0byBlYXQgaWYgdGhleSBkbyEnXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHN1YnRpdGxlOidnYWxsZXJ5JyxcbiAgICAgICAgICAgIHRleHQ6J1Rha2UgYSByZXN0IGluIHRoZSBnYXJkZW4gb2YgSWxoeXVuIGNvdHRhZ2UsIGRlc2lnbmVkIGFzIGEgcGxhY2UgdG8gY29ubmVjdCB3aXRoIG5hdHVyZS4gWW91IGNhbiBoYXZlIHlvdXIgZGlubmVyIG9uIHRoZSBwb3JjaCwgbGlnaHQgYSBmaXJlIGF0IG5pZ2h0IGFuZCB3YXRjaCB0aGUgbWFueSBidW1ibGViZWVzIGFuZCBidXR0ZXJmbGllcyB0aGF0IGNhbGwgb3VyIGdhcmRlbiBob21lLiBJZiB5b3UgYXJlIGx1Y2t5LCBvbmUgb2YgdGhlIG1hbnkgbmVpZ2hib3Job29kIGNhdHMgbWlnaHQgaW50cm9kdWNlIHRoZW1zZWx2ZXMuIEJlIHN1cmUgdG8gZ2l2ZSB0aGVtIHNvbWV0aGluZyB0byBlYXQgaWYgdGhleSBkbyEnXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHN1YnRpdGxlOidvdXRkb29yIGJhdGgnLFxuICAgICAgICAgICAgdGV4dDonVGFrZSBhIHJlc3QgaW4gdGhlIGdhcmRlbiBvZiBJbGh5dW4gY290dGFnZSwgZGVzaWduZWQgYXMgYSBwbGFjZSB0byBjb25uZWN0IHdpdGggbmF0dXJlLiBZb3UgY2FuIGhhdmUgeW91ciBkaW5uZXIgb24gdGhlIHBvcmNoLCBsaWdodCBhIGZpcmUgYXQgbmlnaHQgYW5kIHdhdGNoIHRoZSBtYW55IGJ1bWJsZWJlZXMgYW5kIGJ1dHRlcmZsaWVzIHRoYXQgY2FsbCBvdXIgZ2FyZGVuIGhvbWUuIElmIHlvdSBhcmUgbHVja3ksIG9uZSBvZiB0aGUgbWFueSBuZWlnaGJvcmhvb2QgY2F0cyBtaWdodCBpbnRyb2R1Y2UgdGhlbXNlbHZlcy4gQmUgc3VyZSB0byBnaXZlIHRoZW0gc29tZXRoaW5nIHRvIGVhdCBpZiB0aGV5IGRvISdcbiAgICAgICAgfSxcbiAgICBdXG4gICAgY2FyZExpc3QuZm9yRWFjaCgoY2FyZCkgPT4ge1xuICAgICAgICBjb25zdCBjYXJkRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnN0IHBpY3R1cmVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29uc3Qgc3VidGl0bGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29uc3QgdGV4dERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjYXJkRGl2LmNsYXNzTGlzdC5hZGQoJ2NhcmQnKTtcbiAgICAgICAgcGljdHVyZURpdi5jbGFzc0xpc3QuYWRkKCdwaWN0dXJlJyk7XG4gICAgICAgIHN1YnRpdGxlRGl2LmNsYXNzTGlzdC5hZGQoJ3N1YnRpdGxlJyk7XG4gICAgICAgIHRleHREaXYuY2xhc3NMaXN0LmFkZCgndGV4dCcpO1xuICAgICAgICBjYXJkRGl2LmFwcGVuZENoaWxkKHBpY3R1cmVEaXYpO1xuICAgICAgICBjYXJkRGl2LmFwcGVuZENoaWxkKHN1YnRpdGxlRGl2KTtcbiAgICAgICAgY2FyZERpdi5hcHBlbmRDaGlsZCh0ZXh0RGl2KTtcbiAgICAgICAgc3VidGl0bGVEaXYudGV4dENvbnRlbnQgPSBjYXJkLnN1YnRpdGxlO1xuICAgICAgICB0ZXh0RGl2LnRleHRDb250ZW50ID0gY2FyZC50ZXh0O1xuICAgICAgICBjYXJkcy5hcHBlbmRDaGlsZChjYXJkRGl2KTtcbiAgICB9KVxufVxuXG5leHBvcnQge2Vuam95U3RheUxvYWR9IiwiaW1wb3J0IHsgbWFrZUhlYWRlciB9IGZyb20gXCIuL2hlYWRlclwiO1xuaW1wb3J0IHsgaW5pdGlhbExvYWQgfSBmcm9tIFwiLi9pbml0aWFsXCI7XG5cbmZ1bmN0aW9uIGV4cGxvcmVMb2FkICgpIHtcblxuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuICAgIGNvbnRlbnQuaW5uZXJIVE1MID0gJyc7XG4gICAgY29uc3QgaGVhZGVyID0gbWFrZUhlYWRlcigpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaGVhZGVyLmhlYWRlcik7XG4gICAgY29uc3QgZXhwbG9yZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGV4cGxvcmUuY2xhc3NMaXN0LmFkZCgnZXhwbG9yZScpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZXhwbG9yZSk7XG5cbiAgICBjb25zdCBzaWRlQmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgc2lkZUJhci5jbGFzc0xpc3QuYWRkKCdzaWRlYmFyJyk7XG4gICAgc2lkZUJhci5pbm5lckhUTUwgPSAnPGVtPklsaHl1biBDb3R0YWdlPC9lbT4nO1xuICAgIGV4cGxvcmUuYXBwZW5kQ2hpbGQoc2lkZUJhcik7XG5cbiAgICBjb25zdCBjYXJkcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNhcmRzLmNsYXNzTGlzdC5hZGQoJ2NhcmRzJyk7XG4gICAgZXhwbG9yZS5hcHBlbmRDaGlsZChjYXJkcyk7XG4gICAgc2lkZUJhci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIGNvbnRlbnQuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgIGluaXRpYWxMb2FkKCk7XG4gICAgfSk7XG5cblxuICAgIGNvbnN0IGNhcmRMaXN0ID0gW1xuICAgICAgICB7XG4gICAgICAgICAgICBzdWJ0aXRsZToncGxhY2Ugb25lJyxcbiAgICAgICAgICAgIHRleHQ6J1Rha2UgYSByZXN0IGluIHRoZSBnYXJkZW4gb2YgSWxoeXVuIGNvdHRhZ2UsIGRlc2lnbmVkIGFzIGEgcGxhY2UgdG8gY29ubmVjdCB3aXRoIG5hdHVyZS4gWW91IGNhbiBoYXZlIHlvdXIgZGlubmVyIG9uIHRoZSBwb3JjaCwgbGlnaHQgYSBmaXJlIGF0IG5pZ2h0IGFuZCB3YXRjaCB0aGUgbWFueSBidW1ibGViZWVzIGFuZCBidXR0ZXJmbGllcyB0aGF0IGNhbGwgb3VyIGdhcmRlbiBob21lLiBJZiB5b3UgYXJlIGx1Y2t5LCBvbmUgb2YgdGhlIG1hbnkgbmVpZ2hib3Job29kIGNhdHMgbWlnaHQgaW50cm9kdWNlIHRoZW1zZWx2ZXMuIEJlIHN1cmUgdG8gZ2l2ZSB0aGVtIHNvbWV0aGluZyB0byBlYXQgaWYgdGhleSBkbyEnXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHN1YnRpdGxlOidwbGFjZSB0d28nLFxuICAgICAgICAgICAgdGV4dDonVGFrZSBhIHJlc3QgaW4gdGhlIGdhcmRlbiBvZiBJbGh5dW4gY290dGFnZSwgZGVzaWduZWQgYXMgYSBwbGFjZSB0byBjb25uZWN0IHdpdGggbmF0dXJlLiBZb3UgY2FuIGhhdmUgeW91ciBkaW5uZXIgb24gdGhlIHBvcmNoLCBsaWdodCBhIGZpcmUgYXQgbmlnaHQgYW5kIHdhdGNoIHRoZSBtYW55IGJ1bWJsZWJlZXMgYW5kIGJ1dHRlcmZsaWVzIHRoYXQgY2FsbCBvdXIgZ2FyZGVuIGhvbWUuIElmIHlvdSBhcmUgbHVja3ksIG9uZSBvZiB0aGUgbWFueSBuZWlnaGJvcmhvb2QgY2F0cyBtaWdodCBpbnRyb2R1Y2UgdGhlbXNlbHZlcy4gQmUgc3VyZSB0byBnaXZlIHRoZW0gc29tZXRoaW5nIHRvIGVhdCBpZiB0aGV5IGRvISdcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgc3VidGl0bGU6J3BsYWNlIHRocmVlJyxcbiAgICAgICAgICAgIHRleHQ6J1Rha2UgYSByZXN0IGluIHRoZSBnYXJkZW4gb2YgSWxoeXVuIGNvdHRhZ2UsIGRlc2lnbmVkIGFzIGEgcGxhY2UgdG8gY29ubmVjdCB3aXRoIG5hdHVyZS4gWW91IGNhbiBoYXZlIHlvdXIgZGlubmVyIG9uIHRoZSBwb3JjaCwgbGlnaHQgYSBmaXJlIGF0IG5pZ2h0IGFuZCB3YXRjaCB0aGUgbWFueSBidW1ibGViZWVzIGFuZCBidXR0ZXJmbGllcyB0aGF0IGNhbGwgb3VyIGdhcmRlbiBob21lLiBJZiB5b3UgYXJlIGx1Y2t5LCBvbmUgb2YgdGhlIG1hbnkgbmVpZ2hib3Job29kIGNhdHMgbWlnaHQgaW50cm9kdWNlIHRoZW1zZWx2ZXMuIEJlIHN1cmUgdG8gZ2l2ZSB0aGVtIHNvbWV0aGluZyB0byBlYXQgaWYgdGhleSBkbyEnXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHN1YnRpdGxlOidwbGFjZSBmb3VyJyxcbiAgICAgICAgICAgIHRleHQ6J1Rha2UgYSByZXN0IGluIHRoZSBnYXJkZW4gb2YgSWxoeXVuIGNvdHRhZ2UsIGRlc2lnbmVkIGFzIGEgcGxhY2UgdG8gY29ubmVjdCB3aXRoIG5hdHVyZS4gWW91IGNhbiBoYXZlIHlvdXIgZGlubmVyIG9uIHRoZSBwb3JjaCwgbGlnaHQgYSBmaXJlIGF0IG5pZ2h0IGFuZCB3YXRjaCB0aGUgbWFueSBidW1ibGViZWVzIGFuZCBidXR0ZXJmbGllcyB0aGF0IGNhbGwgb3VyIGdhcmRlbiBob21lLiBJZiB5b3UgYXJlIGx1Y2t5LCBvbmUgb2YgdGhlIG1hbnkgbmVpZ2hib3Job29kIGNhdHMgbWlnaHQgaW50cm9kdWNlIHRoZW1zZWx2ZXMuIEJlIHN1cmUgdG8gZ2l2ZSB0aGVtIHNvbWV0aGluZyB0byBlYXQgaWYgdGhleSBkbyEnXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHN1YnRpdGxlOidwbGFjZSBmaXZlJyxcbiAgICAgICAgICAgIHRleHQ6J1Rha2UgYSByZXN0IGluIHRoZSBnYXJkZW4gb2YgSWxoeXVuIGNvdHRhZ2UsIGRlc2lnbmVkIGFzIGEgcGxhY2UgdG8gY29ubmVjdCB3aXRoIG5hdHVyZS4gWW91IGNhbiBoYXZlIHlvdXIgZGlubmVyIG9uIHRoZSBwb3JjaCwgbGlnaHQgYSBmaXJlIGF0IG5pZ2h0IGFuZCB3YXRjaCB0aGUgbWFueSBidW1ibGViZWVzIGFuZCBidXR0ZXJmbGllcyB0aGF0IGNhbGwgb3VyIGdhcmRlbiBob21lLiBJZiB5b3UgYXJlIGx1Y2t5LCBvbmUgb2YgdGhlIG1hbnkgbmVpZ2hib3Job29kIGNhdHMgbWlnaHQgaW50cm9kdWNlIHRoZW1zZWx2ZXMuIEJlIHN1cmUgdG8gZ2l2ZSB0aGVtIHNvbWV0aGluZyB0byBlYXQgaWYgdGhleSBkbyEnXG4gICAgICAgIH0sXG4gICAgXVxuICAgIGNhcmRMaXN0LmZvckVhY2goKGNhcmQpID0+IHtcbiAgICAgICAgY29uc3QgY2FyZERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb25zdCBwaWN0dXJlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnN0IHN1YnRpdGxlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnN0IHRleHREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY2FyZERpdi5jbGFzc0xpc3QuYWRkKCdjYXJkJyk7XG4gICAgICAgIHBpY3R1cmVEaXYuY2xhc3NMaXN0LmFkZCgncGljdHVyZScpO1xuICAgICAgICBzdWJ0aXRsZURpdi5jbGFzc0xpc3QuYWRkKCdzdWJ0aXRsZScpO1xuICAgICAgICB0ZXh0RGl2LmNsYXNzTGlzdC5hZGQoJ3RleHQnKTtcbiAgICAgICAgY2FyZERpdi5hcHBlbmRDaGlsZChwaWN0dXJlRGl2KTtcbiAgICAgICAgY2FyZERpdi5hcHBlbmRDaGlsZChzdWJ0aXRsZURpdik7XG4gICAgICAgIGNhcmREaXYuYXBwZW5kQ2hpbGQodGV4dERpdik7XG4gICAgICAgIHN1YnRpdGxlRGl2LnRleHRDb250ZW50ID0gY2FyZC5zdWJ0aXRsZTtcbiAgICAgICAgdGV4dERpdi50ZXh0Q29udGVudCA9IGNhcmQudGV4dDtcbiAgICAgICAgY2FyZHMuYXBwZW5kQ2hpbGQoY2FyZERpdik7XG4gICAgfSlcbn1cblxuZXhwb3J0IHtleHBsb3JlTG9hZH0iLCJpbXBvcnQgeyBvdXJTdG9yeUxvYWQgfSBmcm9tIFwiLi9vdXJzdG9yeS5qc1wiO1xuaW1wb3J0IHsgZW5qb3lTdGF5TG9hZCB9IGZyb20gXCIuL2Vuam95c3RheS5qc1wiO1xuaW1wb3J0IHsgZXhwbG9yZUxvYWQgfSBmcm9tIFwiLi9leHBsb3JlLmpzXCI7XG5mdW5jdGlvbiBtYWtlSGVhZGVyKCkge1xuXG4gICAgY29uc3QgbWFrZUJ1dHRvbiA9IChidXR0b25JZCkgPT4ge1xuICAgICAgICBjb25zdCBsaXN0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICAgIGhlYWRlci5hcHBlbmRDaGlsZChsaXN0SXRlbSk7XG4gICAgICAgIGNvbnN0IGJ1dHRvbkl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgYnV0dG9uSXRlbS5pZCA9IGJ1dHRvbklkO1xuICAgICAgICBsaXN0SXRlbS5hcHBlbmRDaGlsZChidXR0b25JdGVtKTtcbiAgICAgICAgcmV0dXJuIGJ1dHRvbkl0ZW07XG4gICAgfVxuXG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgICBoZWFkZXIuY2xhc3NMaXN0LmFkZCgnaGVhZGVyLWJ1dHRvbnMnKTtcbiAgICBjb25zdCBvdXJTdG9yeSA9IG1ha2VCdXR0b24oJ291clN0b3J5Jyk7XG4gICAgY29uc3QgZW5qb3lTdGF5ID0gbWFrZUJ1dHRvbignZW5qb3lTdGF5Jyk7XG4gICAgY29uc3QgZXhwbG9yZUFyZWEgPSBtYWtlQnV0dG9uKCdleHBsb3JlQXJlYScpO1xuICAgIG91clN0b3J5LnRleHRDb250ZW50ID0gJ091ciBTdG9yeSc7XG4gICAgZW5qb3lTdGF5LnRleHRDb250ZW50ID0gJ0Vuam95IHlvdXIgU3RheSc7XG4gICAgZXhwbG9yZUFyZWEudGV4dENvbnRlbnQgPSAnRXhwbG9yZSB0aGUgQXJlYSc7XG5cbiAgICBvdXJTdG9yeS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG91clN0b3J5TG9hZCApO1xuICAgIGVuam95U3RheS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGVuam95U3RheUxvYWQgKTtcbiAgICBleHBsb3JlQXJlYS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV4cGxvcmVMb2FkICk7XG5cbiAgICByZXR1cm4ge2hlYWRlcn07XG59XG5cbmV4cG9ydCB7bWFrZUhlYWRlcn07IiwiaW1wb3J0IHttYWtlSGVhZGVyfSBmcm9tICcuL2hlYWRlci5qcyc7XG5cbmNvbnN0IGluaXRpYWxMb2FkID0gKCkgPT4ge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuICAgIGNvbnRlbnQuaW5uZXJIdG1sID0gJyc7XG4gICAgY29uc3QgaGVhZGVyID0gbWFrZUhlYWRlcigpO1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjb250YWluZXInKTtcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRpdGxlLmNsYXNzTGlzdC5hZGQoJ3RpdGxlJyk7XG4gICAgdGl0bGUuaW5uZXJIVE1MID0gJzxlbT5pbGh5ZW9uIGNvdHRhZ2UgPGhyPjxzcGFuIGNsYXNzPVwia29yZWFuXCI+7J287ZiE6rCA7JilPC9zcGFuPjwvZW0+JztcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQodGl0bGUpO1xuXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChoZWFkZXIuaGVhZGVyKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG59XG5cbmV4cG9ydCB7aW5pdGlhbExvYWR9OyIsImltcG9ydCB7bWFrZUhlYWRlcn0gZnJvbSAnLi9oZWFkZXIuanMnO1xuaW1wb3J0IHsgaW5pdGlhbExvYWQgfSBmcm9tICcuL2luaXRpYWwuanMnO1xuXG5jb25zdCBvdXJTdG9yeUxvYWQgPSAoKSA9PiB7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG4gICAgY29udGVudC5pbm5lckhUTUwgPSAnJztcbiAgICBjb25zdCBoZWFkZXIgPSBtYWtlSGVhZGVyKCk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChoZWFkZXIuaGVhZGVyKTtcbiAgICBjb25zdCBvdXJTdG9yeSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG91clN0b3J5LmNsYXNzTGlzdC5hZGQoJ291ci1zdG9yeScpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQob3VyU3RvcnkpO1xuXG4gICAgY29uc3Qgc2lkZUJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHNpZGVCYXIuY2xhc3NMaXN0LmFkZCgnc2lkZWJhcicpO1xuICAgIHNpZGVCYXIuaW5uZXJIVE1MID0gJzxlbT5JbGh5dW4gQ290dGFnZTwvZW0+JztcbiAgICBzaWRlQmFyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgY29udGVudC5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgaW5pdGlhbExvYWQoKTtcbiAgICB9KTtcbiAgICBjb25zdCBpbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaW5mby5jbGFzc0xpc3QuYWRkKCdpbmZvJyk7XG4gICAgY29uc3QgZGl2T3JkZXIgPSBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIHR5cGU6ICdpbWFnZScsXG4gICAgICAgICAgICB0ZXh0OiAnJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICB0eXBlOiAnc3VidGl0bGUnLFxuICAgICAgICAgICAgdGV4dDogJ1doYXQgaXMgSWxoeXVuIENvdHRhZ2U/J1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICB0eXBlOiAndGV4dCcsXG4gICAgICAgICAgICB0ZXh0OiAnSWxoeXVuIENvdHRhZ2UgaXMgdGhlIHdvcmsgb2YgTmlhbGwgQ3JhdmVuIGFuZCBTZW9oeWVvbiBLaW0uIEluIDIwMjIgdGhleSBwdXJjaGFzZWQgYSA3MCB5ZWFyIG9sZCBIYW5vayBob3VzZSBpbiBhIHNtYWxsIHZpbGxhZ2UgY2FsbGVkIEd1Z2lsLWxpIG5lYXIgdGhlIGhpc3RvcmljYWwgU2lsbGEgY2FwaXRhbCBvZiBLb3JlYSwgR3llb25nanUuIFdpdGggYSBkZWVwIHJlc3BlY3QgZm9yIHRoZSBuYXR1cmFsIHN1cnJvdW5kaW5ncyBhbmQgdGhlIGhpc3Rvcnkgb2YgdGhlIGhvdXNlIHRoZXkgd29ya2VkIHRvIG1ha2UgYSBwbGFjZSB3aGVyZSB0aGV5IGNvdWxkIGxlYXZlIHRoZWlyIG93biBpbXByaW50IGluIGFuIGFyZWEgYWxyZWFkeSBzbyBmdWxsIG9mIGNoYXJhY3Rlci4nXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgICAgICAgIHRleHQ6ICdJbGh5dW4gQ290dGFnZSBpcyBhIHBsYWNlIHdoZXJlIHdlIGhvcGUgdG8gc2hhcmUgdGhlIHRoaW5ncyB0aGF0IHdlIGVuam95LiBXZSBob3BlIHRoYXQgdmlzaXRvcnMgd2lsbCBiZSBhYmxlIHRvIHRha2UgcGxlYXN1cmUgaW4gY291bnRyeSBsaWZlLCBzdXJyb3VuZGVkIGJ5IHRoZSBzb3VuZHMsIHNpZ2h0cyBhbmQgc21lbGxzIG9mIGEgdHJ1bHkgYmVhdXRpZnVsIG5laWdoYm91cmhvb2QuJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICB0eXBlOiAnaW1hZ2UnLFxuICAgICAgICAgICAgdGV4dDogJydcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgdHlwZTogJ3N1YnRpdGxlJyxcbiAgICAgICAgICAgIHRleHQ6ICdBIFdvcmsgaW4gUHJvZ3Jlc3MnXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgICAgICAgIHRleHQ6IFwiV2UgZG9uJ3QgYmVsaWV2ZSB0aGF0IHRoZSByZW5vdmF0aW9uIG9mIElsaHl1biBDb3R0YWdlIGlzIHNvbWV0aGluZyB0aGF0IGhhcyBhIGRlZmluaXRpdmUgZW5kLiBJbiBmYWN0IHdlIGJlbGlldmUgdGhhdCB0aGUgcHJvY2VzcyBpcyBvbmdvaW5nLCBub3Qgb25seSBpbiB0aGUgc2Vuc2UgdGhhdCBhbiBvbGQgc3RydWN0dXJlIHN1Y2ggYXMgdGhpcyBuZWVkcyBjb25zdGFudCBjYXJlIGFuZCBhdHRlbnRpb24sIGJ1dCBhbHNvIGluIHRoZSBzZW5zZSB0aGF0IHdlIGhvcGUgdGhlIGhpc3Rvcnkgb2YgdGhpcyBidWlsZGluZyBpcyBzb21ldGhpbmcgdGhhdCB3aWxsIGNvbnRpbnVlIHRvIGJlIGFkZGVkIHRvLCBib3RoIGJ5IHVzIGFuZCBvdXIgdmlzaXRvcnMuIFdlIHZlcnkgbXVjaCBzZWUgSWxoeXVuIENvdHRhZ2UgYXMgYW4gb3JnYW5pYyBwbGFjZSwgc3Vycm91bmRlZCB3aXRoIGxpZmUgYW5kIHBvc3Nlc3NpbmcgYSBsaWZlIG9mIGl0cyBvd24sIGFuZCB3ZSB3aWxsIGNvbnRpbnVlIHRvIHJlc3BlY3QgaXQgYXMgc3VjaC5cIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICB0eXBlOiAnaW1hZ2UnLFxuICAgICAgICAgICAgdGV4dDogJydcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgdHlwZTogJ3N1YnRpdGxlJyxcbiAgICAgICAgICAgIHRleHQ6ICdPdXIgQmVsaWVmcydcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgICAgICAgdGV4dDogJ1dlIGJlbGlldmUgdGhhdCBJbGh5dW4gQ290dGFnZSBjYW4gYmUgYSBwbGFjZSBmb3IgYW55Ym9keSB0byBjb21lIGFuZCBleHBlcmllbmNlIHRoZSByZWNoYXJnaW5nIGF0bW9zcGhlcmUgb2YgdGhlIGNvdW50cnlzaWRlLiBXZSBiZWxpZXZlIGluIGxpdmluZyBzbG93bHksIHRha2luZyB0aW1lIHRvIGFwcHJlY2lhdGUgdGhlIGpveXMgb2Ygc21hbGwgZGF5LXRvLWRheSB0YXNrcyB3aGljaCB3ZSB1c3VhbGx5IHRha2UgZm9yIGFkdmFudGFnZS4gV2hpbGUgd2UgdHJpZWQgdG8gZml0IElsaHl1biBDb3R0YWdlIHdpdGggZW5vdWdoIGNvbnZlbmllbmNlcyB0byBtYWtlIGFueW9uZSBhdCBob21lLCB3ZSBob3BlIHRoYXQgdmlzaXRvcnMgd2lsbCB0cnkgdG8gZ2V0IGEgdGFzdGUgb2YgbGlmZSBpbiB0aGUgY291bnRyeXNpZGUuJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICB0eXBlOiAndGV4dCcsXG4gICAgICAgICAgICB0ZXh0OiAnV2UgZG8gYmVsaWV2ZSB0aGF0IHRoZSBtYWluIHB1cnBvc2Ugb2YgSWxoeXVuIENvdHRhZ2UgaXMgdG8gcHJvdmlkZSBhIGhlYWxpbmcgZW52aXJvbm1lbnQgZm9yIGd1ZXN0cyB0byB1bndpbmQsIGFuZCBoYXZlIHRyaWVkIHRvIGFjY29tbW9kYXRlIGZvciB0aGlzIGFzIG11Y2ggYXMgcG9zc2libGUuIFdlIGhvcGUgdGhhdCB2aXNpdG9ycyBjYW4gZXNjYXBlIHRoZWlyIGJ1c3kgbGl2ZXMgYW5kIHNsb3cgZG93biB3aXRoIGZyZXNoIGNvdW50cnkgYWlyIGFuZCBuYXR1cmFsIHN1cnJvdW5kaW5ncy4nXG4gICAgICAgIH1cbiAgICBdXG5cbiAgICBkaXZPcmRlci5mb3JFYWNoKChkaXYpID0+IHtcbiAgICAgICAgY29uc3QgbmV3RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIG5ld0Rpdi5jbGFzc0xpc3QuYWRkKGRpdi50eXBlKTtcbiAgICAgICAgbmV3RGl2LnRleHRDb250ZW50ID0gZGl2LnRleHQ7XG4gICAgICAgIGluZm8uYXBwZW5kQ2hpbGQobmV3RGl2KTtcbiAgICB9KVxuXG4gICAgb3VyU3RvcnkuYXBwZW5kQ2hpbGQoc2lkZUJhcik7XG4gICAgb3VyU3RvcnkuYXBwZW5kQ2hpbGQoaW5mbyk7XG59XG5cbmV4cG9ydCB7b3VyU3RvcnlMb2FkfSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvb3Vyc3RvcnkuanNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=