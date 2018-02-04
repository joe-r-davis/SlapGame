var health = 100
var hits = 0

var players = [];
var enemies = [];

function PlayerMaker(name, health, img) {
    this.name = name
    this.health = health
    //this.attacks = ["slap", "punch", "kick"]
    this.img = img
}

var player1 = new PlayerMaker("Fresh Meat", 100, "assets/images/FreshMeat.jpg")
var player2 = new PlayerMaker("Pew Pew", 100, "assets/images/SpaceDefender.jpg")

players.push(player1, player2)

function drawPlayer(arr) {
    var template = ''
    var playerElem = document.getElementById("player-card")
    for (let i = 0; i < arr.length; i++) {
        var player = arr[i];
        template += `
        <div class="card">
            <div class="card-header">
                <h4> ${player.name} Health: ${player.health}
                </h4>
                <p>Hits:<span id="player.hits">0</span>
                </p>
            </div>
            <div class="card-body">
                <img src="${player.img}" alt="target">
            </div>
            <div class="card-footer">
                <button type="button" class="btn btn-danger" onClick="slap()">Slap!</button>
                <button type="button" class="btn btn-warning" onClick="punch()">Punch!</button>
                <button type="button" class="btn btn-dark" onClick="kick()">Kick!</button>
            </div>
        </div>
          
        `

    }
    playerElem.innerHTML = template
}


function EnemyMaker(name, health, img) {
    this.name = name
    this.health = health
    this.img = img
}

var enemy1 = new EnemyMaker("Draggin", 80, "assets/images/EvilDragon.jpg")
var enemy2 = new EnemyMaker("Chompy", 80, "assets/images/SpaceInvader.jpg")

enemies.push(enemy1, enemy2)

function drawEnemy(arr) {
    var template = ''
    var enemyElem = document.getElementById("enemy-card")
    for (let i = 0; i < arr.length; i++) {
        var enemy = arr[i];
        template += `
        <div class="card">
            <div class="card-header">
                <h4> ${enemy.name} Health: ${enemy.health}
                </h4>
                <p>Hits:<span id="hits">0</span>
                </p>
            </div>
            <div class="card-body">
                <img src="${enemy.img}" alt="target">
            </div>
            <div class="card-footer">
                <button type="button" class="btn btn-danger" onClick="slap()">Counter1!</button>
                <button type="button" class="btn btn-warning" onClick="punch()">Counter2!</button>
                <button type="button" class="btn btn-dark" onClick="kick()">Counter3!</button>
            </div>
        </div>
          
        `

    }
    enemyElem.innerHTML = template
}


//write  a button to enter player name and start game

// function startGame() {
//     health = 100
//     hits = 0
//     player = prompt("Player1! Enter your Name!")
//     onStart()
// }

function onStart() {
    health = 100
    hits = 0
    document.getElementById("playerName").innerHTML = player1.name
    document.getElementById("health").innerHTML = player.health
    document.getElementById("hits").innerHTML = hits
}


function onDamage() {
    document.getElementById("player.health").innerHTML = player.health
    document.getElementById("player.hits").innerHTML = player.hits
}

function slap(index) {
    var players = player[index]
    health -= 1
    hits += 1
    onDamage()
    drawPlayer(players)
}

function punch() {
    health -= 5
    hits += 1
    onDamage()
}

function kick() {
    health -= 10
    hits += 1
    onDamage()
}


drawPlayer(players)
drawEnemy(enemies)