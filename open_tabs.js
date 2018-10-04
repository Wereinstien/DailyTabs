// let open_tabs = document.getElementById('open_tabs');
//
// chrome.storage.sync.get('color', function(data) {
// 	open_tabs.style.backgroundColor = data.color;
// 	open_tabs.setAttribute('value', data.color);
// });

// open_tabs.onclick = function(element) {
//
// 	let n = chrome.windows.getAll();
// 	chrome.windows.create({tabid: n});
//
// 	var linkArray = ['https://google.ca', 'https://amazon.ca', 'https://youtube.ca']; // your links
// 	for (var i = 0; i < linkArray.length; i++) {
// 	    // will open each link in the current window
// 	    chrome.tabs.create({
// 	        url: linkArray[i]
// 	    });
// 	}
//
// 	// window.open('https://google.ca');
// 	// window.open('https://amazon.ca');
// 	//
// 	// let x = chrome.windows.create({'url': "https://google.ca", 'focused': true},
// 	// function(newWindow) {
// 	// 		return newWindow;
// 	// 	});
// 	//
// 	// chrome.tabs.create({'url': "https://amazon.ca", 'selected': false});
//
//
// };
