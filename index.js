// Froyo Survey
// create an object labeled customer

const customer = {
    firstName: "jake",
    lastName:"smith",
    email: "jaekSmih!aol.com",
    phone: undefined,
    zipCode: "631",
    favoriteFlavors: 32,
    cupSize: "medium",
    favoriteStore: "Target",
    firstVisit:false
   };
   console.table(customer)

// Modify the following properties in the customer object using bracket notation:
// email to "Jak3Smith1992@email.com"
// phone to 3195551234
// zipCode to "63132"
// favoriteFlavors to "coffee", "strawberry", and "matcha"

const customer1 = {
    firstName: "jake",
    lastName:"smith",
    email: "jaekSmih!aol.com",
    phone: undefined,
    zipCode: "631",
    favoriteFlavors: 32,
    cupSize: "medium",
    favoriteStore: "Target",
    firstVisit:false
   };
   customer1['email'] = 'Jak3Smith1992@email.com';
   customer1['phone'] = '(319)-555-1234';
   customer1['zipCode'] = '63132';
   customer1['favoriteFlavors'] = ['coffee', 'strawberry', 'matcha'];
   console.table(customer1)

// Delete the following properties in the customer object using the delete keyword.
// zipCode
// favoriteStore

const customer2 = {
    firstName: "jake",
    lastName:"smith",
    email: 'Jak3Smith1992@email.com',
    phone: '(319)-555-1234',
    zipCode: '63132',
    favoriteFlavors:['coffee', 'strawberry', 'matcha'] ,
    cupSize: "medium",
    favoriteStore: "Target",
    firstVisit:false
   };
   delete customer2['zipCode'];
   delete customer2['favoriteStore'];
   console.table(customer2)

//   Add the following key:values to the customer object using dot notation:
// toppings: "chocolate sprinkles", "wafer straws", and "gummy bears"
// futureFlavors: "mango"
// todaysPurchaseCost: 5.32

const customer3 = {
    firstName: "jake",
    lastName:"smith",
    email: 'Jak3Smith1992@email.com',
    phone: '(319)-555-1234',
    favoriteFlavors:['coffee', 'strawberry', 'matcha'] ,
    cupSize: "medium",
    firstVisit:false
};
    customer3.toppings = ["chocolate sprinkles", "wafer straws" , "gummy bears"];
    customer3.futureFlavors = 'mango';
    customer3.todaysPurchaseCost = 5.32 ;
    console.table(customer3)

// In an array, print the keys in your survey. 

const customer4 = {
    firstName: "jake",
    lastName:"smith",
    email: 'Jak3Smith1992@email.com',
    phone: '(319)-555-1234',
    favoriteFlavors:['coffee', 'strawberry', 'matcha'] ,
    cupSize: "medium",
    firstVisit:false,
    toppings: ["chocolate sprinkles", "wafer straws" , "gummy bears"],
    futureFlavors: 'mango',
    todaysPurchaseCost: 5.32
};

console.log(Object.keys(customer4));
