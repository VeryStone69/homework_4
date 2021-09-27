// Exercise 2 -------------------------------------------------------------

        let arr1 = [0,];
        let n = "";
        let max = "";

        function userArr1() {
            max = arr1[1];

            let userValue1 = prompt("Введите числа массива: (для окончания ввода нажмите ESC)");

            if (!isFinite(userValue1)){
                alert("NUMBER MOFO, do you understand it?");
                userArr1();
            } else if (userValue1 === null  || userValue1 === "") {

                for (i = 1; i <= arr1.length; i++) {
                    if (arr1[i] >= max) {
                        max = arr1[i];
                        n = i;
                    }
                }
            } else {
                arr1.push(+userValue1);
                userArr1();
            }
            return;
        }
        userArr1();
        alert(`Максимальное значение элемента: ${max}. Порядковый номер: ${n}.`);