function generateRandomGraph(numNodes, density, minWeight, maxWeight) {
    let graph = [];
    
    // Initialize the graph with empty arrays
    for (let i = 0; i < numNodes; i++) {
        graph.push([]);
    }
    
    // Populate the graph with random edges
    for (let i = 0; i < numNodes; i++) {
        for (let j = 0; j < numNodes; j++) {
            if (i !== j && Math.random() < density) {
                const weight = Math.floor(Math.random() * (maxWeight - minWeight + 1)) + minWeight;
                graph[i].push({ node: j, weight: weight });
            }
        }
    }
    
    return graph;
}

// Example usage
const numNodes = 5;
const density = 0.5; // Adjust density as needed (0 to 1)
const minWeight = 1;
const maxWeight = 10;
const randomGraph = generateRandomGraph(numNodes, density, minWeight, maxWeight);
console.log(randomGraph);
