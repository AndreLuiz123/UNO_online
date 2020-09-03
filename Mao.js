class Mao{

    constructor(){
        this.mao = [];
        this.distanciaCartas = 10;
    }

    compraCarta(carta){
        this.mao.push(carta);
        this.mao[this.mao.length-1].x = this.mao.length-1*this.distanciaCartas;//(this.mao.length-1)*this.mao[this.mao.length-1].w + this.distanciaCartas*(this.mao.length-1);
        this.mao[this.mao.length-1].y = 500 - this.mao[this.mao.length-1].h/2;
    }

    puxaCarta(i){
       return this.mao[i];
    }

    depositaCarta(i){
        console.log(this.mao);
        this.mao.splice(this.mao.findIndex(j => j.id === i), 1);
        console.log(this.mao);
    }

    desenhar(ctx){
        for(var i=0; i<this.mao.length; i++)
        {
            if(this.mao[i].y +this.mao[i].h/2 < 250)
                this.mao[i].diminuiCarta();
            else
                this.mao[i].aumentaCarta();

            this.mao[i].desenhar(ctx);
        }
    }

    reposicionaCarta(){
        for(var i=0; i<this.mao.length; i++)
        {
            if(this.mao[i].agarrada){
                this.mao[i].agarrada = false;
                this.mao[i].aumentaCarta();
                this.mao[i].x = i*this.distanciaCartas;
                this.mao[i].y = 500 - this.mao[i].h/2;
                return;
            }
        }
        return;
    }

    reposicionaTodasCartas(){

        this.distanciaCartas = 900/this.mao.length;

        for(var i=0; i<this.mao.length; i++)
        {
                this.mao[i].agarrada = false;
                this.mao[i].aumentaCarta();
                this.mao[i].x = i*this.distanciaCartas;//(i)*this.mao[i].w + this.distanciaCartas*(i);
                this.mao[i].y = 500 - this.mao[i].h/2;            
        }
        return;
    }


}