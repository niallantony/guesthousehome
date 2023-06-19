import {makeHeader} from './header.js';

const initialLoad = () => {
    const content = document.getElementById('content');
    content.innerHtml = '';
    const header = makeHeader();
    const container = document.createElement('div');
    container.classList.add('container');
    const title = document.createElement('div');
    title.classList.add('title');
    title.innerHTML = '<em>ilhyeon cottage <hr><span class="korean">일현가옥</span></em>';
    container.appendChild(title);

    content.appendChild(header.header);
    content.appendChild(container);
}

export {initialLoad};