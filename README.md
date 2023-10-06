# Christmas-bonus

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Christmas Bonus</title>
</head>
<body>
    
    <h1>Christmas Bonus Calculator</h1>
    <label for="yearsWorked">Enter the number of years you have worked</label>
    <input type="number" id="yearsWorked"/>
    <button onclick="calculateBonus()">Calculate Bonus</button>
    <input type="text" id="bonusResult" readonly/>
    
    <script src="christmas.js"></script>
</body>
</html>

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
