var canvas;
var ctx;
window.onload = function(){
    document.body.innerHTML = "<canvas id = 'jsg'></canvas>";
    canvas = document.getElementById("jsg");
    ctx = canvas.getContext("2d");
    canvas.height = 480;
    canvas.width = 640;
    document.title = "game";
    init();
    document.addEventListener('keydown', (event) => {
        var keyname = event.key;
        keydown(keyname);
    });
    canvas.addEventListener("click", function(e){
        var rect = e.target.getBoundingClientRect();
        var x = e.clientX - rect.left;
        var y = e.clientY - rect.top;
        click(x, y);
    }, false);
    setInterval(loop, 20);
}

function changeTitle(title){
    document.title = title;
}

function changeSize(width, height){
    canvas.width = width;
    canvas.height = height;
}

function rgb(r = 255, g = 0, b = 0){
    return "rgb(" + r + "," + g + "," + b + ")";
}

function drawBox(x1, y1, x2, y2, color, thickness = 1){
    var w = x2 - x1;
    var h = y2 - y1;
    if(thickness < 0){
        ctx.fillStyle = color;
        ctx.fillRect(x1, y1, w, h);
    }
    else{
        ctx.lineWidth = thickness;
        ctx.strokeStyle = color;
        ctx.strokeRect(x1, y1, w, h);
    }
}

function drawCircle(x, y, r, color, thickness = 1){
    if(thickness < 0){
        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.arc(x, y, r, 0, Math.PI * 2, true);
        ctx.fill();
    }
    else{
        ctx.strokeStyle = color;
        ctx.lineWidth = thickness;
        ctx.beginPath();
        ctx.arc(x, y, r, 0, Math.PI * 2, false);
        ctx.stroke();
    }
}

function drawPolygon(pts, color = "#000000", thickness = 1){
    if(thickness < 0){
        this.ctx.fillStyle = color;
        this.ctx.beginPath();
        this.ctx.moveTo(pts[0][0], pts[0][1]);
        for(var i = 1; i < pts.length; i++){
            this.ctx.lineTo(pts[i][0], pts[i][1]);
        }
        this.ctx.lineTo(pts[0][0], pts[0][1]);
        this.ctx.fill();
    }
    else{
        this.ctx.strokeStyle = color;
        this.ctx.lineWidth = thickness;
        this.ctx.beginPath();
        this.ctx.moveTo(pts[0][0], pts[0][1]);
        for(var i = 1; i < pts.length; i++){
            this.ctx.lineTo(pts[i][0], pts[i][1]);
        }
        this.ctx.lineTo(pts[0][0], pts[0][1]);
        this.ctx.stroke();
    }
}

function drawLine(x1, y1, x2, y2, color = "#000000", thickness = 1){
    ctx.lineWidth = thickness;
    ctx.strokeStyle = color;
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
}

function drawString(x, y, text, color = "#000000", size = 16, font = "メイリオ"){
    ctx.font = "" + size + "px '" + font +"'";
    ctx.fillStyle = color;
    ctx.fillText(text, x, y + size);
}