import {
    clearInputs,
    getInputValues,
} from './dom_util.js'

import {
    updateDeposit,
} from './api.js'

const submitButton = document.querySelector('#submit-button')

submitButton.addEventListener('click', event => {

    event.preventDefault()

    const substrings = window.location.search.substring(1).split('=')
    const id = substrings[1]

    const { bankName, issueYear, customerName, interestRateInPercents, planName, maintenanceFeeInUsD, serviceType, depositAmountInUsD } = getInputValues()

    // clearInputs()

    updateDedosit(id,
        bankName, {
            issueYear,
            color,
            customerName,
            interestRateInPercents,
            planName,
            maintenanceFeeInUsD,
            serviceType,
            depositAmountInUsD
        })

    alert('edited deposit')
})