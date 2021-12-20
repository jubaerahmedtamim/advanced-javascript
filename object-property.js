const student = [ 
    {id : 21, name : 'Omar Sunny'},
    {id : 31, name: "Mannaa"},
    {id : 41, name : 'Moyori'},
    {id : 71, name: 'dipjol'}
];
// const output = [];
// for(let i = 0; i <student.length; i++){
//     const sName = student[i].name;
//     output.push(sName);
// }
// console.log(output)
const sName = student.map(x => x.name);
console.log(sName);