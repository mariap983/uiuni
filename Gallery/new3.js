    
	var image = document.getElementById('Images1');
    
	function slide(img) {
      image.classList.add('hide');
      switch (img) {
        case 1: 
          image = document.getElementById('Images1');
          break;
        case 2: 
          image = document.getElementById('Images2');
          break;
        case 3: 
          image = document.getElementById('Images3');
          break;
		case 4: 
          image = document.getElementById('Images4');
          break;
		case 5: 
          image = document.getElementById('Images5');
          break;
	  }
      image.classList.remove('hide');
    }