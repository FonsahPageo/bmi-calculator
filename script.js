document.getElementById("bmiForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const gender = document.getElementById("gender").value;
    const age = parseInt(document.getElementById("age").value);
    const height = parseFloat(document.getElementById("height").value);
    const weight = parseFloat(document.getElementById("weight").value);
    const resultDiv = document.getElementById("result");
    let resultMsg = '';

    if (!height || !weight) {
        resultMsg += "The age and height are required.";
        resultDiv.innerHTML = resultMsg;
        return;
    }

    const bmi = (weight / (height * height)).toFixed(2);

    if (bmi < 18.5) {
        resultMsg = `Your BMI is ${bmi}. You are underweight.`;
    } else if (bmi >= 18.5 && bmi < 24.9) {
        resultMsg = `Your BMI is ${bmi}. You have a healthy weight.`;
    } else if (bmi >= 25 && bmi < 29.9) {
        resultMsg = `Your BMI is ${bmi}. You are overweight.`;
    } else {
        resultMsg = `Your BMI is ${bmi}. You are obese.`;
    }

    resultDiv.innerHTML = resultMsg;
});