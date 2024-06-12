const { firstName, verifyStockAvailability, calculateTotalPrice } = require('./validations');

// Testes para a função firstName de Jest/src/utils/validations.js
describe('firstName', () => {
  it('deve retornar o primeiro nome de uma string de nome completo', () => {
    expect(firstName('John Doe Etc')).toBe('John');
  });

  it('deve retornar o nome se nenhum espaço em branco for encontrado', () => {
    expect(firstName('John')).toBe('John');
  });

  it('deve retornar o primeiro nome quando há espaço no início', () => {
    expect(firstName(' Alice Teste')).toBe('Alice');
  });

  it('deve retornar o primeiro nome quando há espaço no final', () => {
      expect(firstName('Alice Teste ')).toBe('Alice');
  });
});

// Testes para a função verifyStockAvailability de Jest/src/utils/validations.js
describe('verifyStockAvailability', () => {
    it('deve retornar true se a quantidade desejada do tipo de produto estiver disponível em estoque', () => {
        expect(verifyStockAvailability('laptop', 2)).toBe(true);
    });

    it('deve retornar false se a quantidade desejada do tipo de produto não estiver disponível em estoque', () => {
        expect(verifyStockAvailability('headphone', 10)).toBe(false);
    });

    it('deve retornar false se o tipo de produto não existir', () => {
        expect(verifyStockAvailability('Produto Teste', 10)).toBe(false);
    });

    it('deve retornar false se a quantidade desejada for igual a zero', () => {
        expect(verifyStockAvailability('book', 0)).toBe(false);
    });
});

// Testes para a função calculateTotalPrice de Jest/src/utils/validations.js
describe('calculateTotalPrice', () => {
    it('deve retornar 0 se a lista de produtos estiver vazia', () => {
        expect(calculateTotalPrice([])).toBe(0);
    });

    it('deve calcular corretamente o preço total para uma lista de produtos', () => {
        const products = [
            { name: 'Product 1', price: 10, quantity: 2 },
            { name: 'Product 2', price: 15, quantity: 2 },
            { name: 'Product 3', price: 20, quantity: 1 }
        ];
        // O preço total deve ser: (10 * 2) + (15 * 2) + (20 * 1) = 70
        expect(calculateTotalPrice(products)).toBe(70);
    });

    it('deve retornar 0 se algum produto tiver preço ou quantidade negativos', () => {
        const products = [
            { name: 'Product 1', price: -10, quantity: 2 },
            { name: 'Product 2', price: 15, quantity: -2 },
            { name: 'Product 3', price: 20, quantity: 1 }
        ];
        expect(calculateTotalPrice(products)).toBe(0);
    });
});



