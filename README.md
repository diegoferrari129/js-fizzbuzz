@qui Ciao ragazzi, Esercizio di oggi: FizzBuzz
nome repo: js-fizzbuzz

Consegna:
Scrivi un programma che stampi in console i numeri da 1 a 100, ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”. Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.

Prima di partire a scrivere codice poniamoci qualche domanda:
Come faccio a sapere se un numero è divisibile per un altro? Abbiamo visto qualcosa di particolare che possiamo usare?

Consigli del giorno:
Scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
Proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"

Numero minimo di push: 5 (solo parte obbligatoria)

BONUS 1: Crea un container nel DOM , aggiungendo (attraverso la funzione append()) un elemento html con il numero o la stringa corretta da mostrare.
BONUS 2: Applica stili differenti agli elementi aggiunti al DOM nel BONUS 1, a seconda che il valore inserito sia un numero, un fizz, un buzz o un fizzbuzz. Se sei a corto di idee per lo stile, potresti prendere spunto dallo screenshot fornito in consegna.

Buon lavoro e buon divertimento! :faccia_leggermente_sorridente:

///////////////////////////////////////////////////////////////////////////////

//ESEGUI UN CICLO for DA 1 A 100

- FOR (dichiaro una variabile con valore 1; imposto la condizione da verificare; imposto l'incremento da eseguire)
    
    // VERIFICA SE IL NUMERO è MULTIPLO DI 3, 5 O DI ENTRAMBI
    // STAMPA FIZZ PER I MULTIPLI DI 3, BUZZ PER I MULTIPLI DI 5 E FIZZBUZZ PER I MULTIPLI DI ENTRAMBI

    - ?SE il numero diviso 3 ha resto con valore uguale a 0
        - stampo nella console del browser: (Fizz)
    - :ALTRIMENTI ?SE il numero diviso 5 ha resto con valore uguale a 0
        - stampo nella console del browser: (Buzz)
    - :ALTRIMENTI ?SE il numero diviso 3 ha resto con valore 0 AND il numero diviso 5 ha resto con valore uguale a 0 
        - stampo nella console del browser: (FizzBuzz)
