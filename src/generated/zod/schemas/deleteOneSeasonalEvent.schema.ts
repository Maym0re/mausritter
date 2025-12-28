import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { SeasonalEventSelectObjectSchema as SeasonalEventSelectObjectSchema } from './objects/SeasonalEventSelect.schema';
import { SeasonalEventWhereUniqueInputObjectSchema as SeasonalEventWhereUniqueInputObjectSchema } from './objects/SeasonalEventWhereUniqueInput.schema';

export const SeasonalEventDeleteOneSchema: z.ZodType<Prisma.SeasonalEventDeleteArgs> = z.object({ select: SeasonalEventSelectObjectSchema.optional(),  where: SeasonalEventWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.SeasonalEventDeleteArgs>;

export const SeasonalEventDeleteOneZodSchema = z.object({ select: SeasonalEventSelectObjectSchema.optional(),  where: SeasonalEventWhereUniqueInputObjectSchema }).strict();