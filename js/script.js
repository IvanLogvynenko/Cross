"use strict";
let halfs = [];
halfs = Array.prototype.concat.apply(halfs, 
                                document.querySelector("#line1").children);
halfs = Array.prototype.concat.apply(halfs, 
                                document.querySelector("#line3").children);
const middleLine = document.getElementById("middle");



document.getElementById("cross").addEventListener("click", () => {
    halfs.forEach(item =>{
        if (!item.classList.contains("active"))
        {
            item.classList.add("active");
		}
        else
        {
            item.classList.remove("active");
        }
    });
	if (!middleLine.classList.contains("active")) {
		document.getElementById("middle").classList.add("active");
	} else {
		document.getElementById("middle").classList.remove("active");
	}
});