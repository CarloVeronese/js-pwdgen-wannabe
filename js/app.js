// - chiedere all'utente il suo nome
//     - dichiarare una variabile
let firtsName
//     - assegnare ad una variabile il valore restituito da un prompt
firtsName = prompt('Qual è il tuo nome?')
console.log(firtsName)
// - chiedere all'utente il suo cognome
//     - dichiarare una variabile
let lastName
//     - assegnare ad una variabile il valore restituito da un prompt
lastName = prompt('Qual è il tuo cognnome?')
console.log(lastName)
// - chiedere all'utente il suo colore preferito
//     - dichiarare una variabile
let favouriteColor
//     - assegnare ad una variabile il valore restituito da un prompt
favouriteColor = prompt('Qual è il tuo colore preferito?')
console.log(favouriteColor)
// - concatenare i dati dell'utente con un numero generato randomicamente e creare il messaggio
//     - dichiarare una variabile che contiene il numero da inserire nella password
let randomNumber = Math.floor((Math.random() * 100) + 1)
console.log(randomNumber)
//     - dichiarare una variabile password dove concateniamo le quattro stringhe
let password = firtsName + lastName + favouriteColor + randomNumber
console.log(password)
//     - dichiarare una variabile message dove concateniamo la password con il messaggio
let message = 'La tua password è: ' + password
// - stampare un messaggio dentro un h1
//     - inserire nel html un tag g1 con id='message'
//     - recuperare con js l'elemento del dom con id='message'
const passwordDomElement = document.getElementById('message')
passwordDomElement.innerHTML = message
//     - modificare l'innerHTML del h1 con il valore della variabile password