import {
    getAllDeposits,
    deleteDeposit,
} from './api.js'

import {
    EDIT_BUTTON_PREFIX,
    REMOVE_BUTTON_PREFIX,
    renderItemList,
    getInputBankName,
    searchBankInputName,
} from './dom_util.js'

const searchButton = document.querySelector('#search-button')
const cancelButton = document.querySelector('#cancel-button')
const sortButton = document.querySelector('#sort-button')
const countDepositAmountInUsDButton = document.querySelector('#count-button')
const countDepositAmountInUsDOutput = document.querySelector('#count-price')

let deposits = []

const refetchAllDeposits = async() => {
    const allDeposits = await getAllDeposits()

    deposits = allDeposits

    renderItemList(deposits, onEditItem, onRemoveItem)
}

const onRemoveItem = element => {
    const itemId = element.target.id.replace(REMOVE_BUTTON_PREFIX, '');
    deleteDeposit(itemId).then(refetchAllDeposits)
}

const onEditItem = async element => {
    const itemId = element.target.id.replace(EDIT_BUTTON_PREFIX, '')
    onclick = () => {
        location.href = `edit.html?id=${itemId}`
    }
}

sortButton.addEventListener('click', event => {

    event.preventDefault()

    deposits.sort(function(a, b) {
        return b.size - a.size;
    });
    renderItemList(deposits, onEditItem, onRemoveItem)
})

searchButton.addEventListener('click', event => {

    event.preventDefault()

    const bankName = getInputBankName();
    const foundDeposits = deposits.filter(deposit => deposit.brandName.search(bankName) !== -1)

    renderItemList(foundDeposits, onEditItem, onRemoveItem)
})

cancelButton.addEventListener('click', event => {
    event.preventDefault()
    searchBankInputName.value = ''
    renderItemList(deposits, onEditItem, onRemoveItem)
})

countDepositAmountInUsDButton.addEventListener('click', event => {

    event.preventDefault()

    const sum = deposits.reduce((acc, deposit) => {
        return acc += +deposit.depositAmountInUsD
    }, 0)

    countDepositAmountInUsDOutput.textContent = sum

})

refetchAllDeposits()