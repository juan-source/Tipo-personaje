
function send(){
    var valor = Math.floor((Math.random()*16)+1)
    console.log(valor)
   
    document.getElementById('image').innerHTML=`
    <img src="./images/captura${valor}.png" class="images">`
    if(valor==1){
        document.getElementById('text').innerHTML=`
        <h2>ULLOA - alias  uy Mi Loco!</h2>
        <p>Este personaje es un gamer profesional, no dudara en usar sus habilidades para aniquilarte,
        en especial si tu nombre es Daniel. <br> Poder de poner sobrenombres de 1000% en su estado
        base.</p>`
    }else if(valor==2){
        document.getElementById('text').innerHTML=`
        <h2>CESAR - alias  Cesaro - Amadeus</h2>
        <p>Este personaje hace parte de los protagonistas del anime, cuenta con poderes musicales, de pintura
        , de baile, de canto y un par más. Cuenta la leyenta que le enseño a tocar la guitarra a 
        Slash y a Hendrix.<br> Punto debil; se enoja muy facil en los juegos hasta el punto de abandonar la partida.</p> ` 
    }else if(valor==3){
        document.getElementById('text').innerHTML=`
        <h2>MICHI - alias Foto de perfil </h2>
        <p>Este extraño personaje es de los más debiles del anime, sin embargo es muy raro pues 
        cuenta con poderes de curación de 20.000</p> `
    }
    else if(valor==4){
        document.getElementById('text').innerHTML=`
        <h2>BRAYAN MODO ANCIANO - alias  Papá Noel</h2>
        <p>Este viejo bonachon es quien ayuda a los personajes a derrotar a sus enemigo, utiliza 
        sus habilidades de sabiduria para darles poder <br> Punto debil; ya esta demasido viejo el pobre.</p> `
    }
    else if(valor==5){
        document.getElementById('text').innerHTML=`
        <h2>DANIELA -   Esposa de Daniel</h2>
        <p>Esta señora es la encargada de cuidar al anciano Brayan, parece que despues de tanto tiempo
         ayudando al anciano, se logro despertar una chispa de amor entre esos dos. Es una lastima 
         que el anciano ya sea impotente por la edad.</p> `
    }
    else if(valor==6){
        document.getElementById('text').innerHTML=`
        <h2>CESAR ANCIANO - alias  Viejo Ogro</h2>
        <p>Este viejo es uno de los enemigos de los protagonistas, su mayor poder es estar mal humorado
         siempre, dicen que es tan enojon que le teme hasta el mismisimo Putin. <br>
         Antes de ser asi, en sus años jovenes era amigo de Brayan ahora anciano.</p> `
    }
    else if(valor==7){
        document.getElementById('text').innerHTML=`
        <h2>ADRIANA - Esposa del villano principal  </h2>
        <p>Esa maldita señora esta detras de todas las fechorias de su marido, odia a los niños, 
        dicen que una vez la vieron persiguiendo a uno de ellos para aniquilarlo.</p> `
    }
    else if(valor==8){
        document.getElementById('text').innerHTML=`
        <h2>YESSICA - alias  Brayanna</h2>
        <p>Esta dulce  chica es la novia de Ulloa, se conocieron en una taberna en un pueblo en el 
        reino de la Vega.<br>Ella es de hecho la ex-novia de Brayan, terminaron por Ulloa.</p> `
    }
    else if(valor==9){
        document.getElementById('text').innerHTML=`
        <h2>CABEZON - alias  Retra</h2>
        <p>Este extraño ser mitologico es el ayudante de Adriano, el villano de la serie.<br>
        Se dice que fue creado por Adriano, otorgandole poderes de telepatia, de alli su cabeza tan 
        pero tan, extremadamente grande. Debilidad; la cabeza no lo deja caminar bien.</p> `
    }
    else if(valor==10){
        document.getElementById('text').innerHTML=`
        <h2>FERNANDA - alias Ferchitas</h2>
        <p>Esta chica va junto con los protagonistas a recuperar su tesoro, una hermosa guitarra 
        con la que planea derrotar a todos sus enemigos, es la mejor amiga de Yessica, les gusta 
        escuhar K-POP y hacer pijamadas.</p> `
    }
    else if(valor==11){
        document.getElementById('text').innerHTML=`
        <h2>TESLA - alias  Electricaribe</h2>
        <p>Este es otro de los villanos del anime, su poder es tirar rayos de sus dedos, puede crear
         portales hacia otros mundos y reclutar a su gente.<br> En uno de sus tantos experimentos logro 
         viajar al pasado y casi mata a su abuelo. Punto debil; Vivir en el reino de la Vega.</p> `
    }
    else if(valor==12){
        document.getElementById('text').innerHTML=`
        <h2>COSTEÑO - alias  Mamaburra</h2>
        <p>Este extraño ser es de los mas indefensos del anime, habita en los bosques y le gusta trepar 
        los arboles, rara vez se ha visto que se bañe, de hecho su arma mortal es su olor.<br>
        Por alguna extraña razón le gusta criar burras, punto debil; todos.</p> `
    }
    else if(valor==13){
        document.getElementById('text').innerHTML=`
        <h2>PARA - alias  CO</h2>
        <p>Este es otro de los villanos el anime, es de los peores junto con Adriano, su arma preferida 
        es la motosierra, le gusta llevar botas negras y una bolsa de perico en su carriel, pues viene 
        del reino de Medellín. Punto debil; aún sin descubrir.</p> `
    }
    else if(valor==14){
        document.getElementById('text').innerHTML=`
        <h2>COVID-19 - alias  Coronavairuz</h2>
        <p>Este virus mortal fue creado por el doctor Adriano en compañia del villano PARA-CO, en 
        busca de hacer que los jovenes no aprendan una monda y terminen en las calles o peor aún 
        jugando pubg mobile.</p> `
    }
    else if(valor==15){
        document.getElementById('text').innerHTML=`
        <h2>BRAYAN - alias  uy no, Como asi!- Perchito</h2>
        <p>Este personaje es de los más poderosos del anime, es rival en poner sobrenombres con Ulloa
        . Se dice que es tan pro que creo la vacuna para el COVID-19 solo para el, es el más respetado
         del anime. Nunca ha mostrado su poder verdadero por temor a destruir la tierra, punto debil; ser tan campero.</p> `
    }
    else if(valor==16){
        document.getElementById('text').innerHTML=`
        <h2>ADRIANO - alias  Que gonorrea</h2>
        <p>Este es el principal villano de los protagonistas, su objetivo principal es hacer los estudiantes 
        no puedan acceder a la educación subiendo los precios y robando el dinero de los pobres estudiantes. 
        Poder de maldad de 1 millón, dicen que es tan malo que se roba lo de la plata que se destina para 
        los laboratorios, aún nuestros valientes heroes no han logrado derrotarlo.
        </p> `
    }
}