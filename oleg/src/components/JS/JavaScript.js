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


