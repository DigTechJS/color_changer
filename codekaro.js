let intervalId
const randomColor=function(){
    const hex="0123456789ABCDEF"
    let color="#";
    for(let i=0;i<6;i++){
        color+=hex[Math.floor(Math.random()*16)]
    }
    return color;
}
const body=document.querySelector('body')

document.querySelector('#start').addEventListener('click', function(){
    if(!intervalId){
        intervalId=setInterval(function(){
            body.style.backgroundColor=randomColor()
    
        
        },400)
    }
    
})

document.querySelector('#stop').addEventListener('click', function(){
    clearInterval(intervalId)
    intervalId=null;
})