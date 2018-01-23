function swap(arr, i, j){
    var tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
}
var arr = [1,234,34,1,23,4,534,5,45];


function bubbleSort(arr){
    for (let i = 0; i < arr.length ; i++){
        for(let j = 0; j < arr.length - 1 -i ; j++){
            if(arr[j] > arr[j+1]){
                swap(arr, i, j);
            }
        }
    }
}


function selectionSort(arr){
    var tmp = arr[0];

    for(let i = 0; i < arr.length ; i++){
        for (let j = i+1 ; j < arr.length ; j++){
            if(arr[i] > arr[j]){
                swap(arr, i, j)
            }
        }
    }
}


function inseartSort(arr){
    for (let i = 0 ; i < arr.length ; i++){
        var tmp = arr[i];

        for(let j = i -1 ; j > -1 ; j--){
            if(arr[j] > tmp){
                arr[j+1] = arr[j];
                arr[j] = tmp;
            }
        }
    }
}


var quickSort = function (arr){
    if(arr.length <= 1){
        return arr;
    }

    var middleEle = arr.splice(Math.floor(arr.length/2), 1)[0];
    var left = [],
        right = [];

    for(let i = 0 ; i < arr.length ; i++){
        arr[i] < middleEle ? left.push(arr[i]) : right.push(arr[i]);
    }

    return quickSort(left).concat([middleEle], quickSort(right));
};

console.log(quickSort(arr));

// console.log(arr);