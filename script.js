window.myJQuery = $;
window.myTimeEl = document.createElement('div');
document.body.appendChild(window.myTimeEl);
window.myTimeEl.style.position = 'absolute';
window.myTimeEl.style.top='565px';
window.myTimeEl.style.right='330px';
window.myTimeEl.style.textAlign='right';
window.myTimeEl.style.fontSize='2em';
window.myTimeEl.style.textShadow='0 0 4px #fff';
window.myTimeEl.style.fontWeight='bold';
window.myTimeEl.style.zIndex = 100;
// $('.map-controls').hide();
// $('.waze-marker-icon').hide();
// $('.waze-marker-shadow-container').hide();

var d = new Date();
//d.setHours(d.getHours() - 3);
window.myTimeEl.innerHTML = d.toDateString().replace(/\w+ /, '') + '<br>' + d.toTimeString().replace(/ .*/, '').replace(/:\d+$/,'');

function checkRefresh() {
	var d = new Date();
	//d.setHours(d.getHours() - 3);
	var s = d.getSeconds();
	var m = d.getMinutes();
	if (m%2 != 0 && (s == 0 || s == 5)) {
		var el = window.myJQuery('span[class="widget-layer-toggle-bar"]');
		el.parentElement.click();
	}
	window.myTimeEl.innerHTML = d.toDateString().replace(/\w+ /, '') + '<br>' + d.toTimeString().replace(/ .*/, '').replace(/:\d+$/,'');
}

setInterval(checkRefresh, 1000);
