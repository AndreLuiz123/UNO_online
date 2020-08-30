class AreaDeposito{

    constructor(){
        this.cartas = [];
        this.cartaTopo = null;
        this.x = 325;
        this.y = 200;
        this.w = 200;
        this.h = 100;
    }

    desenhar(ctx){
        ctx.fillStyle = "blue";
        ctx.fillRect(this.x,this.y,this.w, this.h);
        ctx.fillStyle = "white";
        ctx.beginPath();
        ctx.ellipse(425, 250, 50, 100,  Math.PI/2, 0, 2 * Math.PI);
        ctx.fill();

        if(this.cartaTopo)
        this.cartaTopo.desenhar(ctx);

    }

    recebeCarta(mao, carta){

        if(this.cartas.length === 0)
        {
            this.cartas.push(carta);
            this.cartaTopo = this.cartas[this.cartas.length -1];
            carta.diminuiCarta();
            carta.x = 375;
            carta.y = 150;
            carta.agarrada = false;
            mao.depositaCarta(carta.numero);    
            mao.reposicionaTodasCartas();        
        }else{

            
            if(carta.numero === this.cartaTopo.numero || carta.cor === this.cartaTopo.cor)
            {
                this.cartas.push(carta);
                this.cartaTopo = this.cartas[this.cartas.length -1];
                carta.diminuiCarta();
                carta.x = 375;
                carta.y = 150;
                carta.agarrada = false;
                mao.depositaCarta(carta.numero);
                mao.reposicionaTodasCartas();
            }else{
                mao.reposicionaCarta(carta);
            }
            
        }

        console.log(this.cartas);
        console.log(mao.mao);

    }



}