import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { WeatherEntrySelectObjectSchema as WeatherEntrySelectObjectSchema } from './WeatherEntrySelect.schema';
import { WeatherEntryIncludeObjectSchema as WeatherEntryIncludeObjectSchema } from './WeatherEntryInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => WeatherEntrySelectObjectSchema).optional(),
  include: z.lazy(() => WeatherEntryIncludeObjectSchema).optional()
}).strict();
export const WeatherEntryArgsObjectSchema = makeSchema();
export const WeatherEntryArgsObjectZodSchema = makeSchema();
