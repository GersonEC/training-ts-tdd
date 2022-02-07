export const factorsOf = (n: number) => {
  const factors: number[] = [];
  
  for(let divisor = 2; n>1; divisor++)
    for( ; n % divisor === 0; n/=divisor)
      factors.push(divisor)
  
  return factors;

}
