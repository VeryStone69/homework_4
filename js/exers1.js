// Exercise 1 -------------------------------------------------------------

    let arr = [];
    let sum = 0;
    function userArr() {

            let userValue = prompt("Enter your number:");
            if (!isFinite(userValue)) {
                alert("Enter the NUMBER!");
                userArr();
            }
            else if (userValue != null && userValue != "") {
                arr.push(+userValue);
                userArr();
            } else {
                for (i = 0; i < arr.length; i++) {
                    sum += arr[i];
                }
            }
            return sum;
    }
    alert(userArr());