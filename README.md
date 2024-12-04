# Duck Simulation Project

A JavaScript-based object-oriented programming demonstration featuring different types of ducks using inheritance and polymorphism.

## Class Hierarchy

- [`Animal`](rag://rag_source_7) (Base Class, Abstract Class)
  - [`Bird`](rag://rag_source_1) (Abstract Class)
    - [`Duck`](rag://rag_source_3) (Abstract Class)
      - [`MallardDuck`](rag://rag_source_6) (Concrete Class)
      - [`TuftedDuck`](rag://rag_source_5) (Concrete Class)

## Features

- Class inheritance demonstration
- Private property implementation using `#weight`
- Polymorphic behaviour with different duck feeding patterns
- Getters and setters for weight property
- Common duck behaviours (swimming, flying, quacking)

## Installation

1. Clone this repository
2. Ensure you have Node.js installed
3. Run `npm install`
4. Execute `node index.js` to see the demonstration

## Project Structure

- `Animal.js` - Base class with weight management
- `Bird.js` - Extends Animal with flying capability 
- `Duck.js` - Base duck class with common duck behaviours
- `MallardDuck.js` - Specific implementation of a dabbling duck
- `TuftedDuck.js` - Specific implementation of a diving duck
- `index.js` - Demo implementation