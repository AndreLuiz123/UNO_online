class Mao{

    constructor(){
        this.mao = [];
    }

    compraCarta(carta){
        this.mao.push(carta);
        this.mao[this.mao.length-1].x = (this.mao.length-1)*this.mao[this.mao.length-1].w + 10*(this.mao.length-1);
        this.mao[this.mao.length-1].y = 500 - this.mao[this.mao.length-1].h/2;
    }

    puxaCarta(i){
       return this.mao[i];
    }

    depositaCarta(i){
        console.log(this.mao);
        this.mao.splice(this.mao.findIndex(j => j.numero === i), 1);
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
                this.mao[i].x = (i)*this.mao[i].w + 10*(i);
                this.mao[i].y = 500 - this.mao[i].h/2;
                return;
            }
        }
        return;
    }

    reposicionaTodasCartas(){
        for(var i=0; i<this.mao.length; i++)
        {
                this.mao[i].agarrada = false;
                this.mao[i].aumentaCarta();
                this.mao[i].x = (i)*this.mao[i].w + 10*(i);
                this.mao[i].y = 500 - this.mao[i].h/2;            
        }
        return;
    }


}