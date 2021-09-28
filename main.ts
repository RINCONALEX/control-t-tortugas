basic.forever(function () {
    basic.showNumber(input.temperature())
    while (input.temperature() <= 26) {
        basic.showString("T BAJA")
        basic.showLeds(`
            . # # # .
            . # # # .
            # # # # #
            . # . # .
            . . # . .
            `)
        basic.showIcon(IconNames.Sword)
        music.playTone(247, music.beat(BeatFraction.Breve))
    }
    while (input.temperature() <= 34) {
        basic.showLeds(`
            . . # . .
            . # . # .
            # # # # #
            . # # # .
            . # # # .
            `)
        basic.showLeds(`
            . . # . .
            . # . # .
            . . # . .
            . . # . .
            . . # . .
            `)
        basic.showString("c° BAJA")
        music.playTone(988, music.beat(BeatFraction.Double))
    }
    basic.showIcon(IconNames.Heart)
    basic.showIcon(IconNames.SmallHeart)
})
