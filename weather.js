const button=document.querySelector(".search");
const input=document.querySelector(".input");

button.addEventListener("click",function(){
    const value=input.value;
    const url="http://api.weatherapi.com/v1/current.json?key=f6dd5fd4a63248d9b5a105607241707&q="+value+"&aqi=no";
    if(value!=""){
    async function fn(){
        const response=await fetch(url);
        if(response.status==200){
        const data=await response.json();
        console.log(data);
        const temp=document.querySelector(".temp");
        temp.innerHTML=data.current.temp_c+"°C";
        const icon=document.querySelector(".img");
        icon.src=data.current.condition.icon;
        const loc=document.querySelector(".location");
        loc.innerHTML=data.location.name;
        const weather=document.querySelector(".Weather");
        weather.innerHTML=data.current.condition.text;
        const time=document.querySelector(".time");
        time.innerHTML=data.location.localtime;
        input.value="";
        }
        else{
            alert("City not found");
            }
    }
        fn();
        }
        else{
            alert("Please enter a city name");
            }
            });
      
    
