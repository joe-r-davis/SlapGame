var player = new Player("Fresh Meat", 100, "assets/images/FreshMeat.jpg", 0)

function Player(name, health, img) {
    this.name = name
    this.health = health
    this.img = img
    this.hits = 0
}

function drawPlayer() {
    if(player.health <= 0){
        // <img src="${player.img}" alt="target"> // need to figure out how to die
    }
    var template = ''
    var playerElem = document.getElementById("player-card")
    template += `
        <div class="card align-self-center centerFlex text-center card-custom p-6">
            <div class="card-header">
                <h4> ${player.name}<br>
                    Health: ${player.health}
                </h4>
                <p>Hits:<span id="player.hits"> ${player.hits}</span>
                </p>
                <h4 id="youDied">...</h4>
            </div>
            <div class="card-body">
                <img src="${player.img}" alt="target">
            </div>
            <div class="card-footer">
                <button type="button" class="btn btn-danger" onClick="slap()">Slap!</button>
                <button type="button" class="btn btn-warning" onClick="punch()">Punch!</button>
                <button type="button" class="btn btn-dark" onClick="kick()">Kick!</button>
                <div class="row" >
                        <div class="col-sm-4 d-sm-inline-flex" text-align="center">

                                <img src="assets/images/Shield-Mod.jpg" alt="Shield Mod">

                                <img src="assets/images/Elixir-Mod.jpg" alt="Elixir Mod">

                                <img src="assets/images/Love-Mod.jpg" alt="Love Mod">

                        </div>
                    </div>            
                </div>
            </div>
        </div> 
        `

    playerElem.innerHTML = template
}

function slap() {
    player.health -= 1
    player.hits += 1
    drawPlayer()
}
function punch() {
    player.health -= 5
    player.hits += 1
    drawPlayer()
}

function kick() {
    player.health -= 10
    player.hits += 1
    drawPlayer()
}

// var items ={        //need to figure out how to have a dictionary of items that decrease damage
//     shield: new Items("Shield", 0.3, "Shield yourself from danger"),
//     elixir: new Items("Elixir", 1.6, "An elixir for what ails you"),
//     love: new Items("Love", 4.0, "Behold the power of love")
// }

drawPlayer()
