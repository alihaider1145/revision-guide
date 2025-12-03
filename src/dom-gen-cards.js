export default function populateCard(data){
    data.formulas.forEach(formula => {
        const card = document.createElement('div');
        card.classList.add('formula__card');
        const cardEng = document.createElement('div');
        cardEng.classList.add('card__eng');
        cardEng.textContent = formula.formula_english;
        card.appendChild(cardEng);

        const cardMath = document.createElement('div');
        cardMath.classList.add('card__math');
        cardMath.textContent = formula.formula_math;
        card.appendChild(cardMath);

        if(formula.similar){
            const cardSimilar = document.createElement('div');
            cardSimilar.classList.add('card__similar');
            cardSimilar.textContent = formula.similar;
            card.appendChild(cardSimilar);
        }

        if(formula.variants){
            const cardVariants = document.createElement('div');
            cardVariants.classList.add('card__variation');
            cardVariants.textContent = formula.variants;
        }

    });
} 