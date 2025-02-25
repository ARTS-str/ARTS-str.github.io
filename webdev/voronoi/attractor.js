class Attractor{
    constructor(x, y, mass, color){
        this.position = [x, y]
        this.velocity = [getRndInteger(1, 5), getRndInteger(1, 5)];
        this.acceleration = [0, 0];
        this.mass = mass;
        this.r = mass;
        this.color = collorPalette[color];
    }

    collide(other){
            
        let impact = v2Sub(other.position, this.position);
        let distance = v2Mag(impact);

        if (distance <= this.r + other.r) {

            let overlap = distance - (this.r + other.r);
            let dir = v2SetMag(impact, overlap * 0.5);
            this.position = v2Add(this.position, dir);
            other.position = v2Sub(other.position, dir);

            distance = this.r + other.r;
            impact = v2SetMag(impact, distance);

            let mSum = this.mass + other.mass;
            let vDiff = v2Sub(other.velocity, this.velocity)

            //Calcular colison elástica de Particula A
            let num = v2Dot(vDiff, impact);
            let den =  mSum * distance * distance;
            let deltaVA = v2Multv1(impact, 2 * other.mass * (num/den));
            this.velocity = v2Add(this.velocity, deltaVA);

            //Calcular colison elástica de Particula B
            let deltaVB = v2Multv1(impact, -2 * this.mass * (num/den));
            other.velocity = v2Add(other.velocity, deltaVB);

        }
    }

    collideWalls(){

        let kineticLoss = 0;

        if (v2Mag(this.velocity) < 5) {
            
            kineticLoss = -.5;
        } else {

            kineticLoss = 0;
        }

        if (this.position[0] <= this.r) {
            this.position[0] = this.r;
            this.velocity[0] *= -1;
            this.velocity[0] -= kineticLoss;

        } else if (this.position[0] >= canvas.width - this.r) {
            this.position[0] = canvas.width - this.r;
            this.velocity[0] *= -1;
            this.velocity[0] += kineticLoss;
        } 

        if (this.position[1] <= 0 + this.r) {
            this.position[1] = this.r;
            this.velocity[1] *= -1;
            this.velocity[1] -= kineticLoss;

        } else if (this.position[1] >= canvas.height - this.r) {
            this.position[1] = canvas.height - this.r;
            this.velocity[1] *= -1;
            this.velocity[1] += kineticLoss;
        }
    }

    applyForce(force){
        this.acceleration = v2Add(this.acceleration, force); 
    }
    move(){
        //let gravity = [0, 1];
        //this.applyForce(gravity);
        this.velocity = v2Add(this.velocity, this.acceleration);
        this.position = v2Add(this.position, this.velocity);
        this.acceleration = v2Multv1(this.acceleration, 0);
    }
    show(){
        ctx.beginPath();
        ctx.arc(this.position[0], this.position[1], this.r, 0, 2*Math.PI);
        ctx.fill();
    }
    
}