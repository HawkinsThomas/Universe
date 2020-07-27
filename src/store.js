class Store {
  employeesList = [
    { name: 'Thomas', role: 'developer'},
    { name: 'joe', role: 'developer' },
  ]
}

const appStore = new Store();

export { appStore };