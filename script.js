"use strict";
// interface Doom{
//   a: HTMLAnchorElement
//   div: HTMLDivElement
//   p: HTMLParagraphElement
// }
function soObjt(obj, a) {
    if (a in obj) {
        console.log("Existe ", a, " em obj");
    }
}
soObjt({ "a": "ana maria" }, "aa");
