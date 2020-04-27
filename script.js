'use strict';

const urlBase = 'https://api.gbif.org/v1/';
const urlEnumerationBasic = 'enumeration/basic';
const url$ = 'grscicoll/person/';
const ul = document.querySelector('ul');
const ol = document.querySelector('ol');

axios.get(urlBase + urlEnumerationBasic).then(function (response) {
	const arr = response.data;
	arr.forEach((element, i, res) => {
		let li = document.createElement('li');
		li.textContent = `${res[i]}`;
		ul.append(li);
	});

});

axios.get(urlBase + url$).then(function (response) {
	const arr = response.data.results;

	arr.forEach((element, i, res) => {
		JSON.stringify(element);
		let li = document.createElement('li');
		li.textContent = `${JSON.stringify(
			element.firstName + ' - ' + element.email
		)}`;
		ol.append(li);
	});

 });

const test = new class Service {
	constructor(url) {
		url = 'enumeration/basic';
		axios.get(urlBase + url).then(function (response) {
			console.log(response);
			const arr = response.data;
			console.log(arr);
			arr.forEach((element, i, res) => {
				let li = document.createElement('li');
				li.textContent = `${res[i]}`;
				ul.append(li);
			});
		});
	}
};

