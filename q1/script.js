const arr = [1,2,3,4,5,6,7,8,9]
const arr2 = arr.map(function(numero){
    return Math.pow(numero,2);
});
document.write(arr2);