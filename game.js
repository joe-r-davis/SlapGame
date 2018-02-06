var Item = function(name, damage, itemBlurb){
    this.name = name;
    this.damage = damage;
    this.itemBlurb = itemBlurb;
}

//Step 3 - create the items Dictionary
var items ={        //need to figure out how to have a dictionary of items that decrease damage
    shield: new Item("shield", 0.3, "Shield yourself from danger"),
    elixir: new Item("Elixir", 1.6, "An elixir for what ails you"),
    love: new Item("Love", 4.0, "Behold the power of love")
}

var player = new Player("Fresh Meat", 100, "assets/images/FreshMeat.jpg", 0,"")  //Step 4- Give some items to our target

function Player(name, health, img, hits, dead) {
    this.name = name
    this.health = health
    this.img = img
    this.hits = 0
    this.dead = ""
    this.items= [items.shield, items.elixir, items.love] //Step 4- Give some items to our target
}

function drawPlayer() {
    if(player.health <= 0){
        player.dead = "You Died!"
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
                <h4>${player.dead}</h4>
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
//Step 2 - Items
//Step 5 reduce the damage

function addMods(toAdd){
    var itemDamage = 0
    for (let i = 0; i < player.items.length; i++) {
        const item = player.items[i]; //ALIAS
        itemDamage += item.damage
        
    }
    
    return itemDamage
}


drawPlayer()
debugger
addMods("shield", "elixir")