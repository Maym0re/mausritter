import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { GameTimeIncludeObjectSchema as GameTimeIncludeObjectSchema } from './objects/GameTimeInclude.schema';
import { GameTimeOrderByWithRelationInputObjectSchema as GameTimeOrderByWithRelationInputObjectSchema } from './objects/GameTimeOrderByWithRelationInput.schema';
import { GameTimeWhereInputObjectSchema as GameTimeWhereInputObjectSchema } from './objects/GameTimeWhereInput.schema';
import { GameTimeWhereUniqueInputObjectSchema as GameTimeWhereUniqueInputObjectSchema } from './objects/GameTimeWhereUniqueInput.schema';
import { GameTimeScalarFieldEnumSchema } from './enums/GameTimeScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const GameTimeFindFirstOrThrowSelectSchema: z.ZodType<Prisma.GameTimeSelect> = z.object({
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

export const GameTimeFindFirstOrThrowSelectZodSchema = z.object({
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

export const GameTimeFindFirstOrThrowSchema: z.ZodType<Prisma.GameTimeFindFirstOrThrowArgs> = z.object({ select: GameTimeFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => GameTimeIncludeObjectSchema.optional()), orderBy: z.union([GameTimeOrderByWithRelationInputObjectSchema, GameTimeOrderByWithRelationInputObjectSchema.array()]).optional(), where: GameTimeWhereInputObjectSchema.optional(), cursor: GameTimeWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([GameTimeScalarFieldEnumSchema, GameTimeScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.GameTimeFindFirstOrThrowArgs>;

export const GameTimeFindFirstOrThrowZodSchema = z.object({ select: GameTimeFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => GameTimeIncludeObjectSchema.optional()), orderBy: z.union([GameTimeOrderByWithRelationInputObjectSchema, GameTimeOrderByWithRelationInputObjectSchema.array()]).optional(), where: GameTimeWhereInputObjectSchema.optional(), cursor: GameTimeWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([GameTimeScalarFieldEnumSchema, GameTimeScalarFieldEnumSchema.array()]).optional() }).strict();