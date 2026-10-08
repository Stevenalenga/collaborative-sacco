export function amortize(principal: number, annualRatePct: number, months: number) {
  if (principal <= 0 || months <= 0) {
    return { monthly: 0, total: 0, interest: 0 };
  }

  const monthlyRate = annualRatePct / 100 / 12;
  if (monthlyRate === 0) {
    const monthly = principal / months;
    return { monthly, total: principal, interest: 0 };
  }

  const factor = (1 + monthlyRate) ** months;
  const monthly = (principal * monthlyRate * factor) / (factor - 1);
  const total = monthly * months;
  return { monthly, total, interest: total - principal };
}
