const input1 = document.getElementById('Input1');
const input2 = document.getElementById('Input2');
const input3 = document.getElementById('Input3');
const input4 = document.getElementById('Input4');

input1.addEventListener('input', calculate);
input2.addEventListener('input', calculate);

function calculate() {
  const savingAmount = parseFloat(input1.value) || 0;
  const savingTime = parseFloat(input2.value) || 0;
  const totalSaving = savingAmount * savingTime;
  const weeklySpending = (totalSaving / savingTime) /4;
  
  input3.value = totalSaving;
  input4.value = weeklySpending;
 }  