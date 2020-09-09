var m1John=90;
var m2John=120;
var m3John=103;
var m1Mike=116;
var m2Mike=100;
var m3Mike=200;
var m1Marry=97;
var m2Marry=4;
var m3Marry=300;
var averageJohn = (m1John + m2John + m3John)/3;
var averageMike = (m1Mike + m2Mike + m3Mike)/3;
var averageMarry = (m1Marry+m2Marry+m3Marry)/3;
console.log('Average Score of John\'s team' + averageJohn);
console.log('Average Score of Mike\'s team' + averageMike);
console.log('Average Score of Marry\'s team' + averageMarry);
if(averageJohn>averageMike && averageJohn>averageMarry){
    console.log('The winner is John\'s team with the score of' + averageJohn);
}
else if(averageJohn===averageMike && averageJohn===averageMarry){
    console.log('The match is a draw with' + averageJohn + 'points');
}
else if(averageMike>averageJohn && averageMike>averageMarry){
    console.log('The winner is Mike\'s team with the score of' + averageMike);
}
else{
    console.log('marry team');
}
