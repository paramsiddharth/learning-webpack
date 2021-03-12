import _ from 'lodash';
import printMe from './print.js';

function component() {
	const element = document.createElement('div');
	const btn = document.createElement('button');

	// Using Lodash
	element.textContent = _.join(['Hello', 'Webpack!'], ' ');
	
	
	btn.textContent = 'Click me and check the console!';
	btn.onclick = printMe;

	element.appendChild(btn);

	return element;
}

document.body.appendChild(component());