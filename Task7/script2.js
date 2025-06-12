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
  alert('hello')
}

function add(){
  alert('hello')
}
rmv.addEventListener('click',remove);
newB.addEventListener('click',newImage);
addBtn.addEventListener('click',add);