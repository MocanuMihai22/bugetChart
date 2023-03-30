

 
var budgetInput=document.getElementById("budgetFirebase");
var budgetSpan= document.getElementById("budget");


var expensesInput=document.getElementById("expensesFirebase");
var expensesSpan= document.getElementById("expenses");


var totalSpan= document.getElementById("total");




document.getElementById("form1").addEventListener("submit", (e)=>{
  e.preventDefault(); // PREVENTS PAGE REFRESH when presing submit!!!!
 console.log(budgetInput.value)
 budgetSpan.textContent = parseInt(budgetInput.value)+parseInt(budgetSpan.textContent)

 budgetInput.value = "";
 totalSpan.textContent=  budgetSpan.textContent-expensesSpan.textContent;

 myChart.data.datasets[0].data.splice(0,1,(parseInt(budgetSpan.textContent)))
 myChart.update();
 
 myChart.data.datasets[0].data.splice(2,1,(parseInt(totalSpan.textContent)))
 myChart.update();
})
 
document.getElementById("form2").addEventListener("submit", (e)=>{
  e.preventDefault(); // PREVENTS PAGE REFRESH when presing submit!!!!
 console.log(expensesInput.value)
 expensesSpan.textContent = parseInt(expensesInput.value)+parseInt(expensesSpan.textContent)
 
 expensesInput.value = "";
 totalSpan.textContent=  budgetSpan.textContent-expensesSpan.textContent;

 myChart.data.datasets[0].data.splice(1,1,(parseInt(expensesSpan.textContent)))
 myChart.update();

 myChart.data.datasets[0].data.splice(2,1,(parseInt(totalSpan.textContent)))
 myChart.update();
})



//CHART

const myChart = new Chart("chart", {
    type: 'bar',
    data: {
      labels: ['Budget', 'Expenses', 'Savings'],
      datasets: [{
        label: 'RON',
        data: [0,0,0],
        backgroundColor: [
          'rgba(0, 0, 255, 0.2)',
          'rgba(255, 0, 0, 0.2)',
          'rgba(0, 128, 0, 0.2)'
        ],
        borderColor: [
          'rgb(0, 0, 255)',
          'rgb(255, 0, 0)',
          'rgb(0, 128, 0)'
        ],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });

