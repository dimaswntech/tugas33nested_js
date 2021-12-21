function panggilNestedArray(value) {
    for(var q = 0; q<value[0].length;q++){
    var x = [];
    for (var i = 0; i <= 2; i++) {
        var y = value[0 + i][0+q];
        x.push(y);

    }
    console.log(x);}
}

// function panggilNestedArray(value) {
//     var i = 0;
//     var x = [];
//     do {
//         var y = value[0 + i][0];
//         x.push(y);
//         i++;
//     }
//     while (i < value.length);
//     console.log(x);
// }
var nestedArray = [
    [1, 2, 3, 4],
    ['Mark Zuckerberg', 'Elon Musk', 'Bill Gates', 'Steve Jobs'],
    ['Facebook', 'Tesla', 'Microsoft', 'Apple']
]

panggilNestedArray(nestedArray)