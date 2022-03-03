let c = ""
let cont = document.getElementById("cont");
function quote(){
    let b =  Math.floor(Math.random() * (16 - 1)) + 1;
    for(let i = 0; i < b;  i++){
        let d = Math.floor(Math.random() * (a.length));
        c = c.concat(a[d]);
        c = c.concat(" ");
    }
    cont.innerHTML=`"${c}"`;
    c="";
}

window.onload = function(){
   quote();
};

