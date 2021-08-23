canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.strokeStyle="purple";
ctx.lineWidth= 1;
ctx.rect(180, 200, 430, 200);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="blue";
ctx.lineWidth=4;
ctx.arc(300,275,40,0,2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="yellow";
ctx.lineWidth=4;
ctx.arc(350,325,40,0,2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="black";
ctx.lineWidth=4;
ctx.arc(400,275,40,0,2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="green";
ctx.lineWidth=4;
ctx.arc(450,325,40,0,2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="red";
ctx.lineWidth=4;
ctx.arc(500,275,40,0,2*Math.PI);
ctx.stroke();
