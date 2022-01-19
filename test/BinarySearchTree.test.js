const expect = require('chai').expect;

/* eslint-disable no-undef */
const {
  BinarySearchTree
} = require('../Repaso.js');

describe('BinarySearchTree EJERCICIO 1: height', function() {

  it('Debe devolver la altura de un arbol', function() {
    var tree = new BinarySearchTree(16);
    expect(tree.height()).to.equal(1);
    tree.insert(6);
    expect(tree.height()).to.equal(2);
    tree.insert(23);
    expect(tree.height()).to.equal(2);
    tree.insert(2);
    expect(tree.height()).to.equal(3);
    tree.insert(14);
    expect(tree.height()).to.equal(3);
    tree.insert(17);
    expect(tree.height()).to.equal(3);
    tree.insert(31);
    expect(tree.height()).to.equal(3);
    tree.insert(5);
    expect(tree.height()).to.equal(4);
  });

});

describe('Binary Search Tree', function () {
  describe('EJERCICIO 2: order', () => {
      let bst;
      beforeEach(() => {
          bst = new BinarySearchTree(7);
      });

      it('getLeafs deberia devolver las hojas del arbol', () => {
          bst.insert(2);
          bst.insert(9);
          bst.insert(1);
          bst.insert(5);
          bst.insert(14);
          expect(bst.getLeafs()[0]).to.equal(1);
          expect(bst.getLeafs()[1]).to.equal(5);
          expect(bst.getLeafs()[2]).to.equal(14);
      });
  });
});