var Xmin = 0;
var Xmax = 100;
var Ymin = 0;
var Ymax = 5;
var Vx = [10, 30, 50, 70, 90];
var Vy = [1, 2, 3.3, 4, 5];

var GR = document.getElementById("myCanvas");
var GRAF = GR.getContext("2d");
GRAF.font="18px Georgia";
//Ejes
GRAF.moveTo(40, 10);
GRAF.lineTo(40, 310);
GRAF.lineTo(540,310);
//Nombres de ejes
GRAF.fillText("y",42,14);
GRAF.fillText("x",538,306);
//Marcas x
var j;
var L;
for (j=1; j<11; j++)
{
	GRAF.moveTo(j*50+40,310);
	GRAF.lineTo(j*50+40,314);
	L = Xmin + (Xmax-Xmin)*j/10;
	GRAF.fillText(L, j*50+24, 328);
}
//Marcas y
var pY;
pY = 300;
for (j=0; j<6; j++)
{
	GRAF.moveTo(40, j*60+10);
	GRAF.lineTo(36, j*60+10);
	L = Ymin + (Ymax-Ymin)*j/5;
	GRAF.fillText(L, 4, pY -(j*60-14));
}

//Graficar contenido
var Np = Vx.length;
var C;

punto(Vx[0], Vy[0], "blue", 0);
for (C=1; C<Np; C++)
{
	punto(Vx[C], Vy[C], "blue", 1);
}

GRAF.stroke();

//*********************************** FUNCIONES ***********************************
function punto(Xp, Yp, Cl, Lp)
//Xp punto en X, Yp punto en Y, Cl color del punto y Lp es linea o no
{
	if (Xp >= Xmin && Xp <= Xmax && Yp >= Ymin && Yp <= Ymax)
	{
		var Px = 40+ parseInt(Xp*(500/(Xmax-Xmin)));
		var Py = 310 - parseInt(Yp*300/(Ymax-Ymin));
		GRAF.fillStyle = Cl;
		if (Lp == 1)
		{
			GRAF.lineTo(Px, Py);
		}
		GRAF.fillRect(Px, (Py-3),4,4);
		GRAF.fillStyle = "black";
		GRAF.moveTo(Px, Py);
	} 
	else
	{
		alert("Fuera de intervalo");
	}
}
