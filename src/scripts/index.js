const customers = {
  Molly: {
    image: 'https://api.dicebear.com/7.x/adventurer/svg?seed=Jasmine',
    email: 'address@gmail.com',
    age: 31,
    address: {
      street: '123 Street Ave',
      city: 'Ithaca',
      state: 'New York',
    },
  },
  David: {
    image: 'https://api.dicebear.com/7.x/adventurer/svg?seed=Midnight',
    email: 'address2@hotmail.com',
    age: 30,
    address: {
      street: '321 Avenue Way',
      city: 'San Diego',
      state: 'California',
    },
  },
  John: {
    image: 'https://api.dicebear.com/7.x/adventurer/svg?seed=Pepper',
    email: 'john@example.com',
    age: 35,
    address: {
      street: '456 John St',
      city: 'Los Angeles',
      state: 'California',
    },
  },
  Sarah: {
    image: 'https://api.dicebear.com/7.x/adventurer/svg?seed=Toby',
    email: 'sarah@example.com',
    age: 28,
    address: {
      street: '789 Sarah Ave',
      city: 'Chicago',
      state: 'Illinois',
    },
  },
  Michael: {
    image: 'https://api.dicebear.com/7.x/adventurer/svg?seed=Lucky',
    email: 'michael@example.com',
    age: 40,
    address: {
      street: '1011 Michael Blvd',
      city: 'Houston',
      state: 'Texas',
    },
  },
  Emma: {
    image: 'https://api.dicebear.com/7.x/adventurer/svg?seed=Miss%20kitty',
    email: 'emma@example.com',
    age: 25,
    address: {
      street: '1213 Emma Ln',
      city: 'Phoenix',
      state: 'Arizona',
    },
  },
  Daniel: {
    image: 'https://api.dicebear.com/7.x/adventurer/svg?seed=Precious',
    email: 'daniel@example.com',
    age: 45,
    address: {
      street: '1415 Daniel Dr',
      city: 'Philadelphia',
      state: 'Pennsylvania',
    },
  },
  Olivia: {
    image: 'https://api.dicebear.com/7.x/adventurer/svg?seed=Trouble',
    email: 'olivia@example.com',
    age: 32,
    address: {
      street: '1617 Olivia Rd',
      city: 'San Antonio',
      state: 'Texas',
    },
  },
  William: {
    image: 'https://api.dicebear.com/7.x/adventurer/svg?seed=Pepper',
    email: 'william@example.com',
    age: 38,
    address: {
      street: '1819 William St',
      city: 'San Jose',
      state: 'California',
    },
  },
  Ava: {
    image: 'https://api.dicebear.com/7.x/adventurer/svg?seed=Cleo',
    email: 'ava@example.com',
    age: 27,
    address: {
      street: '2021 Ava Ave',
      city: 'Austin',
      state: 'Texas',
    },
  },
};

const createCustomerCard = (name, details) => {
  if (!name || !details) throw new Error('Name and details are required');

  const customerDiv = document.createElement('div');
  customerDiv.className = 'customer';

  const img = document.createElement('img');
  img.src = details.image;
  img.alt = name;

  const h2 = document.createElement('h2');
  h2.textContent = name;

  const emailP = document.createElement('p');
  emailP.textContent = `Email: ${details.email}`;

  const ageP = document.createElement('p');
  ageP.textContent = `Age: ${details.age}`;

  const addressP = document.createElement('p');
  addressP.textContent = `Address: ${details.address.street}, ${details.address.city}, ${details.address.state}`;

  customerDiv.append(img, h2, emailP, ageP, addressP);

  return customerDiv;
};

const createCustomerCards = (customers) => {
  const fragment = document.createDocumentFragment();
  Object.entries(customers).map(([name, details]) => {
    const customerCard = createCustomerCard(name, details);
    fragment.append(customerCard);
  });
  return fragment;
};

const renderCustomers = (customers) => {
  const customerCards = createCustomerCards(customers);
  const customerContainer = document.querySelector('body');
  customerContainer.append(customerCards);
};

const init = () => {
  try {
    renderCustomers(customers);
  } catch (error) {
    console.error(error);
  }
};

init();
