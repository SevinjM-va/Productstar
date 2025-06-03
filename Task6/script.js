
let add = document.getElementById("addBtn")
let sld = document.getElementById("slider")
let dlt = document.getElementById("deletBtn")


add.addEventListener("click",function(){
const newImg = document.createElement("img")
newImg.src = "https://picsum.photos/200/300/?blur"
newImg.alt = "Morji"
sld.appendChild(newImg);
})

dlt.addEventListener("click",function(){
  if(sld.children.length > 1){
    sld.removeChild(sld.lastChild)
  } else {
    dlt.style.color = "gray";
  }
})
