const img1 = document.querySelector('.img1')
const img2 = document.querySelector('.img2')

function change1(){
  img1.src="https://picsum.photos/300/200?random=" + Math.random()
  img2.src="https://picsum.photos/300/200?random=" + Math.random()
  img1.classList.add('loading')
  img2.classList.add('loading')
}
function change2(event){
  if(event.target.tagName === 'IMG'){
    console.log(event.target.parentElement)
    const parent = event.target.parentElement;
    console.log(parent.classList.toggle)
    parent.classList.toggle("fullScreen")
  }
  if(event.target.classList.contains('fullScreen')){
    event.target.classList.toggle("fullScreen")
  }
}

function onload(event){
  console.log(event)
}

document.querySelector('.nextButton').addEventListener('click', change1)
document.querySelector('.container').addEventListener('click', change2)
img1.onload = (event)=>{
  event.target.classList.remove('loading')
}
img2.onload=(event)=>{
  event.target.classList.remove('loading')
}
