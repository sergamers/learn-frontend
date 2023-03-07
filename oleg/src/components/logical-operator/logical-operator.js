{
    1 && "abc"          // "abc"
    "" || "abc"         // "abc"
    "123" && "456"      // "456"
    0 || "abc"          // "abc"
    undefined || null   // null
    5 && undefined      // undefined
    "a" && "b" && "c"   //  "c" 
    null || undefined   // undefined
    1 && null           // null
    "hello" || "world"  //  "hello"
    "" && "test"        //  ""
    "false" || "true"   // "true" 
    undefined || ""     //  ""
    null && "test"      // null
    "5" && 5            //  5
    "" && 0             //  ""
    0 || null           // null
    "test" || null      // "test"
    null || "test"      // "test"
    10 && null          // null
    "undefined" || undefined // "undefined"
    undefined || "undefined" // "undefined"
    "" && null          //  ""
    1 && ""             //  ""
    0 || undefined      //  undefined 
    "test" || undefined //  "test"
    undefined || "test" //  "test"
    null && ""          // null
    5 && null           // null 
    "null" || null      // "null"
    null || "null"      // "null"
    0 && null           // 0
    "NaN" || NaN        // "NaN"
    NaN || "NaN"        // "NaN"
    "" && undefined     // ""
    1 && NaN            // NaN
    0 || ""             // ""
    "test" || ""        // "test"
    "" || "test"        // "test"
    false && undefined  // false
    "123" && 123        // 123
    undefined || 0      // 0
    "test" || 0         // "test"
    0 || "test"         // "test"
    null || 0           // 0
    5 && ""             // ""
    "test" && null      // null
    null && "test"      // null
    undefined || false  // false
    "test" || false     // "test"
}


{
//  возведение в степень
5**2
console.log(5**2)

console.log(5**3)

console.log(Math.abs(-25))

//  switch переключатель
}


{
    let number = 2;

    switch(number) {
        case  1:
            console.log('1=Январь');
            break;
        case  2:
            console.log('2=Февраль');
            break;
        case  3:
            console.log('3=Март');
            break;
        case  4:
            console.log('4=Апрель');
            break;
        case  5:
            console.log('5=Май');
            break;
        case  6:
            console.log('6=Июнь');
            break;
        case  7:
            console.log('7=Июль');
            break;
        case  8:
            console.log('8=Август');
            break;
        case  9:
            console.log('9=Сентябрь');
            break;
        case  10:
            console.log('10=Октябрь');
            break;
        case  11:
            console.log('11=Ноябрь');
            break;
        case  12:
            console.log('12=Декабрь');
            break;
        default:
           console.log("Нет такого месяца");
           break;
    }
}

{
    const carBrand = 'Мазда';
    let countryOfOrigin = '';

    
    switch (carBrand) {
        case 'Тойота':
        case 'Ниссан':
        case 'Хонда':
        case 'Сузуки':
        case 'Субару':
        case 'Мазда':
        case 'Мицубиси':     
            countryOfOrigin='Япония'
            break;
        case 'BMW':
        case 'Mersedes':
        case 'AUDI':
        case 'OPEL':
        case 'VolksWagen':
        case 'Porsche':
            countryOfOrigin='Германия'
            break;
        case 'Chevrole':
        case 'Ford':
        case 'Jeep':
        case 'Dodge':
        case 'Chrysler':
        case 'Cadillac':
            countryOfOrigin='Америка'
            break;
    
        default :
        countryOfOrigin = 'Неизвестно';
            break;
    }
    
    console.log(carBrand, countryOfOrigin);
}

{
    let age = 22;
    let whoAreYou = '';
 
    switch (true) {
        case age > 0 && age < 18:    
        whoAreYou ='Ребёнок';
            break;
        case age >= 18 && age <=70:
        whoAreYou ='Взрослый';
            break;
        case age >= 70 && age <=100:
        whoAreYou ='Старый';
            break;
        case age > 100:
        whoAreYou ='Кто ты?';
            break;
        default:
        whoAreYou = 'Неправильно набран возраст';
        break;
    }
    
    console.log(age, whoAreYou);
}

{
    let animalName = 'корова';
    let animalSound = '';
 
    switch (animalName) {
        case 'собака':    
        animalSound ='гав гав';
        break;
        case 'корова':    
        animalSound ='му му';
        break;
        case 'кошка':    
        animalSound ='мяу мяу';
        break;
        case 'курица':    
        animalSound ='кудах тах тах, ко ко ко';
        break;
        case 'волк':    
        animalSound ='ууууу, ррррр';
        break;
        case 'коза':    
        animalSound ='ме ме';
        break;
        case 'баран':    
        animalSound ='бе бе';
        break;
        case 'лошадь':    
        animalSound ='иго го';
        break;

        default:
        animalSound = 'Неправильно выбрано животное';
        break;
    }
    
    console.log(animalName, animalSound);
}

{
const number = 2;
let i = 0;

    while (i < 10) {
        i++;
      const result = number * i;
      
      console.log(number + " x " + i + " = " + result);
    }
}

{
let number = 3;
let i = 0;

    while (i < 10) {
    i++;
    let result = number * i;
    console.log(i + ": " + number + " x " + i + " = " + result);
}
}

{

    const cars = ['BMW', 'Toyota', 'Ford', 'Mercedes', 'Honda'];
    let i = 0;
    
    while (i < 5) {
      console.log(`${i+1}. ${cars[i]}`);
      i++;
    }

}

{
    const a = { id: 1, value: 'one text' }
    console.log(a)
    // Object { id: 1, value: "one text" }

}

{
// цикл for от числа 0 до 10, без условий;

for (let i = 0; i <= 10; i++) {
    console.log(i)
    }

// цикл for от числа 0 до 10, условие - нечётные числа до 10;

for (let i = 1; i <= 10; i = i + 2) {
    console.log(i)
    }

// цикл for от числа 0 до 10, условие - чётные числа до 10;

for (let i = 0; i <= 10; i = i + 2) {
    console.log(i)
    }

// цикл for от числа 0 до 10, условие - чётные числа без числа 0;

for (let i = 2; i <= 10; i=i+2) {
    console.log(i)
    }

// цикл for от числа 0 до 10, условие - чётные числа с учётом оператора деления с остатком %;

for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
    }

// цикл for от числа 0 до 10, условие - НЕчётные числа с учётом оператора деления с остатком %;

for (let i = 1; i <= 10; i++) {
    if (i % 2 === 1) {
        console.log(i);
    }
    }     
}

{
    for (i = 1; i >= 10; i--)

    console.log(i);
}

{
    for (i = 10; i >= 0; i--)

    console.log(i);
}