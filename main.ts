let z = 0
input.onButtonPressed(Button.A, function () {
    basic.showNumber(1)
    basic.pause(500)
    basic.showNumber(2)
    basic.pause(500)
    basic.showNumber(3)
    basic.pause(500)
    basic.showNumber(4)
    basic.pause(500)
    basic.showNumber(5)
    basic.pause(500)
    basic.showNumber(6)
    basic.pause(500)
    basic.showNumber(7)
})
input.onButtonPressed(Button.B, function () {
    z = 0
    z += 1
    basic.showString("z")
})
