const faqVragen = [
    {
        vraag: "Kan ik vrijblijvend met de diensten contact opnemen voor meer informatie?",
        antwoord: "Ja, je kan doorklikken naar websites en daar meer informatie vinden. Er is steeds vrijblijvend contact mogelijk. Stel uw vraag en er wordt samen met u gezocht naar het beste antwoord."
    },
    {
        vraag: "Welke ondersteuning kan?",
        antwoord: "Dit kan zowel bij u thuis zijn, in uw omgeving als in de voorziening."
    },
    {
        vraag: "Kan je ook hulp inzetten in samenwerking met andere diensten?",
        antwoord: "Zeker en vast."
    },
    {
        vraag: "Kan ik als dienst ook terecht bij jullie organisaties?",
        antwoord: "Ja zeker, neem contact op met de dienst we zoeken een antwoord, eventueel via outreach - vorming,…"
    },
    {
        vraag: "Wat kost de ondersteuning bij jullie?",
        antwoord: "Dit hangt af van uw leeftijd, uw specifieke vraag  en het soort budget waarover u beschikt (PVB, budget RTH , verzekering, …). Meer info bij de organisatie van uw keuze en de op de website van het VAPH."
    },
    {
        vraag: "Kan ik bij deze organisaties terecht met vragen in verband met hulpmiddelen?",
        antwoord: "Jazeker."
    }]
const questions = [];
const answers = [];
document.onload = onLoad()

function onLoad(){
    loadQuestions(faqVragen);
    showAnswer(answers, 0,document.getElementById("vragenContainer").childNodes[1].firstChild)
}

function loadQuestions(faq){


    faq.forEach(qa => {
        questions.push(qa.vraag);
        answers.push(qa.antwoord);
    });

    const listElement = document.getElementById("vragenContainer")
    let index = 0;
    questions.forEach(q => {
        let li = document.createElement('li');
        let btn = document.createElement('button')
        btn.innerHTML = q
        btn.setAttribute('onclick', `showAnswer(answers, ${index}, this)`)
        li.append(btn)
        
        listElement.append(li)
        index++;
    })
}

function showAnswer(answers, questionIndex, btn){
    const anwserContainer = document.getElementById('antwoordContainer')
    const listElement = document.getElementById("vragenContainer").childNodes
    let newList = function(){
        list = []
        listElement.forEach(li => {
            if(li.firstChild != null){
              list.push(li)
            }
        })
        return list
    }
    clearActiveClass(newList())
    anwserContainer.innerHTML = answers[questionIndex]

    btn.classList.add('activeQuestion')
}

function clearActiveClass(list){
    list.forEach(li => {
        li.firstChild.classList.remove('activeQuestion')
    })
}