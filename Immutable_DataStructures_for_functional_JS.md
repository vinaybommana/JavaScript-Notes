# Functional Programming

An introduction to functional programming - Mary Rose Cook
[introduction](https://codewords.recurse.com/issues/one/an-introduction-to-functional-programming)

    - a programming paradigm
    - a mindset
* input --> output
* avoid side effects
* pure functions
* higher order functions
* don't iterate
    - using `map`, `reduce`, `filter`
* avoid mutability
    - use immutability
# Why Immutable data ?
# path copying

* trees
* we use trees to represent the data
* we use structural sharing
* TRIE ??
    - leaves hold values, paths represent keys
    - treat index as binary
    - descend trie bit by bit
* Bitmapped vector Trie

What if the key is an object
    - hash the key to get a number
    - descend trie as before
* Hash Array Mapped Trie
* Persistent datastructures
* miro
* Immutable.js
