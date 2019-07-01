var __lastScroll = 0;
var __lastScrollTimeout = undefined;

$(window).scroll((e) => {
    // Track whether the menu should be shown.
    // Reset our timeout
    if (__lastScrollTimeout != undefined)
        clearTimeout(__lastScrollTimeout);
    let newScroll = $(this).scrollTop();
    if (newScroll > __lastScroll) {
        // We scrolled down. Hide the element.
        $('#topbar').css('top', '-100px');
    }
    else {
        // We scrolled up, show our menu, but faster.
        $('#topbar').css('top', '0px');
    }
    __lastScroll = newScroll;
    __lastScrollTimeout = setTimeout(() => {
        $('#topbar').css('top', '0px');
    }, 2000);

    // Check that we have our necessary class added depending on where we are scrolled
    if (newScroll <= 0) {
        if ($('#topbar').hasClass('section-topbar--scrolled'))
            $('#topbar').removeClass('section-topbar--scrolled');
    }
    else if (!$('#topbar').hasClass('section-topbar--scrolled'))
        $('#topbar').addClass('section-topbar--scrolled');
})

function replaceSVG(a_identifier, callback) {
    $(a_identifier).each(function() {
        var $img = $(this);
        var imgID = $img.attr('id');
        var imgClass = $img.attr('class');
        var imgURL = $img.attr('src');

        $.get(imgURL, function(data) {
            // Get the SVG tag, ignore the rest
            var $svg = $(data).find('svg');

            // Add replaced image's ID to the new SVG
            if (typeof imgID !== 'undefined') {
                $svg = $svg.attr('id', imgID);
            }
            // Add replaced image's classes to the new SVG
            if (typeof imgClass !== 'undefined') {
                $svg = $svg.attr('class', imgClass + '');
            }

            // Remove any invalid XML tags as per http://validator.w3.org
            $svg = $svg.removeAttr('xmlns:a');

            // Replace image with new SVG
            $img.replaceWith($svg);
            callback();
        }, 'xml');
    });
}

function replaceSubSVG(a_identifier, callback) {
    $(a_identifier).each(function() {
        var $img = $(this);
        var imgID = $img.attr('id');
        var imgClass = $img.attr('class');
        var imgURL = $img.attr('href');
        var transform = $img.attr('transform');
        var imgWidth = $img.attr('width');
        var imgHeight = $img.attr('height');

        $.get(imgURL, function(data) {
            // Get the SVG tag, ignore the rest
            var $svg = $(data).find('svg');

            // Add replaced image's ID to the new SVG
            if (typeof imgID !== 'undefined') {
                $svg = $svg.attr('id', imgID);
            }
            // Add replaced image's classes to the new SVG
            if (typeof imgClass !== 'undefined') {
                $svg = $svg.attr('class', imgClass);
            }
            if (typeof transform !== 'undefined') {
                $svg = $svg.attr('transform', transform);
            }

            $svg = $svg.attr('viewBox', '0 0 ' + imgWidth + ' ' + imgHeight);

            // Remove any invalid XML tags as per http://validator.w3.org
            $svg = $svg.removeAttr('xmlns:a');

            // Replace image with new SVG
            $img.replaceWith($svg);

            callback();
        }, 'xml');
    });
}

replaceSVG('img.svg', () => {});


// Function for loading asynchronous artwork.
$('.section-art__include .placeholder').click(function() {
    let el = $(this).parent();
    let loadRef = el.attr('loadref');
    if (typeof loadRef !== 'undefined') {
        $.get(loadRef, (data) => {
            el.find('.placeholder').html(data);
        });
    }
})
