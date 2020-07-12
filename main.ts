namespace SpriteKind {
    export const coin = SpriteKind.create()
}
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setImage(img`
. . . . . . . . . . . . . . . . 
. . . . . f f f f f f . . . . . 
. . . . f 2 f e e e e f f . . . 
. . . f 2 2 2 f e e e e f f . . 
. . . f e e e e f f e e e f . . 
. . f e 2 2 2 2 e e f f f f . . 
. . f 2 e f f f f 2 2 2 e f . . 
. . f f f e e e f f f f f f f . 
. . f e e 4 4 f b e 4 4 e f f . 
. . . f e d d f 1 4 d 4 e e f . 
. . . . f d d d e e e e e f . . 
. . . . f e 4 e d d 4 f . . . . 
. . . . f 2 2 e d d e f . . . . 
. . . f f 5 5 f e e f f f . . . 
. . . f f f f f f f f f f . . . 
. . . . f f f . . . f f . . . . 
`)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    otherSprite.destroy()
    info.changeScoreBy(5)
    music.baDing.play()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.coin, function (sprite, otherSprite) {
    otherSprite.destroy()
    info.changeScoreBy(1)
    music.baDing.play()
})
scene.onHitTile(SpriteKind.Player, 10, function (sprite) {
    game.over(true)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.isHittingTile(CollisionDirection.Bottom)) {
        for (let index = 0; index < 35; index++) {
            mySprite.y += -1
            pause(1)
        }
    } else {
        if (mySprite.isHittingTile(CollisionDirection.Left)) {
            for (let index = 0; index < 15; index++) {
                for (let index = 0; index < 3; index++) {
                    mySprite.x += 1
                    pause(1)
                }
                for (let index = 0; index < 3; index++) {
                    mySprite.y += -1
                }
            }
        } else {
            if (mySprite.isHittingTile(CollisionDirection.Right)) {
                for (let index = 0; index < 15; index++) {
                    for (let index = 0; index < 3; index++) {
                        mySprite.x += -1
                        pause(1)
                    }
                    for (let index = 0; index < 3; index++) {
                        mySprite.y += -1
                    }
                }
            }
        }
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    if (sprite.y < otherSprite.top) {
        otherSprite.destroy(effects.fire, 100)
        music.baDing.play()
        info.changeScoreBy(1)
        for (let index = 0; index < 26; index++) {
            mySprite.y += -1
            pause(1)
        }
    } else {
        info.changeLifeBy(-1)
        music.powerDown.playUntilDone()
    }
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setImage(img`
. . . . . . . . . . . . . . . . 
. . . . . . f f f f f f . . . . 
. . . . f f e e e e f 2 f . . . 
. . . f f e e e e f 2 2 2 f . . 
. . . f e e e f f e e e e f . . 
. . . f f f f e e 2 2 2 2 e f . 
. . . f e 2 2 2 f f f f e 2 f . 
. . f f f f f f f e e e f f f . 
. . f f e 4 4 e b f 4 4 e e f . 
. . f e e 4 d 4 1 f d d e f . . 
. . . f e e e 4 d d d d f . . . 
. . . . 4 d d e 4 4 4 e f . . . 
. . . . e d d e 2 2 2 2 f . . . 
. . . . f e e f 4 4 5 5 f f . . 
. . . . f f f f f f f f f f . . 
. . . . . f f . . . f f f . . . 
`)
})
scene.onHitTile(SpriteKind.Player, 4, function (sprite) {
    game.over(false)
})
let mySprite2: Sprite = null
let mySprite: Sprite = null
let list = [img`
. . . . . . . . . . . . . . . . . . . . . . . b . . . . . . . c . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
. . . . . . . . . . . . . . . . . . . . . . . b . . . . b b b b b b b b b b b b b b b b b b b b b 
. . . . . . . . . . . . . . . . . . . . . . . b . . b . . b . . . . . . . . . . . . . . . . . . b 
. . . . . . . . . . . . . . . . . . . . . . . b . 3 . . . b . . . 3 . 5 . 3 . 5 . 5 . 5 . . . . b 
. . . . . . . . . . . . . . . . . . . . . . . b b . . . . b . . . . . . . . . . . . . . . 5 . b b 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . b . . b b b b b b b b b b b b b 5 . b b 
. . . . . . . . . . . . . . . . . . . . . . . b b b b b b b . . b . . . . . . . . . . b b 5 . b b 
. . . . . . . . . . . . . . 2 . . 2 . . b . b b b b b b b b . . b . 5 5 5 5 . . . . . b b 5 . b b 
. . . . . . . . . . . . . b b b b b b b . . . b b b b b b b . b b . . . . . . . a . . b b 5 . b b 
. . . . b . b . b . b b b . . . . . . . . . . b b b b b b b . . b . . b b b b b b b b b b 5 . b b 
. . b . . . . . . . . . . . . . . . . . . . . . b b b b b b . . b . . b . . . . . . . . . . . b b 
. . . b . . . . . . . . . . . . . . . . . . . . . . 3 3 . b . . b . . . . 5 5 5 5 5 5 5 . . . b b 
. . . . b . . . . . . . . . . . . . . . . . . . . 5 5 5 5 . . . b . . . . . . . . . . . . . . b b 
. 1 . . . b . . . . . . . . . . . . . 2 . . 2 . . . . . . . . . b b b b b b b b b b b b b b b b b 
. . . . . . . . 7 7 6 6 6 6 6 6 6 6 7 7 7 7 7 7 7 . . . . 7 7 7 b b b b b b b b b b b b b b b b b 
7 7 7 7 7 7 7 7 e e e 6 6 6 6 6 6 e e e e e e e e . . . . e e e b b b b b b b b b b b b b b b b b 
e e e e e e e e e e e e e e e e e e e e e e e e e 4 4 4 4 e e e b b b b b b b b b b b b b b b b b 
`, img`
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . 5 . . . . 
. . . . . . . . . . . 5 . . 5 . . . a . 
. . . . . . . 5 . . 5 . . . . . b b b b 
. . . 5 . . 5 . . . . . b b . . b b b b 
1 . 5 . . . . . b b . . b b . . b b b b 
. . . . 7 7 . . b b . . b b . . b b b b 
7 7 . . e e . . b b . . c c . . b b b b 
e e 4 4 e e 4 4 b b b b b b b b b b b b 
`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . 1 . 5 5 . . . . 5 . . . . . 
. . . . . . . . . . . 5 . . . . 
c 7 7 7 . . 7 7 7 . . . . . . . 
. e e e . . e e e . . . 7 7 . . 
. e e e . . e e e . . . e e . . 
4 e e e 4 4 e e e 4 4 4 e e . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . a . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. 7 7 7 . . 7 7 7 . . . 7 7 7 7 
. e e e . . e e e . . . e e e e 
4 e e e 4 4 e e e 4 4 4 e e e e 
4 e e e 4 4 e e e 4 4 4 e e e e 
`, img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . c . . . . . . . . . . . . . b b b . . . . 
. . . . . . . . . . . . . b . 5 . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . b . b . 5 . . . . 5 b . . . 3 . 3 . . . . 
. . . . . . . . . . . . . . . b . b . . b b 5 b . . . . . . . . . . 
. . . . . . b . . . . . . . . . . b . . b b 5 b . . . . . . . . . c 
. . . . . . b . d . . . . 5 5 . . . . . b b 5 b b b b b b b b b b b 
. . . . . . b . . . . . . . . . 7 7 7 7 b b 5 b b b b . . . . . . . 
. 1 . . . . . . . . . . . . 7 7 e e e e b b 5 5 5 5 5 . . . . . . . 
. . . . . . . . . . . 7 7 7 e e e e e e b b . . . . . . . 2 . 2 . a 
7 7 7 7 7 7 7 7 7 7 7 e e e e e e e e e b b b b b b b b b b b b b b 
e e e e e e e e e e e e e e e e e e e e b b b b b b b b b b b b b b 
e e e e e e e e e e e e e e e e e e e e b b b b b b b b b b b b b b 
`, img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . a . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . b b b b . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . b b e e e e b b . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . b e e b b b b e e b . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . b e b b e e e e b b e b . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . b b e b b e b b b b e b b e b . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . b 5 . . . . . d b e b e b e e e e b e b e b . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . b 5 . . . b b b b e b b e b b b b e b b e b . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . b 5 . . . . . d b b e b b e e e e b b e b b . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . b 5 . b b b b b b b b e e b b b b e e b b b . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . b 5 . . . . . . b b b b b e e e e b b b b b . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . b . . . . . . b b b b b b b b b b b b b . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . b . . . . . . . 3 . . . . . 3 . . b b . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . b . . . . . 5 5 5 5 5 5 5 5 5 . . b . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . b . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . b b b b b b b b b b b b b b . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . b b b b b b b b b b b . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 7 b b b b b b b b b b b b 7 . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 7 e e e b b 5 5 5 . . . . e e 7 . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 7 e e e e e e 5 5 5 . . . . e e e 7 . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 7 e e e e b e e 5 5 5 . d . . e e e e 7 . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . e e e e b b e e 5 5 5 3 c 3 . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . b b e e 5 5 5 . d . . . . b b b b b b b b . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . b b e b b b b b b b b b b b b b b b b . . . . . 2 . . 5 5 . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . b b b b b b b b b b b b b . . . . . b . . . . b b b . . 5 . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . b b b b b b b b b b b b b . . . . . b d . . . . . . . . . d 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . b b b b b b b b b b b b b . . . . . b . . . . . 5 5 . b b b 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . b b b b b b b b b b b b b . . . . c b . . . . . 5 . . . . 3 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . b . . . . . . . . . . . d . . . . . . . . . . . b b . . . . b b b . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . c . . . . . . . . . . . . . . . . . b . . . 5 5 . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 7 b b b b b b b b b b b b e . . . 5 b . . . 5 . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . b . . . . 7 e e e b b b b b b b b b e e 7 . . 5 b . . b b b 5 5 . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . b . . . 7 e e e e e e b b b b e e e e e e 7 . 5 b . . . . . . 5 . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . b . . 7 e e e b b e e e e e e e e e e e e e . 5 b . . . . . . . . . . . . 
b . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . b . . . e e e b b e e e b b e e e e e e e e . 5 b b b b . . b b b . . . . 
b . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . b . . . . . 5 b b e e b b b b e e b b . . b . 5 . . . . . . . . . . . . . 
b . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . b . 2 . . . . b b e b b b b b b e b b . . b . . . . . . . . . . . . . . . 
b . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . b b b b b . . b b b b b b b b b b b b . . b b b b b b b b b b b b b b b b 
b . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . b . . . . . b b b b b b b b b b b b b . . . . . . . . . . . . . . . . . . 
b . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . b . 3 . . b . b b b b b b b b b b b b . . . . . . . . . . . . . . . . . . 
b . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . b . . . . . . b b b b b b b b b b b b . . . . . . . . . . . . . . . . . . 
b . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . b . . b b b b b b b b b b b b b b b b . . . . . . . . . . . . . . . . . . 
b . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . b . . b . . . b b b b b b b b b b b b . . . . . . . . . . . . . . . . . . 
b . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . b . . . 1 . 7 b b b b b b b b b b b b 7 . . . . . . . . . . . . . . . . . 
b . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . b b b b b 7 e e e b b b b b b b b b e e 7 . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 7 7 e e e e e b b b b e e e e e e 7 . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 7 e e e b b e e e e e e e e e e e e e 6 . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . e e b b b e e e b b e e e e e e e e . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . b b e e b b b b e e b b . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . b b e b b b b b b e b b . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . b b b b b b b b b b b b . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . b b b b b b b b b b b b . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . b b b b b b b b b b b b . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . b b b b b b b b b b b b . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . b b b b b b b b b b b b . . . . . . . . . . . . . . . . . . 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 . . . . . . . . . . . . . . . . . . . . . . b b b b b b b b b b b b . . . . . . . . . . . . . . . . . . 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 b b b b b b b b b b b f 4 4 4 4 4 4 4 4 4 4 4 4 . . . . . . 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 6 4 4 6 b b b b b b b b b 6 7 6 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 6 4 4 6 6 7 b b b b b 6 7 6 6 7 7 6 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 6 4 4 6 b b 7 7 7 7 7 7 7 7 6 6 7 7 7 6 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 6 6 8 b b 7 7 b b b b 7 7 8 8 6 6 6 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 b b 7 7 b b b b b 7 b b 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 b b b b b b b b b b b b 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
`, img`
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 6 6 6 6 6 6 6 6 4 4 4 4 
4 4 4 6 9 6 6 1 6 6 6 5 6 4 4 4 
4 4 6 5 9 6 6 6 6 6 6 5 5 6 4 4 
4 6 5 5 9 9 9 6 6 6 6 5 5 9 6 d 
4 6 5 6 8 8 8 8 8 8 8 b 5 9 6 6 
4 6 6 8 b b 8 b b b 8 8 b 9 6 6 
4 6 8 b b b 8 b b b b 8 6 6 6 6 
4 8 8 6 6 6 8 6 6 6 6 6 8 6 6 6 
4 8 8 8 8 8 8 b b b b b 8 6 d d 
4 8 8 8 8 8 8 b b b b 8 8 8 6 d 
4 8 8 8 8 8 8 b b b 8 8 8 8 8 8 
4 8 b b b b 8 8 8 8 b b 8 8 8 8 
4 4 b b b b b 8 8 b b a 8 b 8 4 
4 4 4 b b b 4 4 4 4 b b b b 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
`]
scene.setTileMap(list[game.askForNumber("level", 1)])
scene.setBackgroundColor(8)
scene.setTile(1, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, false)
scene.setTile(3, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, false)
scene.setTile(5, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, false)
scene.setTile(2, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, false)
scene.setTile(12, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, false)
scene.setTile(13, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, false)
scene.setTile(10, img`
f f f f f f f f f f f f f f f f 
f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
f 5 f 5 5 5 5 5 5 5 5 5 5 f 5 f 
f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
f 5 f 5 f 5 f 5 f 5 f f 5 5 5 f 
f 5 f 5 f 5 f 5 5 5 f 5 f 5 5 f 
f 5 f 5 f 5 f 5 f 5 f 5 f 5 5 f 
f 5 f 5 f 5 f 5 f 5 f 5 f 5 5 f 
f 5 f 5 f 5 f 5 f 5 f 5 f 5 5 f 
f 5 f 5 f 5 f 5 f 5 f 5 f 5 5 f 
f 5 5 f 5 f 5 5 f 5 f 5 f 5 5 f 
f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
f 5 f 5 5 5 5 5 5 5 5 5 5 f 5 f 
f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
f f f f f f f f f f f f f f f f 
`, true)
scene.setTile(7, img`
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
e 7 7 7 e 7 7 7 e 7 7 7 e 7 7 7 
e e 7 e e e 7 e e e 7 e e e 7 e 
e e e e e e e e e e e e e e e e 
e 4 e e 4 e e e 4 e e e 4 e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e 4 e e e 
e e e 4 e e e 4 e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e 4 e e e e e 4 e e 
e e e 4 e e e e e e e e e e e e 
e e e e e e e e e e 4 e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
`, true)
scene.setTile(14, img`
e e e e e e e e e e e e e e e e 
e e e e e 4 e e e e e 4 e e e e 
e e e e e e e e e e e e e e 4 e 
e e 4 e e e e e 4 e e e e e e e 
e e e e e e e e e e e e e e e e 
e 4 e e 4 e e e 4 e e e 4 e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e 4 e e e 
e e e 4 e e e 4 e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e 4 e e e e e 4 e e 
e e e 4 e e e e e e e e e e e e 
e e e e e e e e e e 4 e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
`, true)
scene.setTile(6, img`
. 6 . 6 . 6 . 6 . 6 . 6 . 6 6 6 
6 . 6 . 6 . 6 . 6 . 6 . 6 6 6 6 
6 6 6 9 9 9 6 6 6 9 9 9 9 6 6 6 
9 9 6 6 6 9 9 9 9 9 9 6 6 6 6 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
`, false)
scene.setTile(11, img`
b d d d d d d d d d d d d d d c 
d b b b b b b b b b b b b b b c 
d b b b b b b b b b b b b b b c 
d b b b b b b b b b b b b b b c 
d b b b b b b b b b b b b b b c 
d b b b b b b b b b b b b b b c 
d b b b b b b b b b b b b b b c 
d b b b b b b b b b b b b b b c 
d b b b b b b b b b b b b b b c 
d b b b b b b b b b b b b b b c 
d b b b b b b b b b b b b b b c 
d b b b b b b b b b b b b b b c 
d b b b b b b b b b b b b b b c 
d b b b b b b b b b b b b b b c 
d b b b b b b b b b b b b b b c 
c c c c c c c c c c c c c c c a 
`, true)
scene.setTile(4, img`
5 4 4 5 5 4 4 4 4 2 2 2 4 4 4 4 
4 4 4 4 4 5 5 4 2 2 2 2 4 4 4 5 
4 2 2 2 4 4 5 4 2 2 4 4 5 5 5 5 
2 2 4 2 4 4 5 4 2 2 4 5 5 5 5 4 
2 2 2 2 4 4 5 4 2 2 4 4 5 5 4 4 
4 2 2 2 4 5 5 4 4 4 4 4 4 4 4 2 
2 2 2 4 4 5 5 5 4 4 2 2 2 2 2 2 
4 2 2 4 5 5 5 5 4 2 2 4 2 2 2 4 
5 4 4 4 4 4 4 5 5 4 2 2 2 4 4 4 
4 4 4 2 2 2 4 4 5 5 4 4 4 4 5 5 
4 2 2 2 2 2 2 2 4 5 5 5 5 5 5 5 
5 4 4 2 4 2 2 4 4 5 5 5 4 4 4 5 
5 5 4 2 2 2 4 4 4 5 5 4 2 2 2 4 
4 5 4 4 4 4 5 5 5 5 4 2 4 2 2 4 
4 5 5 5 5 5 5 4 4 4 2 4 2 4 2 4 
4 5 5 5 4 4 4 4 2 2 2 2 4 2 4 4 
`, true)
scene.setTile(6, img`
. 6 . 6 . 6 . 6 . 6 . 6 . 6 . 6 
6 . 6 . 6 . 6 . 6 . 6 . 6 . 6 . 
. 6 . 6 . 6 . 6 . 6 . 6 . 6 . 6 
6 . 6 . 6 . 6 . 6 . 6 . 6 . 6 . 
. 6 . 6 . 6 . 6 . 6 . 6 . 6 . 6 
6 . 6 . 6 . 6 . 6 . 6 . 6 . 6 . 
. 6 . 6 . 6 . 6 . 6 . 6 . 6 . 6 
6 . 6 . 6 . 6 . 6 . 6 . 6 . 6 . 
. 6 . 6 . 6 . 6 . 6 . 6 . 6 . 6 
6 . 6 . 6 . 6 . 6 . 6 . 6 . 6 . 
. 6 . 6 . 6 . 6 . 6 . 6 . 6 . 6 
6 . 6 . 6 . 6 . 6 . 6 . 6 . 6 . 
. 6 . 6 . 6 . 6 . 6 . 6 . 6 . 6 
6 . 6 . 6 . 6 . 6 . 6 . 6 . 6 . 
. 6 . 6 . 6 . 6 . 6 . 6 . 6 . 6 
6 . 6 . 6 . 6 . 6 . 6 . 6 . 6 . 
`, false)
mySprite = sprites.create(img`
. . . . . . f f f f . . . . . . 
. . . . f f f 2 2 f f f . . . . 
. . . f f f 2 2 2 2 f f f . . . 
. . f f f e e e e e e f f f . . 
. . f f e 2 2 2 2 2 2 e e f . . 
. . f e 2 f f f f f f 2 e f . . 
. . f f f f e e e e f f f f . . 
. f f e f b f 4 4 f b f e f f . 
. f e e 4 1 f d d f 1 4 e e f . 
. . f f f f d d d d d e e f . . 
. f d d d d f 4 4 4 e e f . . . 
. f b b b b f 2 2 2 2 f 4 e . . 
. f b b b b f 2 2 2 2 f d 4 . . 
. . f c c f 4 5 5 4 4 f 4 4 . . 
. . . f f f f f f f f . . . . . 
. . . . . f f . . f f . . . . . 
`, SpriteKind.Player)
info.setLife(3)
mySprite.ay = 100
scene.cameraFollowSprite(mySprite)
scene.placeOnRandomTile(mySprite, 1)
controller.moveSprite(mySprite, 100, 0)
for (let value of scene.getTilesByType(5)) {
    mySprite2 = sprites.create(img`
. . b b b b . . 
. b 5 5 5 5 b . 
b 5 d 3 3 d 5 b 
b 5 3 5 5 1 5 b 
c 5 3 5 5 1 d c 
c d d 1 1 d d c 
. f d d d d f . 
. . f f f f . . 
`, SpriteKind.coin)
    scene.place(value, mySprite2)
    animation.runImageAnimation(
    mySprite2,
    [img`
. . b b b b . . 
. b 5 5 5 5 b . 
b 5 d 3 3 d 5 b 
b 5 3 5 5 1 5 b 
c 5 3 5 5 1 d c 
c d d 1 1 d d c 
. f d d d d f . 
. . f f f f . . 
`,img`
. . b b b . . . 
. b 5 5 5 b . . 
b 5 d 3 d 5 b . 
b 5 3 5 1 5 b . 
c 5 3 5 1 d c . 
c 5 d 1 d d c . 
. f d d d f . . 
. . f f f . . . 
`,img`
. . . b b . . . 
. . b 5 5 b . . 
. b 5 d 1 5 b . 
. b 5 3 1 5 b . 
. c 5 3 1 d c . 
. c 5 1 d d c . 
. . f d d f . . 
. . . f f . . . 
`,img`
. . . b b . . . 
. . b 5 5 b . . 
. . b 1 1 b . . 
. . b 5 5 b . . 
. . b d d b . . 
. . c d d c . . 
. . c 3 3 c . . 
. . . f f . . . 
`,img`
. . . b b . . . 
. . b 5 5 b . . 
. b 5 1 d 5 b . 
. b 5 1 3 5 b . 
. c d 1 3 5 c . 
. c d d 1 5 c . 
. . f d d f . . 
. . . f f . . . 
`,img`
. . . b b b . . 
. . b 5 5 5 b . 
. b 5 d 3 d 5 b 
. b 5 1 5 3 5 b 
. c d 1 5 3 5 c 
. c d d 1 d 5 c 
. . f d d d f . 
. . . f f f . . 
`],
    100,
    true
    )
}
for (let value of scene.getTilesByType(2)) {
    mySprite2 = sprites.create(img`
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . f f f f . . . . . . . . . . 
. . . . . . . . f f 1 1 1 1 f f . . . . . . . . 
. . . . . . . f b 1 1 1 1 1 1 b f . . . . . . . 
. . . . . . . f 1 1 1 1 1 1 1 1 f . . . . . . . 
. . . . . . f d 1 1 1 1 1 1 1 1 d f . . . . . . 
. . . . . . f d 1 1 1 1 1 1 1 1 d f . . . . . . 
. . . . . . f d d d 1 1 1 1 d d d f . . . . . . 
. . . . . . f b d b f d d f b d b f . . . . . . 
. . . . . . f c d c f 1 1 f c d c f . . . . . . 
. . . . . . . f b 1 1 1 1 1 1 b f . . . . . . . 
. . . . . . f f f c d b 1 b d f f f f . . . . . 
. . . . f c 1 1 1 c b f b f c 1 1 1 c f . . . . 
. . . . f 1 b 1 b 1 f f f f 1 b 1 b 1 f . . . . 
. . . . f b f b f f f f f f b f b f b f . . . . 
. . . . . . . . . f f f f f f . . . . . . . . . 
. . . . . . . . . . . f f f . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
`, SpriteKind.Enemy)
    scene.place(value, mySprite2)
    mySprite2.ay = 100
}
for (let value of scene.getTilesByType(3)) {
    mySprite2 = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . 4 4 4 4 . . . . . . 
. . . . 4 4 4 5 5 4 4 4 . . . . 
. . . 3 3 3 3 4 4 4 4 4 4 . . . 
. . 4 3 3 3 3 2 2 2 1 1 4 4 . . 
. . 3 3 3 3 3 2 2 2 1 1 5 4 . . 
. 4 3 3 3 3 2 2 2 2 2 5 5 4 4 . 
. 4 3 3 3 2 2 2 4 4 4 4 5 4 4 . 
. 4 4 3 3 2 2 4 4 4 4 4 4 4 4 . 
. 4 2 3 3 2 2 4 4 4 4 4 4 4 4 . 
. . 4 2 3 3 2 4 4 4 4 4 2 4 . . 
. . 4 2 2 3 2 2 4 4 4 2 4 4 . . 
. . . 4 2 2 2 2 2 2 2 2 4 . . . 
. . . . 4 4 2 2 2 2 4 4 . . . . 
. . . . . . 4 4 4 4 . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Enemy)
    scene.place(value, mySprite2)
    mySprite2.vy = 50
    mySprite2.setFlag(SpriteFlag.BounceOnWall, true)
}
for (let value of scene.getTilesByType(13)) {
    mySprite2 = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . 4 4 4 4 . . . . . . 
. . . . 4 4 4 5 5 4 4 4 . . . . 
. . . 3 3 3 3 4 4 4 4 4 4 . . . 
. . 4 3 3 3 3 2 2 2 1 1 4 4 . . 
. . 3 3 3 3 3 2 2 2 1 1 5 4 . . 
. 4 3 3 3 3 2 2 2 2 2 5 5 4 4 . 
. 4 3 3 3 2 2 2 4 4 4 4 5 4 4 . 
. 4 4 3 3 2 2 4 4 4 4 4 4 4 4 . 
. 4 2 3 3 2 2 4 4 4 4 4 4 4 4 . 
. . 4 2 3 3 2 4 4 4 4 4 2 4 . . 
. . 4 2 2 3 2 2 4 4 4 2 4 4 . . 
. . . 4 2 2 2 2 2 2 2 2 4 . . . 
. . . . 4 4 2 2 2 2 4 4 . . . . 
. . . . . . 4 4 4 4 . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Enemy)
    scene.place(value, mySprite2)
    mySprite2.vx = 50
    mySprite2.setFlag(SpriteFlag.BounceOnWall, true)
}
for (let value of scene.getTilesByType(12)) {
    mySprite2 = sprites.create(img`
. . . . . . . . . . 
. . 3 3 3 3 3 3 3 . 
. 3 3 5 5 4 5 5 3 3 
. 3 5 5 4 4 4 5 5 3 
. 3 4 4 4 4 4 4 4 3 
. 3 5 4 4 4 4 4 5 3 
. 3 5 5 4 4 4 5 5 3 
. 3 5 5 4 5 4 5 5 3 
. 3 3 5 5 5 5 5 3 3 
. . 3 3 3 3 3 3 3 . 
`, SpriteKind.Food)
    scene.place(value, mySprite2)
}
forever(function () {
    if (controller.B.isPressed() && mySprite.isHittingTile(CollisionDirection.Bottom)) {
        controller.moveSprite(mySprite, 150, 0)
    } else {
        controller.moveSprite(mySprite, 100, 0)
    }
})
