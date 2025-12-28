import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { WeatherEntrySeasonRollCompoundUniqueInputObjectSchema as WeatherEntrySeasonRollCompoundUniqueInputObjectSchema } from './WeatherEntrySeasonRollCompoundUniqueInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  season_roll: z.lazy(() => WeatherEntrySeasonRollCompoundUniqueInputObjectSchema).optional()
}).strict();
export const WeatherEntryWhereUniqueInputObjectSchema: z.ZodType<Prisma.WeatherEntryWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.WeatherEntryWhereUniqueInput>;
export const WeatherEntryWhereUniqueInputObjectZodSchema = makeSchema();
