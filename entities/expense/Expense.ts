class Expense {
  private label: string
  private amount: number
  private date: Date

  constructor(label: string, amount: number, date: Date | string) {
    this.label = label
    this.amount = amount
    this.date = new Date(date)
  }

  getLabel(): string {
    return this.label
  }

  updateLabel(label: string): void {
    this.label = label
  }

  getAmount(): number {
    return this.amount
  }

  updateAmount(amount: number): void {
    this.amount = amount
  }

  getDate(): Date {
    return this.date
  }

  updateDate(date: Date | string): void {
    this.date = new Date(date)
  }
}

export default Expense
