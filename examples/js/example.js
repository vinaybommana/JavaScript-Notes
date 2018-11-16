/* example one */

function Particle() {
    this.x = 100;
    this.y = 100;
}

let p = new Particle();

/* example two */

function Particle() {
    this.x = 100;
    this.y = 100;
    this.show = function() {
        point(this.x, this.y);
    }
}

/* example three */
function Particle() {
    this.x = 100;
    this.y = 100;
}

Particle.prototype.show = function() {
    point(this.x, this.y);
}
