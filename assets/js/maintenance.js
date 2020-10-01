'use strict';
const {PI, sin, cos, random, floor, abs} = Math;
const HALF_PI = PI * 0.5;
const TAU     = PI * 2;
const DEG_TO_RAD = PI / 180;
const rand = (min, max = 0, neg = false) => {
    if(max == 0){
        max = min;
        min = 0;
    }
    return (!neg) ? ( random() * (max-min) ) + min : ( ( random() * (max-min) ) + min) - (max-min)/2 ;
};
const lerp = (n1, n2, percent) => {
    return (1 - percent) * n1 + (percent * n2);
};
let ctx, center, logo, spawnRadius, particles, numParticles, particleRadius, particleSpeed, particleLife;
function Particle(x,y,r,vx,vy,hue,hueSat,hueLight){
    this.x = x;
    this.y = y;
    this.r = r;
    this.rad = rand(0, PI*2);
    this.a = rand(0.1, 1);
    this.vx = vx;
    this.vy = vy;
    this.hue = hue;
    this.hueSat = hueSat;
    this.hueLight = hueLight;
    this.life = rand(particleLife.min, particleLife.max);

    this.draw = function(lastPoint){
        ctx.beginPath();
        ctx.lineWidth = this.r;
        ctx.lineCap = 'round';
        ctx.strokeStyle = "hsla("+this.hue+","+this.hueSat+"%,"+this.hueLight+"%,"+this.a+")";
        ctx.moveTo(lastPoint.x + cos(this.rad) * 10, lastPoint.y);
        ctx.lineTo(this.x + cos(this.rad) * 10, this.y + this.vy);
        ctx.stroke();
        ctx.closePath();
    };
    this.checkBounds = function(lastPoint){
        if(this.y > ctx.canvas.height){
            this.init(lastPoint);
        }else if(this.life <= 0){
            this.init(lastPoint);
        }else this.draw(lastPoint);
    };
    this.init = function(lastPoint){
        this.x = center.x + rand(0+this.r, ctx.canvas.width - this.r, true);
        this.y = 0;
        lastPoint.x = this.x;
        lastPoint.y = this.y;
        this.a = rand(0.1, 1);
        this.life = rand(particleLife.min, particleLife.max);

        this.draw(lastPoint);
    }
    this.update = function(){
        let lastPoint = {x: this.x, y: this.y};
        // this.x += this.vx;
        this.y += this.vy;
        this.rad += this.vx * (1/2*PI);
        this.alpha -= (1/60) * (1/this.life);
        this.checkBounds(lastPoint);

    };
}
window.onload = function(){
    ctx = document.getElementById('canvas').getContext('2d');
    if(ctx) resize();
    animate()
}
function initCanvas(){
    initParticles();
}
function initParticles(){
    particles = [];
    numParticles = 150;
    particleRadius = {min: 3, max: 10}
    particleSpeed = {min: 0.1, max: 0.5};
    particleLife = {min: 1, max: 3};    //in seconds
    spawnRadius = {
        x: ctx.canvas.width,
        y: ctx.canvas.height
    };
    for(let i = 0; i < numParticles; i++){
        let x = center.x + rand(particleRadius.max, ctx.canvas.width - particleRadius.max, true);
        let y = rand(0, ctx.canvas.height);
        let r = rand(particleRadius.min, particleRadius.max);
        let vx = 0.01;
        let vy = rand(particleSpeed.min, particleSpeed.max);
        let hue = 240;
        let hueSat = 100;
        let hueLight = 100;
        particles.push(new Particle(x,y,r,vx,vy,hue,hueSat,hueLight));
    }
}

function resize(){

    if(ctx.canvas.width && ctx.canvas.height){
        let diff = {
            x: abs(ctx.canvas.width - window.innerWidth),
            y: abs(ctx.canvas.height - window.innerHeight)
        };
        //re-initialize if rezise is significant
        if(diff.x > 50 || diff.y > 50){
            ctx.canvas.width = window.innerWidth;
            ctx.canvas.height = window.innerHeight;
            center = {
                x: window.innerWidth/2,
                y: window.innerHeight/2
            };
            initCanvas();
        }
    }else{
        ctx.canvas.width = window.innerWidth;
        ctx.canvas.height = window.innerHeight;
        center = {
            x: window.innerWidth/2,
            y: window.innerHeight/2
        };
        initCanvas();
    }
}

//Causes a sped up animation on mobile
addEventListener('resize', resize);
addEventListener('orientationchange', resize);
function animate(){
    ctx.save();
    ctx.clearRect(0,0,ctx.canvas.width, ctx.canvas.height);
    ctx.restore();
    particles.forEach((particle)=>{
        particle.update();
});

    requestAnimationFrame(animate);
}

/*************************
 loader js start
 *************************/

$('.loader-wrapper').fadeOut('slow', function () {
    $(this).remove();
});

/*************************
 loader js end
 *************************/