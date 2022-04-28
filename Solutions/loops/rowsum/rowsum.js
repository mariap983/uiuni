function start() {
    // Създаваме работните променливи
    let printThis = 0;
    // Изчитаме потребителския вход
    let choice = Number(document.getElementById("choice").value);

    /*
    Завъртаме for цикъл с толкова итерации, колкото е голямо
     въведеното от потребителя число. Във всяка итерация
     повдигаме числото на степен, равна на номера на итерацията
     и записваме резултата с натрупване.
     Особен момент е плюсът пред Math.pow, без който в променливата
     се натрупват резултатите отсветкита конкатенирани като стрингове :)
     */
    for (var i = 1; i <= choice; i++) {
        printThis += +Math.pow(choice, i)
    }
    // Извеждаме резултата в браузъра на съответното място
    document.getElementById("result").innerHTML = "<h3>" + printThis + "</h3>";
}