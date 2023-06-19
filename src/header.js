import { ourStoryLoad } from "./ourstory.js";
import { enjoyStayLoad } from "./enjoystay.js";
import { exploreLoad } from "./explore.js";
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

    ourStory.addEventListener('click', ourStoryLoad );
    enjoyStay.addEventListener('click', enjoyStayLoad );
    exploreArea.addEventListener('click', exploreLoad );

    return {header};
}

export {makeHeader};