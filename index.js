function generateSequence() {
    const sequence = [1, 2, 3, 4, 5];
    for (let i = sequence.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [sequence[i], sequence[j]] = [sequence[j], sequence[i]];
    }
    return sequence;
}

let sequence = generateSequence();
let currentIndex = 0;

const rocks = document.querySelectorAll('.rock');

rocks.forEach(rock => {
    rock.addEventListener('click', function () {
        const rockId = parseInt(this.id);
        if (rockId === sequence[currentIndex]) {
            this.classList.add('correct');
            currentIndex++;
        } else {
            this.classList.add('incorrect');
            setTimeout(() => resetRocks(false), 500); 
        }
    });
});

document.addEventListener('keydown', function(event) {
    if (event.key.toLowerCase() === 'r') {
        resetRocks(true);
    }
});

function resetRocks(generateNewSequence) {
    rocks.forEach(rock => {
        rock.classList.remove('correct');
        rock.classList.remove('incorrect');
    });
    currentIndex = 0;
    if (generateNewSequence) {
        sequence = generateSequence();
    }
}
