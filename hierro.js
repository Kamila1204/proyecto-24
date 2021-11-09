class hierro{
	constructor(x,y,r)
	{
	// assign options to the rubber ball
	var options={
		restitution: 0.,
		friction: 3,
		density: 30
	}
		this.x=x;
		this.y=y;
		this.r=r
		this.body=Bodies.rectangle(x, y, 100, 50, options);
		this.width = 100;
        this.height = 50;
        World.add(world, this.body);

	}
	display()
	{
			var hierropos=this.body.position;		
			push()
			translate(hierropos.x, hierropos.y);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("gray");
			fill("gray");
			//draw the ellipse here to display the rubber ball
			rect(0, 0, this.width, this.height);
			pop()
	}

}