// window.js
// created by redwoodsteve
// https://github.com/redwoodsteve/windowJS
function mask(url, replace) {
    var page = window.open(); //Open a new window
    page.document.open(); //Open the document
    page.document.write('<html><iframe src="' + url + '" style="position: fixed;top: 0px;bottom: 0px;right: 0px;width: 100%;border: none;margin: 0;padding: 0;overflow: hidden;z-index: 999999;height: 100%;"></iframe></html>'); //Write an IFrame into the new tab
    window.location.replace(replace); //Replace the current tab
    page.document.close();
    document.close()
}
