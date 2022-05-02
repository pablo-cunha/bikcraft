// Função para manter o pseudo elemento no link selecionado
const links = document.querySelectorAll('.header-menu a')
const activateLink = (link) => {
    const url = location.href
    const href = link.href

    if(url.includes(href)) {
        link.classList.add('active')
    }
}

links.forEach(activateLink)

// Ativar itens do orçamento
const params = new URLSearchParams(location.search)

const activateProduct = parameter => {
    const element = document.getElementById(parameter)
    if(element) {
        element.checked = true

    }
}

params.forEach(activateProduct)

// Menu pergunta-resposta
const questions = document.querySelectorAll('.perguntas-box button')

const activateQuestionBox = event => {
    const question = event.currentTarget
    const controls = question.getAttribute('aria-controls')
    const answer = document.getElementById(controls)
    
    answer.classList.toggle("ativa")

    const toggleAtivaClass = answer.classList.contains("ativa")
    question.setAttribute('aria-expanded', toggleAtivaClass)
}

const questionEvents = question => {
    question.addEventListener('click', activateQuestionBox)
}

questions.forEach(questionEvents)

// Expandir imagem bicicleta
const gallery = document.querySelectorAll('.product-img img')
const galleryContainer = document.querySelector('.product-img')

const switchImage = event => {
    const img = event.currentTarget
    const media = matchMedia('(min-width: 1000px').matches
    if(media){
        galleryContainer.prepend(img)
    }
}

const galleryEvents = img => {
    img.addEventListener('click', switchImage)
}

gallery.forEach(galleryEvents)

// Simple-anime plugin
if(window.SimpleAnime){
    new SimpleAnime()
}