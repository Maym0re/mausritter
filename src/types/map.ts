export interface HexType {
  id: string;
  name: string;
  color: string;
  description: string;
}

export interface Landmark {
  id: string;
  name: string;
  description: string;
  hexTypeId: string;
}

export interface LandmarkDetail {
  id: string;
  description: string;
  effect?: string;
}

export interface Settlement {
  id: string;
  name: string;
  size: 'farm' | 'crossroads' | 'hamlet' | 'village' | 'town' | 'city';
  governance: string;
  inhabitants: string;
  feature: string;
  industry: string;
  event: string;
  population: number;
}

export interface HexData {
  q: number; // honeycomb grid coordinate
  r: number; // honeycomb grid coordinate
  s: number; // honeycomb grid coordinate
  hexType: HexType;
  landmark?: Landmark;
  landmarkDetail?: LandmarkDetail;
  settlement?: Settlement;
  isRevealed: boolean;
  notes: string;
  customName?: string;
}

export interface MapState {
  hexes: Map<string, HexData>;
  selectedHex: string | null;
  mode: 'master' | 'player';
  isEditMode: boolean;
}

// Предопределенные типы из SRD
export const HEX_TYPES: HexType[] = [
  { id: 'countryside', name: 'Countryside', color: '#90EE90', description: 'Open fields and farmland' },
  { id: 'forest', name: 'Forest', color: '#228B22', description: 'Dense woodland' },
  { id: 'river', name: 'River', color: '#4169E1', description: 'Flowing water' },
  { id: 'human_town', name: 'Human Town', color: '#A0A0A0', description: 'Human settlement' },
];

// Полный список ориентиров из SRD
export const COUNTRYSIDE_LANDMARKS: Landmark[] = [
  { id: 'anthill', name: 'Anthill', description: 'A large mound of earth teeming with industrious ants', hexTypeId: 'countryside' },
  { id: 'beech_split', name: 'Beech, lightning split', description: 'A massive beech tree split by ancient lightning', hexTypeId: 'countryside' },
  { id: 'bone_white_tree', name: 'Bone-white tree', description: 'An eerie pale tree that stands out against the landscape', hexTypeId: 'countryside' },
  { id: 'cow_skeleton', name: 'Cow skeleton', description: 'The bleached bones of a great beast', hexTypeId: 'countryside' },
  { id: 'field_flowers', name: 'Field of flowers', description: 'A colorful meadow buzzing with life', hexTypeId: 'countryside' },
  { id: 'field_wheat', name: 'Field of wheat', description: 'Golden grain swaying in the breeze', hexTypeId: 'countryside' },
  { id: 'hedge_row', name: 'Hedge row', description: 'A thick line of bushes dividing the land', hexTypeId: 'countryside' },
  { id: 'hollow_stump', name: 'Hollow tree stump', description: 'A rotted stump perfect for shelter', hexTypeId: 'countryside' },
  { id: 'huge_flat_rock', name: 'Huge flat rock', description: 'A massive stone like a natural table', hexTypeId: 'countryside' },
  { id: 'lily_pond', name: 'Lily-lined pond', description: 'A peaceful pond with floating flowers', hexTypeId: 'countryside' },
  { id: 'fallen_tree', name: 'Massive fallen tree', description: 'An ancient giant brought low', hexTypeId: 'countryside' },
  { id: 'craggy_oak', name: 'Old craggy oak', description: 'A gnarled tree twisted by age', hexTypeId: 'countryside' },
  { id: 'old_farmhouse', name: 'Old farmhouse', description: 'A crumbling human dwelling', hexTypeId: 'countryside' },
  { id: 'dirt_road', name: 'Quiet dirt road', description: 'A well-worn path through the land', hexTypeId: 'countryside' },
  { id: 'rabbit_warren', name: 'Rabbit warren', description: 'A network of tunnels and burrows', hexTypeId: 'countryside' },
  { id: 'sparrow_nest', name: 'Sparrow nest', description: 'A large nest in the branches above', hexTypeId: 'countryside' },
  { id: 'pine_stand', name: 'Stand of pine trees', description: 'Tall evergreens reaching skyward', hexTypeId: 'countryside' },
  { id: 'steep_hill', name: 'Steep hill', description: 'A challenging climb with great views', hexTypeId: 'countryside' },
  { id: 'stone_wall', name: 'Stone wall', description: 'An old boundary marker', hexTypeId: 'countryside' },
  { id: 'fig_roots', name: 'Tangle of fig roots', description: 'Twisted roots creating natural tunnels', hexTypeId: 'countryside' },
];

export const FOREST_LANDMARKS: Landmark[] = [
  { id: 'abandoned_shack', name: 'Abandoned shack', description: 'A crumbling wooden structure reclaimed by nature', hexTypeId: 'forest' },
  { id: 'bright_clearing', name: 'Bright clearing', description: 'A sunny glade where wildflowers bloom', hexTypeId: 'forest' },
  { id: 'cascading_waterfalls', name: 'Cascading waterfalls', description: 'Beautiful multi-tiered waterfalls', hexTypeId: 'forest' },
  { id: 'cliff_face', name: 'Cliff face', description: 'A sheer wall of stone rising through the trees', hexTypeId: 'forest' },
  { id: 'cold_spring', name: 'Cold, fresh spring', description: 'Crystal clear water bubbling from the earth', hexTypeId: 'forest' },
  { id: 'dense_underbrush', name: 'Dense underbrush', description: 'Thick vegetation blocking easy passage', hexTypeId: 'forest' },
  { id: 'ancient_oak_face', name: 'Face in ancient oak', description: 'A tree with bark grown into a visage', hexTypeId: 'forest' },
  { id: 'fox_hole', name: 'Fox hole', description: 'A den belonging to a cunning predator', hexTypeId: 'forest' },
  { id: 'fern_grove', name: 'Grove of ferns', description: 'Prehistoric plants creating a green cathedral', hexTypeId: 'forest' },
  { id: 'forest_stump', name: 'Hollow tree stump', description: 'A massive rotted trunk', hexTypeId: 'forest' },
  { id: 'huge_pine', name: 'Huge pine tree', description: 'An ancient evergreen towering above all', hexTypeId: 'forest' },
  { id: 'walking_track', name: 'Human walking track', description: 'A path worn by giant footsteps', hexTypeId: 'forest' },
  { id: 'human_clearing', name: 'Human-made clearing', description: 'Trees cut down for unknown purposes', hexTypeId: 'forest' },
  { id: 'meandering_brook', name: 'Meandering brook', description: 'A gentle stream winding through trees', hexTypeId: 'forest' },
  { id: 'overgrown_ruins', name: 'Overgrown ruins', description: 'Ancient stonework claimed by vegetation', hexTypeId: 'forest' },
  { id: 'stone_ring', name: 'Ring of stones', description: 'A mysterious circle of standing stones', hexTypeId: 'forest' },
  { id: 'rocky_outcropping', name: 'Rocky outcropping', description: 'Stone jutting up through the forest floor', hexTypeId: 'forest' },
  { id: 'sunken_hollow', name: 'Sunken hollow', description: 'A depression in the earth filled with shadows', hexTypeId: 'forest' },
  { id: 'root_tangle', name: 'Tangle of roots', description: 'A maze of intertwined tree roots', hexTypeId: 'forest' },
  { id: 'termite_tree', name: 'Termite-riddled tree', description: 'A tree hollowed out by insects', hexTypeId: 'forest' },
];

export const RIVER_LANDMARKS: Landmark[] = [
  { id: 'canal_lock', name: 'Canal lock', description: 'Human-made water control system', hexTypeId: 'river' },
  { id: 'converging_tributaries', name: 'Converging tributaries', description: 'Multiple streams joining together', hexTypeId: 'river' },
  { id: 'draping_willow', name: 'Draping willow', description: 'A graceful tree hanging over the water', hexTypeId: 'river' },
  { id: 'eroded_riverbank', name: 'Eroded riverbank', description: 'Bank worn away by flowing water', hexTypeId: 'river' },
  { id: 'fallen_tree_crossing', name: 'Fallen tree crossing', description: 'A natural bridge across the water', hexTypeId: 'river' },
  { id: 'high_waterfall', name: 'High waterfall', description: 'Water plunging from great height', hexTypeId: 'river' },
  { id: 'huge_boulder', name: 'Huge boulder in river', description: 'A massive stone splitting the current', hexTypeId: 'river' },
  { id: 'concrete_dam', name: 'Huge concrete dam', description: 'A towering human construction', hexTypeId: 'river' },
  { id: 'isolated_island', name: 'Isolated island', description: 'A small piece of land surrounded by water', hexTypeId: 'river' },
  { id: 'muddy_flats', name: 'Muddy flats', description: 'Wet earth exposed when water is low', hexTypeId: 'river' },
  { id: 'rocky_rapids', name: 'Rocky rapids', description: 'Fast-flowing water over stones', hexTypeId: 'river' },
  { id: 'dead_trees', name: 'Row of dead trees', description: 'Skeletal remains along the waterline', hexTypeId: 'river' },
  { id: 'silty_dam', name: 'Silty dam', description: 'A barrier of mud and debris', hexTypeId: 'river' },
  { id: 'stepping_stones', name: 'Stepping-stones', description: 'Rocks placed for easy crossing', hexTypeId: 'river' },
  { id: 'stone_bridge', name: 'Stone bridge', description: 'An ancient crossing of worked stone', hexTypeId: 'river' },
  { id: 'stony_shallows', name: 'Stony shallows', description: 'Rocky area where water runs clear and shallow', hexTypeId: 'river' },
  { id: 'submerged_trash', name: 'Submerged trash', description: 'Human refuse beneath the surface', hexTypeId: 'river' },
  { id: 'sunken_barge', name: 'Sunken barge', description: 'A wrecked human vessel', hexTypeId: 'river' },
  { id: 'twisted_roots', name: 'Twisted roots', description: 'Gnarled tree roots dipping into water', hexTypeId: 'river' },
  { id: 'wooden_bridge', name: 'Wooden bridge', description: 'A simple crossing of timber', hexTypeId: 'river' },
];

export const HUMAN_TOWN_LANDMARKS: Landmark[] = [
  { id: 'abandoned_car', name: 'Abandoned car', description: 'A rusted metal beast', hexTypeId: 'human_town' },
  { id: 'apartment_balcony', name: 'Apartment balcony', description: 'A platform high above the street', hexTypeId: 'human_town' },
  { id: 'blackberry_hedge', name: 'Blackberry hedge', description: 'Thorny bushes heavy with fruit', hexTypeId: 'human_town' },
  { id: 'busy_road', name: 'Busy road', description: 'A dangerous river of moving vehicles', hexTypeId: 'human_town' },
  { id: 'drainpipe_outlet', name: 'Drainpipe outlet', description: 'Where the building waters flow', hexTypeId: 'human_town' },
  { id: 'dumped_furniture', name: 'Dumped furniture', description: 'Discarded human belongings', hexTypeId: 'human_town' },
  { id: 'greenhouse', name: 'Greenhouse', description: 'A glass house full of growing plants', hexTypeId: 'human_town' },
  { id: 'mouse_ruins', name: 'Mouse ruins', description: 'Ancient mouse constructions', hexTypeId: 'human_town' },
  { id: 'new_house', name: 'Newly built house', description: 'Fresh construction with clean lines', hexTypeId: 'human_town' },
  { id: 'garden_bed', name: 'Overgrown garden bed', description: 'Plants growing wild and free', hexTypeId: 'human_town' },
  { id: 'pigeon_nest', name: 'Pigeon nest', description: 'A messy bird dwelling on a ledge', hexTypeId: 'human_town' },
  { id: 'trash_pile', name: 'Pile of trash', description: 'A mountain of human refuse', hexTypeId: 'human_town' },
  { id: 'rocky_riverbed', name: 'Rocky riverbed', description: 'Stones where water once flowed', hexTypeId: 'human_town' },
  { id: 'shopping_trolley', name: 'Shopping trolley', description: 'A wheeled metal cage', hexTypeId: 'human_town' },
  { id: 'stagnant_pond', name: 'Stagnant pond', description: 'Still water that smells of decay', hexTypeId: 'human_town' },
  { id: 'steel_bridge', name: 'Steel bridge', description: 'A metal span crossing above', hexTypeId: 'human_town' },
  { id: 'trash_skip', name: 'Trash-filled skip', description: 'A large container of refuse', hexTypeId: 'human_town' },
  { id: 'tree_footpath', name: 'Tree-lined footpath', description: 'A walking route shaded by branches', hexTypeId: 'human_town' },
  { id: 'car_park', name: 'Underground car park', description: 'A subterranean vehicle cavern', hexTypeId: 'human_town' },
  { id: 'woodshed', name: 'Woodshed', description: 'A small building storing timber', hexTypeId: 'human_town' },
];

// Детали ориентиров по категориям из SRD
export const LANDMARK_DETAILS: LandmarkDetail[] = [
  // Mouse settlements
  { id: 'mouse_settlement', description: 'Mouse settlement...' },
  { id: 'small_farm', description: 'Small mouse farm (What threatens their crops?)' },
  { id: 'noble_castle', description: 'Noblemouse\'s castle (What does it defend against?)' },
  { id: 'friendly_roadhouse', description: 'Friendly mouse roadhouse (What is in the basement?)' },
  { id: 'hunting_lodge', description: 'Mouse hunting lodge (What is their quarry?)' },
  { id: 'mining_outpost', description: 'Mining outpost (What have they uncovered?)' },
  { id: 'hermit_hut', description: 'Mouse hermit\'s hut (Why do they shun society?)' },
  { id: 'natural_caves', description: 'Natural caves (What is living here?)' },
  { id: 'hedge_knight_tower', description: 'Hedge-knight\'s tower (What is their quest?)' },

  // Inhabited places
  { id: 'songbird_nest', description: 'Songbird\'s nest (What sad tales do they sing of?)' },
  { id: 'peaceful_beasts', description: 'Tribe of huge, peaceful beasts (What do they fear?)' },
  { id: 'rat_hideout', description: 'Rat bandit hideout (Who do they prey on?)' },
  { id: 'crow_spire', description: 'Crow coven\'s spire (What spells do they caw?)' },
  { id: 'insect_hive', description: 'Hive of insects (What do they hunger for?)' },
  { id: 'predator_den', description: 'Den of a great predator (What treasure do they guard?)' },
  { id: 'frog_fortress', description: 'Frog fortress (What lies hidden in the dungeon?)' },
  { id: 'wizard_tower', description: 'Mouse wizard\'s tower (What spell is almost finished?)' },

  // Natural features
  { id: 'dangerous_feature', description: 'Dangerous natural feature (How can it be avoided?)' },
  { id: 'lonely_shrine', description: 'Lonely shrine (Who maintains it? What do they worship?)' },
  { id: 'abandoned_manor', description: 'Noblemouse\'s manor (Why was it abandoned?)' },
  { id: 'abandoned_settlement', description: 'Abandoned settlement (What clues did they leave?)' },
  { id: 'ruined_watchtower', description: 'Ruined watchtower (What did it guard from?)' },
  { id: 'peaceful_feature', description: 'Natural feature, peaceful and safe (Who gathers here?)' },
  { id: 'strange_feature', description: 'Natural feature, out of place (How did it form?)' },
  { id: 'rickety_bridge', description: 'Rickety bridge (What does it cross over?)' },

  // Magical/strange places
  { id: 'bat_temple', description: 'Ancient bat cult temple (What was summoned?)' },
  { id: 'faerie_ring', description: 'Faerie ring (What business do the faeries have here?)' },
  { id: 'beetle_graveyard', description: 'Beetle graveyard (What do the ghosts want?)' },
  { id: 'witch_hut', description: 'Mouse witch\'s hut (What does she brew?)' },
  { id: 'deep_pond', description: 'Small, deep pond (What is at the bottom?)' },
  { id: 'strange_plants', description: 'Out-of-season plantlife (Why are they growing here?)' },
  { id: 'owl_nest', description: 'Owl sorcerer\'s nest (What are they searching for?)' },
  { id: 'magical_anomaly', description: 'Strange magical anomaly (Why is it spreading?)' },

  // Unusual/mysterious
  { id: 'crashed_airship', description: 'Crashed Lilliputian airship (How can it be repaired?)' },
  { id: 'humming_stone', description: 'Humming stone (What happens when touched?)' },
  { id: 'lifeless_area', description: 'Completely lifeless (What disaster has occurred?)' },
  { id: 'human_activity', description: 'Regularly used by humans (What do they do here?)' },
  { id: 'human_damage', description: 'Damaged by humans (What have they done?)' },
  { id: 'ancient_ruins', description: 'Ancient ruins of a past civilisation (Who built this?)' },
  { id: 'cat_hunting_ground', description: 'Cat lord\'s hunting ground (What trophies remain?)' },
  { id: 'repurposed_construction', description: 'Repurposed human construction (How is it used?)' },
];
