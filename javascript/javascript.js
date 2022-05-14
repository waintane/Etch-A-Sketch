//gestion de la grid
function spawnGrid(dimension){
    //faire apparaitre les containers verticale
    for(i=0 ; i <= 16; i++){

        let container = document.createElement("div");
        container.classList.add("column");
        document.querySelector(".container").appendChild(container);

        
    }

    let containers = document.querySelectorAll(".column");

    //faire apparaitre toute les cases
    containers.forEach(function(e){

        for (i=0; i<=16; i++){
            let div =document.createElement("div");
            div.classList.add("cadrier")
            e.appendChild(div);
        }

    })
    
    console.log(containers);
}

let boutonDimension = document.querySelector(".boutonDimension");

boutonDimension.addEventListener("click", () => {
    let value = prompt("quel dimension souhaitez-vous?");

    
})

spawnGrid();