// Importamos las clases:
const { Queue, LinkedList, BinarySearchTree } = require('./DataStructures.js');
/*****************************************************************/
/****************************** BST ******************************/
/*****************************************************************/

// EJERCICIO 1
// Implementar la función height dentro del prototype de BinarySearchTree que debe devolver la "altura"
// máxima del arbol recibido por parámetro.
// Ejemplo:
//             16             ---> Nivel 1
//          /      \
//        6         23        ---> Nivel 2
//      /  \       /   \
//     2    14    17    31    ---> Nivel 3
//      \
//       5                    ---> Nivel 4
// Este arbol tiene una altura de 4
// PISTA: Una forma de resolverlo es pensarlo recursivamente y usando Math.max

BinarySearchTree.prototype.height = function(){
  
};

/*****************************************************************/
/****************************** BST ******************************/
/*****************************************************************/

// Ejercicio 2

// Dado un Binary Search Tree, devolver las hojas de ese arbol en un array
// ordenado de menor a mayor.
// Si se nos presenta un arbol como el que se encuentra en el archivo BST.png
// la funcion deberia retornar [1, 5, 14].

BinarySearchTree.prototype.getLeafs = function () {

};

module.exports = {
    BinarySearchTree,
    BinarySearchTree
};
