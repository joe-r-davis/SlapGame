//Step 2 Items
var Item = function(name, damage, itemBlurb){
    this.name = name;
    this.damage = damage;
    this.itemBlurb = itemBlurb;
}

//Step 3 - create the items Dictionary
var items ={        //need to figure out how to have a dictionary of items that decrease damage
    shield: new Item("shield", 0.2, "Shield yourself from danger- Reduce damage 20%"),
    elixir: new Item("elixir", 0.6, "An elixir for what ails you- Reduce damage 50%"),
    love: new Item("love", 0.7, "Behold the power of love- Reduce damage 80%")
}

var player = new Player("Fresh Meat", 100, "assets/images/FreshMeat.jpg", 0,"")  //Step 4- Give some items to our target

function Player(name, health, img, hits, dead) {
    this.name = name
    this.health = health
    this.img = img
    this.hits = 0
    this.dead = ""
    this.items= [items.shield, items.elixir, items.love] //Step 4- Give some items to our target
    this.currentMods= 1
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
                <hr>
                <p>Choose from below to reduce damage</p>
                <button type="button" class="btn btn-info" onClick="addMods('shield')">Shield</button>
                <button type="button" class="btn btn-success" onClick="addMods('elixir')">Elixir</button>
                <button type="button" class="btn btn-primary" onClick="addMods('love')">Love</button>
            </div>
        </div> 
        `

    playerElem.innerHTML = template
}
//Step 6 Need to reduce the damage if item has been added.
function slap() {
    player.health -= 1 * player.currentMods      
    player.hits += 1
    drawPlayer()
}
function punch() {
    player.health -= 5 * player.currentMods
    player.hits += 1
    drawPlayer()
}

function kick() {
    player.health -= 10 * player.currentMods
    player.hits += 1
    drawPlayer()
}
//Step 7- Let the user select the items
function giveShield(){
    player.items.push("shield")
    drawPlayer()
}

function giveElixir(){
    player.items.push("elixir")
    drawPlayer()
}

function giveLove(){
    player.items.push("love")
    drawPlayer()
}


//Step 5 reduce the damage

function addMods(itemChoice){
    var itemDamage = 1
    for (let i = 0; i < player.items.length; i++) {
        const item = player.items[i];
        if (itemChoice == item.name) {
            player.currentMods -= item.damage 
        }
    }
    drawPlayer()   
}


drawPlayer()

