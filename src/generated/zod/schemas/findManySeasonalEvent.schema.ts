import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { SeasonalEventOrderByWithRelationInputObjectSchema as SeasonalEventOrderByWithRelationInputObjectSchema } from './objects/SeasonalEventOrderByWithRelationInput.schema';
import { SeasonalEventWhereInputObjectSchema as SeasonalEventWhereInputObjectSchema } from './objects/SeasonalEventWhereInput.schema';
import { SeasonalEventWhereUniqueInputObjectSchema as SeasonalEventWhereUniqueInputObjectSchema } from './objects/SeasonalEventWhereUniqueInput.schema';
import { SeasonalEventScalarFieldEnumSchema } from './enums/SeasonalEventScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const SeasonalEventFindManySelectSchema: z.ZodType<Prisma.SeasonalEventSelect> = z.object({
    id: z.boolean().optional(),
    season: z.boolean().optional(),
    description: z.boolean().optional(),
    effect: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.SeasonalEventSelect>;

export const SeasonalEventFindManySelectZodSchema = z.object({
    id: z.boolean().optional(),
    season: z.boolean().optional(),
    description: z.boolean().optional(),
    effect: z.boolean().optional()
  }).strict();

export const SeasonalEventFindManySchema: z.ZodType<Prisma.SeasonalEventFindManyArgs> = z.object({ select: SeasonalEventFindManySelectSchema.optional(),  orderBy: z.union([SeasonalEventOrderByWithRelationInputObjectSchema, SeasonalEventOrderByWithRelationInputObjectSchema.array()]).optional(), where: SeasonalEventWhereInputObjectSchema.optional(), cursor: SeasonalEventWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([SeasonalEventScalarFieldEnumSchema, SeasonalEventScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.SeasonalEventFindManyArgs>;

export const SeasonalEventFindManyZodSchema = z.object({ select: SeasonalEventFindManySelectSchema.optional(),  orderBy: z.union([SeasonalEventOrderByWithRelationInputObjectSchema, SeasonalEventOrderByWithRelationInputObjectSchema.array()]).optional(), where: SeasonalEventWhereInputObjectSchema.optional(), cursor: SeasonalEventWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([SeasonalEventScalarFieldEnumSchema, SeasonalEventScalarFieldEnumSchema.array()]).optional() }).strict();