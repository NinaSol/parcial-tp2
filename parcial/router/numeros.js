import express from 'express'
import NumbersController from '../controller/numeros.js'


export class NumbersRouter {
    constructor() {
        this.router = express.Router()
        this.numbersController = new NumbersController()
    }

    start() {
        this.router.post('/entrada', this.numbersController.addNumber)
        this.router.get('/entrada', this.numbersController.getAllNumbers) //{numeros: []}
        this.router.get('/promedio', this.numbersController.getAverage)
        this.router.get('/minmax', this.numbersController.getMinMax)
        this.router.get('/cantidad', this.numbersController.getTotalNumbers)
    
        return this.router
    }
}

