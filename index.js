 input = document.querySelector('input');
 h4 = document.querySelector('h4');
 buttons = document.querySelectorAll('button');
buttons.forEach(button => {
  button.addEventListener('click',()  => {
    const final = button.textContent;
    if (final === '=') {
      input.value = eval(h4.textContent);
    } else if (final === 'C') {
      input.value = '';
      h4.textContent = '';
    } else {
        h4.textContent += final;
    }
    
  });
});
















