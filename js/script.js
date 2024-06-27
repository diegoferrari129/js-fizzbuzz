//ESEGUI UN CICLO for DA 1 A 100
for (let i = 1; i < 100; i++) {
    // VERIFICA SE IL NUMERO è MULTIPLO DI 3, 5 O DI ENTRAMBI
    // STAMPA FIZZ PER I MULTIPLI DI 3, BUZZ PER I MULTIPLI DI 5 E FIZZBUZZ PER I MULTIPLI DI ENTRAMBI
    if (i % 3 == 0 && i % 5 == 0) {
        console.log('FizzBuzz');
    }
    else if (i % 3 == 0) {
        console.log('Fizz');
    }
    else if (i % 5 == 0) {
        console.log('Buzz');
    }
    else {
        console.log(i);
    } 
}