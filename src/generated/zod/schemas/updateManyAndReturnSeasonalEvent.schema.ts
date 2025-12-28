import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { SeasonalEventSelectObjectSchema as SeasonalEventSelectObjectSchema } from './objects/SeasonalEventSelect.schema';
import { SeasonalEventUpdateManyMutationInputObjectSchema as SeasonalEventUpdateManyMutationInputObjectSchema } from './objects/SeasonalEventUpdateManyMutationInput.schema';
import { SeasonalEventWhereInputObjectSchema as SeasonalEventWhereInputObjectSchema } from './objects/SeasonalEventWhereInput.schema';

export const SeasonalEventUpdateManyAndReturnSchema: z.ZodType<Prisma.SeasonalEventUpdateManyAndReturnArgs> = z.object({ select: SeasonalEventSelectObjectSchema.optional(), data: SeasonalEventUpdateManyMutationInputObjectSchema, where: SeasonalEventWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.SeasonalEventUpdateManyAndReturnArgs>;

export const SeasonalEventUpdateManyAndReturnZodSchema = z.object({ select: SeasonalEventSelectObjectSchema.optional(), data: SeasonalEventUpdateManyMutationInputObjectSchema, where: SeasonalEventWhereInputObjectSchema.optional() }).strict();