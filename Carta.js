class Carta{

    constructor(numero=0, cor='red'){

        this.numero = numero;
        this.cor = cor;
        this.x = 30;
        this.y = 30;
        this.w = 200;
        this.h = 300;
    }

    desenhar(ctx){
        ctx.fillStyle = "black";
        ctx.fillRect(this.x,this.y,this.w, this.h);
    }

}