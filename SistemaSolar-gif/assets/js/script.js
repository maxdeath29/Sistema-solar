function createStars() {
    var numStars = 400; // Número de estrelas desejado
    var maxBlinkingStars = 50; // Número máximo de estrelas que brilham
    var container = document.body;
  
    for (var i = 0; i < numStars; i++) {
      var star = document.createElement('div');
  
      // Escolhe aleatoriamente a classe para a estrela
      var randomClass = Math.random() < 0.8 ? 'star' : 'cross-star';
  
      star.className = randomClass;
  
      if (randomClass === 'cross-star') {
        star.classList.add('cross-' + i);
      }
  
      // Define posições aleatórias para as estrelas
      var randomX = Math.random() * window.innerWidth;
      var randomY = Math.random() * window.innerHeight;
  
      star.style.top = randomY + 'px';
      star.style.left = randomX + 'px';
  
      container.appendChild(star);
    }
  
    var stars = document.querySelectorAll('.cross-star');
    var randomStars = getRandomElements(stars, maxBlinkingStars);
  
    for (var j = 0; j < randomStars.length; j++) {
      var star = randomStars[j];
      star.classList.add('blinking');
    }
  }
  
  function getRandomElements(array, count) {
    var shuffled = Array.from(array).sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  }
  
  // Chama a função para criar as estrelas após o carregamento da página
  window.onload = createStars;