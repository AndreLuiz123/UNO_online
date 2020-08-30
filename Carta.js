class Carta{

    constructor(numero=0, cor='red'){
 
        this.numero = numero;
        this.cor = cor;
        this.x = 30;
        this.y = 30;
        this.w = 200;
        this.h = 300;
        this.agarrada = false;
        this.fonte = 50;
        this.fonteX = 20;
        this.fonteY = 50;
    }

    desenhar(ctx){
        ctx.fillStyle = "black";
        ctx.fillRect(this.x,this.y,this.w, this.h);
        ctx.fillStyle = this.cor;
        ctx.font = this.fonte+"px Verdana";
        ctx.fillText(this.numero, this.x+ this.fonteX,this.y+this.fonteY);
    }

    diminuiCarta(){
        this.w = 100;
        this.h = 150;
        this.fonteX = 2;
        this.fontey = 5;     
    }

    aumentaCarta(){
        this.w = 200;
        this.h = 300;
        this.fonteX = 20;
        this.fontey = 50;     
    }
    



}