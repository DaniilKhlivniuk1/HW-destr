const user = {
    name: "user",
    hobby: "sports",
    premium: true,
  };
  
  const newMood = ({ mood, ...user }) => {
    user.mood = "happy";
    return user;
  };
  
  const changeHobby = ({ hobby, ...user }) => {
    user.hobby = "eating";
    return user;
  };
  
  const changePremium = ({ premium, ...user }) => {
    user.premium = false;
    return user;
  };
  
  const allKeys = ({ ...user }) => {
    for (const [key, value] of Object.entries(user)) {
      console.log(`${key}: ${value}`);
    }
    return user;
  };
  
  console.log(newMood(user));
  console.log(changeHobby(user));
  console.log(changePremium(user));
  console.log(allKeys(user));
  
  const countProps = ({ ...obj }) => Object.keys(obj).length;
  
  const object = {
    test1: 1,
    test2: 131,
    test3: 75,
    test4: 41,
    test5: 90,
  };
  console.log(countProps(object));
  
  const countTotalSalary = ({ oleg, abdul, lucy, albert, alex }) => 
    oleg + abdul + lucy + albert + alex;
  
  const shopEmployees = {
    oleg: 13000,
    abdul: 12000,
    lucy: 20000,
    albert: 15000,
    alex: 17000,
  };
  console.log(countTotalSalary(shopEmployees));
  
  const calculateTotalPrice = (allProdcuts, productName) => {
    let userPrice = 0;
    for (const { name, price, quantity } of allProdcuts) {
      if (name === productName) {
        userPrice = price * quantity;
      }
    }
    return userPrice;
  };
  
  const products = [
    { name: "watermelon", price: 110, quantity: 12 },
    { name: "peach", price: 11, quantity: 6 },
    { name: "pear", price: 22, quantity: 17 },
    { name: "apple", price: 8, quantity: 20 },
    { name: "kiwi", price: 133, quantity: 3 },
    { name: "lime", price: 92, quantity: 2 },
  ];
  console.log(calculateTotalPrice(products, "watermelon"));
  
  const account = {
    balance: 0,
    UserName: "Daniil",
    years: 30,
    RegistrationIn: 2021,
    transactions: [],
    Balance() {
      alert(`Your balance is ${this.balance}$`);
    },
    seeTransactions() {
      alert(`You had ${this.transactions.length} transactions. See more in console`);
      console.log(this.transactions);
    },
    makePositiveTransaction(money, year) {
      const nMoney = Number.parseFloat(money);
      this.balance += nMoney;
      this.transactions.push({ money: nMoney, operation: "+", year });
    },
    makeNegativeTransaction(money, year) {
      const nMoney = Number.parseFloat(money);
      this.balance -= nMoney;
      this.transactions.push({ money: nMoney, operation: "-", year });
    },
  };
  
  const final = ({
    Balance,
    seeTransactions,
    makePositiveTransaction,
    makeNegativeTransaction,
    ...account
  }) => {
    let isAccepting;
    do {
      if (confirm(`Do you want to see your balance?`)) {
        Balance();
      }
      if (confirm(`Do you want to see your transactions?`)) {
        seeTransactions();
      }
      if (confirm(`Do you want to make a positive transaction?`)) {
        makePositiveTransaction(prompt(`How much do you want to add?`), prompt(`Enter year`));
      }
      if (confirm(`Do you want to make a negative transaction?`)) {
        makeNegativeTransaction(prompt(`How much do you want to subtract?`), prompt(`Enter year`));
      }
      isAccepting = confirm(`Do you want to continue with your account?`);
    } while (isAccepting);
  };
  
  final(account);
  