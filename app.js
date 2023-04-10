Q No:1

function add(){
 let num=+prompt();
let num1=5;
let num3 =num +num1;
console.log(num3);
}
add()

Q No:1 End

Q No:2

function add(){
    let array = [1, 2, 3, 4, 5,6,7,8,9,10];
    let Value = prompt("Enter a value to search for:");
    
    if (array.includes(parseInt(Value))) {
      console.log("All ready enter this Value!");
    } else {
      console.log("does not match this Value");
    }
}
add()

Q No:2 End

Q No:3
function addPara(text) {
    let newPara = document.createElement("p");
    newPara.textContent = text;
    let body = document.querySelector("body");
    body.appendChild(newPara);
   
  }
  addPara("hello World");

Q No:3 End

Q No:4

 
      let listInput = document.getElementById("list-input");
      let addButton = document.getElementById("add-button");
      let list = document.getElementById("list");

      addButton.addEventListener("click", function() {
        let listItem = document.createElement("li");
        listItem.textContent = listInput.value;
        list.appendChild(listItem);
        listInput.value = "";
      });
    


Q No:4 End

Q No:5
    
function changeBackgroundColor(element, color) {
    element.style.backgroundColor = color;
  }
      function changeColor() {
        const heading = document.getElementById("heading");
        changeBackgroundColor(heading, "blue");
      }

      function changeBackgroundColor(element, color) {
        element.style.backgroundColor = color;
      }


Q No:5 End

Q No:6

function saveToLocalStorage(key, object) {
    let serializedObject = JSON.stringify(object);
    localStorage.setItem(key, serializedObject);
  }
  const user = {
    name: "Arsalan",
    age: 24,
    city: "Pakistan"
  };
  
  saveToLocalStorage("user", user);

Q No:6 End

Q No:7
  
function getFromLocalStorage(key) {
    let serializedObject = localStorage.getItem(key);
    let object = JSON.parse(serializedObject);
    return object;
  }
  let user = getFromLocalStorage("user");
  console.log(user);
    
Q No:7 End

Q No:8

function LocalStorage(object) {
    for (let property in object) {
      if (object.hasOwnProperty(property)) {
        localStorage.setItem(property, object[property]);
      }
    }
  
    let keys = Object.keys(object);
    let value  = {};
  
    for (let key of keys) {
     value [key] = localStorage.getItem(key);
    }
  
    return value ;
  }
  let user = {
    name: "Arsalan",
    age: 24,
    city: "Pakistan"
  };
  
  const retrievedUser = LocalStorage(user);
  console.log(retrievedUser);
    
    
Q No:8 End


