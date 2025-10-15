let count=0;

function increment(){
    if(count<10){
        count++;
        document.getElementById("counter").innerHTML=count
    }

    else{
        alert("max limit reached");

    }
}

function decrement(){
    if(count>0){
        count--;
        document.getElementById("counter").innerHTML=count
    }

    else{
        alert("min limit reached");
        
    }
}