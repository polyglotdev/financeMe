import Category from '../enums/Category'
import Expense from './Expense'
import truncate from '../utils/truncate'
import genUniqueId from '../utils/genUniqueId'

class Budget {
  private label: string
  private limit: number
  private id: string
  private category: Category
  private expenses: Expense[]

  constructor(
    label: string,
    limit: number,
    id: string,
    category: Category,
    expenses: Expense[]
  ) {
    this.updateLabel(label)
    this.updateLimit(limit)
    this.updateCategory(category)

    this.id = genUniqueId()
    this.expenses = expenses
  }

  getExpenseTotal(): number {
    return this.getExpenses().reduce(
      (sum, expense) => sum + expense.getAmount(),
      0
    )
  }

  getIsOverLimit(): boolean {
    return this.getExpenseTotal() > this.getLimit()
  }

  getExpenses(): Expense[] {
    return this.expenses
  }

  getCategory(): Category {
    return this.category
  }

  updateCategory(category: Category) {
    this.category = category
  }

  getId(): string {
    return this.id
  }

  getLabel(): string {
    return this.label
  }

  updateLabel(label: string) {
    this.label = truncate(label, 15)
  }

  getLimit(): number {
    return this.limit
  }

  updateLimit(limit: number): void {
    this.limit = limit
  }
}

export default Budget
