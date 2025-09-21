import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SeasonalEventSelectObjectSchema } from './objects/SeasonalEventSelect.schema';
import { SeasonalEventWhereUniqueInputObjectSchema } from './objects/SeasonalEventWhereUniqueInput.schema';

export const SeasonalEventFindUniqueSchema: z.ZodType<Prisma.SeasonalEventFindUniqueArgs> = z.object({ select: SeasonalEventSelectObjectSchema.optional(),  where: SeasonalEventWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.SeasonalEventFindUniqueArgs>;

export const SeasonalEventFindUniqueZodSchema = z.object({ select: SeasonalEventSelectObjectSchema.optional(),  where: SeasonalEventWhereUniqueInputObjectSchema }).strict();