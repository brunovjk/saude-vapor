export default function ScrollToSection(div) {
  window.scrollTo(0, findPosition(document.getElementById(div)));
}
function findPosition(obj) {
  var currenttop = 0;
  if (obj.offsetParent) {
    do {
      currenttop += obj.offsetTop;
    } while ((obj = obj.offsetParent));
    return [currenttop];
  }
}
