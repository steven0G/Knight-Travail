function knightMoves(initialPosition, targetPosition) {
    let boardLength = 8;
    if (initialPosition.length < 2 || targetPosition.length < 2) {
        throw new Error("Error: positions need to have 2 elements. Ex: [0,0],[1,0]")
    }
    if (initialPosition[0] >=  boardLength ||  initialPosition[0] < 0 || initialPosition[1] >= boardLength || initialPosition[1] < 0) {
        return "Initial Position Out of Bound";
    }
    if (targetPosition[0] >=  boardLength ||  targetPosition[0] < 0 || targetPosition[1] >= boardLength || targetPosition[1] < 0) {
        return "Target Position Out of Bound";
    }
    function legalMoves(row, col) {
        const moves = [
            [row + 1, col + 2],
            [row + 2, col + 1],
            [row + 1, col - 2],
            [row + 2, col - 1],
            [row - 1, col + 2],
            [row - 2, col + 1],
            [row - 1, col - 2],
            [row - 2, col - 1]
        ];
        const filteredMoves = moves.filter(item => (item[0] < 8 && item[1] < 8) && (item[0] >= 0 && item[1] >= 0));
        return filteredMoves;
    }
    function visitedPositions(position, array) {
        let found = array.filter(item => JSON.stringify(item) == JSON.stringify(position));
        if (found.length > 0) return true;
        return false;
    }

    let queue = [];
    let visited = [];
    let shortest;
    let combinations = [];
    queue.push(Nodes(initialPosition,null));
    
    visited.push(initialPosition);
    while (queue.length > 0) {
        let front = queue[0];

        if (JSON.stringify(front.value) == JSON.stringify(targetPosition)) {
            shortest = front;
            break;
        }
        const moves = legalMoves(front.value[0], front.value[1]);
        moves.forEach(item => {
            if (!visitedPositions(item,visited)) {
                queue.push(Nodes(item, front));
                visited.push(item);
            }
            
        });
      
        queue.shift();
    };
    combinations.push(shortest.value);
    while (shortest.predecessor !== null) {
        shortest = shortest.predecessor;
        combinations.unshift(shortest.value);
    }
    console.log(combinations);
    return combinations;
  
}

function Nodes(value, predecessor) {
    return { value, predecessor};
}
export { knightMoves };