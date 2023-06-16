function changeColor() {
    const colors = ['red', 'blue', 'green', 'orange'];
    console.log(colors)
    const random = colors[Math.floor(Math.random() * colors.length)]
    console.log(random)
    const elem = document.getElementById("color");
    console.log(elem)
    let timerId = setInterval(() => elem.setAttribute('style', 'background-color:' + colors[Math.floor(Math.random() * colors.length)]), 2000)
    console.log(timerId)
}
// Обновить до современного сетАтрибут
// погуглить что такое конкатенация
// Обратить внимание на random и почему цвет меняется только один раз

changeColor() 