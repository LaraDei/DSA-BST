const BinarySearchTree  = require('./bst-class.js')

//.1
//on paper
//.2
//on paper
//.3
function main(key, value){
    const BST = new BinarySearchTree()
    let values1 = [3, 1, 4, 6, 9, 2, 5, 7];
    for (let value of values1) {
        BST.insert(value, null);
    }
    const BST2 = new BinarySearchTree();
    let values2 = [ 'E','A','S','Y',
        'Q', 'U', 'E','S','T', 'I','O','N'];
    for (let value of values2) {
        BST2.insert(value, null);
    }
    console.log(BST)
    console.log(findHeight(BST))
    console.log(thirdLargest(BST))
    console.log(isBalanced(BST))
    // console.log('second tree')
    // console.log(BST2)
}

//4. What does this program do?
// function tree(t){
//     if(!t){
//         return 0;
//     }
//     return tree(t.left) + t.value + tree(t.right)
// }
//linear
//5. Height of a BST
function findHeight(Bst, counter = 1) {
    if (Bst.left && Bst.right) {
      return Math.max(
        ...[
          findHeight(
            Bst.left,
            counter + 1
          ),
          findHeight(
            Bst.right,
            counter + 1
          ),
        ]
      )
    } else if (Bst.left) {
      return findHeight(
        Bst.left,
        counter + 1
      );
    } else if (Bst.right) {
      return findHeight(
        Bst.right,
        counter + 1
      );
    } else {
      return counter
    }
}

//6. Is it a BST?
//function isBst() {}
//7. 3rd largest node
function thirdLargest(
    Bst,
    counter = 1
  ) {
    if (!Bst.parent) {
      return [
        {
          density:
            thirdLargest(Bst.left).reduce(
              (total, b) =>
                total + Number(b.density),
              0
            ) +
            counter +
            thirdLargest(
              Bst.right
            ).reduce(
              (total, b) =>
                total + Number(b.density),
              0
            ),
          key: Bst.key
        },
        ...thirdLargest(
          Bst.left,
          counter
        ),
        ...thirdLargest(
          Bst.right,
          counter
        )
      ].sort(
        (nodeA, nodeB) =>
          nodeB.density - nodeA.density
      )[2].key;
    } else if (Bst.left && Bst.right) {
      return [
        {
          density:
            thirdLargest(Bst.left).reduce(
              (total, b) =>
                total + Number(b.density),
              0
            ) +
            counter +
            thirdLargest(
              Bst.right
            ).reduce(
              (total, b) =>
                total + Number(b.density),
              0
            ),
          key: Bst.key
        },
        ...thirdLargest(
          Bst.left,
          counter
        ),
        ...thirdLargest(
          Bst.right,
          counter
        )
      ];
    } else if (Bst.left) {
      return [
        {
          density:
            thirdLargest(Bst.left).reduce(
              (total, b) =>
                total + Number(b.density),
              0
            ) + counter,
          key: Bst.key
        },
        ...thirdLargest(Bst.left, counter)
      ];
    } else if (Bst.right) {
      return [
        {
          density:
            thirdLargest(
              Bst.right
            ).reduce(
              (total, b) =>
                total + Number(b.density),
              0
            ) + counter,
          key: Bst.key
        },
        ...thirdLargest(
          Bst.right,
          counter
        )
      ];
    } else {
      return [
        { density: counter, key: Bst.key }
      ];
    }
  }

//8. Balanced BST
function isBalanced(bst, distance = 0) {
    if (bst.parent === null) {
      let leaves = [
        ...isBalanced(bst.left, distance),
        ...isBalanced(bst.right, distance)
      ];
  
      for (let leaf of leaves) {
        for (let leaf2 of leaves) {
          if (
            Math.abs(leaf - leaf2) > 1
          ) {
            return false;
          }
        }
      }
    }
    if (bst.left && bst.right) {
      return [
        ...isBalanced(
          bst.left,
          ++distance
        ),
        ...isBalanced(bst.right, distance)
      ];
    } else if (bst.left) {
      return [
        ...isBalanced(
          bst.left,
          ++distance
        )
      ];
    } else if (bst.right) {
      return [
        ...isBalanced(
          bst.right,
          ++distance
        )
      ];
    } else {
      return [++distance];
    }
  }
//9. Are they the same BSTs?


main()