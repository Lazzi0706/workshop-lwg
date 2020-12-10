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

const lazziLink = new Map([['https://github.com/Lazzi0706/workshop-lwg', 'Workshop'], ['https://github.com/Lazzi0706/LanguageChangerForLWG', 'Language Changer']])
const silverLink = new Map([['https://github.com/Lazzi0706/workshop-lwg', 'Buildorder tool'], ['https://github.com/Lazzi0706/LanguageChangerForLWG', 'Language changer by Silver']])
const rynusLink = new Map([['https://github.com/Lazzi0706/workshop-lwg', 'Somemod'], ['https://github.com/Lazzi0706/LanguageChangerForLWG', 'Somemod']])

class Block {

    constructor(id) {
        this.$el = document.createElement('div')
        this.$el.id = id;
    };
    show(text) {
        this.$el.innerHTML = text
        this.$el.style.background = '#6898DD'
        this.$el.style.border = 2 + 'px solid #687edd'
        this.$el.style.display = 'inlineGrid'
        this.$el.style.marginTop = '2px'
        this.$el.position = 'absolute'
        this.$el.style.width = 310 + 'px'
        this.$el.height = 'auto'
        $(workshopMenu).append(this.$el)
    };

};

//
function createEl(node, appearZone ,text) {
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
    $(appearZone).append(node)
};
    // Create button
workshopButton.innerHTML = 'Workshop!'
workshopButton.style.marginLeft = 2 + 'px'

$(getMoreBlock).append(workshopButton)
//

workshopButton.onclick = function getMenu() {

    createEl(workshopMenu, '#lobbyDiv', '<h1>Workshop!</h1>') /// Workshop menu

    workshopClose.innerHTML = 'Close'
    workshopClose.style.marginTop = 8 + 'px'
    workshopClose.style.marginLeft = 90 + '%'
    workshopClose.onclick = () => workshopMenu.remove()
    $(workshopMenu).append(workshopClose)

    // Init
    const lazziBlock = new Block('lazziId')
    const silverBlock = new Block('silverId')
    const rynusBlock = new Block('rynusId')

    lazziBlock.show('<h1> Lazzi </h1>')
    silverBlock.show('<h1> Silverboss </h1>')
    rynusBlock.show('<h1> Rynus </h1>')

    for (var [link, value] of lazziLink) {

        let info = ' '
        info += '<a>' + value + '</a>'
        $('#lazziId').append(info)

    };

    for (var [link, value] of silverLink) {

        let info = ' '
        info += '<a>' + value + '</a>'
        $('#silverId').append(info)

    };

    for (var [link, value] of rynusLink) {

        let info = ' '
        info += '<a>' + value + '</a>'
        $('#rynusId').append(info)

    };

}
