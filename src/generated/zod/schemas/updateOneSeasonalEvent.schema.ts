import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { SeasonalEventSelectObjectSchema as SeasonalEventSelectObjectSchema } from './objects/SeasonalEventSelect.schema';
import { SeasonalEventUpdateInputObjectSchema as SeasonalEventUpdateInputObjectSchema } from './objects/SeasonalEventUpdateInput.schema';
import { SeasonalEventUncheckedUpdateInputObjectSchema as SeasonalEventUncheckedUpdateInputObjectSchema } from './objects/SeasonalEventUncheckedUpdateInput.schema';
import { SeasonalEventWhereUniqueInputObjectSchema as SeasonalEventWhereUniqueInputObjectSchema } from './objects/SeasonalEventWhereUniqueInput.schema';

export const SeasonalEventUpdateOneSchema: z.ZodType<Prisma.SeasonalEventUpdateArgs> = z.object({ select: SeasonalEventSelectObjectSchema.optional(),  data: z.union([SeasonalEventUpdateInputObjectSchema, SeasonalEventUncheckedUpdateInputObjectSchema]), where: SeasonalEventWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.SeasonalEventUpdateArgs>;

export const SeasonalEventUpdateOneZodSchema = z.object({ select: SeasonalEventSelectObjectSchema.optional(),  data: z.union([SeasonalEventUpdateInputObjectSchema, SeasonalEventUncheckedUpdateInputObjectSchema]), where: SeasonalEventWhereUniqueInputObjectSchema }).strict();