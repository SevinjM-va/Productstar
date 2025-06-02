
// let greeting = "Hello"

// function sayHello(name){
//   return  greeting + ' '+ name
// }
// console.log(sayHello("Sevinj"))

// const sayHello2 = (name)=> console.log("Hello" + name);
// sayHello2("Sevinj")

// const user = {
//   name: "Alex",
//   age: 26
// }
// Object.keys(user).forEach((key)=> console.log(user[key]))



// const clouds = ["Sunny","Cloudy","Windy","Clear","Rainy","Snowy"]
// const prec = ["nothing", "fog","rain"]


// function weatherFor (){
//   let weather = {};
//     console.log(weather)
//     let num1 = Math.floor(Math.random()*clouds.length)
//     let num2 = Math.floor(Math.random()*prec.length)
//     let num3 = Math.floor(Math.random()* 35) + ' C'

//     alert(weather.clouds= clouds[num1]);
//     alert(weather.prec = prec[num2]);
//     alert(weather.temperature = num3);
//     console.log(weather)
// }

// weatherFor()


const wind = ["windy","no wind","storm"]
const rain = ["no rain","rainy","heavy rain"]


function getWeather(){
  let user = prompt("Enter you name")

  let num1 = Math.floor(Math.random() * wind.length);
  let num2 = Math.floor(Math.random() * rain.length);
  let w1 = wind[num1];
  let r2 = rain[num2];

  console.log(w1)
  console.log(r2)

  if (wind[num1]== "storm" || rain[num1]== "heavy rain"){
    alert(`Hello ${user}. The weather is not good for a walk. It's ${w1} and ${r2} outside`)
  } else{
    alert(`Hello ${user}. The weather is nice, go outside. It's ${w1} and ${r2} outside.`)
  }

}

getWeather()