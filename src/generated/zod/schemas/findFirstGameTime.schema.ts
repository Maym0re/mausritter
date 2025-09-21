import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { GameTimeIncludeObjectSchema } from './objects/GameTimeInclude.schema';
import { GameTimeOrderByWithRelationInputObjectSchema } from './objects/GameTimeOrderByWithRelationInput.schema';
import { GameTimeWhereInputObjectSchema } from './objects/GameTimeWhereInput.schema';
import { GameTimeWhereUniqueInputObjectSchema } from './objects/GameTimeWhereUniqueInput.schema';
import { GameTimeScalarFieldEnumSchema } from './enums/GameTimeScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const GameTimeFindFirstSelectSchema: z.ZodType<Prisma.GameTimeSelect> = z.object({
    id: z.boolean().optional(),
    campaignId: z.boolean().optional(),
    campaign: z.boolean().optional(),
    rounds: z.boolean().optional(),
    turns: z.boolean().optional(),
    watches: z.boolean().optional(),
    days: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.GameTimeSelect>;

export const GameTimeFindFirstSelectZodSchema = z.object({
    id: z.boolean().optional(),
    campaignId: z.boolean().optional(),
    campaign: z.boolean().optional(),
    rounds: z.boolean().optional(),
    turns: z.boolean().optional(),
    watches: z.boolean().optional(),
    days: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional()
  }).strict();

export const GameTimeFindFirstSchema: z.ZodType<Prisma.GameTimeFindFirstArgs> = z.object({ select: GameTimeFindFirstSelectSchema.optional(), include: z.lazy(() => GameTimeIncludeObjectSchema.optional()), orderBy: z.union([GameTimeOrderByWithRelationInputObjectSchema, GameTimeOrderByWithRelationInputObjectSchema.array()]).optional(), where: GameTimeWhereInputObjectSchema.optional(), cursor: GameTimeWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([GameTimeScalarFieldEnumSchema, GameTimeScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.GameTimeFindFirstArgs>;

export const GameTimeFindFirstZodSchema = z.object({ select: GameTimeFindFirstSelectSchema.optional(), include: z.lazy(() => GameTimeIncludeObjectSchema.optional()), orderBy: z.union([GameTimeOrderByWithRelationInputObjectSchema, GameTimeOrderByWithRelationInputObjectSchema.array()]).optional(), where: GameTimeWhereInputObjectSchema.optional(), cursor: GameTimeWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([GameTimeScalarFieldEnumSchema, GameTimeScalarFieldEnumSchema.array()]).optional() }).strict();