import './style.css';
import makeBasicPage from './makeBasicPage';
import { addMenuCards } from './menuPage';
import { makeElementWithClass } from './easyFx';

const content = document.querySelector('#content')
const homeButton = document.querySelector('#home')
const menuButton = document.querySelector('#menu')
const contactButton = document.querySelector('#menu')

makeBasicPage()