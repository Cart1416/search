const saveElements = () => {
    const elements = window.$nuxt.$children[2].$children[0].$children[0].$data.elements;
    const json = JSON.stringify(elements);
    const blob = new Blob([json], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    
    const a = document.createElement('a');
    a.href = url;
    a.download = 'saved-elements.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }
  
  const restoreElements = () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'application/json';
    input.addEventListener('change', () => {
      const file = input.files[0];
      const reader = new FileReader();
      reader.onload = (event) => {
        const json = event.target.result;
        const elements = JSON.parse(json);
        if (elements?.length > 4) {
          window.$nuxt.$children[2].$children[0].$children[0].$data.elements = elements;
          const existingData = localStorage.getItem('infinite-craft-data');
          const parsedData = existingData ? JSON.parse(existingData) : { elements: [] };
          parsedData.elements = elements; // Update the elements with the restored data
          localStorage.setItem('infinite-craft-data', JSON.stringify(parsedData));
        }
      };
      reader.readAsText(file);
    });
    input.click();
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
  