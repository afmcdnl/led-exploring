let red = 0
let green = 0
let blue = 0
basic.forever(function () {
    pins.analogWritePin(AnalogPin.P0, red)
    pins.analogWritePin(AnalogPin.P1, green)
    pins.analogWritePin(AnalogPin.P2, blue)
    blue += 1
})
