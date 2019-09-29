function img2class() {
	$('#img > img[src*="_On"]').each(function(i, elem){
		console.log(elem);
		$('img[src*="_On"]').replaceWith('<div class="online"></div>');
	});
	$('#img > img[src*="_Off"]').each(function(i, elem){
		console.log(elem);
		$('img[src*="_Off"]').replaceWith('<div class="offline"></div>');
	});
	$('img[src*="add."]').each(function(i, elem){
		console.log(elem);
		$('img[src*="add."]').replaceWith('<span class="test"></span>');
	});
}

$.getMultiScripts = function(arr, path) {
	var _arr = jQuery.map(arr, function(scr) {
		return jQuery.getScript((path||"") + scr);
	});
	_arr.push(jQuery.Deferred(function(deferred){
		jQuery(deferred.resolve);
	}));
	return jQuery.when.apply(jQuery, _arr);
}

function partinit() {
	var jsfiles = ['particles.min.js','particles-settings.js'];
	$.getMultiScripts(jsfiles, 'acttheme/js/').done(function() {
		console.log('Particle loaded');
	});
}

$(document).ready(function() {
	$('#version').append('\
		<span></span>\
		<span></span>\
		<span></span>\
		<span></span>\
	');
	$('body').prepend('<div id="particles-js"></div>');
	setTimeout(function(){
		partinit();
	},500);
	if ($('img.lcursor[src*="remote"]')) $('td#img2').attr('class','remote');
// 	$('body').on('click', '.lcursor', function() {
// 		$('img[src*="_On"]').each(function(i, elem){
// 			$(this).parent('#img').attr('class','online');
// 		});
// 		$('img[src*="_Off"]').each(function(i, elem){
// 			$(this).parent('#img').attr('class','offline');
// 		});
// 	});
});
