let getFunction = require('./getPhrases');

describe('Testando a função', () => {
  it('Testando se o mock da função retorna uma frase aleatória.', () => {
    getFunction.getPhrases = jest.fn().mockReturnValue('Sorria para quem você ama :)')
    expect(getFunction.getPhrases()).toBe('Sorria para quem você ama :)');
  })
  it('Testando se getPhrases é uma função.', () => {
    expect(typeof getFunction.getPhrases).toBe('function');
  })
})
