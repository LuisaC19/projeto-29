class polygon
{
	constructor(x,y,r)
	{
		var options={
			isStatic:false,
			restitution:0,
			friction:1,
			density:1.2
			}
		this.x=x;
		this.y=y;
		this.r=r
		this.image=loadImage("polygon.png");
		this.body=Bodies.circle(50,200,20, options)
		World.add(world, this.body);

	}
	display()
	{
			var polygonpos=this.body.position;		
			push()
			// rectMode(CENTER)
			// rotate(this.body.angle)
			fill(255,0,255)
			imageMode(CENTER);
            image(polygon_img, polygonpos.x, polygonpos.y,40,40);
			pop()
			
	}

}