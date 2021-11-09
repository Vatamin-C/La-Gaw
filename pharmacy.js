const shopName = document.getElementById("shopName");

let shopNameColor = ["white", "red", "yellow", "green"]
let i = 0;
 let snColorChange = ()=> {
    shopName.style.color = shopNameColor[i];
    i = (i + 1) % shopNameColor.length;
 }
setInterval(snColorChange, 1500);