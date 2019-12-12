# jsg

https://kagasan.github.io/jsg/

ユーザ実装メソッド
```js
function init();
function click(x, y);
function loop();
```
提供メソッド
```js
function changeSize(width, height);
function rgb(r = 255, g = 0, b = 0);
function drawBox(x1, y1, x2, y2, color, thickness = 1);
function drawCircle(x, y, r, color, thickness = 1);
function drawLine(x1, y1, x2, y2, color = "#000000", thickness = 1);
function drawString(x, y, text, color = "#000000", size = 16, font = "メイリオ");
```
実装例
```html
<script src = "./../jsg.js"></script>
<script>
var txt_x, txt_y;

function init(){
    changeTitle("sample");
    changeSize(200, 200);
    txt_x = 100;
    txt_y = 100;
}

function click(x, y){
    txt_x = x;
    txt_y = y;
}

function loop(){
    drawBox(0, 0, canvas.width, canvas.height, rgb(200, 200, 200), -1);
    txt_x--;
    if(txt_x < 0)txt_x = canvas.width;

    drawCircle(10, 10, 5, rgb(0, 0, 200), 2);
    drawLine(90, 10, 100, 20, rgb(0, 100, 100), 2);

    drawString(txt_x, txt_y, "www");
}
</script>
```