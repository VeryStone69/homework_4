// Exercise 3 -------------------------------------------------------------

//--menu creation--
function startMake() {

    let userValue = document.getElementById(`elemMenu`).value;
    let arrValue = [];
    arrValue = userValue.split(`,`);
    let a = arrValue.length;

    userColorText = document.getElementById(`colorText`).value;
    let userColorBg = document.getElementById(`colorBackGr`).value;
    userColorHover = document.getElementById(`colorHover`).value;

    let output = "";

    if (a > 0) {
        divMenu.innerHTML = `<ul id=ulMenu style="background-color: ${userColorBg};">`;

        divResult.innerHTML = `<p style="border: 2px solid gray"> ${arrValue} |<b> Цвет текста:</b> (${userColorText}) | <b>Цвет фона:</b>  ${userColorBg}</p>`;

        for (i = 0; i < arrValue.length; i++) {
            let b = arrValue[i];
            output += `<li><a href="#" style="color: ${userColorText};" onClick="showImg()">${b}</a></li>`;
        }
    }
ulMenu.innerHTML = output;
}

//--show pictures--
function showImg() {
    let randomPic = Math.round(Math.random() * 12);
    let showPic = document.getElementById(`divPic`);
    showPic.innerHTML = `<img src="img/${randomPic}.jpeg" style="height: 290px; border-radius: 8px;" alt="">`;
}


//--hover--
container.onmouseover = container.onmouseout = handler;
function handler(event) {
    function str(el) {
        if (!el) return "null"
        return el.className || el.tagName;
    }

    if (event.type == 'mouseover') {
        event.target.style.color = userColorHover;
    }
    if (event.type == 'mouseout') {
        event.target.style.color = userColorText;
    }
}