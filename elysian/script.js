document.addEventListener('DOMContentLoaded', () => {
    const header = document.getElementById('main-header');
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }

    const filterButton = document.getElementById('filter-trigger');
    const locSelect = document.getElementById('loc-select');
    const typeSelect = document.getElementById('type-select');
    const cards = document.querySelectorAll('.portfolio-card');

    if (filterButton && locSelect && typeSelect && cards.length) {
        filterButton.addEventListener('click', () => {
            const chosenLoc = locSelect.value;
            const chosenType = typeSelect.value;

            cards.forEach(card => {
                const matchesLoc = (chosenLoc === 'all' || card.getAttribute('data-location') === chosenLoc);
                const matchesType = (chosenType === 'all' || card.getAttribute('data-type') === chosenType);

                if (matchesLoc && matchesType) {
                    card.style.display = 'block';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'scale(1)';
                    }, 10);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'scale(0.95)';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 400);
                }
            });
        });
    }

    const calcButton = document.getElementById('run-calc');
    const principalInput = document.getElementById('calc-principal');
    const yearsInput = document.getElementById('calc-years');
    const result = document.getElementById('calc-result');
    const targetValue = document.getElementById('target-value');

    if (calcButton && principalInput && yearsInput && result && targetValue) {
        calcButton.addEventListener('click', () => {
            const principal = parseFloat(principalInput.value);
            const years = parseInt(yearsInput.value, 10);

            if (Number.isNaN(principal) || Number.isNaN(years) || principal <= 0 || years <= 0) {
                return;
            }

            const rate = 0.22;
            const futureValue = principal * Math.pow((1 + rate), years);
            targetValue.innerText = '₦' + Math.round(futureValue).toLocaleString();
            result.style.display = 'block';
        });
    }
});
