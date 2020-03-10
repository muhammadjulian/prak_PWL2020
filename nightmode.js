function settime() {
    var date = new Date();
    var jam = date.getHours();
    body = document.getElementsByTagName("body")[0]
    if (jam >= 18 || jam <= 6) {
        body.classList.add("malam")
    } else (
        body.classList.remove("malam")
    )
}
settime();