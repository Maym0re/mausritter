import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { SeasonalEventSelectObjectSchema as SeasonalEventSelectObjectSchema } from './objects/SeasonalEventSelect.schema';
import { SeasonalEventWhereUniqueInputObjectSchema as SeasonalEventWhereUniqueInputObjectSchema } from './objects/SeasonalEventWhereUniqueInput.schema';

export const SeasonalEventFindUniqueSchema: z.ZodType<Prisma.SeasonalEventFindUniqueArgs> = z.object({ select: SeasonalEventSelectObjectSchema.optional(),  where: SeasonalEventWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.SeasonalEventFindUniqueArgs>;

export const SeasonalEventFindUniqueZodSchema = z.object({ select: SeasonalEventSelectObjectSchema.optional(),  where: SeasonalEventWhereUniqueInputObjectSchema }).strict();