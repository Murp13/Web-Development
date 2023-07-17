

document.getElementById('bmiForm').addEventListener('submit', function (e) {
    e.preventDefault();
    
    let bb = parseFloat(document.getElementById("bb").value);
    let tb = parseFloat(document.getElementById("tb").value);

    if (isNaN(bb) || isNaN(tb) || bb <= 0 || tb <= 0) {
        alert('Please enter valid weight and height values.');
        return;
    }

    // Call bmiFunction() to calculate BMI and set category
    let bmi, category;
    [bmi, category] = bmiFunction(bb, tb);

    // Store the BMI value and category in sessionStorage
    sessionStorage.setItem('bmiValue', bmi);
    sessionStorage.setItem('categoryValue', category);

    // Redirect to the result page
    window.location.href = "Result.html";
});

function bmiFunction(bb, tb) {
    let bmi;

    bmi = (bb / Math.pow(tb / 100, 2)).toFixed(1);

    let category;

    if (bmi < 18.5) {
        category = "Kekurangan Berat Badan";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        category = "Normal(ideal)";
    } else if (bmi >= 25 && bmi <= 29.9) {
        category = "Kelebihan Berat Badan";
    } else {
        category = "Kegemukan (Obesitas)";
    }

    return [bmi, category];
}
