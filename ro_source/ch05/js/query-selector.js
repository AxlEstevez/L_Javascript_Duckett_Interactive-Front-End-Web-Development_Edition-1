var el = document.querySelector("li.hot");      // querySelector only returns the first match.
el.className = "cool";

var els = document.querySelectorAll("li.hot");  // querySelectorAll returns a NodeList.
els[1].className = "cool";                      // The third li element is then selected and changed.
