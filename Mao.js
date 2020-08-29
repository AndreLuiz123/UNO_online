class Mao{

    constructor(){
        this.mao = [];
    }

    compraCarta(carta){
        this.mao.push(carta);
        this.mao[this.mao.length-1].x = (this.mao.length-1)*this.mao[this.mao.length-1].w;
        this.mao[this.mao.length-1].y = 200;
    }

    puxaCarta(i){
       return this.mao[i];
    }

    desenhar(ctx){
        for(var i=0; i<this.mao.length; i++)
        {
            this.mao[i].desenhar(ctx);
        }
    }


}