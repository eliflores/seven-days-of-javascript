"use strict";
function findElements(i, j, n_rows, n_columns, matrix) {
	if(i < 0 || i >= n_rows || j < 0 || j >= n_columns) {
		return 0;
	} else if (matrix[i][j] == 1) {
		matrix[i][j] = 0;

		return 1 + findElements(i - 1, j, n_rows, n_columns, matrix) 
		+ findElements(i - 1, j, n_rows, n_columns, matrix) 
		+ findElements(i + 1, j, n_rows, n_columns, matrix) 
		+ findElements(i - 1, j - 1, n_rows, n_columns, matrix)
		+ findElements(i + 1, j - 1, n_rows, n_columns, matrix)
		+ findElements(i , j + 1, n_rows, n_columns, matrix)
		+ findElements(i + 1 , j + 1, n_rows, n_columns, matrix)
		+ findElements(i + 1 , j - 1, n_rows, n_columns, matrix)
	}

	return 0;
}	

function processData(input) {
    let input_lines = input.split('\n');
    let n_rows = parseInt(input_lines[0]);
    let n_columns = parseInt(input_lines[1]);
    let matrix = [];
    for(let i = 2; i < n_rows + 2 ; i++) {
        let row_elements = input_lines[i].split(' ').map(row_element => parseInt(row_element));
        matrix.push(row_elements);
    }
    
    let max_connected_nodes = 0;
    let current_connected_nodes = 0;
    for (let i = 0; i < n_rows ; i++) {
        for (let j = 0; j< n_columns; j++) {
            current_connected_nodes = findElements(i, j, n_rows, n_columns, matrix);
            if (current_connected_nodes > max_connected_nodes) {
            	max_connected_nodes = current_connected_nodes;
            }
        }
    }
    console.log(max_connected_nodes);
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
let _input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});