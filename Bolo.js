class Bolo{

    constructor(){
        this.cartas = [];
        this.x = 625;
        this.y = 150;
        this.w = 100;
        this.h = 150;
    }

    desenhar(ctx){
        ctx.fillStyle = "black";
        ctx.fillRect(this.x,this.y,this.w, this.h);
    }

    recebeCarta(carta){
        this.cartas.push(carta);
    }

    perdeCarta(){
        return this.cartas.pop();
    }

    embaralhar(){
        if(this.cartas.length>1)
        {
            for (let indice = this.cartas.length; indice; indice--) {
            
                const indiceAleatorio = Math.floor(Math.random() * indice);
            
                // atribuição via destructuring
                [this.cartas[indice - 1], this.cartas[indiceAleatorio]] = 
                    [this.cartas[indiceAleatorio], this.cartas[indice - 1]];
            }
        }
    }

}
