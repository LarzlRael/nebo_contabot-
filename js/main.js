const togleMenuButton = document.getElementById('toggle-menu-button')
const mainContainer = document.getElementById('main-container')
const buttonToggle = document.getElementById('button-chat-toggle')
const buttonOpenChat = document.getElementById('button-open-chat')
const chatContainer = document.getElementById('main-container__chat')

let open = true
let openChat = true

togleMenuButton.addEventListener('click', () => {
  if (open) {
    if (openChat) {
      mainContainer.style.gridTemplateColumns = '10% 1fr 350px'
    } else {
      mainContainer.style.gridTemplateColumns = '10% 1fr'
    }
    open = false
  } else {
    if (openChat) {
      mainContainer.style.gridTemplateColumns = '22% 1fr 350px'
    } else {
      mainContainer.style.gridTemplateColumns = '22% 1fr'
    }
    open = true
  }
})

buttonToggle.addEventListener('click', () => {
  if (openChat) {
    if (open) {
      mainContainer.style.gridTemplateColumns = '22% 1fr'
    } else {
      mainContainer.style.gridTemplateColumns = '10% 1fr'
    }
    document.querySelector('.main-container__chat').style.display = 'none'
    buttonOpenChat.style.display = 'block'
    openChat = false
  } else {
    mainContainer.style.gridTemplateColumns = '22% 1fr 350px'
    openChat = true
    document.querySelector('.main-container__chat').style.display = 'block'
    openChat = true
  }
})

buttonOpenChat.addEventListener('click', () => {
  buttonOpenChat.style.display = 'none'
  if (open) {
    mainContainer.style.gridTemplateColumns = '22% 1fr 350px'
  } else {
    mainContainer.style.gridTemplateColumns = '10% 1fr 350px'
  }
  document.querySelector('.main-container__chat').style.display = 'block'
  openChat = true
})
