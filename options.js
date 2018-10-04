'use strict';

//chrome.storage.sync.clear();

window.onload=function() {

	let ul = document.getElementById('web_list');

	ul.setAttribute('list-style', 'none');

	document.getElementById("b_add").addEventListener("click", function() {

		let name = document.getElementById("name").value;
		let url = document.getElementById("url").value;

		if (!url || !name) {
			alert("Enter a valid url and name.");
			return 0;
		}

		url = "https://" + url;

		chrome.storage.sync.set({[name] : url});

		ul.appendChild(create_li(name, url, ul));


	});

	chrome.storage.sync.get(null, function(items) {

		let keys = Object.keys(items);

		for (let key in keys) {
			ul.appendChild(create_li(keys[key], items[keys[key]], ul));
		}
	});

}

function create_li(name, url, ul) {

	let li = document.createElement('li');
	let l_name = document.createElement('a');
	let u_full = document.createElement('a');

	l_name.textContent = name;
	l_name.setAttribute('margin-left', '10px');

	u_full.textContent = '(' + url + ')';
	u_full.setAttribute('href', url);
	u_full.setAttribute('target', '_blank');

	let del = document.createElement('button');
	del.onclick = function() {
		ul.removeChild(li);
		chrome.storage.sync.remove(name);
	};
	del.textContent = 'del';

	li.appendChild(del);
	li.appendChild(l_name);
	li.appendChild(u_full);
	return li;
}
