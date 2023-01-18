function calculateTotalMortgage(percent, contribution, amount, countMonths) {
    let interestRate = percent / 100 / 12;
    let credit = amount - contribution;
    let paymentPerMonth = credit * (interestRate + (interestRate / (Math.pow(1 + interestRate) ** countMonths) - 1));
    let sum = paymentPerMonth * countMonths - contribution;
  }