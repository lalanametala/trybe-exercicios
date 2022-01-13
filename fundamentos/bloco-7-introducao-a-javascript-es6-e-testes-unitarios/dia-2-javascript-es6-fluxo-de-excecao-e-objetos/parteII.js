const order = {
    name: 'Rafael Andrade',
    phoneNumber: '11-98763-1416',
    address: {
      street: 'Rua das Flores',
      number: '389',
      apartment: '701',
    },
    order: {
      pizza: {
        marguerita: {
          amount: 1,
          price: 25,
        },
        pepperoni: {
          amount: 1,
          price: 20,
        }
      },
      drinks: {
        coke: {
          type: 'Coca-Cola Zero',
          price: 10,
          amount: 1,
        }
      },
      delivery: {
        deliveryPerson: 'Ana Silveira',
        price: 5,
      }
    },
    payment: {
      total: 60,
    },
  };
  
  const customerInfo = (order) => {
    console.log(`Olá, ${order.order.delivery.deliveryPerson}! Entrega para ${order.name}, Telefone: ${order.phoneNumber}, Endereço: ${order.address.street}, Nø: ${order.address.street}, AP: ${order.address.apartment}.`)  
  }
  
  customerInfo(order);
  
  const orderModifier = (order) => {
    order.name = 'Luiz Silva';
    order.payment.total = 50;
    let pizzas = Object.keys(order.order.pizza);
    console.log(`Olá, ${order.name}! O total do seu pedido de ${pizzas[0]}, ${pizzas[1]} e ${order.order.drinks.coke.type} é R$ ${order.payment.total},00.`)  
  }
  
  orderModifier(order);