let soilMoisture = 0
basic.showIcon(IconNames.Pitchfork)
basic.forever(function () {
    soilMoisture = pins.analogReadPin(AnalogPin.P0)
    led.plotBarGraph(
    soilMoisture,
    1023
    )
    if (input.buttonIsPressed(Button.A)) {
        basic.showNumber(soilMoisture)
    }
})
