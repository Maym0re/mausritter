import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function seedMapData() {
  console.log('Seeding map data...');

  // Создаем типы гексов
  const hexTypes = [
    {
      id: 'countryside',
      name: 'Countryside',
      color: '#90EE90',
      description: 'Open fields and farmland'
    },
    {
      id: 'forest',
      name: 'Forest',
      color: '#228B22',
      description: 'Dense woodland'
    },
    {
      id: 'river',
      name: 'River',
      color: '#4169E1',
      description: 'Flowing water'
    },
    {
      id: 'human_town',
      name: 'Human Town',
      color: '#A0A0A0',
      description: 'Human settlement'
    },
    {
      id: 'mountains',
      name: 'Mountains',
      color: '#8B7355',
      description: 'Rocky peaks and cliffs'
    },
    {
      id: 'swamp',
      name: 'Swamp',
      color: '#556B2F',
      description: 'Marshy wetlands'
    }
  ];

  for (const hexType of hexTypes) {
    await prisma.hexType.upsert({
      where: { id: hexType.id },
      update: hexType,
      create: hexType
    });
  }

  // Создаем ориентиры для countryside
  const countrysideLandmarks = [
    {
      id: 'anthill',
      name: 'Anthill',
      description: 'A large mound of earth teeming with industrious ants',
      hexTypeId: 'countryside'
    },
    {
      id: 'beech_split',
      name: 'Beech, lightning split',
      description: 'A massive beech tree split by ancient lightning',
      hexTypeId: 'countryside'
    },
    {
      id: 'bone_white_tree',
      name: 'Bone-white tree',
      description: 'An eerie pale tree that stands out against the landscape',
      hexTypeId: 'countryside'
    },
    {
      id: 'cow_skeleton',
      name: 'Cow skeleton',
      description: 'The bleached bones of a great beast',
      hexTypeId: 'countryside'
    },
    {
      id: 'field_flowers',
      name: 'Field of flowers',
      description: 'A colorful meadow buzzing with life',
      hexTypeId: 'countryside'
    },
    {
      id: 'field_wheat',
      name: 'Field of wheat',
      description: 'Golden grain swaying in the breeze',
      hexTypeId: 'countryside'
    },
    {
      id: 'hedge_row',
      name: 'Hedge row',
      description: 'A thick line of bushes dividing the land',
      hexTypeId: 'countryside'
    },
    {
      id: 'hollow_stump',
      name: 'Hollow tree stump',
      description: 'A rotted stump perfect for shelter',
      hexTypeId: 'countryside'
    },
    {
      id: 'huge_flat_rock',
      name: 'Huge flat rock',
      description: 'A massive stone like a natural table',
      hexTypeId: 'countryside'
    },
    {
      id: 'lily_pond',
      name: 'Lily-lined pond',
      description: 'A peaceful pond with floating flowers',
      hexTypeId: 'countryside'
    }
  ];

  // Создаем ориентиры для forest
  const forestLandmarks = [
    {
      id: 'abandoned_shack',
      name: 'Abandoned shack',
      description: 'A crumbling wooden structure reclaimed by nature',
      hexTypeId: 'forest'
    },
    {
      id: 'bright_clearing',
      name: 'Bright clearing',
      description: 'A sunny glade where wildflowers bloom',
      hexTypeId: 'forest'
    },
    {
      id: 'cascading_waterfalls',
      name: 'Cascading waterfalls',
      description: 'Beautiful multi-tiered waterfalls',
      hexTypeId: 'forest'
    },
    {
      id: 'cliff_face',
      name: 'Cliff face',
      description: 'A sheer wall of stone rising through the trees',
      hexTypeId: 'forest'
    },
    {
      id: 'cold_spring',
      name: 'Cold, fresh spring',
      description: 'Crystal clear water bubbling from the earth',
      hexTypeId: 'forest'
    },
    {
      id: 'dense_underbrush',
      name: 'Dense underbrush',
      description: 'Thick vegetation blocking easy passage',
      hexTypeId: 'forest'
    },
    {
      id: 'ancient_oak_face',
      name: 'Face in ancient oak',
      description: 'A tree with bark grown into a visage',
      hexTypeId: 'forest'
    },
    {
      id: 'fox_hole',
      name: 'Fox hole',
      description: 'A den belonging to a cunning predator',
      hexTypeId: 'forest'
    }
  ];

  const allLandmarks = [...countrysideLandmarks, ...forestLandmarks];

  for (const landmark of allLandmarks) {
    await prisma.landmark.upsert({
      where: { id: landmark.id },
      update: landmark,
      create: landmark
    });
  }

  // Создаем детали ориентиров
  const landmarkDetails = [
    {
      id: 'detail_treasure',
      description: 'Hidden treasure cache',
      effect: 'Roll on treasure table'
    },
    {
      id: 'detail_danger',
      description: 'Dangerous creature lair',
      effect: 'Encounter roll required'
    },
    {
      id: 'detail_shelter',
      description: 'Perfect shelter spot',
      effect: 'Safe rest location'
    },
    {
      id: 'detail_magical',
      description: 'Magical properties',
      effect: 'Strange effects manifest'
    },
    {
      id: 'detail_useful',
      description: 'Useful resources',
      effect: 'Provides crafting materials'
    }
  ];

  for (const detail of landmarkDetails) {
    await prisma.landmarkDetail.upsert({
      where: { id: detail.id },
      update: detail,
      create: detail
    });
  }

  // Создаем поселения
  const settlements = [
    {
      id: 'acorndale',
      name: 'Acorndale',
      size: 'HAMLET' as const,
      governance: 'Elder Council',
      inhabitants: 'Mice and Shrews',
      feature: 'Great Oak Market',
      industry: 'Acorn Processing',
      event: 'Harvest Festival',
      population: 150
    },
    {
      id: 'whisperbrook',
      name: 'Whisperbrook',
      size: 'VILLAGE' as const,
      governance: 'Mayor',
      inhabitants: 'River Rats',
      feature: 'Stone Bridge',
      industry: 'Fishing and Trading',
      event: 'River Regatta',
      population: 300
    },
    {
      id: 'thornwall',
      name: 'Thornwall',
      size: 'CROSSROADS' as const,
      governance: 'Merchant Guild',
      inhabitants: 'Mixed Species',
      feature: 'Defensive Walls',
      industry: 'Trade Hub',
      event: 'Market Day',
      population: 80
    }
  ];

  for (const settlement of settlements) {
    await prisma.settlement.upsert({
      where: { id: settlement.id },
      update: settlement,
      create: settlement
    });
  }

  console.log('Map data seeded successfully!');
}

async function main() {
  try {
    await seedMapData();
  } catch (error) {
    console.error('Error seeding map data:', error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}

if (require.main === module) {
  main().catch((error) => {
    console.error(error);
    process.exit(1);
  });
}
