function saveBudget(budget) {
    let budgetArr = getBudget();
        budgetArr.splice(0, 1, budget);

    localStorage.setItem('Budget', JSON.stringify(budgetArr));
}

function getBudget(){

    let localBudgetData = localStorage.getItem('Budget');

    if (localBudgetData == null) {
        return [];
    }
    return JSON.parse(localBudgetData);
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

export{saveToLocalStorageByExpenses, getLocalStorage, removeFromLocalStorage, saveBudget, getBudget }