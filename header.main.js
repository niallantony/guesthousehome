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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/header.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVhZGVyLm1haW4uanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQTZDOztBQUU3Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsdUNBQXVDLHNEQUFZOztBQUVuRCxZQUFZO0FBQ1o7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekJ1Qzs7QUFFdkM7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLHNEQUFVO0FBQzdCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7Ozs7Ozs7O1VDekVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztVRU5BO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ3Vlc3Rob3VzZWhvbWUvLi9zcmMvaGVhZGVyLmpzIiwid2VicGFjazovL2d1ZXN0aG91c2Vob21lLy4vc3JjL291cnN0b3J5LmpzIiwid2VicGFjazovL2d1ZXN0aG91c2Vob21lL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2d1ZXN0aG91c2Vob21lL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9ndWVzdGhvdXNlaG9tZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2d1ZXN0aG91c2Vob21lL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZ3Vlc3Rob3VzZWhvbWUvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9ndWVzdGhvdXNlaG9tZS93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vZ3Vlc3Rob3VzZWhvbWUvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IG91clN0b3J5TG9hZCB9IGZyb20gXCIuL291cnN0b3J5LmpzXCI7XG5cbmNvbnN0IG1ha2VIZWFkZXIgPSAoKSA9PiB7XG5cbiAgICBjb25zdCBtYWtlQnV0dG9uID0gKGJ1dHRvbklkKSA9PiB7XG4gICAgICAgIGNvbnN0IGxpc3RJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgICAgaGVhZGVyLmFwcGVuZENoaWxkKGxpc3RJdGVtKTtcbiAgICAgICAgY29uc3QgYnV0dG9uSXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBidXR0b25JdGVtLmlkID0gYnV0dG9uSWQ7XG4gICAgICAgIGxpc3RJdGVtLmFwcGVuZENoaWxkKGJ1dHRvbkl0ZW0pO1xuICAgICAgICByZXR1cm4gYnV0dG9uSXRlbTtcbiAgICB9XG5cbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICAgIGhlYWRlci5jbGFzc0xpc3QuYWRkKCdoZWFkZXItYnV0dG9ucycpO1xuICAgIGNvbnN0IG91clN0b3J5ID0gbWFrZUJ1dHRvbignb3VyU3RvcnknKTtcbiAgICBjb25zdCBlbmpveVN0YXkgPSBtYWtlQnV0dG9uKCdlbmpveVN0YXknKTtcbiAgICBjb25zdCBleHBsb3JlQXJlYSA9IG1ha2VCdXR0b24oJ2V4cGxvcmVBcmVhJyk7XG4gICAgb3VyU3RvcnkudGV4dENvbnRlbnQgPSAnT3VyIFN0b3J5JztcbiAgICBlbmpveVN0YXkudGV4dENvbnRlbnQgPSAnRW5qb3kgeW91ciBTdGF5JztcbiAgICBleHBsb3JlQXJlYS50ZXh0Q29udGVudCA9ICdFeHBsb3JlIHRoZSBBcmVhJztcblxuICAgIG91clN0b3J5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgb3VyU3RvcnlMb2FkICk7XG5cbiAgICByZXR1cm4ge2hlYWRlcn07XG59XG5cbmV4cG9ydCB7bWFrZUhlYWRlcn07IiwiaW1wb3J0IHttYWtlSGVhZGVyfSBmcm9tICcuL2hlYWRlci5qcyc7XG5cbmNvbnN0IG91clN0b3J5TG9hZCA9ICgpID0+IHtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcbiAgICBjb250ZW50LmlubmVySFRNTCA9ICcnO1xuICAgIGNvbnN0IGhlYWRlciA9IG1ha2VIZWFkZXIoKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGhlYWRlci5oZWFkZXIpO1xuICAgIGNvbnN0IG91clN0b3J5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgb3VyU3RvcnkuY2xhc3NMaXN0LmFkZCgnb3VyLXN0b3J5Jyk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChvdXJTdG9yeSk7XG5cbiAgICBjb25zdCBzaWRlQmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgc2lkZUJhci5jbGFzc0xpc3QuYWRkKCdzaWRlYmFyJyk7XG4gICAgc2lkZUJhci5pbm5lckhUTUwgPSAnPGVtPklsaHl1biBDb3R0YWdlPC9lbT4nO1xuXG4gICAgY29uc3QgaW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGluZm8uY2xhc3NMaXN0LmFkZCgnaW5mbycpO1xuICAgIGNvbnN0IGRpdk9yZGVyID0gW1xuICAgICAgICB7XG4gICAgICAgICAgICB0eXBlOiAnaW1hZ2UnLFxuICAgICAgICAgICAgdGV4dDogJydcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgdHlwZTogJ3N1YnRpdGxlJyxcbiAgICAgICAgICAgIHRleHQ6ICdXaGF0IGlzIElsaHl1biBDb3R0YWdlPydcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgICAgICAgdGV4dDogJ0lsaHl1biBDb3R0YWdlIGlzIHRoZSB3b3JrIG9mIE5pYWxsIENyYXZlbiBhbmQgU2VvaHllb24gS2ltLiBJbiAyMDIyIHRoZXkgcHVyY2hhc2VkIGEgNzAgeWVhciBvbGQgSGFub2sgaG91c2UgaW4gYSBzbWFsbCB2aWxsYWdlIGNhbGxlZCBHdWdpbC1saSBuZWFyIHRoZSBoaXN0b3JpY2FsIFNpbGxhIGNhcGl0YWwgb2YgS29yZWEsIEd5ZW9uZ2p1LiBXaXRoIGEgZGVlcCByZXNwZWN0IGZvciB0aGUgbmF0dXJhbCBzdXJyb3VuZGluZ3MgYW5kIHRoZSBoaXN0b3J5IG9mIHRoZSBob3VzZSB0aGV5IHdvcmtlZCB0byBtYWtlIGEgcGxhY2Ugd2hlcmUgdGhleSBjb3VsZCBsZWF2ZSB0aGVpciBvd24gaW1wcmludCBpbiBhbiBhcmVhIGFscmVhZHkgc28gZnVsbCBvZiBjaGFyYWN0ZXIuJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICB0eXBlOiAndGV4dCcsXG4gICAgICAgICAgICB0ZXh0OiAnSWxoeXVuIENvdHRhZ2UgaXMgYSBwbGFjZSB3aGVyZSB3ZSBob3BlIHRvIHNoYXJlIHRoZSB0aGluZ3MgdGhhdCB3ZSBlbmpveS4gV2UgaG9wZSB0aGF0IHZpc2l0b3JzIHdpbGwgYmUgYWJsZSB0byB0YWtlIHBsZWFzdXJlIGluIGNvdW50cnkgbGlmZSwgc3Vycm91bmRlZCBieSB0aGUgc291bmRzLCBzaWdodHMgYW5kIHNtZWxscyBvZiBhIHRydWx5IGJlYXV0aWZ1bCBuZWlnaGJvdXJob29kLidcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgdHlwZTogJ2ltYWdlJyxcbiAgICAgICAgICAgIHRleHQ6ICcnXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHR5cGU6ICdzdWJ0aXRsZScsXG4gICAgICAgICAgICB0ZXh0OiAnQSBXb3JrIGluIFByb2dyZXNzJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICB0eXBlOiAndGV4dCcsXG4gICAgICAgICAgICB0ZXh0OiBcIldlIGRvbid0IGJlbGlldmUgdGhhdCB0aGUgcmVub3ZhdGlvbiBvZiBJbGh5dW4gQ290dGFnZSBpcyBzb21ldGhpbmcgdGhhdCBoYXMgYSBkZWZpbml0aXZlIGVuZC4gSW4gZmFjdCB3ZSBiZWxpZXZlIHRoYXQgdGhlIHByb2Nlc3MgaXMgb25nb2luZywgbm90IG9ubHkgaW4gdGhlIHNlbnNlIHRoYXQgYW4gb2xkIHN0cnVjdHVyZSBzdWNoIGFzIHRoaXMgbmVlZHMgY29uc3RhbnQgY2FyZSBhbmQgYXR0ZW50aW9uLCBidXQgYWxzbyBpbiB0aGUgc2Vuc2UgdGhhdCB3ZSBob3BlIHRoZSBoaXN0b3J5IG9mIHRoaXMgYnVpbGRpbmcgaXMgc29tZXRoaW5nIHRoYXQgd2lsbCBjb250aW51ZSB0byBiZSBhZGRlZCB0bywgYm90aCBieSB1cyBhbmQgb3VyIHZpc2l0b3JzLiBXZSB2ZXJ5IG11Y2ggc2VlIElsaHl1biBDb3R0YWdlIGFzIGFuIG9yZ2FuaWMgcGxhY2UsIHN1cnJvdW5kZWQgd2l0aCBsaWZlIGFuZCBwb3NzZXNzaW5nIGEgbGlmZSBvZiBpdHMgb3duLCBhbmQgd2Ugd2lsbCBjb250aW51ZSB0byByZXNwZWN0IGl0IGFzIHN1Y2guXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgdHlwZTogJ2ltYWdlJyxcbiAgICAgICAgICAgIHRleHQ6ICcnXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHR5cGU6ICdzdWJ0aXRsZScsXG4gICAgICAgICAgICB0ZXh0OiAnT3VyIEJlbGllZnMnXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgICAgICAgIHRleHQ6ICdXZSBiZWxpZXZlIHRoYXQgSWxoeXVuIENvdHRhZ2UgY2FuIGJlIGEgcGxhY2UgZm9yIGFueWJvZHkgdG8gY29tZSBhbmQgZXhwZXJpZW5jZSB0aGUgcmVjaGFyZ2luZyBhdG1vc3BoZXJlIG9mIHRoZSBjb3VudHJ5c2lkZS4gV2UgYmVsaWV2ZSBpbiBsaXZpbmcgc2xvd2x5LCB0YWtpbmcgdGltZSB0byBhcHByZWNpYXRlIHRoZSBqb3lzIG9mIHNtYWxsIGRheS10by1kYXkgdGFza3Mgd2hpY2ggd2UgdXN1YWxseSB0YWtlIGZvciBhZHZhbnRhZ2UuIFdoaWxlIHdlIHRyaWVkIHRvIGZpdCBJbGh5dW4gQ290dGFnZSB3aXRoIGVub3VnaCBjb252ZW5pZW5jZXMgdG8gbWFrZSBhbnlvbmUgYXQgaG9tZSwgd2UgaG9wZSB0aGF0IHZpc2l0b3JzIHdpbGwgdHJ5IHRvIGdldCBhIHRhc3RlIG9mIGxpZmUgaW4gdGhlIGNvdW50cnlzaWRlLidcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgICAgICAgdGV4dDogJ1dlIGRvIGJlbGlldmUgdGhhdCB0aGUgbWFpbiBwdXJwb3NlIG9mIElsaHl1biBDb3R0YWdlIGlzIHRvIHByb3ZpZGUgYSBoZWFsaW5nIGVudmlyb25tZW50IGZvciBndWVzdHMgdG8gdW53aW5kLCBhbmQgaGF2ZSB0cmllZCB0byBhY2NvbW1vZGF0ZSBmb3IgdGhpcyBhcyBtdWNoIGFzIHBvc3NpYmxlLiBXZSBob3BlIHRoYXQgdmlzaXRvcnMgY2FuIGVzY2FwZSB0aGVpciBidXN5IGxpdmVzIGFuZCBzbG93IGRvd24gd2l0aCBmcmVzaCBjb3VudHJ5IGFpciBhbmQgbmF0dXJhbCBzdXJyb3VuZGluZ3MuJ1xuICAgICAgICB9XG4gICAgXVxuXG4gICAgZGl2T3JkZXIuZm9yRWFjaCgoZGl2KSA9PiB7XG4gICAgICAgIGNvbnN0IG5ld0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBuZXdEaXYuY2xhc3NMaXN0LmFkZChkaXYudHlwZSk7XG4gICAgICAgIG5ld0Rpdi50ZXh0Q29udGVudCA9IGRpdi50ZXh0O1xuICAgICAgICBpbmZvLmFwcGVuZENoaWxkKG5ld0Rpdik7XG4gICAgfSlcblxuICAgIG91clN0b3J5LmFwcGVuZENoaWxkKHNpZGVCYXIpO1xuICAgIG91clN0b3J5LmFwcGVuZENoaWxkKGluZm8pO1xufVxuXG5leHBvcnQge291clN0b3J5TG9hZH0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2hlYWRlci5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==