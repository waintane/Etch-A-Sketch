let spawnGridValidateur = true;
let valeurBase = 16
//gestion de la grid
function spawnGrid(v = 16){
    //faire apparaitre les containers verticale
    for(i=0 ; i <= v; i++){

        let container = document.createElement("div");
        container.classList.add("column");
        document.querySelector(".container").appendChild(container);

        
    }

    let containers = document.querySelectorAll(".column");

    //faire apparaitre toute les cases
    containers.forEach(function(e){

        for (i=0; i<=v; i++){
            let div =document.createElement("div");
            div.classList.add("cadrier")
            e.appendChild(div);
        }

    })
    valeurBase = v;
    spawnGridValidateur = false;
    console.log(containers);
}

let boutonDimension = document.querySelector(".boutonDimension");

boutonDimension.addEventListener("click", () => {
    let value = prompt("quel dimension souhaitez-vous? 100 étant la limite");

    if (value > 100){
        value = 100;
    }

    console.log(value);

    for (i =0 ; i <= valeurBase ; i++){
        let grille = document.querySelector(".column");

        grille.parentNode.removeChild(grille);
    }

    spawnGrid(value);
})

if (spawnGridValidateur === true){
    spawnGrid();
}
