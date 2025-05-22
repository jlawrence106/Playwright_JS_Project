// Add values with Dollar 
export function sumDollarValues(values) {
    let sum = 0;
    for (const value of values) {
      const num = parseFloat(value.replace('$', ''));
      sum += num;
    }
      return '$' + sum.toFixed(2);
  }

// Get the Tax
export function getTaxCalc(value) {
    let tprice = parseFloat(value.replace('$', ''));
    let tax = tprice * 0.08;
    
      return '$' + tax.toFixed(2);
  }

  // Random Index
export function getRndIndex(values) {
    const randomIndex = Math.floor(Math.random() * values.length);
    
      return randomIndex;
  }
  

