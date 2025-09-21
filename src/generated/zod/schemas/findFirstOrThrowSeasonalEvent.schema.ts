import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SeasonalEventOrderByWithRelationInputObjectSchema } from './objects/SeasonalEventOrderByWithRelationInput.schema';
import { SeasonalEventWhereInputObjectSchema } from './objects/SeasonalEventWhereInput.schema';
import { SeasonalEventWhereUniqueInputObjectSchema } from './objects/SeasonalEventWhereUniqueInput.schema';
import { SeasonalEventScalarFieldEnumSchema } from './enums/SeasonalEventScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const SeasonalEventFindFirstOrThrowSelectSchema: z.ZodType<Prisma.SeasonalEventSelect> = z.object({
    id: z.boolean().optional(),
    season: z.boolean().optional(),
    description: z.boolean().optional(),
    effect: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.SeasonalEventSelect>;

export const SeasonalEventFindFirstOrThrowSelectZodSchema = z.object({
    id: z.boolean().optional(),
    season: z.boolean().optional(),
    description: z.boolean().optional(),
    effect: z.boolean().optional()
  }).strict();

export const SeasonalEventFindFirstOrThrowSchema: z.ZodType<Prisma.SeasonalEventFindFirstOrThrowArgs> = z.object({ select: SeasonalEventFindFirstOrThrowSelectSchema.optional(),  orderBy: z.union([SeasonalEventOrderByWithRelationInputObjectSchema, SeasonalEventOrderByWithRelationInputObjectSchema.array()]).optional(), where: SeasonalEventWhereInputObjectSchema.optional(), cursor: SeasonalEventWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([SeasonalEventScalarFieldEnumSchema, SeasonalEventScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.SeasonalEventFindFirstOrThrowArgs>;

export const SeasonalEventFindFirstOrThrowZodSchema = z.object({ select: SeasonalEventFindFirstOrThrowSelectSchema.optional(),  orderBy: z.union([SeasonalEventOrderByWithRelationInputObjectSchema, SeasonalEventOrderByWithRelationInputObjectSchema.array()]).optional(), where: SeasonalEventWhereInputObjectSchema.optional(), cursor: SeasonalEventWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([SeasonalEventScalarFieldEnumSchema, SeasonalEventScalarFieldEnumSchema.array()]).optional() }).strict();