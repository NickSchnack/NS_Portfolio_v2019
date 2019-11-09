//************************************//
// JAVASCRIPT FUNCTIONS WHILE LOADING //
//************************************//

/* Hold all animations until page loads */
document.body.classList.add('-js-loading');
document.body.classList.add('-js-enabled');
window.addEventListener("load", showPage);
function showPage() {
    document.body.classList.remove('-js-loading');

    /* Logging */
    var currentdate = new Date();
    var currentMS = currentdate.getMilliseconds();
    console.log("\nPage is ready..." + currentMS);
    //*/
}
