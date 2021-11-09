class stone{
	constructor(x,y, r)
	{
	// assign options to the rubber ball
	var options={
		restitution: 0.8,
		friction: 0.9,
		density: 12
	}
		this.x=x;
		this.y=y;
		this.r=r
		this.body=Bodies.rectangle(x, y, 50, 50, options);
        this.width = 50;
        this.height = 50;
		World.add(world, this.body);

	}
	display()
	{
			var stonepos=this.body.position;		
			push()
			translate(stonepos.x, stonepos.y);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("grey");
			fill("black");
			//draw the ellipse here to display the rubber ball
			rect(0, 0, this.width, this.height);
			pop()
	}

}