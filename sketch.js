let paleta
let bloques = []
let pelota
const LEFT = -1
const RIGHT = 1
let deleteBlock = []

function preload() {
	
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	paleta = new Paddle()
	pelota = new Ball()

	for(let i = 0; i < 8; i++)
		for(let j = 0; j < 18; j++)
			bloques.push(new Bloques(j*80,i*40))
}

function draw() {

	background('rgb(00,00,00)')
	paleta.show()
	pelota.show()
	pelota.move()

	for(let i = 0; i < bloques.length; i++){
		bloques[i].show()	
	}

	if(pelota.collision(paleta))
		pelota.changeMove()

	for(let i = 0; i < bloques.length; i++){
		let crash = pelota.collision(bloques[i]) 
		if(crash) {
			pelota.changeMove()
			deleteBlock.push(i)
		}
			
	}

	for(let i = 0; i < deleteBlock.length; i++){
		bloques.splice(deleteBlock[i], 1)
	}
	deleteBlock = []
	
	if(keyIsPressed){
		if(keyIsDown(LEFT_ARROW))
			paleta.move(LEFT)
		if(keyIsDown(RIGHT_ARROW))
			paleta.move(RIGHT)
	}
}

