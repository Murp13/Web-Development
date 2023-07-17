// document.getElementById('bmiForm').addEventListener('submit', function (e) {
//     e.preventDefault();
    
//     const weight = parseFloat(document.getElementById('weight').value);
//     const height = parseFloat(document.getElementById('height').value);

//     if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
//         alert('Please enter valid weight and height values.');
//         return;
//     }

//     const bmi = calculateBMI(weight, height);

//     // Redirect to the result page
//     window.location.href = `result2.html?bmi=${bmi}`;
// });

// function calculateBMI(weight, height) {
//     const heightInMeters = height / 100; // Convert height to meters
//     return (weight / (heightInMeters * heightInMeters)).toFixed(2);
// }

document.getElementById('bmiForm').addEventListener('submit', function (e) {
    e.preventDefault();
    
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);

    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        alert('Please enter valid weight and height values.');
        return;
    }

    const bmi = calculateBMI(weight, height);

    // Store the BMI value in sessionStorage
    sessionStorage.setItem('bmiValue', bmi);

    // Redirect to the result page
    window.location.href = 'result2.html';
});

function calculateBMI(weight, height) {
    const heightInMeters = height / 100; // Convert height to meters
    return (weight / (heightInMeters * heightInMeters)).toFixed(2);
}

