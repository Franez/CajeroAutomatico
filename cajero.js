class Billete //creamos la clase billete
{
    constructor(val, cant)
    {
        this.valor = val;
        this.cantidad = cant;
    }
}
function entregarDinero()
{
    var t =document.getElementById("dinero") // la variable t adquiere lo escrito en el txt "dinero"
    dinero = parseInt(t.value);
    
    for(var bi of caja)
    {
        if(dinero > 0)
        {
            div = Math.floor(dinero / bi.valor);

            if(div > bi.cantidad)
            {
                papeles= bi.cantidad;
            }
            else
            {
                papeles = div;
            }
            entregado.push(new Billete(bi.valor, papeles) );
            dinero = dinero - (bi.valor * papeles);
        }

    }
        if(dinero > 0){
            
           resultado.innerHTML ="no hay suficiente dinero";
        }else
        {
            for(var e of entregado){
                if(e.cantidad > 0)
                resultado.innerHTML += resultado.innerHTML + e.cantidad + "  billetes de $" + e.valor + "<br />";
            }
        }
        
}

var caja =[]; 
var entregado = []; //billetes entregados al usuario (coleccion que funciona exactamente igual que caja)

caja.push( new Billete (50, 10)); //el push nos permite crear cualquier tipo de billete con sus atributos 
caja.push( new Billete (20, 20));
caja.push( new Billete (10, 20));

var dinero = 1000; //corresponde al dinero total
var div =0; //resultado de la divicion
var papeles =0; // cantidad de papeles

var resultado = document.getElementById("resultado");
var b = document.getElementById("extraer");
b.addEventListener("click", entregarDinero);