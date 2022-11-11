const arr = [1,2,3,4,5,6,7,8,9]
const arr2 = arr.map(function(numero){
    const fatorial = numero => {
        if (numero > 1) {
            return n * fatorial(numero - 1)
        }
        return numero;
    }
});
document.write(arr2);