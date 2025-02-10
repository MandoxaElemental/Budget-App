import { getLocalStorage, saveToLocalStorageByExpenses, removeFromLocalStorage, saveBudget, getBudget, removeBudget } from "./localStorage.js";

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
        console.log('Correct')
        console.log(MyBudget)
        document.getElementById('theBudget').innerText = `${MyBudget}`
        document.getElementById('currentBudget').innerText = `${MyBudget}`
            saveBudget(ConvertedNum); 
        
    } else {
        console.log('error')
    }
});

