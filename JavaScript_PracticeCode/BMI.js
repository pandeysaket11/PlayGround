var markMass, johnMass, markHeight,johnHeight;

markMass=70;
markHeight=170;
johnMass=65;
johnHeight=175;

var markBMI = markMass / (markHeight*markHeight);
var johnBMI = johnMass / (johnHeight*johnHeight);

console.log(markBMI);
console.log(johnBMI);

var check = markBMI > johnBMI;

console.log('Is Mark\'s BMI higher than John\'s?' + check);
