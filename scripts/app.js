import { getLocalStorage, saveToLocalStorageByExpenses, removeFromLocalStorage, saveBudget, getBudget} from "./localStorage.js";

let MyBudget = 0;
let UpdateBtn = document.getElementById('updateBtn');
let ManageBtn = document.getElementById('manageBtn');
let AddBtn = document.getElementById('addBtn');
let BudgetInput = document.getElementById('budgetInput');
let UpdateChangeBtn = document.getElementById('updateChangeBtn');
let UpdateCancelBtn = document.getElementById('updateCancelBtn');
let UpdateBox = document.getElementById('UpdateBox');
let ManageChangeBtn = document.getElementById('manageChangeBtn');
let ManageCancelBtn = document.getElementById('manageCancelBtn');
let ManageBox = document.getElementById('ManageBox');
let AddChangeBtn = document.getElementById('addChangeBtn');
let AddCancelBtn = document.getElementById('addCancelBtn');
let AddBox = document.getElementById('AddBox');
let ExpenseName = document.getElementById('expenseName');
let ExpenseCost = document.getElementById('expenseCost');
let ExpensesList = document.getElementById('expensesList');

UpdateBtn.addEventListener("click", async () => {
    UpdateBox.className = "mainBox absolute fadeIn"
})
UpdateCancelBtn.addEventListener("click", async () => {
    UpdateBox.className = "hidden"
})
ManageBtn.addEventListener("click", async () => {
    ManageBox.className = "mainBox absolute fadeIn"
})
ManageCancelBtn.addEventListener("click", async () => {
    ManageBox.className = "hidden"
})
AddBtn.addEventListener("click", async () => {
    AddBox.className = "mainBox absolute fadeIn"
})
AddCancelBtn.addEventListener("click", async () => {
    AddBox.className = "hidden"
})

UpdateChangeBtn.addEventListener("click", async () => {
    let ConvertedNum = Number(BudgetInput.value);
    if (ConvertedNum >= 0) {
        MyBudget = ConvertedNum;
        document.getElementById('theBudget').innerText = `${MyBudget}`
        document.getElementById('currentBudget').innerText = `${MyBudget}`
        saveBudget(ConvertedNum);
        calculator()
        
    } else {
        console.log('error')
    }
});

AddChangeBtn.addEventListener("click", async () => {
    let NameInput = ExpenseName.value
    let CostInput = Number(ExpenseCost.value)
    if(CostInput >= 0 && NameInput != ""){
        let NewArr = [NameInput, CostInput]
        saveToLocalStorageByExpenses(NewArr);
        calculator()
    } else {
        alert('ERROR')
    }
});

ManageBtn.addEventListener("click", async () => {
    createElements()
})


function newBudget() {
    let aBudget = getBudget();
    aBudget.map(budget => {
    MyBudget = budget; 
    document.getElementById('theBudget').innerText = `${MyBudget}`
    document.getElementById('currentBudget').innerText = `${MyBudget}`
    });
};

newBudget()

function createElements() {
    let myExpenses = getLocalStorage();
	ExpensesList.innerHTML= "";
    myExpenses.map(arrayItems => {

        let p = document.createElement('p');
        p.className = "m-2";
        p.textContent = arrayItems;

        let deletebtn = document.createElement('button');
        deletebtn.type = 'button';
        deletebtn.className = 'smallBtn cancel'
        deletebtn.textContent = "Delete";

        deletebtn.addEventListener('click', function () {
            removeFromLocalStorage(arrayItems);
            calculator()
            p.remove();
        });

        p.appendChild(deletebtn);

        ExpensesList.appendChild(p);
    });
};

function calculator() {
    newBudget()
    let myCosts = getLocalStorage();
        for (let i = 0; i<myCosts.length; i++){
            MyBudget -= (myCosts[i][1]);
        }
    document.getElementById('theBudget').innerText = `${MyBudget}`
};

calculator()