const { calculateTip,fahrenheitToCelsius,celsiusToFahrenheit,add } = require('../src/math');

test('Should calculate total with tip', () => {
    expect(calculateTip(10, .3)).toBe(13);
})

test('Should calculate total with default tip',()=>{
    expect(calculateTip(10)).toBe(12.5);
})

test('Should convert 32 F to 0 C',()=>{
    expect(fahrenheitToCelsius(32)).toBe(0);
})

test('Should convert 0 C to 32 F',()=>{
    expect(celsiusToFahrenheit(0)).toBe(32);
})

// test('async function test',(done)=>{
//     setTimeout(()=>{
//         expect(1).toBe(1);
//         done();
//     },2000);
// })

 test('async sum of 2 numbers',async()=>{
    const sum=await add(2,3);
        expect(sum).toBe(5);
})