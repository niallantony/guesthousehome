import { initialLoad } from "./initial";
import './style.css';

function createContent() {
    const content = document.createElement('div');
    content.id = 'content';

    return content
}

document.body.appendChild(createContent());

initialLoad();