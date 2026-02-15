import { knightMoves } from "./knight_moves.js"


test("Check if the input is out of chessboard boundary", () => {
    expect(knightMoves([9,0], [1,2])).toBe("Initial Position Out of Bound");
    expect(knightMoves([0,0], [8,0])).toBe("Target Position Out of Bound");

});

test("Check if all of the coordinates are filled", () => {
    expect(() => knightMoves([0], [1])).toThrow("Error: positions need to have 2 elements. Ex: [0,0],[1,0]");
    expect(() => knightMoves([], [])).toThrow("Error: positions need to have 2 elements. Ex: [0,0],[1,0]");

});



test.skip("Move Knight", () => {
    expect(knightMoves([0,0],[1,1])).toEqual([1,1]);
    expect(knightMoves([0,0],[7,7])).toEqual([7,7]);
});

test("Find Shortest Path", () => {
    expect(knightMoves([0,0],[1,2])).toEqual([[0,0], [1,2]]);
    expect(knightMoves([0,0],[3,3])).toEqual([[0,0],[1,2],[3,3]]);
    expect(knightMoves([3,3],[0,0])).toEqual([[3,3],[2,1],[0,0]]);
    expect(knightMoves([3,3],[4,3])).toEqual([[3,3],[4,5],[6,4],[4,3]])
    expect(knightMoves([0,0],[7,7])).toEqual([[0,0],[1,2],[2,4],[3,6],[5,7],[6,5],[7,7]]);
})