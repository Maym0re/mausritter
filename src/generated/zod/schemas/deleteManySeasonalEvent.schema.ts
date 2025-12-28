import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { SeasonalEventWhereInputObjectSchema as SeasonalEventWhereInputObjectSchema } from './objects/SeasonalEventWhereInput.schema';

export const SeasonalEventDeleteManySchema: z.ZodType<Prisma.SeasonalEventDeleteManyArgs> = z.object({ where: SeasonalEventWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.SeasonalEventDeleteManyArgs>;

export const SeasonalEventDeleteManyZodSchema = z.object({ where: SeasonalEventWhereInputObjectSchema.optional() }).strict();