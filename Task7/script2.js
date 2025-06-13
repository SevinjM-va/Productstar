const newB = document.querySelector(".newImg");
const rmv = document.querySelector(".rmvBtn");
const addBtn = document.querySelector(".adBtn");

function newImage() {
  const images = document.querySelectorAll('img');
  images.forEach(img => {
  img.src="https://picsum.photos/300/200?random=" + Math.random()
  });
};

function remove(){
  const images = document.querySelectorAll('img')
  const lastImg = images[images.length - 1]
  lastImg.remove()
}


function add(){
  const img = document.createElement('img')
  img.src = "https://picsum.photos/300/200?random=" + Math.random()
  const imgCont = document.querySelector('.imgContainer').appendChild(img)
  console.log(imgCont)
  
}
rmv.addEventListener('click',remove);
newB.addEventListener('click',newImage);
addBtn.addEventListener('click',add);