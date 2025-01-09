// ejemplo 2
// [5,1,8,2,9,3,8,3] => [1,2,3,3,5,8,8]

var M:number[]=[5,1,8,2,9,3,8,3]

function ordenar (ar:number[]){
    for (var i=0;i<ar.length;i++){
        for (var j=0;j<ar.length;j++){
            var aux=ar[i];
            if (aux<ar[j]){
                ar[i]=ar[j];
                ar[j]=aux
            }
            console.log ('dentro: ', j,ar)
        }
        console.log ('fuera:', i,ar)
    }
    return ar
}

console.log(ordenar(M));
