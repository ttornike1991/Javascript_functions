function ager(age) {
    dogAge = (age * 7)
    console.log(`Your dog is ${dogAge} years old`)
}
ager(7)

console.log(`/* end of Exercise 2 */`)


let Dinamo = [2, 1, 1];
let Torpedo = [3, 2, 1];

const avg = (x) => x.reduce((a, b) => a + b, 0) / x.length

console.log(`Average of Dinamo Goals = ${avg(Dinamo)}`)
console.log(`Average of Tornpedo Goals = ${avg(Torpedo)}`)

const sum = (x) => x.reduce((a, b) => a + b, 0) 

function comparison(DinamoG, TorpedoG) {
    if (DinamoG > TorpedoG) {
        console.log(`Dinamo scored more balls`)
    }
    
    else if (TorpedoG > DinamoG) {
        console.log(`Torpedo scored more balls `)
    }

    else {
        console.log(` Draw `)    }
}

comparison(sum(Dinamo),sum(Torpedo))


console.log(`/* end of EXercise 2 */`)




const firstName =  prompt('Enter name')
const B_year = prompt('Enter Birth year')
const year = new Date().getFullYear()
function ageVerification(x, y) {
    if ((year - y) >= 17) {
        console.log(` ${x} You have passed age verification `)
    }

    else {
        console.log(`${x} You have failed age verification `)
    }

}
ageVerification(firstName,B_year)

console.log(` /* end of Exercise 3 */`)





