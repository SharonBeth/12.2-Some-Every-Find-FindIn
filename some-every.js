// 12.2.4  Homework


function hasOddNumber(arr) {
    return arr.some(function(value, index, array){
        return value % 2 !== 0
    })
}

function hasAZero(num) {
    return num
        .toString()
        .split("")
        .some(function(value, index, array){
            return value === '0';
        })
}

function hasOnlyOddNumbers(arr) {
    return arr.every(function(value, index, array){
        return value % 2 !==0;
    })
}

function hasNoDuplicates(arr) {
    return arr.every(function(value, index, array){
        return arr.indexOf(value) === arr.lastIndexOf(value)
    })
}

function hasCertainKey(arr, key) {
    return arr.every(function(value, index, array){
        return value[key]
    })
}

function hasCertainValue(arr, key, searchValue) {
    return arr.every(function(value, index, array){
        return value[key]=== searchValue;
    })
}
