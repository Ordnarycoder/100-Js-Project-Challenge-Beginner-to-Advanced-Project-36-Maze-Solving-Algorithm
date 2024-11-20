const maze = [
    [0, 1, 0, 0],
    [0, 1, 1, 0],
    [0, 0, 1, 1],
    [1, 0, 0, 1]
];

const start = [0, 0];
const end = [3, 2];

const directions = [
    [0, -1], // left
    [1, 0],  // down
    [0, 1],  // right
    [-1, 0]  // up
];

function mazesolver(start_point, end_point, maze, directions) {
    const rows = maze.length;
    const cols = maze[0].length;

    const visited = Array.from({ length: rows }, () => Array(cols).fill(false));

    function traverse(x, y, path) {
        if (x === end_point[0] && y === end_point[1]) {
            return path;
        }

        visited[x][y] = true;

        for (let [dx, dy] of directions) {
            const newX = x + dx;
            const newY = y + dy;

            if (
                newX >= 0 &&
                newY >= 0 &&
                newX < rows &&
                newY < cols &&
                maze[newX][newY] === 0 &&
                !visited[newX][newY]
            ) {
                const result = traverse(newX, newY, [...path, [newX, newY]]);
                if (result) return result; 
            }
        }

        visited[x][y] = false;
        return null;
    }

    return traverse(start_point[0], start_point[1], [start_point]);
}

const result = mazesolver(start, end, maze, directions);

if (result) {
    console.log("Path found:", result);
} else {
    console.log("No path found.");
}
