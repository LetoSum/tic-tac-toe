class TicTacToe {
    constructor() {
    	this.field = [[null, null, null], [null, null, null], [null, null, null]];
    	this.turn = 0;
    }

    getCurrentPlayerSymbol() {
    	return this.turn % 2 == 0? 'x': 'o';
    }

    nextTurn(rowIndex, columnIndex) {
        if(this.field[rowIndex][columnIndex] != null) {
            return;
        }
    	this.field[rowIndex][columnIndex] = this.getCurrentPlayerSymbol();
    	this.turn++;
    }

    isFinished() {
    	return this.noMoreTurns() || this.getWinner() != null;
    }

    getWinner() {
    	var f = this.field;
    	for(var i=0; i<3; i++) {
	    	if(f[i][0] == f[i][1] && f[i][0] == f[i][2]) {
	    		return f[i][0];
	    	}
    	}
		for(var j=0; j<3; j++)
	    	if(f[0][j] == f[1][j] && f[0][j] == f[2][j])
	    		return f[0][j];
	    if(f[0][0] == f[1][1] && f[0][0] == f[2][2])
	    	return f[0][0];
		if(f[0][2] == f[1][1] && f[0][2] == f[2][0])
	    	return f[0][2];
	    return null;
    }

    noMoreTurns() {
		return this.turn == 9;
    }

    isDraw() {
    	return this.noMoreTurns() && this.getWinner() == null;
    }

    getFieldValue(rowIndex, colIndex) {
    	return this.field[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;
