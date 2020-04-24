controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    scene.setBackgroundColor(7)
    mySprite.say("嘻嘻嘻")
    mySprite.setImage(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . c c c c . . . . 
. . . . . . c c d d d d c . . . 
. . . . . c c c c c c d c . . . 
. . . . c c 4 4 4 4 d c c . . . 
. . . c 4 d 4 4 4 4 4 1 c . c c 
. . c 4 4 4 1 4 4 4 4 d 1 c 4 c 
. c 4 4 4 4 1 4 4 4 4 4 1 c 4 c 
f 4 4 4 4 4 1 4 4 4 4 4 1 4 4 f 
f 4 4 4 f 4 1 c c 4 4 4 1 f 4 f 
f 4 4 4 4 4 1 4 4 f 4 4 d f 4 f 
. f 4 4 4 4 1 c 4 f 4 d f f f f 
. . f f 4 d 4 4 f f 4 c f c . . 
. . . . f f 4 4 4 4 c d b c . . 
. . . . . . f f f f d d d c . . 
. . . . . . . . . . c c c . . . 
`)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setImage(img`
. . . . . f f 4 4 f f . . . . . 
. . . . f 5 4 5 5 4 5 f . . . . 
. . . f e 3 3 3 3 3 3 e f . . . 
. . f b 3 3 3 3 3 3 3 3 b f . . 
. . f 3 3 3 3 3 3 3 3 3 3 f . . 
. f 3 3 3 3 3 3 3 3 3 3 3 3 f . 
. f b 3 3 3 3 3 3 3 3 3 3 b f . 
. f b b 3 3 3 3 3 3 3 3 b b f . 
. f b b b b b b b b b b b b f . 
f c b b b b b b b b b b b b c f 
f b b b b b b b b b b b b b b f 
. f c c b b b b b b b b c c f . 
. . e d c f f f f f f c d e . . 
. . e f b 4 b 4 b 4 b b f e . . 
. . . f f 1 4 1 4 1 4 f f . . . 
. . . . . f f b b f f . . . . . 
`)
    scene.setBackgroundColor(7)
    mySprite.say("生日快樂")
    music.playTone(440, music.beat(BeatFraction.Whole))
    music.playTone(494, music.beat(BeatFraction.Whole))
    music.playTone(523, music.beat(BeatFraction.Whole))
    music.playTone(494, music.beat(BeatFraction.Whole))
    music.playTone(523, music.beat(BeatFraction.Double))
    music.playTone(659, music.beat(BeatFraction.Half))
})
let mySprite: Sprite = null
mySprite = sprites.create(img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . f f 4 4 f f . . . . . . . . . . . . . 
. . . . . . . . . . . . f 5 4 5 5 4 5 f . . . . . . . . . . . . 
. . . . . . . . . . . f e 4 5 5 5 5 4 e f . . . . . . . . . . . 
. . . . . . . . . . f b 3 e 4 4 4 4 e 3 b f . . . . . . . . . . 
. . . . . . . . . . f 3 3 3 3 3 3 3 3 3 3 f . . . . . . . . . . 
. . . . . . . . . f 3 3 e b 3 e e 3 b e 3 3 f . . . . . . . . . 
. . . . . . . . . f 3 3 f f e e e e f f 3 3 f . . . . . . . . . 
. . . . . . . . . f b b f b f e e f b f b b f . . . . . . . . . 
. . . . . . . . . f b b e 1 f d d f 1 e b b f . . . . . . . . . 
. . . . . . . . f f b b f d d d d d d f b b f f . . . . . . . . 
. . . . . . . . f b b f f f e e e e f f f b b f . . . . . . . . 
. . . . . . . . . f e e f b d d d d b f e e f . . . . . . . . . 
. . . . . . . . . . e d c d d d d d d c d e . . . . . . . . . . 
. . . . . . . . . . e f b d b d b d b b f e . . . . . . . . . . 
. . . . . . . . . . . f f 9 4 9 4 9 4 f f . . . . . . . . . . . 
. . . . . . . . . . . . . f f b b f f . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
mySprite.setVelocity(50, 50)
mySprite.setFlag(SpriteFlag.BounceOnWall, true)
