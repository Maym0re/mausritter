import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { SeasonalEventSelectObjectSchema as SeasonalEventSelectObjectSchema } from './objects/SeasonalEventSelect.schema';
import { SeasonalEventWhereUniqueInputObjectSchema as SeasonalEventWhereUniqueInputObjectSchema } from './objects/SeasonalEventWhereUniqueInput.schema';
import { SeasonalEventCreateInputObjectSchema as SeasonalEventCreateInputObjectSchema } from './objects/SeasonalEventCreateInput.schema';
import { SeasonalEventUncheckedCreateInputObjectSchema as SeasonalEventUncheckedCreateInputObjectSchema } from './objects/SeasonalEventUncheckedCreateInput.schema';
import { SeasonalEventUpdateInputObjectSchema as SeasonalEventUpdateInputObjectSchema } from './objects/SeasonalEventUpdateInput.schema';
import { SeasonalEventUncheckedUpdateInputObjectSchema as SeasonalEventUncheckedUpdateInputObjectSchema } from './objects/SeasonalEventUncheckedUpdateInput.schema';

export const SeasonalEventUpsertOneSchema: z.ZodType<Prisma.SeasonalEventUpsertArgs> = z.object({ select: SeasonalEventSelectObjectSchema.optional(),  where: SeasonalEventWhereUniqueInputObjectSchema, create: z.union([ SeasonalEventCreateInputObjectSchema, SeasonalEventUncheckedCreateInputObjectSchema ]), update: z.union([ SeasonalEventUpdateInputObjectSchema, SeasonalEventUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.SeasonalEventUpsertArgs>;

export const SeasonalEventUpsertOneZodSchema = z.object({ select: SeasonalEventSelectObjectSchema.optional(),  where: SeasonalEventWhereUniqueInputObjectSchema, create: z.union([ SeasonalEventCreateInputObjectSchema, SeasonalEventUncheckedCreateInputObjectSchema ]), update: z.union([ SeasonalEventUpdateInputObjectSchema, SeasonalEventUncheckedUpdateInputObjectSchema ]) }).strict();