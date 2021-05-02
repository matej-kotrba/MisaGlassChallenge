class Hrac {
    constructor() {
        this.x = 900
        this.y = 415
        this.w = 100
        this.h = 100
        this.realx = this.x - this.w / 2
        this.realy = this.y - this.h / 2
        this.t = 0
        this.obrazek = new Image()
        this.obrazek.src = "misa.png"
    }
    pohyb() {
        this.t++
        this.realx = this.x + 50
        this.realy = this.y + 50
        if (this.www && !(this.realy < this.h / 2)) {
            this.y -= 12 * dt;
        }
        if (this.ddd && !(this.realx > this.w / 2 + 1700)) {
            this.x += 12 * dt;
        }
        if (this.sss && !(this.realy > this.h / 2 + 780)) {
            this.y += 12 * dt;
        }
        if (this.aaa && !(this.realx < this.w / 2)) {
            this.x -= 12 * dt;
        }        
        c.drawImage(this.obrazek, this.x, this.y, this.w, this.h)
    }
    
}

class Strepy {
    constructor(x, y, w, h) {
        this.x = x
        this.y = y
        this.w = w
        this.h = h
        this.image = new Image()
        this.image.src = "1.png"
        this.image1 = new Image()
        this.image1.src = "2.png"
        this.image2 = new Image()
        this.image2.src = "3.png"
        this.rotace = Math.random() * 5
        this.strana = Math.random()
        this.t = 0
    }
    rozbiti() {
        if(this.strana >= 0.5) {
            this.rotace = 1
        }
        else{
            this.strana = -1
        }
        this.t++
        var uhel = this.t * this.rotace * this.strana;
        var x = this.x + this.w / 2
        var y = this.y + this.h / 2
        c.save();
        c.translate(x, y);
        c.rotate((90 - uhel) * Math.PI / 180);
        c.translate(0 - x, 0 - y);
        c.save();
        c.globalAlpha = 1;
        c.drawImage(this.image, this.x += this.strana, this.y += this.t + this.rotace / 5, this.w, this.h);
        c.restore();
        c.restore();
    }
    
}
class Strepy2 {
    constructor(x, y, w, h) {
        this.x = x
        this.y = y
        this.w = w
        this.h = h
        this.image = new Image()
        this.image.src = "1.png"
        this.image1 = new Image()
        this.image1.src = "2.png"
        this.image2 = new Image()
        this.image2.src = "3.png"
        this.rotace = Math.random() * 5
        this.strana = Math.random()
        this.t = 0
    }
    rozbiti() {
        if(this.strana >= 0.5) {
            this.rotace = 1
        }
        else{
            this.strana = -1
        }
        this.t++
        var uhel = this.t * this.rotace * this.strana;
        var x = this.x + this.w / 2
        var y = this.y + this.h / 2
        c.save();
        c.translate(x, y);
        c.rotate((90 - uhel) * Math.PI / 180);
        c.translate(0 - x, 0 - y);
        c.save();
        c.globalAlpha = 1;
        c.drawImage(this.image1, this.x += this.strana, this.y += this.t + this.rotace / 5, this.w, this.h);
        c.restore();
        c.restore();
    }
    
}
class Strepy1 {
    constructor(x, y, w, h) {
        this.x = x
        this.y = y
        this.w = w
        this.h = h
        this.image = new Image()
        this.image.src = "1.png"
        this.image1 = new Image()
        this.image1.src = "2.png"
        this.image2 = new Image()
        this.image2.src = "3.png"
        this.rotace = Math.random() * 5
        this.strana = Math.random()
        this.t = 0
    }
    rozbiti() {
        if(this.strana >= 0.5) {
            this.rotace = 1
        }
        else{
            this.strana = -1
        }
        this.t++
        var uhel = this.t * this.rotace * this.strana;
        var x = this.x + this.w / 2
        var y = this.y + this.h / 2
        c.save();
        c.translate(x, y);
        c.rotate((90 - uhel) * Math.PI / 180);
        c.translate(0 - x, 0 - y);
        c.save();
        c.globalAlpha = 1;
        c.drawImage(this.image2, this.x += this.strana, this.y += this.t + this.rotace / 5, this.w, this.h);
        c.restore();
        c.restore();
    }
    
}

var zivoty = 3
var skore = 0

class Glass {
    constructor(x, w, sy) {
        this.x = x
        this.y = 1850
        this.w = w
        this.h = w * 2.5
        this.sx = 0
        this.sy = sy
        this.t = 0
        this.rotace = Math.random() * 5
        this.strana = Math.random()
        this.obrazek = new Image()
        this.obrazek.src = "sklenicka.png"
    }
    sklenicka() {
        if(this.strana >= 0.5) {
            this.rotace = 1
        }
        else{
            this.strana = -1
        }
        this.t++
        this.y -= this.sy * dt
        if(this.y < 0 - this.h) {
            zivoty -= 1
            glasss.splice(glasss.indexOf(this), 1)

        } 
        if(player.y > this.y - player.h && player.x < this.x + this.w && player.y < this.y + this.h && player.x > this.x - player.w) {
            glasss.splice(glasss.indexOf(this), 1)
            skore += 1
            strep.push(new Strepy(this.x, this.y, this.w, this.h)) 
            strep.push(new Strepy2(this.x, this.y, this.w, this.h))
            strep.push(new Strepy1(this.x, this.y, this.w, this.h))
        }
        // c.drawImage(this.obrazek, this.x, this.y, this.w, this.h)
        var uhel = this.t * this.rotace * this.strana;
        var x = this.x + this.w / 2
        var y = this.y + this.h / 2
        c.save();
        c.translate(x, y);
        c.rotate((90 - uhel) * Math.PI / 180);
        c.translate(0 - x, 0 - y);
        c.save();
        c.globalAlpha = 1;
        c.drawImage(this.obrazek, this.x, this.y, this.w, this.h);
        c.restore();
        c.restore();
    }
}

var glasss = []
var strep = []
var player = new Hrac()
// var objekt = new Sklenicka(Math.random() * (1000 - 2 * 300) + 300, Math.random() * 75 + 25, Math.random() * 3 + 4)
var time = 0
var dt = 0

function main(timestamp) {
    dt = (timestamp - time) / (1000 / 60)
    time = timestamp
    c.fillStyle = "rgba(255, 255, 255, 0.6)"
    c.fillRect(0, 0, 1800, 880)
    c.font = "20px Arial"
    c.fillStyle = "black"   
    c.fillText("Glasses destroyed: " + skore, 1000, 20)  
    c.fillText("HP left: " + zivoty, 800, 20)        
    if(player.t % 50 == 0) {
    glasss.push(new Glass(Math.random() * 1300 + 300, Math.random() * 75 + 25, Math.random() * 3 + 4))
    }
    for(var i = 0; i < glasss.length; i++) {
        glasss[i].sklenicka()
    }
    for(var i = 0; i < strep.length; i++) {
        strep[i].rozbiti()
    }
    player.pohyb()
    if(zivoty <= 0) {
        window.alert('GAME OVER')
        window.location.replace(window.location.pathname + window.location.search + window.location.hash);
    }
    window.requestAnimationFrame(main)
}


window.requestAnimationFrame(main)