import {
    clearInputs,
    getInputValues,
} from './dom_util.js'

import {
    postDeposit,
} from './api.js'

const submitButton = document.querySelector('#submit-button')

submitButton.addEventListener('click', event => {

    event.preventDefault()

    const { bankName, issueYear, customerName, interestRateInPercents, planName, maintenanceFeeInUsD, serviceType, depositAmountInUsD } = getInputValues()

    // clearInputs()

    postDeposit({
        bankName,
        issueYear,
        customerName,
        interestRateInPercents,
        planName,
        maintenanceFeeInUsD,
        serviceType,
        depositAmountInUsD
    })

    alert('added new deposit')
})