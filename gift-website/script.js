document.addEventListener("DOMContentLoaded", () => {
  const scene = document.querySelector('.scene');
  const squirrelWrap = document.querySelector('.squirrel-image-wrap');
  const passwordInput = document.getElementById('passwordInput');
  const togglePasswordButton = document.getElementById('togglePasswordBtn');
  const unlockButton = document.getElementById('unlockBtn');
  const passwordPrompt = document.getElementById('passwordPrompt');
  const gifPrompt = document.getElementById('gifPrompt');
  const yesBtn = document.getElementById('yesBtn');
  const noBtn = document.getElementById('noBtn');
  const promptText = document.querySelector('.bubble p');

  const correctPassword = '8172023';
  let wrongAttempts = 0;
  let isUnlocked = false;

  setTimeout(() => {
    scene.classList.add('active');
  }, 1100);

  setTimeout(() => {
    passwordInput.focus();
  }, 3000);

  togglePasswordButton.addEventListener('click', () => {
    const isHidden = passwordInput.type === 'password';
    passwordInput.type = isHidden ? 'text' : 'password';
    togglePasswordButton.textContent = isHidden ? '🙈' : '👁️';
    togglePasswordButton.setAttribute('aria-label', isHidden ? 'Hide password' : 'Show password');
    togglePasswordButton.setAttribute('title', isHidden ? 'Hide password' : 'Show password');
    passwordInput.focus();
  });

  unlockButton.addEventListener('click', () => {
    const value = passwordInput.value.trim();

    if (!value) {
      passwordInput.focus();
      return;
    }

    if (value === correctPassword || value === '8/17/2023') {
      if (value === '8/17/2023') {
        promptText.textContent = 'WITHOUT THE SLASHES';
        promptText.style.color = '#7c4dff';
        promptText.style.fontSize = '1.2rem';
        passwordInput.value = '';
        passwordInput.focus();
        return;
      }

      isUnlocked = true;
      passwordInput.value = '';
      passwordInput.placeholder = 'Unlocked';
      passwordInput.disabled = true;
      togglePasswordButton.disabled = true;
      unlockButton.disabled = true;
      promptText.textContent = 'FINALLY!';
      promptText.style.color = '#2e7d32';
      promptText.style.fontSize = '1.8rem';
      passwordInput.blur();
      
      // Trigger squirrel run from left to right after 1.5 seconds
      setTimeout(() => {
        squirrelWrap.classList.add('reverse-run');
        passwordPrompt.style.display = 'none';
      }, 1500);
      
      // Show gif prompt after squirrel finishes running
      setTimeout(() => {
        gifPrompt.style.display = 'block';
      }, 5000);
      return;
    }

    wrongAttempts += 1;

    if (wrongAttempts === 3) {
      promptText.textContent = 'THINK DUMBFUCK';
      promptText.style.color = '#b22234';
      promptText.style.fontSize = '1.6rem';
      passwordInput.value = '';
      passwordInput.focus();
      return;
    }

    if (wrongAttempts === 4) {
      promptText.textContent = "fine i'll help mm/dd/yy";
      promptText.style.color = '#7c4dff';
      promptText.style.fontSize = '1.15rem';
      passwordInput.value = '';
      passwordInput.focus();
      return;
    }

    if (wrongAttempts >= 2) {
      promptText.textContent = 'a really special date';
      promptText.style.color = '#7c4dff';
      promptText.style.fontSize = '1.2rem';
      passwordInput.value = '';
      passwordInput.focus();
      return;
    }

    promptText.textContent = 'Wrong password. Try again.';
    promptText.style.color = '#b22234';
    passwordInput.value = '';
    passwordInput.focus();
  });

  // Handle yes/no buttons for gif prompt
  yesBtn.addEventListener('click', () => {
    console.log('User clicked yes to see the gif');
    gifPrompt.style.display = 'none';
    
    // Spawn flowers for 3 seconds
    const flowerDuration = 3000;
    const spawnInterval = 20; // spawn a flower every 20ms for denser effect
    const endTime = Date.now() + flowerDuration;
    
    const spawnFlowers = setInterval(() => {
      if (Date.now() > endTime) {
        clearInterval(spawnFlowers);
        return;
      }
      
      const flower = document.createElement('img');
      flower.src = './images/carnation-flower-pink-carnation-flower-mpt9PE8C_t-removebg-preview.png';
      flower.className = 'falling-flower';
      flower.style.left = Math.random() * 100 + '%';
      flower.style.top = (Math.random() * 100 - 100) + '%';
      flower.style.width = (40 + Math.random() * 80) + 'px';
      flower.style.height = (40 + Math.random() * 80) + 'px';
      
      scene.appendChild(flower);
      
      // Remove flower after animation completes
      setTimeout(() => {
        flower.remove();
      }, 3500);
    }, spawnInterval);
    
    // Show bouquet after flower transition
    setTimeout(() => {
      const bouquet = document.createElement('img');
      bouquet.src = './images/pngtree-artistic-carnation-bouquet-design-using-ai-technology-png-image_14219116.png';
      bouquet.className = 'bouquet-image';
      scene.appendChild(bouquet);
      
      const bouquetText = document.createElement('p');
      bouquetText.textContent = 'beautiful flowers but can never match your beauty';
      bouquetText.className = 'bouquet-text';
      scene.appendChild(bouquetText);
      
      // Remove bouquet and text after 5 seconds and show food
      setTimeout(() => {
        bouquet.remove();
        bouquetText.remove();
        
        const food = document.createElement('img');
        food.src = './images/91cb5770d18a7a949b7b217c8bf5ec9d-removebg-preview.png';
        food.className = 'food-image';
        scene.appendChild(food);
        
        const foodText = document.createElement('p');
        foodText.textContent = 'just incase u are hungry';
        foodText.className = 'food-text';
        scene.appendChild(foodText);
        
        // Remove food after 5 seconds and show final message
        setTimeout(() => {
          food.remove();
          foodText.remove();
          
          const finalText = document.createElement('p');
          finalText.textContent = "well that's all drahmk kmlo";
          finalText.className = 'final-text';
          scene.appendChild(finalText);

          setTimeout(() => {
            const finalNote = document.createElement('p');
            finalNote.textContent = 'oh right pls dont beat me up';
            finalNote.className = 'final-text';
            finalNote.style.top = '60%';
            scene.appendChild(finalNote);
          }, 1500);
        }, 5000);
      }, 5000);
    }, 3500);
  });

  noBtn.addEventListener('mouseenter', () => {
    noBtn.textContent = 'not really an option';
    noBtn.disabled = true;
    noBtn.style.opacity = '0.6';
    noBtn.style.cursor = 'not-allowed';
  });

  noBtn.addEventListener('mouseleave', () => {
    noBtn.textContent = 'no';
    noBtn.disabled = false;
    noBtn.style.opacity = '1';
    noBtn.style.cursor = 'pointer';
  });

  noBtn.addEventListener('click', () => {
    console.log('User clicked no to the gif');
    // Add your logic here for when user clicks no
  });
});
