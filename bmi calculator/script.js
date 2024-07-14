function calculateBMI() {
    const height = parseFloat(document.getElementById('height').value);
    const weight = parseFloat(document.getElementById('weight').value);
    const resultDiv = document.getElementById('result');

    if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
        resultDiv.textContent = 'Please enter valid height and weight.';
        resultDiv.className = 'result';
        return;
    }

    const heightInMeters = height / 100;
    const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(2);

    let status;
    if (bmi < 18.5) {
        status = 'Underweight';
        resultDiv.className = 'result underweight';
    } else if (bmi < 24.9) {
        status = 'Normal weight';
        resultDiv.className = 'result normal';
    } else {
        status = 'Overweight';
        resultDiv.className = 'result overweight';
    }

    resultDiv.textContent = `Your BMI is ${bmi}. You are ${status}.`;
}
