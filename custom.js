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
	$.when($.getMultiScripts(jsfiles, 'acttheme/js/')).done(function() {
		console.log('Particle loaded');
	});
}

$(document).ready(function() {
	$('#version').append('\
		<i>\
		<span></span>\
		<span></span>\
		<span></span>\
		<span></span>\
		</i>\
	');
	/*$('body').prepend('<div id="particles-js"></div>');
	setTimeout(function(){
		partinit();
	},500);*/
	
	$('body').on('DOMSubtreeModified',function () {
		$('#devicecontainer input[type="checkbox"]').each(function () {
			if ($(this).next('span').length === 0) {
				$('#devicecontainer').contents().filter(function(){return this.nodeType !== 1;}).wrap('<span></span>');
			}
		});
		$('img[src*="/next."]').each(function () {
			if ($(this).next('i').length === 0) {
				$(this).closest('td').addClass('icon');
				$(this).replaceWith('<i class="fa fa-arrow-circle-right" aria-hidden="true"></i>');
			}
		});
		$('img[src*="/equal."]').each(function () {
			if ($(this).next('i').length === 0) {
				$(this).closest('td').addClass('icon');
				$(this).replaceWith('<i class="fa fa-minus" aria-hidden="true"></i>');
			}
		});
		$('img[src*="/down."].lcursor[class*="js-"]').each(function () {
			if ($(this).next('i').length === 0) {
				$(this).closest('td').addClass('icon');
				$(this).replaceWith('<i class="fa fa-arrow-down lcursor js-order-down" aria-hidden="true"></i>');
			}
		});
		$('img[src*="/up."].lcursor[class*="js-"]').each(function () {
			if ($(this).next('i').length === 0) {
				$(this).closest('td').addClass('icon');
				$(this).replaceWith('<i class="fa fa-arrow-up lcursor js-order-up" aria-hidden="true"></i>');
			}
		});
		$('#plantable img[src*="/down."].lcursor').each(function () {
			if ($(this).next('i').length === 0) {
				$(this).closest('td').addClass('icon');
				$(this).replaceWith('<i class="fa fa-arrow-down lcursor" aria-hidden="true"></i>');
			}
		});
		$('#plantable img[src*="/up."].lcursor').each(function () {
			if ($(this).next('i').length === 0) {
				$(this).closest('td').addClass('icon');
				$(this).replaceWith('<i class="fa fa-arrow-up lcursor" aria-hidden="true"></i>');
			}
		});
		$('img[src*="/rename."].lcursor[class*="js-"]').each(function () {
			if ($(this).next('i').length === 0) {
				$(this).closest('td').addClass('icon');
				$(this).replaceWith('<i class="fa fa-pencil-square-o lcursor js-update" aria-hidden="true"></i>');
			}
		});
		$('img[src*="/delete."].lcursor[class*="js-"]').each(function () {
			if ($(this).next('i').length === 0) {
				$(this).closest('td').addClass('icon');
				$(this).replaceWith('<i class="fa fa-trash lcursor js-delete" aria-hidden="true"></i>');
			}
		});
		$('input.js-select-row').each(function () {
			if ($(this).next('span').length === 0) {
				$(this).parent().append('<span></span>');
			}
		});
	});
});
