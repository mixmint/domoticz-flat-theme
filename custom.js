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
function getWidth(txt, fontname, fontsize){
    if(getWidth.c === undefined){
        getWidth.c=document.createElement('canvas');
        getWidth.ctx=getWidth.c.getContext('2d');
    }
    getWidth.ctx.font = fontsize + ' ' + fontname;
    return getWidth.ctx.measureText(txt).width;
}

var whatToObserve = {childList: true, attributes: true, subtree: true, attributeOldValue: true, attributeFilter: ['class', 'style']};
var mutationObserver = new MutationObserver(function(mutationRecords) {
	$.each(mutationRecords, function(index, mutationRecord) {
		if (mutationRecord.type === 'childList') {
			if (mutationRecord.addedNodes.length > 0) {
				$('#devicecontainer input[type="checkbox"],img[src*="/rename."].lcursor[class*="js-"]').each(function () {
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
				$('#plantable img[src*="/down."].lcursor:not([class*="js-"])').each(function () {
					if ($(this).next('i').length === 0) {
						$(this).closest('td').addClass('icon');
						$(this).replaceWith('<i class="fa fa-arrow-down lcursor" aria-hidden="true"></i>');
					}
				});
				$('#plantable img[src*="/up."].lcursor:not([class*="js-"])').each(function () {
					if ($(this).next('i').length === 0) {
						$(this).closest('td').addClass('icon');
						$(this).replaceWith('<i class="fa fa-arrow-up lcursor" aria-hidden="true"></i>');
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
				$('table:not(#tempwidgets) td#bigtext').each(function () {
					if ($(this).not('.marquee') && getWidth($(this).text()) + 10 > getWidth($(this))) {
						if ($(this).children('span').length === 0) {
							$(this).contents().filter(function(){return this.nodeType !== 1;}).wrap('<span style="padding-left: calc(100% + ' + getWidth($(this).text()) + 'px); margin-right: -' + 2 * getWidth($(this).text()) + 'px;"></span>');
						} else {
							$(this).children('span').attr('style','padding-left: calc(100% + ' + getWidth($(this).text()) + 'px); margin-right: -' + 2 * getWidth($(this).text()) + 'px;');
						}
						$(this).addClass('marquee');
					}
				});
				$('input.js-select-row').each(function () {
					if ($(this).next('span').length === 0) {
						$(this).parent().append('<span></span>');
					}
				});
			} else if (mutationRecord.removedNodes.length > 0) {
				//console.log('DOM node removed, do something');
			}
		} else if (mutationRecord.type === 'attributes') {
			if (mutationRecord.attributeName === 'class') {
				//console.log('class changed, do something');
			}
		}
	});
});

$(document).ready(function() {
	mutationObserver.observe(document.body, whatToObserve);
});
