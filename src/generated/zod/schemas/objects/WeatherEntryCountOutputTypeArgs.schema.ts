import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { WeatherEntryCountOutputTypeSelectObjectSchema } from './WeatherEntryCountOutputTypeSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => WeatherEntryCountOutputTypeSelectObjectSchema).optional()
}).strict();
export const WeatherEntryCountOutputTypeArgsObjectSchema = makeSchema();
export const WeatherEntryCountOutputTypeArgsObjectZodSchema = makeSchema();
