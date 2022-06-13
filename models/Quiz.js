
// @ts-check
import { Question } from "./Question.js"

export class Quiz{

    questionIndex = 0
    score = 0
    myFailure = Array()


    /**
     * 
     * @param {Question[]} questions 
     */

    constructor(questions){
        this.questions = questions
    }

    /**
     * 
     * @returns {Question} devolvemos la pregunta encontrada
     */

    getQuestionIndex() {
        return this.questions[this.questionIndex]
    }

    isEnded(){
        return this.questions.length === this.questionIndex
    }



    guess(answer) {

        if (this.getQuestionIndex().correctAnswer(answer)) {
            this.score++
        }else{
            this.myFailure.push(answer)
            console.log(this.myFailure)
        }

        this.questionIndex++
    }



}