import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SeasonalEventSelectObjectSchema } from './objects/SeasonalEventSelect.schema';
import { SeasonalEventWhereUniqueInputObjectSchema } from './objects/SeasonalEventWhereUniqueInput.schema';

export const SeasonalEventFindUniqueOrThrowSchema: z.ZodType<Prisma.SeasonalEventFindUniqueOrThrowArgs> = z.object({ select: SeasonalEventSelectObjectSchema.optional(),  where: SeasonalEventWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.SeasonalEventFindUniqueOrThrowArgs>;

export const SeasonalEventFindUniqueOrThrowZodSchema = z.object({ select: SeasonalEventSelectObjectSchema.optional(),  where: SeasonalEventWhereUniqueInputObjectSchema }).strict();