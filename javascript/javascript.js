function spawnGrid(){
    for(i=0 ; i <= 16; i++){

        let container = document.createElement("div");
        container.classList.add("column");
        document.querySelector(".container").appendChild(container);

        
    }

    let containers = document.querySelectorAll(".column");

    containers.forEach(function(e){

        for (i=0; i<=16; i++){
            let div =document.createElement("div");
            div.classList.add("cadrier")
            e.appendChild(div);
        }

    })
    
    console.log(containers);
}

spawnGrid();