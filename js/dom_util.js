export const REMOVE_BUTTON_PREFIX = 'remove-button-';
export const EDIT_BUTTON_PREFIX = 'edit-button-';

const itemsContainer = document.querySelector('#items-container')

const bankNameInput = document.querySelector('#bankName-input')
const issueYearInput = document.querySelector('#issueYear-input')
const customerNameInput = document.querySelector('#customerName-input')
const interestRateInPercentsInput = document.querySelector('#interestRateInPercents-input')
const planNAmeInput = document.querySelector('#planName-input')
const maintenanceFeeInput = document.querySelector('#maintenanceFeeInUsD-input')
const serviceTypeInput = document.querySelector('#serviceType-input')
const depositAmountInUsDInput = document.querySelector('#depositAmountInUsD-input')

export const searchBrandInput = document.querySelector('#search-input')

const getItemId = id => `item-${id}`

const depositTemplate = ({ id, bankName, issueYear, customerName, interestRateInPercents, planName, maintenanceFeeInUsD, serviceType, depositAmountInUsD }) => `
<li id="${getItemId(id)}">
  <p class="item__bankName">bankName: ${bankName}</p>
  <p class="item__issueYear">issueYear: ${issueYear}</p>
  <p class="item__customerName">customerName: ${customerName}</p>
  <p class="item__interestRateInPercents">interestRateInPercents: ${interestRateInPercents}</p>
  <p class="item__planName">planName: ${planName}</p>
  <p class="item__maintenanceFeeInUsD">maintenanceFeeInUsD: ${maintenanceFeeInUsD}</p>
  <p class="item__serviceType">serviceType: ${serviceType}</p>
  <p class="item__depositAmountInUsD">depositAmountInUsD: ${depositAmountInUsD}</p>
  <button id="${EDIT_BUTTON_PREFIX}${id}" type="button" class="item__buttons-edit">Edit</button>
  <button id="${REMOVE_BUTTON_PREFIX}${id}" type="button" class="item__buttons-delete">Remove</button>
</li>`

export const getInputValues = () => {
    return {
        bankName: bankNameInput.value,
        issueYear: issueYearInput.value,
        customerName: customerNameInput.value,
        interestRateInPercents: interestRateInPercentsInput.value,
        planName: planNAmeInput.value,
        maintenanceFeeInUsD: maintenanceFeeInput.value,
        serviceType: serviceTypeInput.value,
        depositAmountInUsD: depositAmountInUsDInput.value,
    }
}

export const clearInputs = () => {
    bankNameInput.value = ''
    issueYearInput.value = ''
    customerNameInput.value = ''
    interestRateInPercentsInput.value = ''
    planNAmeInput.value = ''
    maintenanceFeeInput.value = ''
    serviceTypeInput.value = ''
    depositAmountInUsDInput.value = ''
}

export const addDEpositToPage = ({ id, bankName, issueYear, customerName, interestRateInPercents, planName, maintenanceFeeInUsD, serviceType, depositAmountInUsD }, onEditItem, onRemoveItem) => {
    itemsContainer.insertAdjacentHTML(
        'afterbegin',
        depositTemplate({ id, bankName, issueYear, customerName, interestRateInPercents, planName, maintenanceFeeInUsD, serviceType, depositAmountInUsD }, onEditItem, onRemoveItem)
    )

    const editButton = document.querySelector(`#${EDIT_BUTTON_PREFIX}${id}`)
    const deletedButton = document.querySelector(`#${REMOVE_BUTTON_PREFIX}${id}`)

    editButton.addEventListener('click', onEditItem)
    deletedButton.addEventListener('click', onRemoveItem)
}

export const renderItemList = (items, onEditItem, onRemoveItem) => {
    itemsContainer.innerHTML = ''

    for (const item of items) {
        addDEpositToPage(item, onEditItem, onRemoveItem)
    }
}

export const getInputYearIssue = () => {
    return searchBrandInput.value
}