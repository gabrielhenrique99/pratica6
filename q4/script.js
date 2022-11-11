const arr = [1,2,3,4,5,6,7,8,9];
const arr2 = arr.reduce(function(acc,valorAtual){
    return (acc+valorAtual);
})
const tamanho = arr.length;
document.write(arr2/tamanho);