basic.forever(function () {
    basic.showNumber(input.temperature())
    while (input.temperature() >= 26) {
        basic.showIcon(IconNames.Heart)
        basic.showString("c° ALTA")
        basic.showIcon(IconNames.SmallHeart)
        music.playTone(262, music.beat(BeatFraction.Double))
    }
})
