import './css/style.css';
import makeBasicPage from './js/makeBasicPage';
import { homePage } from './js/homePage';
import addButtonEvents from './js/addButtonEvents';
import { makeElementWithID } from './js/easyFx';

const Container = makeElementWithID('div', 'content')
document.body.appendChild(Container)
makeBasicPage()
homePage()
addButtonEvents()