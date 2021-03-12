import _ from 'lodash';
import './style.css';
import Icon from './icon.png';

import Data from './data.xml';
import Notes from './data.csv';
import Info from './data.json';

import toml from './data.toml';
import yaml from './data.yaml';
import json from './data.json5';

console.log(toml.title);
console.log(toml.owner.name);

console.log(yaml.title);
console.log(yaml.owner.name);

console.log(json.title);
console.log(json.owner.name);


function component() {
	const element = document.createElement('div');

	// Using Lodash
	element.innerHTML = _.join(['Hello', 'Webpack!'], ' ');
	element.classList.add('hello');

	// Adding the image to the element
	const myIcon = new Image();
	myIcon.src = Icon;
	element.appendChild(myIcon);

	// Import data files
	console.log(Data);
	console.log(Notes);
	console.log(Info);

	return element;
}

document.body.appendChild(component());