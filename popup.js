
window.onload=function() {
	chrome.storage.sync.get(null, function(items) {

		let ul = document.getElementById('web_list');

		let keys = Object.keys(items);

		for (let key in keys) {
			let li = document.createElement('li');
			let check = document.createElement('input');
			let l_name = document.createElement("a");

			check.setAttribute('type', 'checkbox');

			l_name.textContent = keys[key];
			l_name.setAttribute('href', items[keys[key]]);
			l_name.setAttribute('target', '_blank');

			li.appendChild(check);
			li.appendChild(l_name);
			ul.appendChild(li);

		}

	});

	let check_all = document.getElementById('check_all');
	check_all.addEventListener('click', function() {
		let lis = document.getElementById("web_list").getElementsByTagName("input");

		for (let i = 0; i < lis.length; i++) {
			lis[i].checked = this.checked;
		}

	});

	document.getElementById('open_tabs').addEventListener('click', function() {
		let li_list = document.getElementById('web_list').getElementsByTagName('li');

		for (let li = 1; li < li_list.length; li++) {
			if (li_list[li].getElementsByTagName('input')[0].checked) {
				chrome.tabs.create({
					url: li_list[li].getElementsByTagName('a')[0].href
					});
			}
		}

	});

}
