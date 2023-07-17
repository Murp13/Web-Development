/*
1. Ambil data dari input textbox html (Gatau perlu di convert dulu tipe datanya?)
2.Bikin fungsi Perhitungan nya
3. Bikin kondisi kategori kesehatan BMI
4. Display dari kedua funngsi di halaman selanjutnya
*/

// document.getElementById('isiBmi').addEventListener('submit', function (e) {
//     e.preventDefault();
//     //Need to determine the constant of some id functions.
//     let bb = parseFloat(document.getElementById("bb").value); // inisialisasi
//     //let age =parseInt(document.getElementById("age").value);
//     let tb = parseFloat(document.getElementById("tb").value);

//     sessionStorage.setItem('bmiValue', bmi);
//     sessionStorage.setItem('categoryValue', category);
//     window.location.href = "Result.html";
// });

// function bmiFunction(){
    
//     let bmi;
//     let hasil = document.getElementById("result"); /* ? */
    
    
//         //The value of height and width should be displayed in the webpage using "textContent".
//         /*document.getElementById("weight-val").textContent = weight + " kg";
//         document.getElementById("height-val").textContent = height + " cm";
//         */
//         //Now I have added the formula for calculating BMI in "bmi"
//         bmi = (bb / Math.pow( (tb), 2 )).toFixed(1);
//         //With the help of "textContent" we have arranged to display in the result page of BMI
//        // document.getElementById("result").textContent = bmi;
     


//         //Now we have to make arrangements to show the text

//         if(bmi < 18.5){
//             category = "Kekurangan Berat badan";
//             hasil.style.color = "#ffc44d";
//         }

//         //If BMI is >=18.5 and <=24.9
//         else if( bmi >= 18.5 && bmi <= 24.9 ){
//             category = "Normal(ideal)";
//             hasil.style.color = "#0be881";
//         }

//         //If BMI is >= 25 and <= 29.9 
//         else if( bmi >= 25 && bmi <= 29.9 ){
//             category = "Kelebihan berat badan";
//             hasil.style.color = "#ff884d";
//         }
        
//         //If BMI is <= 30
//         else{
//             category = "Kegemukan (Obesitas)";
//             hasil.style.color = "#ff5e57";
//         }
        
//       //  document.getElementById("category").textContent = category;
    
// }




// function bmiFunction(){
    
//     //Need to determine the constant of some id functions.
//     let bb = parseFloat(document.getElementById("bb").value); // inisialisasi
//     //let age =parseInt(document.getElementById("age").value);
//     let tb = parseFloat(document.getElementById("tb").value);
//     let bmi;
//     let hasil = document.getElementById("result"); /* ? */
    
    
//         //The value of height and width should be displayed in the webpage using "textContent".
//         /*document.getElementById("weight-val").textContent = weight + " kg";
//         document.getElementById("height-val").textContent = height + " cm";
//         */
//         //Now I have added the formula for calculating BMI in "bmi"
//         bmi = (bb / Math.pow( (tb), 2 )).toFixed(1);
//         //With the help of "textContent" we have arranged to display in the result page of BMI
//         document.getElementById("result").textContent = bmi;
     


//         //Now we have to make arrangements to show the text

//         if(bmi < 18.5){
//             category = "Kekurangan Berat badan";
//             hasil.style.color = "#ffc44d";
//         }

//         //If BMI is >=18.5 and <=24.9
//         else if( bmi >= 18.5 && bmi <= 24.9 ){
//             category = "Normal(ideal)";
//             hasil.style.color = "#0be881";
//         }

//         //If BMI is >= 25 and <= 29.9 
//         else if( bmi >= 25 && bmi <= 29.9 ){
//             category = "Kelebihan berat badan";
//             hasil.style.color = "#ff884d";
//         }
        
//         //If BMI is <= 30
//         else{
//             category = "Kegemukan (Obesitas)";
//             hasil.style.color = "#ff5e57";
//         }
        
//         document.getElementById("category").textContent = category;
        
//         //When the BMI is less than 18.5, you can see the text below
//         // if(bmi < 18.5){
//         //     category = "Underweight 😒";
//         //     hasil.style.color = "#ffc44d";
//         // }

//         // //If BMI is >=18.5 and <=24.9
//         // else if( bmi >= 18.5 && bmi <= 24.9 ){
//         //     category = "Normal Weight 😍";
//         //     hasil.style.color = "#0be881";
//         // }

//         // //If BMI is >= 25 and <= 29.9 
//         // else if( bmi >= 25 && bmi <= 29.9 ){
//         //     category = "Overweight 😮";
//         //     hasil.style.color = "#ff884d";
//         // }

//         // //If BMI is <= 30
//         // else{
//         //     category = "Obese 😱";
//         //     hasil.style.color = "#ff5e57";
//         // }
//         //All of the above text is stored in "category".

//         //Now you have to make arrangements to display the information in the webpage with the help of "textContent"

//        // document.getElementById("category").textContent = category;
// }

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
