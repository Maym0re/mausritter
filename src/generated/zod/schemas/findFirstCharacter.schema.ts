import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { CharacterIncludeObjectSchema as CharacterIncludeObjectSchema } from './objects/CharacterInclude.schema';
import { CharacterOrderByWithRelationInputObjectSchema as CharacterOrderByWithRelationInputObjectSchema } from './objects/CharacterOrderByWithRelationInput.schema';
import { CharacterWhereInputObjectSchema as CharacterWhereInputObjectSchema } from './objects/CharacterWhereInput.schema';
import { CharacterWhereUniqueInputObjectSchema as CharacterWhereUniqueInputObjectSchema } from './objects/CharacterWhereUniqueInput.schema';
import { CharacterScalarFieldEnumSchema } from './enums/CharacterScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const CharacterFindFirstSelectSchema: z.ZodType<Prisma.CharacterSelect> = z.object({
    id: z.boolean().optional(),
    name: z.boolean().optional(),
    notes: z.boolean().optional(),
    playerId: z.boolean().optional(),
    player: z.boolean().optional(),
    campaignId: z.boolean().optional(),
    campaign: z.boolean().optional(),
    str: z.boolean().optional(),
    dex: z.boolean().optional(),
    wil: z.boolean().optional(),
    hp: z.boolean().optional(),
    maxHp: z.boolean().optional(),
    backgroundId: z.boolean().optional(),
    birthsignId: z.boolean().optional(),
    coatId: z.boolean().optional(),
    background: z.boolean().optional(),
    birthsign: z.boolean().optional(),
    coat: z.boolean().optional(),
    physicalDetail: z.boolean().optional(),
    level: z.boolean().optional(),
    xp: z.boolean().optional(),
    grit: z.boolean().optional(),
    pips: z.boolean().optional(),
    inventory: z.boolean().optional(),
    conditions: z.boolean().optional(),
    isActive: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.CharacterSelect>;

export const CharacterFindFirstSelectZodSchema = z.object({
    id: z.boolean().optional(),
    name: z.boolean().optional(),
    notes: z.boolean().optional(),
    playerId: z.boolean().optional(),
    player: z.boolean().optional(),
    campaignId: z.boolean().optional(),
    campaign: z.boolean().optional(),
    str: z.boolean().optional(),
    dex: z.boolean().optional(),
    wil: z.boolean().optional(),
    hp: z.boolean().optional(),
    maxHp: z.boolean().optional(),
    backgroundId: z.boolean().optional(),
    birthsignId: z.boolean().optional(),
    coatId: z.boolean().optional(),
    background: z.boolean().optional(),
    birthsign: z.boolean().optional(),
    coat: z.boolean().optional(),
    physicalDetail: z.boolean().optional(),
    level: z.boolean().optional(),
    xp: z.boolean().optional(),
    grit: z.boolean().optional(),
    pips: z.boolean().optional(),
    inventory: z.boolean().optional(),
    conditions: z.boolean().optional(),
    isActive: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict();

export const CharacterFindFirstSchema: z.ZodType<Prisma.CharacterFindFirstArgs> = z.object({ select: CharacterFindFirstSelectSchema.optional(), include: z.lazy(() => CharacterIncludeObjectSchema.optional()), orderBy: z.union([CharacterOrderByWithRelationInputObjectSchema, CharacterOrderByWithRelationInputObjectSchema.array()]).optional(), where: CharacterWhereInputObjectSchema.optional(), cursor: CharacterWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([CharacterScalarFieldEnumSchema, CharacterScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.CharacterFindFirstArgs>;

export const CharacterFindFirstZodSchema = z.object({ select: CharacterFindFirstSelectSchema.optional(), include: z.lazy(() => CharacterIncludeObjectSchema.optional()), orderBy: z.union([CharacterOrderByWithRelationInputObjectSchema, CharacterOrderByWithRelationInputObjectSchema.array()]).optional(), where: CharacterWhereInputObjectSchema.optional(), cursor: CharacterWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([CharacterScalarFieldEnumSchema, CharacterScalarFieldEnumSchema.array()]).optional() }).strict();