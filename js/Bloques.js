function Bloques(x, y) {
	this.x = x
	this.y = y + 90
	this.w = 80
	this.h = 15
	this.color1 = random(255)
	this.color2 = random(255)
	this.color3 = random(255)

	this.show = function() {
		rectMode(CORNER)
		fill(this.color1, this.color2, this.color3)
		rect(this.x, this.y, this.w, this.h)
	}
}	
