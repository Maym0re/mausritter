import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { SeasonalEventUpdateManyMutationInputObjectSchema as SeasonalEventUpdateManyMutationInputObjectSchema } from './objects/SeasonalEventUpdateManyMutationInput.schema';
import { SeasonalEventWhereInputObjectSchema as SeasonalEventWhereInputObjectSchema } from './objects/SeasonalEventWhereInput.schema';

export const SeasonalEventUpdateManySchema: z.ZodType<Prisma.SeasonalEventUpdateManyArgs> = z.object({ data: SeasonalEventUpdateManyMutationInputObjectSchema, where: SeasonalEventWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.SeasonalEventUpdateManyArgs>;

export const SeasonalEventUpdateManyZodSchema = z.object({ data: SeasonalEventUpdateManyMutationInputObjectSchema, where: SeasonalEventWhereInputObjectSchema.optional() }).strict();