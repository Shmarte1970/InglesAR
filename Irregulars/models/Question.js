

export class Question{

    /**
     * 
     * @param {string} text esta es la pregunta
     * @param {string} choise estas son las opciones
     * @param {string} answer respuesta correcta
     */

    constructor(text, choices, answer)
    {
    this.text = text;
    this.choices  = choices;
    this.answer = answer;
    }

    /**
     * 
     * @param {string} choice respuesta
     * @returns {boolean} return si es correcto o no 
     */
     correctAnswer(choice){
         return choice ===this.answer
    }
}



