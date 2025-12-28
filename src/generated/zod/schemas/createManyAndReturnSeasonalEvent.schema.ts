import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { SeasonalEventSelectObjectSchema as SeasonalEventSelectObjectSchema } from './objects/SeasonalEventSelect.schema';
import { SeasonalEventCreateManyInputObjectSchema as SeasonalEventCreateManyInputObjectSchema } from './objects/SeasonalEventCreateManyInput.schema';

export const SeasonalEventCreateManyAndReturnSchema: z.ZodType<Prisma.SeasonalEventCreateManyAndReturnArgs> = z.object({ select: SeasonalEventSelectObjectSchema.optional(), data: z.union([ SeasonalEventCreateManyInputObjectSchema, z.array(SeasonalEventCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.SeasonalEventCreateManyAndReturnArgs>;

export const SeasonalEventCreateManyAndReturnZodSchema = z.object({ select: SeasonalEventSelectObjectSchema.optional(), data: z.union([ SeasonalEventCreateManyInputObjectSchema, z.array(SeasonalEventCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();