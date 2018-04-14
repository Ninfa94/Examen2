function Ball() {

	let x = Math.floor(width / 2)
	let y = Math.floor(height - 50)
	const radius = 10
	let speedx =  1
	let speedy = -1
	let yn = -1

	this.show = function() {
		fill('#ff0206')
		ellipse(x, y, radius * 2, radius * 2)
	}

	this.move = function() {
		x += speedx
		y += (speedy)
	}

	this.collision = function(e) {
		let dx = Math.abs(x - e.x - e.w/2)
		let dy = Math.abs(y - e.y - e.h/2)

		if(dx > e.w / 2 + radius || dy > e.h / 2 + radius)
			return false

		if(dx <= e.w / 2 || dy <= e.h / 2){
			speedx *= -1
			return true
		}
	}
	this.changeMove = function () {
		speedx = -speedx 
		speedy = -speedy
	}
}