ServerEvents.recipes(event => {
  event.remove({ id: 'mekanism:steel_casing' });
  event.shaped('mekanism:steel_casing', [
      'ADA', 
      'BCB', 
      'ADA'
  ], {
      A: 'createindustry:steel_ingot', 
      B: 'kubejs:brass_precision_mechanism', 
      C: 'immersiveengineering:heavy_engineering',
      D: 'immersiveengineering:light_engineering'
  });

  event.remove({ id: 'immersiveengineering:crafting/heavy_engineering' });
  event.shaped('immersiveengineering:heavy_engineering', [
      'ABC', 
      'BDB', 
      'CBA'
  ], {
      A: 'immersiveengineering:light_engineering', 
      B: 'immersiveengineering:component_steel',  
      C: 'immersiveengineering:sheetmetal_steel',
      D: 'immersiveengineering:ingot_electrum'
  });

  event.remove({ id: 'immersiveengineering:crafting/light_engineering' });
  event.shaped('immersiveengineering:light_engineering', [
      'ABC', 
      'BAB', 
      'CBA'
  ], {
      A: 'kubejs:brass_precision_mechanism', 
      B: 'immersiveengineering:component_iron',  
      C: 'immersiveengineering:sheetmetal_iron'
  });

  event.shaped('immersiveengineering:treated_wood_horizontal', [
    'AAA', 
    'ABA', 
    'AAA'
], {
    A: 'minecraft:planks', 
    B: 'forge:buckets/creosote',  
});

  event.shaped('kubejs:brass_precision_mechanism', [
      ' A ', 
      'ABA', 
      ' A '
  ], {
      A: 'create:brass_ingot', 
      B: 'create:precision_mechanism'  
  });



event.recipes.farmersdelight.cooking(
    ['minecraft:bricks', 'minecraft:carrot', 'minecraft:potato'],
    'kubejs:teglaleves', // output
    30, // exp
    10, // cookTime
    'minecraft:bowl', // container
);
event.recipes.farmersdelight.cooking(
    ['minecraft:cobblestone', 'minecraft:carrot', 'minecraft:potato'],
    'kubejs:koleves', // output
    30, // exp
    10, // cookTime
    'minecraft:bowl', // container
);
  event.recipes.createMixing('createindustry:blasting_mixture', ['minecraft:iron_ingot', 'minecraft:andesite']);



  event.remove({ id: 'constructionwand:stone_wand' });
  event.remove({ id: 'mekanismtools:osmium/armor/helmet' });
  event.remove({ id: 'mekanismtools:osmium/armor/chestpate' });
  event.remove({ id: 'mekanismtools:osmium/armor/leggings' });
  event.remove({ id: 'mekanismtools:osmium/armor/boots' });
  event.remove({ id: 'mekanism:processing/steel/enriched_iron_to_dust' });
  event.remove({ id: 'immersiveengineering:arcfurnace/steel' });


  console.log('ky$');
});
