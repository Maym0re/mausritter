import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SeasonNameSchema } from '../enums/SeasonName.schema'

const makeSchema = () => z.object({
  season: SeasonNameSchema,
  roll: z.number().int()
}).strict();
export const WeatherEntrySeasonRollCompoundUniqueInputObjectSchema: z.ZodType<Prisma.WeatherEntrySeasonRollCompoundUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.WeatherEntrySeasonRollCompoundUniqueInput>;
export const WeatherEntrySeasonRollCompoundUniqueInputObjectZodSchema = makeSchema();
