import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  Campaign: z.boolean().optional()
}).strict();
export const WeatherEntryCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.WeatherEntryCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.WeatherEntryCountOutputTypeSelect>;
export const WeatherEntryCountOutputTypeSelectObjectZodSchema = makeSchema();
