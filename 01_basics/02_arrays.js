const heros=["ironman","thor"]
const dc=["superman","flash"]
heros.push(dc)
// console.log(heros);
// console.log(heros[2]);
// const allheros=heros.concat(dc)
// console.log(allheros);

// const all_new_heros=[...heros,...dc]
// console.log(all_new_heros);
// const another_array=[1,2,3,[4,5,6],7,[7,8,[3,7]]]
// const real_another_array=another_array.flat(Infinity)
// console.log(real_another_array);

console.log(Array.isArray("aditi"))
console.log(Array.from("aditi"))
console.log(Array.from({name:"aditi"}))//interesting

let score1=100
let score2=200
let score3=300
console.log(Array.of(score1,score2,score3));