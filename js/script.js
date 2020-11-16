const loaded = document.addEventListener('DOMContentLoaded', () => {
  const elements = {
    square: document.querySelector('.square'),
    picker: document.querySelector('.picker'),
    sliders: document.querySelectorAll('.slider'),
    valuesText: document.querySelectorAll('.slider-value'),
    submitBtn: document.querySelector('#submit'),
    cancelBtn: document.querySelector('#cancel'),
    preview: document.querySelector('#preview')
  };
  let {square, picker, sliders, valuesText, submitBtn, cancelBtn, preview} = elements;
  let colors = {
    values: {
      value: `rgb(${sliders[0].value}, ${sliders[1].value}, ${sliders[2].value})`,
      valueR: sliders[0].value, 
      valueG: sliders[1].value, 
      valueB: sliders[2].value
    },
    lastColors: {
      last: ('rgb(0, 0, 0)'), 
      newColor: ('rgb(0, 0, 0)')
    }
  };
  let {values: {value, valueR, valueG, valueB}, lastColors: {last, newColor}} = colors;
  let lastSplit = (last.slice(4, this.length - 1)).split(', ');
  const eventListeners = {
    onChange: valuesText.forEach((item, i) => {
      sliders[i].value = 0;
      sliders[i].addEventListener('input', () => {
        item.textContent = sliders[i].value;
        value = (`rgb(${sliders[0].value}, ${sliders[1].value}, ${sliders[2].value})`);
        preview.style.backgroundColor = value;
      });
    }),
    onSubmit: submitBtn.addEventListener('click', (event) => {
      event.preventDefault();
      if (value != newColor) {
        last = newColor;
        lastSplit = (last.slice(4, this.length - 1)).split(', ');
        newColor = value;
        square.style.backgroundColor = value;
      }
    }),
    onCancel: cancelBtn.addEventListener('click', (event) => {
      event.preventDefault();
      sliders[0].value = +lastSplit[0];
      sliders[1].value = +lastSplit[1];
      sliders[2].value = +lastSplit[2];
      valuesText[0].textContent = lastSplit[0];
      valuesText[1].textContent = lastSplit[1];
      valuesText[2].textContent = lastSplit[2];
      square.style.backgroundColor = last;
      preview.style.backgroundColor = last;
      value = (`rgb(${sliders[0].value}, ${sliders[1].value}, ${sliders[2].value})`);
      last = value;
      newColor = value;
      lastSplit = (last.slice(4, this.length - 1)).split(', ');
      picker.style.visibility = 'hidden';
    }),
    onSlidersBlockToggle: square.addEventListener('click', () => {
      if (picker.style.visibility == 'visible') {
        picker.style.visibility = 'hidden';
      } else {
        picker.style.visibility = 'visible';
      }
    })
  };
});
