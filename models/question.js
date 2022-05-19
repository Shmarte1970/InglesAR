
export class Question{

    /**
     * 
     * @param {string} text esta es la pregunta
     * @param {string} choise estas son las opciones
     * @param {string} answer respuesta correcta
     */

    constructor(text, choise, answer)
    {
    this.text = preguntas;
    this.choices  = choise;
    this.answer = answer;
    }

    /**
     * 
     * @param {string} choice respuesta
     * @returns {boolean} return si es correcto o no 
     */
    correrrespuest(choice){
         return choice ===this.answer
    }
}



