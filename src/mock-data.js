let mock = [{
    id: 1,
    name: "Venusaur",
    set: "Celebrations",
    image: 'venusaur.jpg',
    type: 'Grass',
    top: '[Grass] Type; 100HP',
    move1: 'Pokemon Power: Energy Trans - As often as you like during your turn (before your attack), you may take 1 [Grass] Energy card attached to 1 of your Pokemon and attach it to a different one. This power can\'t be used if Venusaur is Asleep, Confused, or Paralyzed.',
    move2: '[Grass] x 4; Solarbeam 60',
    bottom: 'Weakness: [Fire]; Resistance: None; Retreat Cost: 2',
    pokedex: 'This plant blooms when it is absorbing solar energy. It stays on the move to seek sunlight.'
  },
  {
    id: 2,
    name: "Charizard",
    set: "Celebrations",
    image: "charizard.jpg",
    type: 'Fire',
    top: '[Fire] Type; 120HP',
    move1: 'Pokemon Power: Energy Burn - As often as you like during your turn (before your attack), you may turn all Energy attached to Charizard into [Fire] Energy for the rest of the turn. This Power can\'t be used if Charizard is Asleep, Confused, or Paralyzed.',
    move2: '[Fire] x 4; Fire Spin 100 - Discard 2 Energy cards attached to Charizard in order to use this attack.',
    bottom: 'Weakness: [Water]; Resistance: [Fighting] -30; Retreat Cost: 3',
    pokedex: 'Spits fire that is hot enough to melt boulders. Known to unintentionally cause forest fires.'
  },
  {
    id: 3,
    name: "Blastoise",
    set: "Celebrations",
    image: 'blastoise.jpg',
    type: 'Water',
    top: '[Water] Type; 100HP',
    move1: 'Pokemon Power: Rain Dance - As often as you like during your turn (before your attack), you may attach 1 [Water] Energy card to 1 of your [Water] Pokemon. (This doesn\'t use up your 1 Energy card attachment for the turn.) This power can\'t be used if Blastois is Asleep, Confused, or Paralyzed.',
    move2: '[Water] x 3; Hydro Pump 40+ - Does 40 damage plus 10 more damage for each [Water] Energy attached to Blastoise but not used to pay for this attack\'s Energy cost. Extra [Water] Energy after the 2nd doesn\'t count.',
    bottom: 'Weakness: [Lightning]; Resistance: None; Retreat Cost: 3',
    pokedex: 'A brutal Pokemon with pressurized water jets on its shell. They are used for high-speed tackles.'
  },
  {
    id: 4,
    name: "Meganium",
    set: "Neo Genesis",
    image: 'meganium.jpg',
    type: 'Grass',
    top: '[Grass] Type; 100HP',
    move1: 'Pokemon Power: Herbal Scent - When you play Meganium from your hand, you may flip a coin. If heads, remove all damage counters from all Grass Pokémon in play.',
    move2: '[Grass] x 2, [Colorless] x 2; Body Slam 40 - Flip a coin. If heads, the Defending Pokémon is now Paralyzed.',
    bottom: 'Weakness: [Fire]; Resistance: None; Retreat Cost: 3',
    pokedex: 'Meganium\'s breath has the power to revive dead grass and plants. It can make them healthy again.'
  },
  {
    id: 5,
    name: "Typhlosion",
    set: "Neo Genesis",
    image: 'typhlosion.jpg',
    type: 'Fire',
    top: '[Fire] Type; 100HP',
    move1: 'Pokemon Power: Fire Boost - When you play Typhlosion from your hand, you may flip a coin. If heads, search your deck for up to 4 [Fire] Energy cards and attach them to Typhlosion. Shuffle your deck afterward.',
    move2: '[Fire] x 4; Flame Wheel 80 - Discard 3 Energy cards attached to Typhlosion in order to use this attack. Do 20 damage to each Benched Pokémon (yours and your opponent\'s). (Don\'t apply Weakness and Resistance for Benched Pokémon.)',
    bottom: 'Weakness: [Water]; Resistance: None; Retreat Cost: 2',
    pokedex: 'It has a secret devastating move. It rubs its blazing fur together to cause huge explosions.'
  },
  {
    id: 6,
    name: "Feraligatr",
    set: "Neo Genesis",
    image: 'feraligatr.jpg',
    type: 'Water',
    top: '[Water] Type; 100HP',
    move1: 'Pokemon Power: Berserk - When you play Feraligatr from your hand, flip a coin. If heads, discard the top 5 cards from your opponent\'s deck. If tails, discard the top 5 cards from your deck.',
    move2: '[Water] x 4; Chomp 50+ - Flip a number of coins equal to the number of damage counters on Feraligatr. This attack does 50 damage plus 10 more damage for each heads.',
    bottom: 'Weakness: [Grass]; Resistance: None; Retreat Cost: 3',
    pokedex: 'When it bites with its massive and powerful jaws, it shakes its head and savagely tears its victims up.'
  }
]

export default mock;
