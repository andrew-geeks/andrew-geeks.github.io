const date=new Date()
const year=date.getFullYear()
console.log(year)



document.querySelector(".n2-icon").addEventListener("click",()=>{
    if(document.querySelector(".n2-block").style.height==="240px"){
        
        document.querySelector(".n2-block").setAttribute("style","height:60px");
        document.querySelector(".n2-block .navigation-drop").setAttribute("style","display:none");
    }
    else{
        document.querySelector(".n2-block").setAttribute("style","height:240px");
        document.querySelector(".n2-block .navigation-drop").setAttribute("style","display:block");  
        
        
    }
    
});

document.querySelector(".year").textContent=year