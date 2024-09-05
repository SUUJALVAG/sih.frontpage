let icon = document.querySelector("#icon");
let submit = document.querySelector("#submit");

let drop1 = document.querySelector(".drop1");
let drop2 = document.querySelector(".drop2");

icon.addEventListener("click" , () => {
    let temp = drop1.selectedIndex;
    drop1.selectedIndex = drop2.selectedIndex;
    drop2.selectedIndex = temp;
    console.log("hello sir sujal vaghela");
})

drop1.addEventListener("click" , () => {
    submit.innerText = "submit";
})
drop2.addEventListener("click" , () => {
    submit.innerText = "submit";
})

submit.addEventListener("click" , () => {
    console.log("suziee hello");
    if(drop1.selectedIndex === drop2.selectedIndex){
        submit.innerText = "can not enter same station"; 
    }
})


