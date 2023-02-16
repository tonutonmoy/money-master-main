
function expenses(food,rent,cloth){
let foodId=document.getElementById(food);
let rentId=document.getElementById(rent);
let clothId=document.getElementById(cloth);

if(isNaN(foodId.value)|| foodId.value===''){
    alert('please inter the food amount');
    return false;
}
else if(isNaN(rentId.value)||rentId.value===''){
    alert('please inter the rent amount');
    return false;
}
else if(isNaN(clothId.value)|| clothId.value===''){
    alert('please inter the cloth amount');
    return false;
}



let result= parseFloat(foodId.value)+ parseFloat(rentId.value)+ parseFloat(clothId.value)


return result;

}


function totalExpenses(id,result){

    let totalExpensesId=document.getElementById(id);

     if(result=== false){
        return;
     }


    totalExpensesId.innerText= result;
}



function balance(balanceId,incomeId,result){
    let balanceElement=document.getElementById(balanceId);
let incomeElement=document.getElementById(incomeId);

if(result===false){
    return;
}   

if( isNaN(incomeElement.value)||incomeElement.value===''){

    alert('please inter the income amount');
    return ;
}

  if(parseFloat(incomeElement.value)<result){
    alert('income is to small');
    return false;
  }

     let totalBalance= parseFloat(incomeElement.value)- result;
     
     

     if(balanceId==='balance'){
        balanceElement.innerText= totalBalance;
        return totalBalance;
     }
     else{

     return totalBalance;
     }
}


let calculateBtn=document.getElementById('calculate-btn').addEventListener('click',function(){

        let income=document.getElementById('income');

        if (isNaN(income.value)||income.value===''){
            alert('please enter the income ');
            return;
        }

         let expensesAll =expenses('food','rent','cloth');

         totalExpenses('total-expenses',expensesAll);

         balance('balance','income',expensesAll);

        

         
  
})



function savingAmount(id,saveInput,incomeInput){
    let savingAmountId=document.getElementById(id);

    let inputSavingId= document.getElementById(saveInput);
    
    let incomeId= document.getElementById(incomeInput);

    let result = parseFloat(incomeId.value)* parseFloat(inputSavingId.value)/100;


    savingAmountId.innerText= result;

    return result;
   
   
}

function remainingBalance(id,totalBalance,savingValue){
    let remainingBalanceId= document.getElementById(id);

    let result= totalBalance-savingValue;

    remainingBalanceId.innerText=result;

}

let savingBtn=document.getElementById('save-btn').addEventListener('click',function(){
    let income=document.getElementById('income');
    if(isNaN(income.value)||income.value==''){
        alert('please enter the income')
        return;
    }

    let expensesAll =expenses('food','rent','cloth');

    if(expensesAll===false){
        return;
    }
     
   let totalBalance= balance('','income',expensesAll)
    

   if(totalBalance===false){
    return;
   }
    let savingValue=  savingAmount('saving-amount','save-input','income')

   
    remainingBalance('remaining-balance',totalBalance,savingValue)
})