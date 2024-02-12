/**
 * Add save/restore buttons to Infinite Craft
 * Works by saving the elements that you have created into localStorage
 * 
 * Remember to hit `Save` before closing your tab, Happy Crafting!
 */

const saveElements = () => {
    localStorage.setItem('saved-elements', JSON.stringify(window.$nuxt.$children[2].$children[0].$children[0].$data.elements));
  }
  
  const restoreElements = () => {
    const storedElements = JSON.parse(localStorage.getItem('saved-elements'));
    if (storedElements?.length > 4) {
      window.$nuxt.$children[2].$children[0].$children[0].$data.elements = storedElements;
    }
  }
  
  const buttonStyle = {
    appearance: 'none',
    position: 'absolute',
    width: '80px',
    height: '35px',
    backgroundColor: '#1A1B31',
    color: 'white',
    fontWeight: 'bold',
    fontFamily: 'Roboto,sans-serif',
    border: '0',
    outline: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    padding: 4,
  }
  
  const init = () => {
    const container = document.querySelector('.container');
    
    const saveButton = document.createElement('button');
    const restoreButton = document.createElement('button');
    
    Object.keys(buttonStyle).forEach((attr) => {
      saveButton.style[attr] = buttonStyle[attr];
      restoreButton.style[attr] = buttonStyle[attr];
    });
    
    saveButton.style.bottom = '24px';
    saveButton.style.left = '24px';
    restoreButton.style.bottom = '24px';
    restoreButton.style.left = '120px';
    
    saveButton.innerText = 'Save';
    restoreButton.innerText = 'Restore';
    
    restoreButton.addEventListener('click', () => restoreElements());
    saveButton.addEventListener('click', () => saveElements());
  
    container.appendChild(saveButton);
    container.appendChild(restoreButton);
  }
  
  init();