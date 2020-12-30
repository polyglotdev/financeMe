class User {
  name: string
  age: number

  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }

  printUserInfo() {
    console.log(`name: ${this.name}, age: ${this.age}`)
  }

  getName() {
    return this.name
  }
}

let mike: User
mike = new User('Mike', 2)

const katie = new User('Catherine', 35)
katie.getName()
