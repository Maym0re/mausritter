import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SeasonalEventOrderByWithRelationInputObjectSchema } from './objects/SeasonalEventOrderByWithRelationInput.schema';
import { SeasonalEventWhereInputObjectSchema } from './objects/SeasonalEventWhereInput.schema';
import { SeasonalEventWhereUniqueInputObjectSchema } from './objects/SeasonalEventWhereUniqueInput.schema';
import { SeasonalEventScalarFieldEnumSchema } from './enums/SeasonalEventScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const SeasonalEventFindFirstSelectSchema: z.ZodType<Prisma.SeasonalEventSelect> = z.object({
    id: z.boolean().optional(),
    season: z.boolean().optional(),
    description: z.boolean().optional(),
    effect: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.SeasonalEventSelect>;

export const SeasonalEventFindFirstSelectZodSchema = z.object({
    id: z.boolean().optional(),
    season: z.boolean().optional(),
    description: z.boolean().optional(),
    effect: z.boolean().optional()
  }).strict();

export const SeasonalEventFindFirstSchema: z.ZodType<Prisma.SeasonalEventFindFirstArgs> = z.object({ select: SeasonalEventFindFirstSelectSchema.optional(),  orderBy: z.union([SeasonalEventOrderByWithRelationInputObjectSchema, SeasonalEventOrderByWithRelationInputObjectSchema.array()]).optional(), where: SeasonalEventWhereInputObjectSchema.optional(), cursor: SeasonalEventWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([SeasonalEventScalarFieldEnumSchema, SeasonalEventScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.SeasonalEventFindFirstArgs>;

export const SeasonalEventFindFirstZodSchema = z.object({ select: SeasonalEventFindFirstSelectSchema.optional(),  orderBy: z.union([SeasonalEventOrderByWithRelationInputObjectSchema, SeasonalEventOrderByWithRelationInputObjectSchema.array()]).optional(), where: SeasonalEventWhereInputObjectSchema.optional(), cursor: SeasonalEventWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([SeasonalEventScalarFieldEnumSchema, SeasonalEventScalarFieldEnumSchema.array()]).optional() }).strict();