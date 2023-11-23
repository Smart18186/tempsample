serial.redirectToUSB()
basic.forever(function () {
    serial.writeNumber(input.temperature())
    serial.writeLine("")
    basic.pause(500)
})
