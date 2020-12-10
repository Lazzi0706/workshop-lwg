/*
*
*                 Workshop menu
*   Description: allows you to store links to custom modifications in the "Workshop".
*   Version: early alpha
*
*                                           Made by: Lazzi
*/
const getMoreBlock = document.getElementById('playerGoldWrap')
const workshopButton = document.createElement('button')
const workshopClose = document.createElement('button');
const workshopMenu = document.createElement('div')
//


// init
function createEl(node, text) {
    node.style.position = 'absolute'
    node.style.zIndex = 1;
    node.style.width = 650 + 'px'
    node.style.height = 'auto'
    node.style.marginLeft = 31 + '%'
    node.style.marginTop = 10 + '%'
    node.style.textAlign = 'center'
    node.style.background = '#275494'
    node.style.border = 2 + 'px solid #6898DD'
    node.innerHTML = text
    $('#lobbyDiv').append(node)
};

workshopButton.innerHTML = 'Workshop!'
workshopButton.style.marginLeft = 2 + 'px'

$(getMoreBlock).append(workshopButton)
//
workshopButton.onclick = function getMenu() {

   createEl(workshopMenu,'<h1>Workshop!</h1>')

    // Close button
    workshopClose.innerHTML = 'Close'
    workshopClose.style.marginTop = 8 + 'px'
    workshopClose.style.marginLeft = 90 + '%'
    workshopClose.onclick = () => workshopMenu.remove()

    $(workshopMenu).append(workshopClose)

}
