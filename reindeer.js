console.log("JS TEST");

var colors = ["Blue", "Red", "Orange", "Purple", "Hazel", "Aquamarine", "Periwinkle", "Azure", "Fuchsia", "Chocolate", "Amber", "Amaranth"];
var reindeer = ["Dasher", "Dancer", "Prancer", "Vixen", "Comet", "Cupid", "Donner", "Blitzen"];


for (i = 0; i < reindeer.length; i++) {
    document.getElementById("reindeer").innerHTML += `<div>${reindeer[i]} ${colors[i]}</div>`;
    console.log("TEST");
}