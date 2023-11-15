let inp = document.querySelector("#inp");
let btn = document.querySelector("#btn");
let boxs = document.querySelectorAll(".box");
let drag = null;

btn.addEventListener("click" , function(){
    if(inp.value != ""){
        boxs[0].innerHTML += `
        <p class="item" draggable="true">${inp.value}</p>
        `
        inp.value = "";
    }
    dragItem();
});

function dragItem(){
    let items = document.querySelectorAll(".item");
    items.forEach(item =>{
        //two for paragraph
        item.addEventListener("dragstart" , function (){
            drag = item;
            item.style.opacity = "0.5";
        })
        item.addEventListener("dragend" , function (){
            drag = null;
            item.style.opacity = "1";
        })
        // two for box
        boxs.forEach(box =>{
            // there are two for box
            box.addEventListener("dragover" , function (e){
                e.preventDefault()
                this.style.background = "#090";
                this.style.color = "#fff";
            })
            box.addEventListener("dragleave" , function (){
                this.style.background = "#e2e3e5";
                this.style.color = "black";
            })
            // one for drop
            box.addEventListener("drop" , function(){
                this.append(drag);
                this.style.background = "#e2e3e5";
                this.style.color = "black";
            })
        })
    })
}