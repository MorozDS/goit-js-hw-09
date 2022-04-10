import Notiflix from 'notiflix';

const form = document.querySelector('.form');

form.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();

  const refs = {
    delay: Number(form.elements.delay.value),
    step: Number(form.elements.step.value),
    amount: Number(form.elements.amount.value),
  
  };

  stepCalls(refs) 
}

function stepCalls({ delay, step, amount }) {
  for (let i = 1; i <= amount; i += 1) {
    delay += step;
    createPromise(i, delay)
      .then(({ position, delay}) => {
        Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      });

    
  }
}

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        // Fulfill
        resolve({ position, delay });
      }
      // Reject
      reject({ position, delay });
    }, delay);
  });
}
