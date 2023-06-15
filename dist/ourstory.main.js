/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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


const makeHeader = () => {

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

    return {header};
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3Vyc3RvcnkubWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBNkM7O0FBRTdDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx1Q0FBdUMsc0RBQVk7O0FBRW5ELFlBQVk7QUFDWjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6QnVDOztBQUV2QztBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsc0RBQVU7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTs7Ozs7Ozs7VUN6RUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1VFTkE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ndWVzdGhvdXNlaG9tZS8uL3NyYy9oZWFkZXIuanMiLCJ3ZWJwYWNrOi8vZ3Vlc3Rob3VzZWhvbWUvLi9zcmMvb3Vyc3RvcnkuanMiLCJ3ZWJwYWNrOi8vZ3Vlc3Rob3VzZWhvbWUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZ3Vlc3Rob3VzZWhvbWUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2d1ZXN0aG91c2Vob21lL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZ3Vlc3Rob3VzZWhvbWUvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9ndWVzdGhvdXNlaG9tZS93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL2d1ZXN0aG91c2Vob21lL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9ndWVzdGhvdXNlaG9tZS93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgb3VyU3RvcnlMb2FkIH0gZnJvbSBcIi4vb3Vyc3RvcnkuanNcIjtcblxuY29uc3QgbWFrZUhlYWRlciA9ICgpID0+IHtcblxuICAgIGNvbnN0IG1ha2VCdXR0b24gPSAoYnV0dG9uSWQpID0+IHtcbiAgICAgICAgY29uc3QgbGlzdEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgICBoZWFkZXIuYXBwZW5kQ2hpbGQobGlzdEl0ZW0pO1xuICAgICAgICBjb25zdCBidXR0b25JdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGJ1dHRvbkl0ZW0uaWQgPSBidXR0b25JZDtcbiAgICAgICAgbGlzdEl0ZW0uYXBwZW5kQ2hpbGQoYnV0dG9uSXRlbSk7XG4gICAgICAgIHJldHVybiBidXR0b25JdGVtO1xuICAgIH1cblxuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoJ2hlYWRlci1idXR0b25zJyk7XG4gICAgY29uc3Qgb3VyU3RvcnkgPSBtYWtlQnV0dG9uKCdvdXJTdG9yeScpO1xuICAgIGNvbnN0IGVuam95U3RheSA9IG1ha2VCdXR0b24oJ2Vuam95U3RheScpO1xuICAgIGNvbnN0IGV4cGxvcmVBcmVhID0gbWFrZUJ1dHRvbignZXhwbG9yZUFyZWEnKTtcbiAgICBvdXJTdG9yeS50ZXh0Q29udGVudCA9ICdPdXIgU3RvcnknO1xuICAgIGVuam95U3RheS50ZXh0Q29udGVudCA9ICdFbmpveSB5b3VyIFN0YXknO1xuICAgIGV4cGxvcmVBcmVhLnRleHRDb250ZW50ID0gJ0V4cGxvcmUgdGhlIEFyZWEnO1xuXG4gICAgb3VyU3RvcnkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBvdXJTdG9yeUxvYWQgKTtcblxuICAgIHJldHVybiB7aGVhZGVyfTtcbn1cblxuZXhwb3J0IHttYWtlSGVhZGVyfTsiLCJpbXBvcnQge21ha2VIZWFkZXJ9IGZyb20gJy4vaGVhZGVyLmpzJztcblxuY29uc3Qgb3VyU3RvcnlMb2FkID0gKCkgPT4ge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuICAgIGNvbnRlbnQuaW5uZXJIVE1MID0gJyc7XG4gICAgY29uc3QgaGVhZGVyID0gbWFrZUhlYWRlcigpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaGVhZGVyLmhlYWRlcik7XG4gICAgY29uc3Qgb3VyU3RvcnkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBvdXJTdG9yeS5jbGFzc0xpc3QuYWRkKCdvdXItc3RvcnknKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKG91clN0b3J5KTtcblxuICAgIGNvbnN0IHNpZGVCYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBzaWRlQmFyLmNsYXNzTGlzdC5hZGQoJ3NpZGViYXInKTtcbiAgICBzaWRlQmFyLmlubmVySFRNTCA9ICc8ZW0+SWxoeXVuIENvdHRhZ2U8L2VtPic7XG5cbiAgICBjb25zdCBpbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaW5mby5jbGFzc0xpc3QuYWRkKCdpbmZvJyk7XG4gICAgY29uc3QgZGl2T3JkZXIgPSBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIHR5cGU6ICdpbWFnZScsXG4gICAgICAgICAgICB0ZXh0OiAnJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICB0eXBlOiAnc3VidGl0bGUnLFxuICAgICAgICAgICAgdGV4dDogJ1doYXQgaXMgSWxoeXVuIENvdHRhZ2U/J1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICB0eXBlOiAndGV4dCcsXG4gICAgICAgICAgICB0ZXh0OiAnSWxoeXVuIENvdHRhZ2UgaXMgdGhlIHdvcmsgb2YgTmlhbGwgQ3JhdmVuIGFuZCBTZW9oeWVvbiBLaW0uIEluIDIwMjIgdGhleSBwdXJjaGFzZWQgYSA3MCB5ZWFyIG9sZCBIYW5vayBob3VzZSBpbiBhIHNtYWxsIHZpbGxhZ2UgY2FsbGVkIEd1Z2lsLWxpIG5lYXIgdGhlIGhpc3RvcmljYWwgU2lsbGEgY2FwaXRhbCBvZiBLb3JlYSwgR3llb25nanUuIFdpdGggYSBkZWVwIHJlc3BlY3QgZm9yIHRoZSBuYXR1cmFsIHN1cnJvdW5kaW5ncyBhbmQgdGhlIGhpc3Rvcnkgb2YgdGhlIGhvdXNlIHRoZXkgd29ya2VkIHRvIG1ha2UgYSBwbGFjZSB3aGVyZSB0aGV5IGNvdWxkIGxlYXZlIHRoZWlyIG93biBpbXByaW50IGluIGFuIGFyZWEgYWxyZWFkeSBzbyBmdWxsIG9mIGNoYXJhY3Rlci4nXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgICAgICAgIHRleHQ6ICdJbGh5dW4gQ290dGFnZSBpcyBhIHBsYWNlIHdoZXJlIHdlIGhvcGUgdG8gc2hhcmUgdGhlIHRoaW5ncyB0aGF0IHdlIGVuam95LiBXZSBob3BlIHRoYXQgdmlzaXRvcnMgd2lsbCBiZSBhYmxlIHRvIHRha2UgcGxlYXN1cmUgaW4gY291bnRyeSBsaWZlLCBzdXJyb3VuZGVkIGJ5IHRoZSBzb3VuZHMsIHNpZ2h0cyBhbmQgc21lbGxzIG9mIGEgdHJ1bHkgYmVhdXRpZnVsIG5laWdoYm91cmhvb2QuJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICB0eXBlOiAnaW1hZ2UnLFxuICAgICAgICAgICAgdGV4dDogJydcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgdHlwZTogJ3N1YnRpdGxlJyxcbiAgICAgICAgICAgIHRleHQ6ICdBIFdvcmsgaW4gUHJvZ3Jlc3MnXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgICAgICAgIHRleHQ6IFwiV2UgZG9uJ3QgYmVsaWV2ZSB0aGF0IHRoZSByZW5vdmF0aW9uIG9mIElsaHl1biBDb3R0YWdlIGlzIHNvbWV0aGluZyB0aGF0IGhhcyBhIGRlZmluaXRpdmUgZW5kLiBJbiBmYWN0IHdlIGJlbGlldmUgdGhhdCB0aGUgcHJvY2VzcyBpcyBvbmdvaW5nLCBub3Qgb25seSBpbiB0aGUgc2Vuc2UgdGhhdCBhbiBvbGQgc3RydWN0dXJlIHN1Y2ggYXMgdGhpcyBuZWVkcyBjb25zdGFudCBjYXJlIGFuZCBhdHRlbnRpb24sIGJ1dCBhbHNvIGluIHRoZSBzZW5zZSB0aGF0IHdlIGhvcGUgdGhlIGhpc3Rvcnkgb2YgdGhpcyBidWlsZGluZyBpcyBzb21ldGhpbmcgdGhhdCB3aWxsIGNvbnRpbnVlIHRvIGJlIGFkZGVkIHRvLCBib3RoIGJ5IHVzIGFuZCBvdXIgdmlzaXRvcnMuIFdlIHZlcnkgbXVjaCBzZWUgSWxoeXVuIENvdHRhZ2UgYXMgYW4gb3JnYW5pYyBwbGFjZSwgc3Vycm91bmRlZCB3aXRoIGxpZmUgYW5kIHBvc3Nlc3NpbmcgYSBsaWZlIG9mIGl0cyBvd24sIGFuZCB3ZSB3aWxsIGNvbnRpbnVlIHRvIHJlc3BlY3QgaXQgYXMgc3VjaC5cIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICB0eXBlOiAnaW1hZ2UnLFxuICAgICAgICAgICAgdGV4dDogJydcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgdHlwZTogJ3N1YnRpdGxlJyxcbiAgICAgICAgICAgIHRleHQ6ICdPdXIgQmVsaWVmcydcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgICAgICAgdGV4dDogJ1dlIGJlbGlldmUgdGhhdCBJbGh5dW4gQ290dGFnZSBjYW4gYmUgYSBwbGFjZSBmb3IgYW55Ym9keSB0byBjb21lIGFuZCBleHBlcmllbmNlIHRoZSByZWNoYXJnaW5nIGF0bW9zcGhlcmUgb2YgdGhlIGNvdW50cnlzaWRlLiBXZSBiZWxpZXZlIGluIGxpdmluZyBzbG93bHksIHRha2luZyB0aW1lIHRvIGFwcHJlY2lhdGUgdGhlIGpveXMgb2Ygc21hbGwgZGF5LXRvLWRheSB0YXNrcyB3aGljaCB3ZSB1c3VhbGx5IHRha2UgZm9yIGFkdmFudGFnZS4gV2hpbGUgd2UgdHJpZWQgdG8gZml0IElsaHl1biBDb3R0YWdlIHdpdGggZW5vdWdoIGNvbnZlbmllbmNlcyB0byBtYWtlIGFueW9uZSBhdCBob21lLCB3ZSBob3BlIHRoYXQgdmlzaXRvcnMgd2lsbCB0cnkgdG8gZ2V0IGEgdGFzdGUgb2YgbGlmZSBpbiB0aGUgY291bnRyeXNpZGUuJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICB0eXBlOiAndGV4dCcsXG4gICAgICAgICAgICB0ZXh0OiAnV2UgZG8gYmVsaWV2ZSB0aGF0IHRoZSBtYWluIHB1cnBvc2Ugb2YgSWxoeXVuIENvdHRhZ2UgaXMgdG8gcHJvdmlkZSBhIGhlYWxpbmcgZW52aXJvbm1lbnQgZm9yIGd1ZXN0cyB0byB1bndpbmQsIGFuZCBoYXZlIHRyaWVkIHRvIGFjY29tbW9kYXRlIGZvciB0aGlzIGFzIG11Y2ggYXMgcG9zc2libGUuIFdlIGhvcGUgdGhhdCB2aXNpdG9ycyBjYW4gZXNjYXBlIHRoZWlyIGJ1c3kgbGl2ZXMgYW5kIHNsb3cgZG93biB3aXRoIGZyZXNoIGNvdW50cnkgYWlyIGFuZCBuYXR1cmFsIHN1cnJvdW5kaW5ncy4nXG4gICAgICAgIH1cbiAgICBdXG5cbiAgICBkaXZPcmRlci5mb3JFYWNoKChkaXYpID0+IHtcbiAgICAgICAgY29uc3QgbmV3RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIG5ld0Rpdi5jbGFzc0xpc3QuYWRkKGRpdi50eXBlKTtcbiAgICAgICAgbmV3RGl2LnRleHRDb250ZW50ID0gZGl2LnRleHQ7XG4gICAgICAgIGluZm8uYXBwZW5kQ2hpbGQobmV3RGl2KTtcbiAgICB9KVxuXG4gICAgb3VyU3RvcnkuYXBwZW5kQ2hpbGQoc2lkZUJhcik7XG4gICAgb3VyU3RvcnkuYXBwZW5kQ2hpbGQoaW5mbyk7XG59XG5cbmV4cG9ydCB7b3VyU3RvcnlMb2FkfSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvb3Vyc3RvcnkuanNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=