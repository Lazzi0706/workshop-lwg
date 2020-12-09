const getMoreBlock = document.getElementById('playerGoldWrap')
const workshopButton = document.createElement('button')
const workshopClose = document.createElement('button');
const workshopMenu = document.createElement('div')
//


// init
workshopButton.innerHTML = 'Workshop!'
workshopButton.style.marginLeft = 2 + 'px'

workshopMenu.id = 'workshopMenuId'

$(getMoreBlock).append(workshopButton)
//
workshopButton.onclick = function getMenu() {

    // Хрень-меню

    workshopMenu.style.position = 'absolute'
    workshopMenu.style.zIndex = 1
    workshopMenu.style.width = 650 + 'px'
    workshopMenu.style.height = 'auto'
    workshopMenu.style.marginLeft = 31 + '%'
    workshopMenu.style.marginTop = 10 + '%'
    workshopMenu.style.textAlign = 'center'
    workshopMenu.style.background = '#275494'
    workshopMenu.style.border = 2 + 'px solid #6898DD'
    workshopMenu.innerHTML = '<h1> Workshop! </h1>'

    // Хрень-блок со скриптами и говнокодом
    const workshopBlockLazzi = document.createElement('div')
    const workshopBlockRynus = document.createElement('div')
    const workshopBlockSilverBoss = document.createElement('div')

    const LazziButton = document.createElement('button')
    const RynusButton = document.createElement('button')
    const SilverButton = document.createElement('button')

    const lazziLink = 'https://github.com/Lazzi0706/LanguageChangerForLWG'
    const rynusLink = ''
    const silverLink = 'https://github.com/silverbossTD/project_js_lwg/blob/main/pestBtnIgnore.js'
    //
    workshopBlockLazzi.classList.add('gold_buy_div')
    workshopBlockRynus.classList.add('gold_buy_div')
    workshopBlockSilverBoss.classList.add('gold_buy_div')


    LazziButton.innerHTML = "Lazzi"
    LazziButton.onclick = () => window.open(lazziLink)

    RynusButton.innerHTML = "Rynus"
    RynusButton.onclick = () => window.open(rynusLink)

    SilverButton.innerHTML = "Silverboss"
    SilverButton.onclick = () => window.open(silverLink)

    // Close button
    workshopClose.innerHTML = 'Close'
    workshopClose.style.marginTop = 8 + 'px'
    workshopClose.style.marginLeft = 90 + '%'
    workshopClose.onclick = () => workshopMenu.remove()

    // Show elements

    $(workshopMenu).append(workshopBlockLazzi)
    $(workshopMenu).append(workshopBlockRynus)
    $(workshopMenu).append(workshopBlockSilverBoss)

    $(workshopBlockLazzi).append(LazziButton)
    $(workshopBlockRynus).append(RynusButton)
    $(workshopBlockSilverBoss).append(SilverButton)

    $(workshopMenu).append(workshopClose)

    $('#lobbyDiv').append(workshopMenu)
}