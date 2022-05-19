export class UI {
    
    constructor() {}

    /**
     * 
     * @param {string} text es la pregunta a renderizar
     */

    showQuestion(text){

        const questionTitle = document.getElementById('question')
        questionTitle.innerText = text;

    }

    /**
     * 
     * @param {string} choices pasamos las respuestas 
     */

    showChoices(choices){
        const choicesContainer = document.getElementById('choices')

    }


}