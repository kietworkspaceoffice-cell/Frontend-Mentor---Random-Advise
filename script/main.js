async function getAdvice() {
  const res = await fetch("https://api.adviceslip.com/advice");
  const data = await res.json();
  const advice = data.slip.advice;
  const idAdvice = data.slip.id;
  const idDOM = document.getElementById('advice-id');
  const adviceDOM = document.querySelector('.advice');


  idDOM.innerHTML = '#' + idAdvice;
  adviceDOM.innerHTML = '&quot;' + advice + '&quot;';
  console.log("English:", advice);
  console.log(idAdvice);
}

getAdvice();


const letDice = document.querySelector('.let-random');
letDice.addEventListener('click', () => {
  getAdvice();
});