board = ['-', '-', '-',
        '-', '-', '-',
        '-', '-', '-']
currentPlayer = "X"
winner = None
gameRunning = True

# შევქმნათ დაფა

def printBoard(board):
    print(board[0] + " | " + board[1] + " | " + board[2])
    print("---------")
    print(board[3] + " | " + board[4] + " | " + board[5])
    print("---------")
    print(board[6] + " | " + board[7] + " | " + board[8])

#მოთამაშის სვლის მიღება

def playerInput(board):
    while True:
        if currentPlayer == "X":
            inp = int(input(f"Enter a number 1-9: "))
        else:
            inp = int(input(f"Enter a number 1-9: "))
        if inp >= 1 and inp <= 9 and board[inp-1] == "-":
            board[inp-1] = currentPlayer
            break
        else:
            print("Oops player is already in that spot")

#ვნახულობთ მოიგო თუ ფრეა

def checkHorizontal(board):
    global winner
    if (board[0] == board[1] == board[2] and board[0] != "-"):
        winner = currentPlayer
        return True
    if (board[3] == board[4] == board[5] and board[3] != "-"):
        winner = currentPlayer
        return True
    if (board[6] == board[7] == board[8] and board[6] != "-"):
        winner = currentPlayer
        return True

def checkRow(board):
    global winner
    if (board[0] == board[3] == board[6] and board[0] != "-"):
        winner = currentPlayer
        return True
    if(board[1] == board[4] == board[7] and board[1] != "-"):
        winner = currentPlayer
        return True
    if (board[2] == board[5] == board[8] and board[2] != "-"):
        winner = currentPlayer
        return True

def checkDiagonal(board):
    global winner
    if (board[0] == board[4] == board[5] and board[0] != "-"):
        winner = currentPlayer
        return True
    if (board[2] == board[4] == board[6] and board[2] != "-"):
        winner = currentPlayer
        return True

def checkTie(board):
    global gameRunning
    if "-" not in board:
        printBoard(board)
        print("Its a tie")
        gameRunning = False

#გამარჯვებულის გამოვლენა
def checkWin():
    if checkDiagonal(board) or checkHorizontal(board) or checkRow(board):
        print(f"The winner is {winner}")

#მოთამაშის გადაცვლა
def switchPlayer():
    global currentPlayer
    if currentPlayer == "X":
        currentPlayer = "O"
    else:
        currentPlayer = "X"


#check for win or tie again

while gameRunning:
    printBoard(board)
    if winner != None:
        break
    playerInput(board)
    checkWin()
    checkTie(board)
    switchPlayer()