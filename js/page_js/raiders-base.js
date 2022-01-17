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

//報名按鈕
function SignUpOpen() {
    var t = document.getElementById('signUpBox').style.display = 'block';
    var t = document.getElementById('drop0').style.display = 'block';
}
function signUpClose() {
    var t = document.getElementById('drop0').style.display = 'none';
    var t = document.getElementById('drop20').style.display = 'none';
    var t = document.getElementById('signUpBox').style.display = 'none';
    var t = document.getElementById('signNext').style.display = 'none';
}
function signUpNext() {
    var t = document.getElementById('drop0').style.display = 'none';
    var t = document.getElementById('drop20').style.display = 'block';
    var t = document.getElementById('signUpBox').style.display = 'none';
    var t = document.getElementById('signNext').style.display = 'block';
}

function signUpExNext() {
    var t = document.getElementById('drop0').style.display = 'block';
    var t = document.getElementById('signUpBox').style.display = 'block';
    var t = document.getElementById('signNext').style.display = 'none';
}
// function SignUpSend() {
//     var t = document.getElementById('signNext').style.display = 'none';
// }


