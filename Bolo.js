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
        if(cartas.length>1)
        {
            for (let indice = cartas.length; indice; indice--) {
            
                const indiceAleatorio = Math.floor(Math.random() * indice);
            
                // atribuição via destructuring
                [cartas[indice - 1], cartas[indiceAleatorio]] = 
                    [cartas[indiceAleatorio], cartas[indice - 1]];
            }
        }
    }

}
