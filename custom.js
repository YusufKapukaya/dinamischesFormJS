var breite=document.getElementById("breite");
var höhe=document.getElementById("höhe");
var hintergrund_farbe=document.getElementById("hintergrund_farbe");
var dicke=document.getElementById("dicke");
var typ=document.getElementById("typ");
var rahmen_farbe=document.getElementById("rahmen_farbe");
var aussen_margin=document.getElementById("aussen_margin");
var innen_margin=document.getElementById("innen_margin");
var rotate=document.querySelector("#rotate");
var erstellen=document.querySelector("#erstellen");
var rechts=document.querySelector(".rechts");



// Mit DOM und Function

// erstellen.addEventListener("click",div_erstellen);

// function div_erstellen(){
//     rechts.style.width=breite.value+"px";
//     rechts.style.height=höhe.value+"px";
//     rechts.style.backgroundColor=hintergrund_farbe.value;
//     rechts.style.borderWidth=dicke.value;
//     rechts.style.borderStyle=typ.value;
//     rechts.style.borderColor=rahmen_farbe.value;
//     rechts.style.margin=aussen_margin.value+"px";
//     rechts.style.padding=innen_margin.value+"px";
//     rechts.style.transform="rotate("+rotate.value+"deg)";    
// }




// Template Literals

erstellen.addEventListener("click",div_erstellen);
function div_erstellen(){
    rechts.style.cssText=`width:${breite.value}px;
    height:${höhe.value}px;
    background-color:${hintergrund_farbe.value};
    border-width:${dicke};
    border-style:${typ.value};
    border-color:${rahmen_farbe.value};
    margin:${aussen_margin.value}px;
    padding:${innen_margin.value}px;
    transform:rotate(${rotate.value}deg);
    `;
}