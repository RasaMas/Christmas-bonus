function calculateBonus() {
    const yearsWorked = parseInt(document.getElementById('yearsWorked').value)
    let bonusAmount = 50

    if (yearsWorked > 10) {
        bonusAmount += 50; //additional 50 euros for more than 10 years
    }

    if (yearsWorked >= 20) {
        bonusAmount += 100; //additional 100 euros for more than 10 years
    }

    const bonusResult = `Your bonus: ${bonusAmount} euros`;
    document.getElementById('bonusResult').value = bonusResult;
}

calculateBonus()