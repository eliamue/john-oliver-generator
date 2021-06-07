const phrase = document.querySelector('.phrase');

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

export function generateDeclaration() {
    const verb = ['Step on', 'Spit in', 'Eviscerate', 'Feverishly devour', 'Impregnate', 'Humiliate', 'Desecrate', 'Scold', 'Rudely insult', 'Snap off', 'Disembowel', 'Munge', 'Brutally attack', 'Cremate', 'Jazzercise', 'Yeet yourself into', 'Plow your fists through', 'Drive your 2006 Toyota Camry over', 'Make swiss cheese out of', 'Verbally assault', 'Play tetherball with', 'Jam sweets into', 'Liberally flagellate', 'Religiously flog', 'Bleach', 'Shame my grandmother with', 'Set aflame', 'Cram your fingers inside'];
    const bodyPart = ['crotch', 'farts', 'toes', 'belly-button', 'large intestines', 'thigh gap', 'nostrils', 'heart', 'pinkies', 'kneecaps', 'butthole', 'v-line', 'hip socket', 'eye socket', 'eardrum', 'cervix', 'teeth', 'crack', "Adam's apple", 'chin', 'treasure trail', 'tummy rolls', 'knuckles', 'armpit', 'ankles', 'underboob sweat', 'thunder thighs', 'pelvis', 'snaggletooth', 'colon', 'kidneys', 'fingernails', 'double chin', 'knuckle hair', 'sense of self', 'peace of mind', 'family history', 'medical history', 'crippling anxiety', 'zest for life'];
    const adjective = ['abominable', 'glittering heap of a', 'glorious, glistening', 'sticky', 'horrendous', 'confoundingly large', 'destructive', 'sensual', 'internationally-revered', 'powerhouse of a', 'sternly-worded', 'blashpemous', 'glorious husk of a', 'redwood of a', 'bone-shattering', 'panty-stealing', 'shamelessly handsome', 'overpowered', 'absolute beast of a', 'filthy tractor of a', 'immortal', 'illegally enhanced', 'rudely large', 'obnoxiously-muscled', 'rippling', 'gyrating', 'bidet-crushing', 'curvaceous', 'bootylicious', 'colon-destroying', 'uncomfortably tall', 'absolute unit of a', 'tank of a', 'pelvis-crushing', 'saintly', 'blasphemous', 'ungodly', 'shining Adonis of a', 'panty-thieving', 'zesty', 'immovable'];
    const noun = ['Redwood', 'monument', 'structure', 'cabin in the woods', 'sculpture', 'farmhouse', 'island nation ', 'peninsula', 'mountain', 'object', 'cicada', 'station wagon', 'state capitol', 'refrigerator', 'shack', 'highway overpass', 'mountain troll', 'giant', 'bank vault', 'palace', 'rock pile', 'plateau', 'canyon', 'riverbed', 'tsunami', 'castle', 'plank', 'tree trunk', 'bison', 'mountain goat', 'lumberjack', 'coal miner', 'choking hazard', 'county fair', 'flagpole', 'cabbage farm', 'smokestack', 'sheep dog', 'pelican', 'bee colony', 'flight risk', 'treehouse'];

    const declaration = verb[getRandomInt(0, verb.length - 1)] + '  my ' + (bodyPart[getRandomInt(0, bodyPart.length - 1)]) + ', you ' + (adjective[getRandomInt(0, adjective.length - 1)]) + ' ' + (noun[getRandomInt(0, noun.length - 1)]) + '.';
    
    return declaration;
}

phrase.textContent = generateDeclaration();