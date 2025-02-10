function saveBudget() {
    let budgetArr = getBudget();

    if (!budgetArr.includes(budget)) {
        budgetArr.push(budget);
    }
    localStorage.setItem('Budget', JSON.stringify(budgetArr));
}

function getBudget(){

    let localBudgetData = localStorage.getItem('Budget');

    if (localBudgetData == null) {
        return [];
    }
    return JSON.parse(localBudgetData);
}

function removeBudget(budget){
    let budgetArr = getLocalStorage();


    let budgetIndex = budgetIndex.indexOf(budget);
    budgetArr.splice(budgetIndex, 1);
    localStorage.setItem('Budget', JSON.stringify(budgrtArr));
}

function saveToLocalStorageByExpenses(expenses) {
    let expensesArr = getLocalStorage();

    if (!expensesArr.includes(expenses)) {
        expensesArr.push(expenses);
    }
    

    localStorage.setItem('Expenses', JSON.stringify(expensesArr));
}

function getLocalStorage(){

    let localStorageData = localStorage.getItem('Expenses');

    if (localStorageData == null) {
        return [];
    }
    return JSON.parse(localStorageData);
}

function removeFromLocalStorage(expenses){
    let expensesArr = getLocalStorage();


    let expensesindex = expensesArr.indexOf(expenses);
    expensesArr.splice(expensesindex, 1);
    localStorage.setItem('Expenses', JSON.stringify(expensesArr));
}

export{saveToLocalStorageByExpenses, getLocalStorage, removeFromLocalStorage, saveBudget, getBudget, removeBudget }