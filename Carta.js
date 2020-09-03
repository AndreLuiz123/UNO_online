class Carta{

    constructor(id=0){
        this.id = id;
        this.numero = id%9;

        switch(Math.floor(id/9))
        {
            case 0:
                console.log(Math.floor(id/9));
                this.cor = 'red';
            break;
            case 1:
                console.log(Math.floor(id/9));
                this.cor = 'green';
            break;
            case 2:
                console.log(Math.floor(id/9));
                this.cor = 'blue';
            break;
            case 3:
                console.log(Math.floor(id/9));
                this.cor = 'yellow';
            break;
            case 4:
                console.log(Math.floor(id/9));
                this.cor = 'red';
            break;
            case 5:
                console.log(Math.floor(id/9));
                this.cor = 'green';
            break;
            case 6:
                console.log(Math.floor(id/9));
                this.cor = 'blue';
            break;
            case 7:
                console.log(Math.floor(id/9));
                this.cor = 'yellow';
            break;
            default:
                console.log(Math.floor(id/9));
                this.cor = 'grey';
            break;
        }

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
        ctx.fillStyle = this.cor;
        ctx.strokeStyle = "black";
        ctx.fillRect(this.x,this.y,this.w, this.h);
        ctx.strokeRect(this.x,this.y,this.w, this.h);
        ctx.fillStyle = "black";
        ctx.font = this.fonte+"px Verdana";
        ctx.fillText(this.numero, this.x+ this.fonteX,this.y+this.fonteY);
        ctx.strokeText(this.numero, this.x+ this.fonteX,this.y+this.fonteY)
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