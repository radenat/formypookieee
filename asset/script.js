  const giftBox = document.getElementById("giftBox");
    let step = 0;

    giftBox.addEventListener("click", () => {
      step++;
      if (step === 1) {
        giftBox.classList.add("open-lid");
      } else if (step === 2) {
        giftBox.classList.add("hide-box");
        setTimeout(() => {
          giftBox.classList.add("show-inner");
        }, 500);
      }
    });

    const loveContainer = document.getElementById("loveContainer");
    const popupBox = document.getElementById("popupBox");

    function createLove() {
      const loveCount = 5; 

      for (let i = 0; i < loveCount; i++) {
        const love = document.createElement("div");
        love.classList.add("love");

        love.style.left = Math.random() * 100 + "vw";

        love.style.fontSize = Math.random() * 20 + 20 + "px";

        love.style.animationDuration = Math.random() * 2 + 3 + "s";

        love.innerText = "🩷"; 
        document.body.appendChild(love);

        setTimeout(() => {
          love.remove();
        }, 5000);
      }
    }

    giftBox.addEventListener("click", () => {
      if (step === 1) {
        setInterval(createLove, 300);

        setTimeout(() => {
          popupBox.style.display = "flex";
        }, 3000);
      }
    });

    const bgMusic = document.getElementById("bgMusic");
    giftBox.addEventListener("click", () => {
      if (step === 1) {
        bgMusic.play();
      }

    });
