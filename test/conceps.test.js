//Core Concept
// Matchers0
// Equality matcher(toBe)
// test('checks if values are strictly equal', () => {
    
//     // Passes, because 5 === 5
//     expect(5).toBe(5);    
    
//     // Passes, because both strings are exactly the same
//     expect('Hello').toBe('Hello'); 
// });

//truthiness Matcher
// test('checks if value is truthy', () => {
    
//     // Passes, because non-empty strings are truthy
//     expect('Hello').toBeTruthy();  
    
//     // Passes, because 1 is truthy
//     expect(1).toBeTruthy();         
// });test('checks if value is falsy', () => {
    
//     // Passes, because 0 is falsy
//     expect(0).toBeFalsy();     
    
//     // Passes, because an empty string is falsy     
//     expect('').toBeFalsy();         
// });test('checks if value is undefined', () => {
//     let value;
    
//     // Passes, because value is undefined
//     expect(value).toBeUndefined();  
// });test('checks if value is undefined', () => {
//     let value;
    
//     // Passes, because value is undefined
//     expect(value).toBeUndefined();  
// });test('checks if value is defined', () => {
//     const value = 10;
    
//     // Passes, because value is defined (it is 10)
//     expect(value).toBeDefined();    
// });

//comparison matcher
// describe ('Comparison matcher',()=>
// {
//     test('checks if a number is greater than another', () => {
    
//     // Passes, because 10 is greater than 5
//     expect(10).toBeGreaterThan(5);  
// });
// test('checks if a number is less than another', () => {
    
//     // Passes, because 3 is less than 5
//     expect(3).toBeLessThan(5);      
// });
// test('checks if a number is greater than or equal to another', () => {
    
//     // Passes, because 10 is equal to 10
//     expect(10).toBeGreaterThanOrEqual(10);  
    
//     // Passes, because 15 is greater than 10
//     expect(15).toBeGreaterThanOrEqual(10);  
// });
// test('checks if a number is Less than or equal to another', () => {
    
//     // Passes, because 10 is equal to 10
//     expect(10).toBeLessThanOrEqual(10);  
    
//     // Passes, because 15 is greater than 10
//     expect(10).toBeLessThanOrEqual(15);  
// });
// })

//Array Matcher
// describe('Array matchers',()=>
// {
//     test('checks if an array contains a specific element', () => {

//     // Passes, because 2 is in the array
//     expect([1, 2, 3]).toContain(2);  
    
//     // Passes, because 'banana' is in the array
//     expect(['apple', 'banana']).toContain('banana');  
// });
// test('checks if an array contains an object with equal values', () => {
//     const users = [{ name: 'John' }, { name: 'Jane' }];
    
//     // Passes, because an object with name 'John' exists in the array
//     expect(users).toContainEqual({ name: 'John' }); 
// });
// })

//Jest Testig objects
// const user = { name: 'Alice', age: 25 };
// test('Testing Objcts',()=>{
// expect(user).toEqual({ name: 'Alice', age: 25 });
// expect(user).toMatchObject({ name: 'Alice' });  
// expect(user).toHaveProperty('name'); 
// expect(user).toHaveProperty('age', 25);

// });

//Jest Testing Arrayss
// const no=[1,2,3,4];
// test('Arrays Testing',()=>
// {
//     expect(no).toContain(3);
//     expect(no).toHaveLength(4);
//     expect(no).toEqual([1,2,3,4]);
// })


const mockFunction = jest.fn().mockReturnValue(6); 
console.log(mockFunction);