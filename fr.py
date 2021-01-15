# vim: tabstop=2 
expected = [['+', '-', '-', '-', '-', '+'], 
						['|', ' ', ' ', ' ', ' ', '|'], 
						['|', ' ', ' ', ':', ' ', '|'], 
						['|', ' ', ' ', 'T', ' ', '|'], 
						['|', '.', ' ', ' ', ' ', '|'], 
						['|', ':', '.', '.', ':', '|'], 
						['+', '-', '-', '-', '-', '+']]
grid = [['+', '-', '-', '-', '-', '+'], 
				['|', '.', ' ', '.', ' ', '|'], 
				['|', '.', ' ', '.', ' ', '|'], 
				['|', ' ', '.', 'T', '.', '|'], 
				['|', '.', ' ' , '.', ' ', '|'], 
				['|', ' ', ' ', ' ', '.', '|'], 
				['+', '-', '-', '-', '-', '+']]  
ROCK, STACK, TABLE, FLOOR, SPACE = list(".:T- ")
def display(grid):
	output = []
	for r in grid:
		output.append("".join(r))
	print("\n".join(output))
display(grid)
while grid != expected:
	#  Use indexes into grid so we can directly change the values in place.
	#  bottom to top, ignore top and bottom edges
	for y in range(len(grid)-2, 0, -1): 
		#ignore left and right edges
		for x in range(1,len(grid[y])-1): 
			below   = grid[y+1][x]
			current = grid[y  ][x]
			#only rocks cause change
			if ROCK == current:
				# Space below gets filled with rock and,
				#  old space is cleared.
				if SPACE == below:
					grid[y+1][x] = current
					grid[y][x] = SPACE
				# Rock belo gets converted into a Stack.
				elif ROCK == below:
					grid[y+1][x] = STACK
					grid[y][x] = SPACE
	display(grid)
