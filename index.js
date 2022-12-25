let sum=0; 
for(let i=1; i<=3; i++) {
  if (i == 2) {
    continue; 
  }
  sum += i;
}
console.log(sum);