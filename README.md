# KAMI Puzzle Solver

This is a JavaScript-based solver for KAMI puzzles, utilizing graph theory and linked list representation to efficiently find solutions.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [How It Works](#how-it-works)
- [Contributing](#contributing)

## Introduction

KAMI is a puzzle game where the objective is to fill the entire board with a single color in as few moves as possible. This program uses graph theory to model the puzzle and a linked list representation to efficiently solve   it. It uses p5.js to render the graph

## Features

- Solves KAMI puzzles using graph theory
- Utilizes linked list representation for efficient computation
- Uses easy to use keys to create, connect and color nodes
- Supports custom puzzle inputs

## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/Njancodes/KAMI-Solver.git
    ```

2. Navigate to the project directory:
    ```sh
    cd KAMI-Solver
    ```

3. Open the index.html file

## Usage

1. **Create Nodes (n mode):**
    - Click on the canvas to create nodes.
    - Ensure you are in "n mode" by pressing `n`.

2. **Create Edges (e mode):**
    - Press `e` to switch to "e mode".
    - Click on two nodes to create an edge between them.

3. **Add Colors:**
    - Enter the number of colors needed.
    - Assign colors to each node by switching to "c mode" by pressing `c`.

4. **Change Colors:**
    - While in "c mode", press the respective number key to select a color. 
    - For example, press `2` to select Color #2.

5. **Get the Solution:**
    - After drawing the graph, press `p` to get the sequence of moves to solve the puzzle.

6. **Output:**
    - The output will be displayed as the sequence of moves required to solve the puzzle.

## How It Works

### Graph Representation

Each KAMI puzzle is represented as a graph. In this graph, each node represents a cell in the puzzle, and edges represent connections between cells of the same color. The color of each node specifies the type of the cell.

### Linked List Representation

The graph is then transformed into a linked list using conventional methods in JavaScript. This linked list representation allows efficient manipulation and traversal of the puzzle state.

### Solving Algorithm

1. **Graph Conversion:**
    - Convert the graph representation of the puzzle into a linked list.

2. **Find the Most Connected Node:**
    - Identify the node with the highest number of edges or connections in the graph.

3. **Select the Optimal Node:**
    - Within the linked list, select the node that has the most edges connected to the head of the linked list.

4. **Change Color:**
    - Change the color of the head node to match the color of the selected optimal node.


## Contributing

Contributions are welcome! If you have any improvements or bug fixes, please create a pull request or open an issue on GitHub.
