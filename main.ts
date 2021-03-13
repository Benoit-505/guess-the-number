input.onButtonPressed(Button.A, function () {
    guess += 1
    basic.showNumber(guess)
})
input.onButtonPressed(Button.AB, function () {
    if (guess == chosen_num) {
        basic.showString("CORRECT")
    } else if (guess != chosen_num) {
        if (guess > chosen_num) {
            basic.showString("TOO HIGH")
        } else if (guess < chosen_num) {
            basic.showString("TOO LOW")
        }
    }
})
input.onButtonPressed(Button.B, function () {
    guess += -1
    basic.showNumber(guess)
})
let guess = 0
let chosen_num = 0
chosen_num = randint(0, 20)
basic.showString("GUESS")
basic.forever(function () {
	
})
