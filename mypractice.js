//first eaxmple
/*
const URL="https://cat-fact.herokuapp.com/facts";
let promise = fetch(URL);
console.log(promise);**/

//2nd example
/*
const URL="https://cat-fact.herokuapp.com/facts";
const getfacts=async()=>{
    console.log("getting data.....");
    let response= await fetch(URL);
console.log(response);

}*/
//JSON()method
/*
const URL="https://cat-fact.herokuapp.com/facts";
const getfacts=async()=>{
    console.log("getting data.....");
    let response= await fetch(URL);
console.log(response);
let data= await response.json();
console.log(data[0]);
console.log(data[0].text);

};
*/
//printing data to html
/*
const URL="https://cat-fact.herokuapp.com/facts";
const factPara=document.querySelector("#fact");
const getfacts=async()=>{
    console.log("getting data.....");
    let response= await fetch(URL);
console.log(response);
let data= await response.json();
factPara.innerText=(data[0].text);

};
*/

//adding button
/*
const URL="https://cat-fact.herokuapp.com/facts";
const factPara=document.querySelector("#fact");
const btn=document.querySelector("#btn");

const getfacts=async()=>{
    console.log("getting data.....");
    let response= await fetch(URL);
console.log(response);
let data= await response.json();
//factPara.innerText=(data[0].text);
factPara.innerText=(data[1].text);


};
btn.addEventListener("click",getfacts);
*/

//promise chaining
const URL="https://cat-fact.herokuapp.com/facts";
const factPara=document.querySelector("#fact");
const btn=document.querySelector("#btn");

function getfacts(){
    fetch(URL)
    .then((response)=>{
        return response.json();
    })
    .then((data)=>{
        console.log(data);
        factPara.innerText=data[2].text;
    });
}

btn.addEventListener("click",getfacts);