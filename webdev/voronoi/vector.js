class Arrow{

    constructor(x, y, attractors, magnitude){
        this.x = x;
        this.y = y;
        this.angle = 0;
        this.magnitude = magnitude;
        this.attractors = attractors;
        this.color;
        this.width = 1;
    }


    checkForAttractors(){

        let distancias = [];

        for (let i = 0; i < this.attractors.length; i++) {
            distancias.push(this.attractors[i]);
        }

        if (this.attractors.length > 1) {

            
            let distanceArray = [];
            for (let i = 0; i < distancias.length; i++) {
                let dx = distancias[i].position[0] - this.x;
                let dy = distancias[i].position[1] - this.y;
                let impact = [dx, dy];
                let distance = v2Mag(impact);
                distanceArray.push(distance);  
            }
            
            for (let r = 0; r < distanceArray.length; r++) {
                if (distanceArray[r] === Math.min(...distanceArray)) {
                    this.color =  this.attractors[r].color;
                    this.changeAngleOnMouse(this.attractors[r].position[0], this.attractors[r].position[1]); 
                }
            }
            

        } else {
            this.color =  this.attractors[0].color;
            this.changeAngleOnMouse(this.attractors[0].position[0], this.attractors[0].position[1])
        }
    }

    changeAngleOnMouse(x, y){
        const dy = y - this.y;
        const dx = x - this.x;
        this.angle = Math.atan2(dy, dx);
    }

    show(){
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.angle);
        ctx.fillStyle = this.color;
        ctx.fillRect(0, -this.width / 2, this.magnitude, this.width);
        ctx.restore();

    
    }
}