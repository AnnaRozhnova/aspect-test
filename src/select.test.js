const select = require('./select');
const expected = require('./expected');


// Проверка на пустой результат (ничего не найдено)
test('Checking for an empty result', async () => {
    const result = await select('table1', 'Nname');
    expect(result).toEqual(expected.case1);
}) 


// Проверка когда результирующий список = количество найденных записей 
// (в результате 5 записей, всего найдено 5)
test('Resulting list = number of rows found', async () => {
    const result = await select('table2', 'description');
    expect(result).toEqual(expected.case2);
}) 
 

// Проверка когда результирующий список < количество найденных записей 
// (в результате 20 записей, всего найдено 25)
test('Resulting list < number of rows found', async () => {
    const result = await select('table3', 'name');
    expect(result).toEqual(expected.case3);
})  





