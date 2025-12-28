import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { SeasonalEventCreateManyInputObjectSchema as SeasonalEventCreateManyInputObjectSchema } from './objects/SeasonalEventCreateManyInput.schema';

export const SeasonalEventCreateManySchema: z.ZodType<Prisma.SeasonalEventCreateManyArgs> = z.object({ data: z.union([ SeasonalEventCreateManyInputObjectSchema, z.array(SeasonalEventCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.SeasonalEventCreateManyArgs>;

export const SeasonalEventCreateManyZodSchema = z.object({ data: z.union([ SeasonalEventCreateManyInputObjectSchema, z.array(SeasonalEventCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();