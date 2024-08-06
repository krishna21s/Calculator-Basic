let btns = document.querySelectorAll("button");
let displayElement = document.getElementById("display"); 
let displayStr = displayElement.innerText; 
let displayNum = parseFloat(displayStr);
let result;
console.log(displayNum);
btns.forEach( btn =>{
  btn.addEventListener("click",function(){
    if(btn.innerText == "Clear" )
    {
      displayElement.textContent = "";
    }
    else if(btn.innerText == "Delete" )
    {
      displayElement.textContent =  displayElement.textContent.slice(0,-1);
    }
    else
    {
      displayElement.textContent += btn.innerText;
      displayStr = displayElement.innerText;
      displayNum = parseFloat(displayStr);
    }
    if(btn.innerText == "=")
    {
      result = displayElement.textContent.slice(0,-1);
      result = eval(result);
      console.log(result);
      displayElement.innerText = result;
    }
})
})