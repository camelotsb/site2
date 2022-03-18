var healthPoints = 100;

function updateHealthPoints(points) {

	healthPoints = points;
	var healthBar = document.querySelector("#healthBar");
	healthBar.style.width = points + "%";

	if(healthPoints < 1) {
		alert("HAPPY BIRTH DAY PLUTO");
		window.location.reload();
	}

}


function livingEnemies() {
	return document.querySelectorAll(".enemy:not(.dead)");
}


function iShoot(enemy) {
	enemy.classList.add("dead");

	if(!livingEnemies().length) {
		alert("HAPPY BIRTH DAY PLUTO");
		window.location.reload();
	}

}


function enemyAttacksMe(enemy) {

	if(healthPoints > 0) {

        
		enemy.classList.add("showing");

		setTimeout(()=> {
            
			enemyShootsMe(enemy);
		}, 1000);

		setTimeout(()=> {
			enemy.classList.remove("showing");
		}, 3000);
		
	}


}


function enemyShootsMe(enemy) {

	if(!enemy.classList.contains("dead")) {

		enemy.classList.add("shooting");
		updateHealthPoints(healthPoints - 20);

		setTimeout(()=> {
			enemy.classList.remove("shooting");
		}, 200);

	}

}


function randomEnemyAttacks() {

	var randomEnemyNo = Math.random() * livingEnemies().length;
	randomEnemyNo = Math.floor(randomEnemyNo);
	var enemy = livingEnemies()[randomEnemyNo];

	var randomDelay = Math.random() * 2000 + 1000;

	setTimeout( ()=> {
		enemyAttacksMe(enemy);
		randomEnemyAttacks();
	}, randomDelay);

}

function newgame() {
    randomEnemyAttacks();
    document.querySelector("button").style.display="none";
}

function setwolfhow() {
    document.getElementById("wolfhow").style.backgroundImage = "url(imgs/wolfhow.jpg)";
    document.getElementById("gameFrame").style.backgroundImage = "url(imgs/wolfhow.jpg)";
}
function setnft1() {
    document.getElementById("nft1").style.backgroundImage = "url(imgs/nft1.png)";
    document.getElementById("gameFrame").style.backgroundImage = "url(imgs/nft1.png)";
}
function setwolhaiksong() {
    document.getElementById("wolhaiksong").style.backgroundImage = "url(imgs/wolhaiksong.png)";
    document.getElementById("gameFrame").style.backgroundImage = "url(imgs/wolhaiksong.png)";
}
function setwpt() {
    document.getElementById("wpt").style.backgroundImage = "url(imgs/wpturtle1.png)";
    document.getElementById("gameFrame").style.backgroundImage = "url(imgs/wpturtle1.png)";
}
function setzbrushpluto() {
    document.getElementById("zbrushpluto").style.backgroundImage = "url(imgs/dabi.png)";
    document.getElementById("gameFrame").style.backgroundImage = "url(imgs/dabi.png)";
}
function setplwolf() {
    document.getElementById("plwolf").style.backgroundImage = "url(imgs/plwolf.png)";
    document.getElementById("gameFrame").style.backgroundImage = "url(imgs/plwolf.png)";
}
