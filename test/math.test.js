const {add,sub} =require('../src/math.js')

test('1 and 2 adds to 3',()=>
{
    expect(add(1,2)).toBe(3);
});

test('3 sub 2 adds to 1',()=>
{
    expect(sub(3,2)).toBe(1);
});