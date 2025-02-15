StartupEvents.registry('item', event => {
  event.create('brass_precision_mechanism').displayName('§fBrass Precision Mechanism')
  event.create('koleves').food(food => {
    food
      .hunger(10)
      .saturation(6) // This value does not directly translate to saturation points gained
      // The real value can be assumed to be:
      // min(hunger * saturation * 2 + saturation, foodAmountAfterEating)
      .effect('minecraft:slowness', 600, 0, 1)
      .alwaysEdible() // Like golden apples
      .eaten(ctx => {
        // runs code upon consumption
        ctx.player.tell(Text.gold('Hmmmm.... Milyen gourmet!'))
        // If you want to modify this code then you need to restart the game.
        // However, if you make this code call a global startup function
        // and place the function *outside* of an event handler
        // then you may use the command:
        // /kubejs reload startup_scripts
        // to reload the function instantly.
        // See example below
      })

  })
  event.create('teglaleves').food(food => {
    food
      .hunger(10)
      .saturation(6) // This value does not directly translate to saturation points gained
      // The real value can be assumed to be:
      // min(hunger * saturation * 2 + saturation, foodAmountAfterEating)
      .effect('minecraft:slowness', 600, 0, 1)
      .alwaysEdible() // Like golden apples
      .eaten(ctx => {
        // runs code upon consumption
        ctx.player.tell(Text.gold('Hmmmmm.... Milyen gourmet!'))
        // If you want to modify this code then you need to restart the game.
        // However, if you make this code call a global startup function
        // and place the function *outside* of an event handler
        // then you may use the command:
        // /kubejs reload startup_scripts
        // to reload the function instantly.
        // See example below
      })

})
})
