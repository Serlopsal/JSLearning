Considera lo siguiente:
teniendo 2 variables
a = 5
b = 2
para ordenarlas de mayor a menor en orden alfabetico, necesitariamos una nueva variable auxiliar 'aux' donde guardariamos temporalmente un valor

aux = a; // aux = 5;
a = b;   // a = 2;
b = aux; // b = 5;

Notese que se hubiera hecho la reasignacion sin uso de la variable auxiliar el valor de a se hubiera perdido en la reasignacion 'a = b' de tal manera que 
a y b hubieran terminado con el mismo valor

teniendo esto en consideracion 
cree una funcion que devuelva un arreglo ordenado de numeros de menor a mayor

ejemplo 1
[1,5,2,3] => [1,2,3,5]

ejemplo 2
[5,1,8,2,9,3,8,3] => [1,2,3,3,5,8,8]
