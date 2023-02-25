/*
Напишите код, который уменьшает переменную count на 1, используя декремент с постфиксом и выводит результат в консоль.
Напишите код, который увеличивает переменную count на 1, используя инкремент с префиксом и выводит результат в консоль.
Напишите код, который уменьшает переменную count на 1, используя декремент с префиксом и выводит результат в консоль.
Напишите код, который увеличивает переменную count на 1, используя инкремент с постфиксом и выводит результат в консоль.
*/

// Напишите код, который уменьшает переменную count на 1, используя декремент с постфиксом и выводит результат в консоль.

{
    let count = 1;
    let count2 = count--;
    console.log(count--);
    console.log(count)
    console.log(count2)
}

{
    let count = 1;

    let count2 = count;
    count = count - 1;
    console.log(count);
    count = count - 1;
    console.log(count)
    console.log(count2)
}

// Напишите код, который увеличивает переменную count на 1, используя инкремент с префиксом и выводит результат в консоль.

{
    let count = 5;
    let count2 = ++count;
    console.log(++count);
    console.log(count)
    console.log(count2)
}

{
    let count = 5;
    count = count + 1;
    console.log(count)
    let count2 = count;
    count = count + 1;
    console.log(count);
    console.log(count)
    console.log(count2)
}

// Напишите код, который уменьшает переменную count на 1, используя декремент с префиксом и выводит результат в консоль.

{
    let count=5;
    let count2 = --count;
    console.log(--count);
    console.log(count)
    console.log(count2)
}

{
    let count=5;
    count = count - 1;
    let count2 = count;
    count = count - 1;
    console.log(count);
    console.log(count)
    console.log(count2)
}   

// Напишите код, который увеличивает переменную count на 1, используя инкремент с постфиксом и выводит результат в консоль.

{
    let count = 7;
    let count2 = count++;
    console.log(count++);
    console.log(count)
    console.log(count2)
}

{
    let count = 7;
    let count2 = count;
    count = count + 1;
    console.log(count)

    console.log(count);
    count = count + 1;
    console.log(count)


    console.log(count)
    console.log(count2)
}

// Напишите код, который уменьшает переменную count на 1, используя декремент с постфиксом и выводит результат в консоль.

{
    let count = 10;
    count--;
    console.log(count);
    }
    
    // Напишите код, который увеличивает переменную count на 1, используя инкремент с префиксом и выводит результат в консоль.
    
    {
    let count = 2;
    ++count;
    console.log(count);
    }
    
    // Напишите код, который уменьшает переменную count на 1, используя декремент с префиксом и выводит результат в консоль.
    
    {
    let count=9;
    --count;
    console.log(count);
    }
    
    // Напишите код, который увеличивает переменную count на 1, используя инкремент с постфиксом и выводит результат в консоль.
    
    {
    let count = 4;
    count++;
    console.log(count);
    }
    
    // Напишите код, который уменьшает переменную count на 1, используя декремент с префиксом и выводит результат в консоль.
    
    {
    let count = 8;
    --count;
    console.log(count);
    }


{
    let count = 10;
    console.log(count++); // 10
    console.log(count + 5); // 16
    console.log(count++); // 11
    console.log(15 - count); // 3 +
    console.log(--count); // 12
    console.log(++count); // 12 +
    console.log(count - 3); // 9
    console.log(count--);  // 12 +
    console.log(count++); // 11 +
    console.log(count - 2); // 10
    console.log(++count); // 13 +
    console.log(--count); // 12 +
    console.log(count - 1); // 11 +
    console.log(count++); // 12 +
    console.log(20 - count); // 7
}

{
    let count = 5;
    console.log(count++); // 5+
    console.log(count - 2); // 4+
    console.log(count--); // 6+
    console.log(count + 1); // 6+
    console.log(5 - count); // 0+
    console.log(count++); // 5+
    console.log(count - 3); // 3+
    console.log(--count); // 5+
    console.log(count + 5); // 11-
    console.log(++count); // 6+
    console.log(count - 4); // 2+
    console.log(count--); // 6+
    console.log(count++); //5+
    console.log(count + 2); // 8+
    console.log(10 - count); // 4+
}

{
    let count = 5;
    console.log(count++);   // 5
    console.log(count + 3); // 9
    console.log(count--);   // 6
    console.log(count - 2); // 3
    console.log(--count);   // 4
    console.log(count + 1); // 5
    console.log(count++);   // 4
    console.log(5 - count); // 0
    console.log(++count);   // 6
    console.log(count - 4); // 2
    console.log(count++);   // 6
    console.log(5 + count); // 12
    console.log(count - 1); // 6
    console.log(--count);   // 8
    console.log(count + 2); // 10
}

{
    let count = 10;
console.log(count--);    // 10+
console.log(count + 3);  // 12+
console.log(count++);    // 9+
console.log(count - 5);  // 5+
console.log(--count);    // 9
console.log(count + 2);  // 11
console.log(count++);    // 9
console.log(10 - count); // 0
console.log(++count);    // 11 
console.log(count - 7);  // 4 


let num = 5;
console.log(num++);   // 5 +
console.log(num - 2); // 4 + 
console.log(num--);   // 6 +
console.log(num + 3); // 8 +
console.log(--num);   // 4 +
console.log(num + 4); // 8 +
console.log(num++);   // 4 +
console.log(5 - num); // 0 +
console.log(++num);   // 6 +
console.log(num - 6); // 0 +


let x = 8;
console.log(++x);     // 9 +
console.log(x + 2);   // 11 +
console.log(x--);     // 9 +
console.log(x - 4);   // 4 +
console.log(--x);     // 7 +
console.log(x + 1);   // 8 +
console.log(x++);     // 7 +
console.log(8 - x);   // 0 +
console.log(++x);     // 9 +
console.log(x - 3);   // 6 +
}

{
    let count = 10;
    console.log(count++);    // 10 +
    console.log(--count);    // 10 +
    console.log(count + 3);  // 13 +
    console.log(count - 2);  // 8 +
    console.log(++count);    // 11 +
    console.log(count++);    // 11
    console.log(15 - count); // 3
    console.log(--count);    // 11
    console.log(count - 1);  // 10
    console.log(count--);    // 11
}


// Создайте две переменные, одна содержит строку "10", а другая число 5. Приведите строку к числу и сложите два числа. Результат выведите в консоль.
//вариант 1
{
    let a = '10';
    let b = 5;
    console.log(+a+b);
}
 //вариант 2   
{
    let a = '10';
    let b = parseInt(a);
    let c = 5;
    console.log(b+c);
}
// или тот же пример в другом варианте
{
    let a = '10';
    let b = 5;
    console.log(parseInt(a)+b);
}
//вариант 3
{
    let a = '10';
    let b = 5;
    console.log(parseFloat(a)+b);
}
//вариант 4
{
    let a = '10';
    let b = 5;
    console.log((a*1)+b);
}
//вариант 4 вар 2
{
    let a = '10';
    let b = 5;
    console.log((a/1)+b);
}
//вариант 5
{
    let a = '10';
    let b = 5;
    console.log(Number(a)+b);
}


// Создайте переменную, которая содержит строку "50.5". Приведите эту строку к числу и умножьте результат на 2. Результат выведите в консоль.
{
    let a = '50.5';
    console.log(+a*2);
}
 //вариант 2   
 {
    let a = '50.5';
    let b = parseInt(a);
    let c = 2;
    console.log(b*c);
}
// или тот же пример в другом варианте
{
    let a = '50.5';
    let b = 2;
    console.log(parseInt(a)*b);
}
//вариант 3
{
    let a = '50.5';
    let b = 2;
    console.log(parseFloat(a)*b);
}
//вариант 4
{
    let a = '50.5';
    let b = 2;
    console.log((a*1)*b);
}
//вариант 4 вар 2
{
    let a = '50.5';
    let b = 2;
    console.log((a/1)*b);
}
//вариант 5
{
    let a = '50.5';
    let b = 2;
    console.log(Number(a)*b);
}


// Создайте переменную, которая содержит строку "15". Приведите эту строку к числу и разделите результат на 3. Результат выведите в консоль.
{
    let a = '15';
    console.log(+a/3);
}
 //вариант 2   
 {
    let a = '15';
    let b = parseInt(a);
    let c = 3;
    console.log(b/c);
}
// или тот же пример в другом варианте
{
    let a = '15';
    let b = 3;
    console.log(parseInt(a)/b);
}
//вариант 3
{
    let a = '15';
    let b = 3;
    console.log(parseFloat(a)/b);
}
//вариант 4
{
    let a = '15';
    let b = 3;
    console.log((a*1)/b);
}
//вариант 4 вар 2
{
    let a = '15';
    let b = 3;
    console.log((a/1)/b);
}
//вариант 5
{
    let a = '15';
    let b = 3;
    console.log(Number(a)/b);
}


// Создайте две переменные, одна содержит строку "7", а другая число 3. Приведите строку к числу и разделите два числа. Результат выведите в консоль.
{
    let a = '7';
    let b = 3;
    console.log(+a/b);
}
 //вариант 2   
 {
    let a = '7';
    let b = parseInt(a);
    let c = 3;
    console.log(b/c);
}
// или тот же пример в другом варианте
{
    let a = '7';
    let b = 3;
    console.log(parseInt(a)/b);
}
//вариант 3
{
    let a = '7';
    let b = 3;
    console.log(parseFloat(a)/b);
}
//вариант 4
{
    let a = '7';
    let b = 3;
    console.log((a*1)/b);
}
//вариант 4 вар 2
{
    let a = '7';
    let b = 3;
    console.log((a/1)/b);
}
//вариант 5
{
    let a = '7';
    let b = 3;
    console.log(Number(a)/b);
}


// Создайте переменную, которая содержит строку "2021". Приведите эту строку к числу и вычтите из результата число 1000. Результат выведите в консоль.
{
    let a = '2021';
    let b = 1000;
    console.log(+a-b);
}
 //вариант 2   
 {
    let a = '2021';
    let b = parseInt(a);
    let c = 1000;
    console.log(b-c);
}
// или тот же пример в другом варианте
{
    let a = '2021';
    let b = 1000;
    console.log(parseInt(a)-b);
}
//вариант 3
{
    let a = '2021';
    let b = 1000;
    console.log(parseFloat(a)-b);
}
//вариант 4
{
    let a = '2021';
    let b = 1000;
    console.log((a*1)-b);
}
//вариант 4 вар 2
{
    let a = '2021';
    let b = 1000;
    console.log((a/1)-b);
}
//вариант 5
{
    let a = '2021';
    let b = 1000;
    console.log(Number(a)-b);
}





{
    let a = '10';
    console.log(typeof a, a);

    let b = +a;
    console.log(typeof b, b);

    let c = Number(a);
    console.log(typeof c, c);

    let d = 5;
    console.log(a+d)

    console.log(b+d)

    console.log(d+Number(a)) 
}

{
    console.log(5 < 10);
    5 < 10 ? console.log('Верно') :  console.log('Не верно');  
    10 >= 10 ? console.log('Верно') :  console.log('Не верно');
    "apple" == "Apple" ? console.log('Верно') :  console.log('Не верно');
    "123" === 123 ? console.log('Верно') :  console.log('Не верно');
    true != false ? console.log('Верно') :  console.log('Не верно');
    null == undefined ? console.log('Верно') :  console.log('Не верно'); // -
    NaN === NaN ? console.log('Верно') :  console.log('Не верно'); // -
    1 > true ? console.log('Верно') :  console.log('Не верно'); // -
    "" == false ? console.log('Верно') :  console.log('Не верно');
    0 === -0 ? console.log('Верно') :  console.log('Не верно'); // -
    3 > 4 ? console.log('Верно') :  console.log('Не верно');
    8 <= 9 ? console.log('Верно') :  console.log('Не верно');
    'apple' == 'apple' ? console.log('Верно') :  console.log('Не верно');
    7 != 8 ? console.log('Верно') :  console.log('Не верно');
    'dog' === 'dog' ? console.log('Верно') :  console.log('Не верно');
    5 >= 5 ? console.log('Верно') :  console.log('Не верно');
    6 < 7 ? console.log('Верно') :  console.log('Не верно');
    10 <= 15 ? console.log('Верно') :  console.log('Не верно');
    'cat' !== 'dog' ? console.log('Верно') :  console.log('Не верно');
    20 == '20' ? console.log('Верно') :  console.log('Не верно');
    5 <= 4 ? console.log('Верно') :  console.log('Не верно');
    10 > 20 ? console.log('Верно') :  console.log('Не верно');
    'hello' === 'world' ? console.log('Верно') :  console.log('Не верно');
    9 != 9 ? console.log('Верно') :  console.log('Не верно');
    'red' == 'green' ? console.log('Верно') :  console.log('Не верно');
    6 >= 7 ? console.log('Верно') :  console.log('Не верно');
    5 < 4 ? console.log('Верно') :  console.log('Не верно');
    3 >= 2 ? console.log('Верно') :  console.log('Не верно');
    'cow' !== 'horse' ? console.log('Верно') :  console.log('Не верно');
    30 == '30' ? console.log('Верно') :  console.log('Не верно');
    3 <= 4 ? console.log('Верно') :  console.log('Не верно');
    9 > 7 ? console.log('Верно') :  console.log('Не верно');
    'sun' === 'sun' ? console.log('Верно') :  console.log('Не верно');
    4 != 4 ? console.log('Верно') :  console.log('Не верно');
    'blue' == 'blue' ? console.log('Верно') :  console.log('Не верно');
    7 >= 6 ? console.log('Верно') :  console.log('Не верно');
    8 < 6 ? console.log('Верно') :  console.log('Не верно');
    2 <= 3 ? console.log('Верно') :  console.log('Не верно');
    'bird' !== 'bird' ? console.log('Верно') :  console.log('Не верно');
    15 == '15' ? console.log('Верно') :  console.log('Не верно');
    2 > 4 ? console.log('Верно') :  console.log('Не верно');
    'apple' === 'orange' ? console.log('Верно') :  console.log('Не верно');
    8 != 8 ? console.log('Верно') :  console.log('Не верно');
    'green' == 'yellow' ? console.log('Верно') :  console.log('Не верно');
    5 >= 3 ? console.log('Верно') :  console.log('Не верно');
    6 < 5 ? console.log('Верно') :  console.log('Не верно');
    9 <= 9 ? console.log('Верно') :  console.log('Не верно');
    'dog' !== 'dog' ? console.log('Верно') :  console.log('Не верно');
    25 == '25' ? console.log('Верно') :  console.log('Не верно');
    10 >= 11 ? console.log('Верно') :  console.log('Не верно');
    3 > 3 ? console.log('Верно') :  console.log('Не верно');
    'tree' === 'tree' ? console.log('Верно') :  console.log('Не верно');
    7 != 6 ? console.log('Верно') :  console.log('Не верно');
    'blue' == 'red' ? console.log('Верно') :  console.log('Не верно');
    4 <= 5 ? console.log('Верно') :  console.log('Не верно');
    6 > 8 ? console.log('Верно') :  console.log('Не верно');
    1 != 0 ? console.log('Верно') :  console.log('Не верно');
    'cat' !== 'cat' ? console.log('Верно') :  console.log('Не верно');
    20 == '30' ? console.log('Верно') :  console.log('Не верно');
    7 <= 9 ? console.log('Верно') :  console.log('Не верно');

}
