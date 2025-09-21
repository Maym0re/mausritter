import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { CampaignIncludeObjectSchema } from './objects/CampaignInclude.schema';
import { CampaignOrderByWithRelationInputObjectSchema } from './objects/CampaignOrderByWithRelationInput.schema';
import { CampaignWhereInputObjectSchema } from './objects/CampaignWhereInput.schema';
import { CampaignWhereUniqueInputObjectSchema } from './objects/CampaignWhereUniqueInput.schema';
import { CampaignScalarFieldEnumSchema } from './enums/CampaignScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const CampaignFindFirstSelectSchema: z.ZodType<Prisma.CampaignSelect> = z.object({
    id: z.boolean().optional(),
    name: z.boolean().optional(),
    description: z.boolean().optional(),
    isActive: z.boolean().optional(),
    gmId: z.boolean().optional(),
    gm: z.boolean().optional(),
    players: z.boolean().optional(),
    characters: z.boolean().optional(),
    gameTime: z.boolean().optional(),
    season: z.boolean().optional(),
    weatherEntryId: z.boolean().optional(),
    weatherEntry: z.boolean().optional(),
    hexMap: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    todaysEvent: z.boolean().optional(),
    diceRolls: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.CampaignSelect>;

export const CampaignFindFirstSelectZodSchema = z.object({
    id: z.boolean().optional(),
    name: z.boolean().optional(),
    description: z.boolean().optional(),
    isActive: z.boolean().optional(),
    gmId: z.boolean().optional(),
    gm: z.boolean().optional(),
    players: z.boolean().optional(),
    characters: z.boolean().optional(),
    gameTime: z.boolean().optional(),
    season: z.boolean().optional(),
    weatherEntryId: z.boolean().optional(),
    weatherEntry: z.boolean().optional(),
    hexMap: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    todaysEvent: z.boolean().optional(),
    diceRolls: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict();

export const CampaignFindFirstSchema: z.ZodType<Prisma.CampaignFindFirstArgs> = z.object({ select: CampaignFindFirstSelectSchema.optional(), include: z.lazy(() => CampaignIncludeObjectSchema.optional()), orderBy: z.union([CampaignOrderByWithRelationInputObjectSchema, CampaignOrderByWithRelationInputObjectSchema.array()]).optional(), where: CampaignWhereInputObjectSchema.optional(), cursor: CampaignWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([CampaignScalarFieldEnumSchema, CampaignScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.CampaignFindFirstArgs>;

export const CampaignFindFirstZodSchema = z.object({ select: CampaignFindFirstSelectSchema.optional(), include: z.lazy(() => CampaignIncludeObjectSchema.optional()), orderBy: z.union([CampaignOrderByWithRelationInputObjectSchema, CampaignOrderByWithRelationInputObjectSchema.array()]).optional(), where: CampaignWhereInputObjectSchema.optional(), cursor: CampaignWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([CampaignScalarFieldEnumSchema, CampaignScalarFieldEnumSchema.array()]).optional() }).strict();