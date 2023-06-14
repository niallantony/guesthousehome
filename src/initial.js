const initialLoad = () => {

const makeButton = (buttonId) => {
    const listItem = document.createElement('li');
    header.appendChild(listItem);
    const buttonItem = document.createElement('button');
    buttonItem.id = buttonId;
    listItem.appendChild(buttonItem);
    return buttonItem;
}
const content = document.getElementById('content');

const header = document.createElement('ul');
header.classList.add('header-buttons');
const ourStory = makeButton('ourStory');
const enjoyStay = makeButton('enjoyStay');
const exploreArea = makeButton('exploreArea');
ourStory.textContent = 'Our Story';
enjoyStay.textContent = 'Enjoy your Stay';
exploreArea.textContent = 'Explore the Area';

// ourStory.addEventListener('click', );
// enjoyStay.addEventListener('click', );
// exploreArea.addEventListener('click', );

const container = document.createElement('div');
container.classList.add('container');
const title = document.createElement('div');
title.classList.add('title');
title.innerHTML = '<em>ilhyeon cottage <hr><span class="korean">일현가옥</span></em>';
container.appendChild(title);

content.appendChild(header);
content.appendChild(container);
}

export {initialLoad};