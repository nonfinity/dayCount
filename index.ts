// Import stylesheets
import './style.css';
import * as dc from './dayCount'

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

let b: Date = new Date(Date.UTC(2019,4,1))
let e: Date = new Date(Date.UTC(2019,7,31))

console.log(dc.monthsBetween(b,e))
console.log('')
console.log(dc.dateSpread(b,e,'month'))