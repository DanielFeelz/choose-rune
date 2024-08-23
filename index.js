function generateSequence() {
    const sequence = [1, 2, 3, 4, 5];
    for (let i = sequence.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [sequence[i], sequence[j]] = [sequence[j], sequence[i]];
    }
    return sequence;
}

const sequence = generateSequence();
let currentIndex = 0;

const rocks = document.querySelectorAll('.rock');

rocks.forEach(rock => {
    rock.addEventListener('click', function () {
        const rockId = parseInt(this.id);

        if (rockId === sequence[currentIndex]) {
            this.classList.add('correct');
            currentIndex++;

            if (currentIndex === sequence.length) {
                alert("Sucesso! Um barulho alto ecoa pela biblioteca e as estantes em frente a vocês se abrem, e então ele aparece.");
            }
        } else {
            alert('A magia balança pelos seus corpos, vocês serão punidos')
            resetRocks();
        }
    });
});

function resetRocks() {
    rocks.forEach(rock => {
        rock.classList.remove('correct');
    });
    currentIndex = 0;
}