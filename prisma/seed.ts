import { PrismaClient, SeasonName, Prisma } from '@prisma/client';
import {
	COUNTRYSIDE_LANDMARKS,
	FOREST_LANDMARKS,
	HEX_TYPES,
	HUMAN_TOWN_LANDMARKS,
	LANDMARK_DETAILS,
	RIVER_LANDMARKS
} from "@/types/map";

import { BACKGROUND_TABLE, BIRTHSIGNS, COAT_COLORS, COAT_PATTERNS, CONDITIONS } from "@/types/character";
import { WEATHER_TABLES, SEASONAL_EVENTS } from "@/types/time";


const prisma = new PrismaClient();

async function seedHexDictionaries() {
  // HexType
  await prisma.hexType.createMany({
    data: HEX_TYPES.map(h => ({
      id: h.id,
      name: h.name,
      color: h.color,
      description: h.description,
    })),
    skipDuplicates: true,
  });

  const allLandmarks = [
    ...COUNTRYSIDE_LANDMARKS,
    ...FOREST_LANDMARKS,
    ...RIVER_LANDMARKS,
    ...HUMAN_TOWN_LANDMARKS,
  ];
  await prisma.landmark.createMany({
    data: allLandmarks.map(l => ({
      id: l.id,
      name: l.name,
      description: l.description,
      hexTypeId: l.hexTypeId,
    })),
    skipDuplicates: true,
  });

  // LandmarkDetail
  await prisma.landmarkDetail.createMany({
    data: LANDMARK_DETAILS.map(d => ({
      id: d.id,
      description: d.description,
      effect: d.effect ?? null,
    })),
    skipDuplicates: true,
  });
}

async function seedCharacterDictionaries() {
  const uniqueBackgrounds = Array.from(
    new Map(
      BACKGROUND_TABLE.map(b => [b.name, { name: b.name, itemA: b.itemA, itemB: b.itemB }]),
    ).values(),
  );

  await prisma.background.createMany({
    data: uniqueBackgrounds,
    skipDuplicates: true,
  });

  // Birthsign
  await prisma.birthsign.createMany({
    data: BIRTHSIGNS.map(b => ({ sign: b.sign, disposition: b.disposition })),
    skipDuplicates: true,
  });

  const coats = COAT_COLORS.flatMap(color => COAT_PATTERNS.map(pattern => ({ color, pattern })));
  await prisma.coat.createMany({
    data: coats,
    skipDuplicates: true,
  });

  await prisma.condition.createMany({
    data: CONDITIONS.map(c => ({
      id: c.id,
      name: c.name,
      description: c.description,
      clearRequirement: c.clearRequirement ?? null,
      effects: c.effects ?? [],
    })),
    skipDuplicates: true,
  });
}

async function seedTimeDictionaries() {
  const toSeasonEnum = (s: 'spring' | 'summer' | 'autumn' | 'winter'): SeasonName => {
    switch (s) {
      case 'spring': return SeasonName.SPRING;
      case 'summer': return SeasonName.SUMMER;
      case 'autumn': return SeasonName.AUTUMN;
      case 'winter': return SeasonName.WINTER;
    }
  };

  const weatherRows: Prisma.WeatherEntryCreateManyInput[] = [];
  (Object.keys(WEATHER_TABLES) as Array<'spring'|'summer'|'autumn'|'winter'>).forEach(seasonKey => {
    const season = toSeasonEnum(seasonKey)!;
    WEATHER_TABLES[seasonKey].forEach(w => {
      weatherRows.push({ season, roll: w.roll, weather: w.weather, isPoorCondition: w.isPoorCondition });
    });
  });

  if (weatherRows.length) {
    await prisma.weatherEntry.createMany({
      data: weatherRows,
      skipDuplicates: true,
    });
  }

  const eventRows: Prisma.SeasonalEventCreateManyInput[] = [];
  (Object.keys(SEASONAL_EVENTS) as Array<'spring'|'summer'|'autumn'|'winter'>).forEach(seasonKey => {
    const season = toSeasonEnum(seasonKey)!;
    SEASONAL_EVENTS[seasonKey].forEach(e => {
      eventRows.push({ season, description: e.description, effect: e.effect ?? null });
    });
  });

  if (eventRows.length) {
    await prisma.seasonalEvent.createMany({
      data: eventRows,
      skipDuplicates: true,
    });
  }
}

async function main() {
  console.log('Starting database seeding...');

  await prisma.$transaction([
    prisma.$executeRaw`SELECT 1`
  ]);
  await seedCharacterDictionaries();

  await prisma.$transaction([
    prisma.$executeRaw`SELECT 1`,
  ]);
  await seedHexDictionaries();

  await seedTimeDictionaries();

  console.log('Database seeding completed!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
