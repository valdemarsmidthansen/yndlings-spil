controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Yndlings_figur.vy == 0) {
        Yndlings_figur.setVelocity(0, -200)
    }
})
let Yndlings_figur: Sprite = null
scene.setBackgroundImage(assets.image`Vinter Bagrund`)
Yndlings_figur = sprites.create(assets.image`Yndlings figur`, SpriteKind.Player)
tiles.setCurrentTilemap(tilemap`Vinter tilemap`)
controller.moveSprite(Yndlings_figur, 100, 0)
scene.cameraFollowSprite(Yndlings_figur)
Yndlings_figur.ay = 350
for (let value of tiles.getTilesByType(assets.tile`myTile0`)) {
    tiles.placeOnTile(Yndlings_figur, value)
    tiles.setTileAt(value, assets.tile`transparency16`)
}
game.onUpdate(function () {
    Yndlings_figur.setImage(assets.image`Yndlings figur`)
    if (Yndlings_figur.vy < 0) {
        Yndlings_figur.setImage(img`
            . . . . . . 9 9 9 . . . . . . . 
            . . . . . . 9 9 9 . 2 1 2 . . . 
            . . . . . . 9 9 2 2 2 2 2 . . . 
            . . . . . . 9 9 2 1 2 2 2 . . . 
            . . . . . . . . 2 2 7 7 2 . . . 
            . . . . . . . . 2 7 f f f f 6 6 
            . . . . . 5 5 f f f f f 1 f 6 6 
            . . . . . 5 5 f f f f f f f . . 
            . . . . . . . f f f f f f f . . 
            . . . . . . . f 3 f f f f f . . 
            . . . . . . . f f f f f f f . . 
            . . . . . . . f f f . . 4 4 . . 
            . . . . . . . 4 4 . . . 4 4 . . 
            . . . . . . . 4 4 . . . 4 . . . 
            . . . . . . . . 4 . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
    }
    if (Yndlings_figur.vx < 0) {
        Yndlings_figur.image.flipX()
    }
})
