const expected = [
	['+', '-', '-', '-', '-', '+'], 
	['|', ' ', ' ', ' ', ' ', '|'], 
	['|', ' ', ' ', ':', ' ', '|'], 
	['|', ' ', ' ', 'T', ' ', '|'], 
	['|', '.', ' ', ' ', ' ', '|'], 
	['|', ':', '.', '.', ':', '|'], 
	['+', '-', '-', '-', '-', '+']];
const grid = [
	['+', '-', '-', '-', '-', '+'], 
	['|', '.', ' ', '.', ' ', '|'], 
	['|', '.', ' ', '.', ' ', '|'], 
	['|', ' ', '.', 'T', '.', '|'], 
	['|', '.', ' ', '.', ' ', '|'], 
	['|', ' ', ' ', ' ', '.', '|'], 
	['+', '-', '-', '-', '-', '+']];
const [ROCK, STACK, TABLE, FLOOR, SPACE] = ".:T- ".split("");

function display(grid){
	const output = [];
	for(let i = 0; i < grid.length; i++){
		output.push(grid[i].join(""));
	}
	console.log(output.join("\n"));
}

display(grid);

while(JSON.stringify(grid) != JSON.stringify(expected)){
	//  Use indexes into grid so we can directly change the values in place.
	//  bottom to top, ignore top and bottom edges
	for (let y = grid.length - 2; y >=1; y--) { 
		//ignore left and right edges
		for (let x = 0; x < grid.length - 2; x++) { 
			const below   = grid[y+1][x];
			const current = grid[y  ][x];
			// only rocks cause change
			if (ROCK == current){
				// Space below gets filled with rock and,
				//  old space is cleared.
				if (SPACE == below){
					grid[y+1][x] = current;
					grid[y][x] = SPACE;
				}
				// Rock below gets converted into a Stack.
				else if (ROCK == below){
					grid[y+1][x] = STACK;
					grid[y][x] = SPACE;
				}
			}
		}
	}
	display(grid)
}

