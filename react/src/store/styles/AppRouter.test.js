const add = (a,b) => a + b;
const generateGreeting = (name = 'Anonymous') => `Hello, ${name}`;


test('should add two numbers', ()=>{
  const result = add(2, 2);
  expect(result).toBe(4);
})


describe('generateGreeting', ()=>{
  it('should call the given name', () => {
  const name = 'James';
  const result = generateGreeting(name);
  expect(result).toBe('Hello, James');
  });

  it('should give a default name if no name', ()=>{
    const result = generateGreeting();
    expect (result).toBe('Hello, Anonymous');
  })
});
