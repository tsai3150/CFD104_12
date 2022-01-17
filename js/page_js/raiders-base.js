function doFirst(){
    // 先跟HTML產生關聯，再建事件聆聽功能
    let canvas = document.getElementById('canvas');
    let context = canvas.getContext('2d');

    context.fillStyle='#82cddb';
    context.strokeStyle='steelblue';
    context.lineWidth=10;
    
    // 填塞
    context.fillRect(0,20,650,260);
    // 挖空
    context.clearRect(0, 45, 650, 210);
    context.clearRect(200,20,20,260);
    context.clearRect(420,20,20,260);


    // 繪出
    context.stroke();
    
    // 橡皮擦
    // context.clearRect(0, 0, canvas.width, canvas.height);
}
window.addEventListener('load',doFirst)

//stap1報名程序
function SignUpOpen() {
    var btn = document.getElementById('signUpBox').style.display = 'block';
    var btn = document.getElementById('drop0').style.display = 'block';
}
// 關掉
function signUpClose() {
    var btn = document.getElementById('signUpBox').style.display = 'none';
    var btn = document.getElementById('drop0').style.display = 'none';
    var btn = document.getElementById('signNext').style.display = 'none';
    var btn = document.getElementById('drop20').style.display = 'none';
    var btn = document.getElementById('signClass').style.display = 'none';
    var btn = document.getElementById('drop40').style.display = 'none';
    var btn = document.getElementById('signTime').style.display = 'none';
    var btn = document.getElementById('drop60').style.display = 'none';
}
// step1客戶權益
function signUpNext() {
    var btn = document.getElementById('signUpBox').style.display = 'none';
    var btn = document.getElementById('drop0').style.display = 'none';
    var btn = document.getElementById('signNext').style.display = 'block';
    var btn = document.getElementById('drop20').style.display = 'block';
}
// 返回step0報名程序
function backOpen() {
    var btn = document.getElementById('signUpBox').style.display = 'block';
    var btn = document.getElementById('drop0').style.display = 'block';
    var btn = document.getElementById('signNext').style.display = 'none';
    var btn = document.getElementById('drop20').style.display = 'none';
}
// step2點選課程
function signClass() {
    var btn = document.getElementById('signNext').style.display = 'none';
    var btn = document.getElementById('drop20').style.display = 'none';
    var btn = document.getElementById('signClass').style.display = 'block';
    var btn = document.getElementById('drop40').style.display = 'block';
}
// 返回step1客戶權益
function BackNext() {
    var btn = document.getElementById('signNext').style.display = 'block';
    var btn = document.getElementById('drop20').style.display = 'block';
    var btn = document.getElementById('signClass').style.display = 'none';
    var btn = document.getElementById('drop40').style.display = 'none';
}


// step3點選時間
function signTime(){
    var btn = document.getElementById('signTime').style.display = 'block';
    var btn = document.getElementById('drop60').style.display = 'block';
    var btn = document.getElementById('signClass').style.display = 'none';
    var btn = document.getElementById('drop40').style.display = 'none';
}
// 返回step2點選課程
function BackClass() {
    var btn = document.getElementById('signClass').style.display = 'block';
    var btn = document.getElementById('drop40').style.display = 'block';
    var btn = document.getElementById('signTime').style.display = 'none';
    var btn = document.getElementById('drop60').style.display = 'none';
}


// 選擇課程=============================================
function clickClass1(){
    var o = document.getElementById('clickClass1').style.border= '5px solid #82cddb';
    var btn = document.getElementById('iconNext').style.display = 'block';
} 
function clickClass2(){
    var o = document.getElementById('clickClass2').style.border= '5px solid #82cddb';
    var btn = document.getElementById('iconNext').style.display = 'block';
}
function clickClass3(){
    var o = document.getElementById('clickClass3').style.border= '5px solid #82cddb';
    var btn = document.getElementById('iconNext').style.display = 'block';
}
