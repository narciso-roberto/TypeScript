"use strict";
const a = document.getElementById("origamid");
if (a instanceof HTMLAnchorElement) {
    a.href = a.href.replace("http://", "https://");
    console.log(a);
}
