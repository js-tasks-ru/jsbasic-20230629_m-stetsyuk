function sumSalary(salaries) {
  let sum = 0;
  let salariesValues = Object.values(salaries).filter((val) => {
    if (!isNaN(val) && val !== Infinity && val !== -Infinity) {
      return typeof val == 'number';
    }
  });

  for (let salary of salariesValues) {
    sum += salary;
  }

  return sum;
}
