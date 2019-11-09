//*****************************//
// JAVASCRIPT GLOBAL VARIABLES //
//*****************************//

// Required global variables
var pageScrolled = false;
var pageResized = false;

// Required element variables (Project Accent)
var accentLayer1_height = 0;
var accentLayer2_height = 0;
var accentLayer1_img_width = 0;

//**********************//
// JAVASCRIPT MAIN FILE //
//**********************//




//**********************//
// JAVASCRIPT FUNCTIONS //
//**********************//

// Check for IE //
function IE_Edge_check() {

    // detect IE8 and above, and Edge
    if (document.documentMode || /Edge/.test(navigator.userAgent)) {
        return true;
    }
    else {
        return false;
    }

}

// Script which will execute on page resize //
function onPageResize() {

    // While scrolling, adjust the accent on the Projects page //
    pageResized = true;

}

// Script which will execute on page scroll //
function onPageScroll() {

    // While scrolling, adjust the accent on the Projects page //
    scrollProjectAccent();

}

// Adjusts the accent on the Projects page //
function scrollProjectAccent() {

    // Only apply accent scroll when not IE/Edge
    if (IE_Edge_check() === false) {

        // Set global variables
        var accentLayer1_img_pos = "";

        // Get Accent Elements
        var accentLayer1 = document.getElementById('projectAccentLayer1');
        var accentLayer2 = document.getElementById('projectAccentLayer2');
        var accentLayer1_img = document.getElementById('projectAccentLayer1_img');

        // Get and store HEIGHTS / WIDTHS
        if (pageScrolled !== true) {

            // Set variables
            pageScrolled = true;
            accentLayer1_height = 0;
            accentLayer2_height = 0;
            accentLayer1_img_width = 0;

            // Get original HEIGHT properties
            accentLayer1_height      = parseInt(window.getComputedStyle(accentLayer1, null).getPropertyValue("height"));
            accentLayer2_height      = parseInt(window.getComputedStyle(accentLayer2, null).getPropertyValue("height"));

            // Get image's WIDTH property
            accentLayer1_img_pos     = accentLayer1_img.getBoundingClientRect();
            accentLayer1_img_width   = accentLayer1_img_pos.width;
        }
        else if (pageResized) { // if page was resized, the heights must be calculated again
            accentLayer1_height      = parseInt(window.getComputedStyle(accentLayer1, null).getPropertyValue("height"));
            accentLayer2_height      = parseInt(window.getComputedStyle(accentLayer2, null).getPropertyValue("height"));
            accentLayer1_img_pos     = accentLayer1_img.getBoundingClientRect();
            accentLayer1_img_width   = accentLayer1_img_pos.width;
            pageResized = false;
        }

        // Get Accent Offsets
        var accentLayer1_offset = getElementYOffset(accentLayer1);

        // Get Scrollbar Percent
        var scrollPercent = getScrollPercent() / 100;

        // Adjust BOTTOM LAYER DIV to appropriate FIXED position by changing "TOP" property
        accentLayer1.style.setProperty("top", accentLayer1_offset + "px");

        // Adjust TOP LAYER DIV to scroll down the accent image by changing "TOP" property
        var accentLayer2_newOffset = (accentLayer1_height - accentLayer2_height) * scrollPercent;
        accentLayer2.style.setProperty("top", accentLayer1_offset + accentLayer2_newOffset + "px");

        // Adjust highlight (layer 2) width
        accentLayer2.style.setProperty("width", accentLayer1_img_width + "px");

        // Adjust highlight (layer 2) opacity
        var scrollDiff = Math.abs(scrollPercent - 0.5);
        if (scrollDiff > .48)      accentLayer2.style.setProperty("opacity", ".00");
        else if (scrollDiff > .46) accentLayer2.style.setProperty("opacity", ".02");
        else if (scrollDiff > .44) accentLayer2.style.setProperty("opacity", ".04");
        else if (scrollDiff > .42) accentLayer2.style.setProperty("opacity", ".06");
        else if (scrollDiff > .40) accentLayer2.style.setProperty("opacity", ".08");
        else if (scrollDiff > .38) accentLayer2.style.setProperty("opacity", ".10");
        else if (scrollDiff > .36) accentLayer2.style.setProperty("opacity", ".13");
        else if (scrollDiff > .34) accentLayer2.style.setProperty("opacity", ".16");
        else if (scrollDiff > .32) accentLayer2.style.setProperty("opacity", ".19");
        else if (scrollDiff > .30) accentLayer2.style.setProperty("opacity", ".23");
        else if (scrollDiff > .28) accentLayer2.style.setProperty("opacity", ".27");
        else if (scrollDiff > .26) accentLayer2.style.setProperty("opacity", ".31");
        else if (scrollDiff > .24) accentLayer2.style.setProperty("opacity", ".35");
        else if (scrollDiff > .22) accentLayer2.style.setProperty("opacity", ".39");
        else if (scrollDiff > .20) accentLayer2.style.setProperty("opacity", ".40");
        else if (scrollDiff > .18) accentLayer2.style.setProperty("opacity", ".40");
        else if (scrollDiff > .16) accentLayer2.style.setProperty("opacity", ".40");
        else if (scrollDiff > .14) accentLayer2.style.setProperty("opacity", ".40");
        else if (scrollDiff > .12) accentLayer2.style.setProperty("opacity", ".40");
        else if (scrollDiff > .10) accentLayer2.style.setProperty("opacity", ".40");
        else                       accentLayer2.style.setProperty("opacity", ".40");
    }
 }

// Returns the scrollbar's percentage //
function getScrollPercent() {
    var h = document.documentElement,
        b = document.body,
        st = 'scrollTop',
        sh = 'scrollHeight';
    return (h[st]||b[st]) / ((h[sh]||b[sh]) - h.clientHeight) * 100;
}

// Returns an element's Y offset //
function getElementYOffset() {
    var vertical_position = 0;
    if (pageYOffset)//usual
        vertical_position = pageYOffset;
    else if (document.documentElement.clientHeight)//ie
        vertical_position = document.documentElement.scrollTop;
    else if (document.body)//ie quirks
        vertical_position = document.body.scrollTop;
    return vertical_position;
}

// Expand "Tech Skills" on Skills page when "technical" button is clicked
function expandSkills_Technical() {
    document.body.classList.remove('-expandNonTech');
    document.body.classList.add('-expandTech');
}

// Expand "Non Tech Skills" on Skills page when "non-technical" button is clicked
function expandSkills_NonTechnical() {
    document.body.classList.remove('-expandTech');
    document.body.classList.add('-expandNonTech');
}

// Expand "Tech Skills" on Skills page when "technical" button is clicked
function collapseSkills() {
    document.body.classList.remove('-expandTech');
    document.body.classList.remove('-expandNonTech');
}












/*
// ClickProjectThumb <== needs a description //
function clickProjectThumb(div) {

    // Get the element's class list //
    var className = div.getAttribute("class");

    // Get a class list //
    if(className.includes("project-selected")) {
        div.classList.add("project-unselected");
        div.classList.remove("project-selected");
    }
    else{
        // Remove class from all other divs //
        var elements = document.getElementsByClassName('project-selected');
        for (var i = elements.length-1; i > -1; i--) {
            elements[i].classList.remove('project-selected');
        }

        // Select the new project
        div.classList.add("project-selected");
        div.classList.remove("project-unselected");
    }
}
*/

// Toggle the overlay //
// Instead of navigating to menu.html, this function imposes an overlay on top of the existing page //
function toggleOverlayMenu(e) {

    // Prevent browser from navigating to menu.html
    e.preventDefault();

    // Logging activity
    var currentdate = new Date();
    var currentMS = currentdate.getMilliseconds();
    console.log("Show overlay " + currentMS);

    // Get the element's class list //
    var className = document.body.getAttribute("class");

    // Toggle show overlay class //
    var n = className.indexOf("show-overlay",0);
    console.log("Show overlay " + n);
    if (n === -1) {
        document.body.classList.add('show-overlay')
    }
    else {
        document.body.classList.remove('show-overlay')
    }
}