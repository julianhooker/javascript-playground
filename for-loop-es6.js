var arr = ['a', 'b', 'c'];

arr.forEach(function (elem,index)
	{
		console.log('index = ' + index + ', elem - ' + elem);
	})

console.log();

const arr2 = ['a', 'b', 'c'];
for (const [index2, elem2] of arr2.entries()) {
	console.log(`index = ${index2}, elem = ${elem2}`);
}