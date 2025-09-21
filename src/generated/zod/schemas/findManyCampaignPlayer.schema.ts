import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { CampaignPlayerIncludeObjectSchema } from './objects/CampaignPlayerInclude.schema';
import { CampaignPlayerOrderByWithRelationInputObjectSchema } from './objects/CampaignPlayerOrderByWithRelationInput.schema';
import { CampaignPlayerWhereInputObjectSchema } from './objects/CampaignPlayerWhereInput.schema';
import { CampaignPlayerWhereUniqueInputObjectSchema } from './objects/CampaignPlayerWhereUniqueInput.schema';
import { CampaignPlayerScalarFieldEnumSchema } from './enums/CampaignPlayerScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const CampaignPlayerFindManySelectSchema: z.ZodType<Prisma.CampaignPlayerSelect> = z.object({
    id: z.boolean().optional(),
    campaignId: z.boolean().optional(),
    userId: z.boolean().optional(),
    campaign: z.boolean().optional(),
    user: z.boolean().optional(),
    joinedAt: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.CampaignPlayerSelect>;

export const CampaignPlayerFindManySelectZodSchema = z.object({
    id: z.boolean().optional(),
    campaignId: z.boolean().optional(),
    userId: z.boolean().optional(),
    campaign: z.boolean().optional(),
    user: z.boolean().optional(),
    joinedAt: z.boolean().optional()
  }).strict();

export const CampaignPlayerFindManySchema: z.ZodType<Prisma.CampaignPlayerFindManyArgs> = z.object({ select: CampaignPlayerFindManySelectSchema.optional(), include: z.lazy(() => CampaignPlayerIncludeObjectSchema.optional()), orderBy: z.union([CampaignPlayerOrderByWithRelationInputObjectSchema, CampaignPlayerOrderByWithRelationInputObjectSchema.array()]).optional(), where: CampaignPlayerWhereInputObjectSchema.optional(), cursor: CampaignPlayerWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([CampaignPlayerScalarFieldEnumSchema, CampaignPlayerScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.CampaignPlayerFindManyArgs>;

export const CampaignPlayerFindManyZodSchema = z.object({ select: CampaignPlayerFindManySelectSchema.optional(), include: z.lazy(() => CampaignPlayerIncludeObjectSchema.optional()), orderBy: z.union([CampaignPlayerOrderByWithRelationInputObjectSchema, CampaignPlayerOrderByWithRelationInputObjectSchema.array()]).optional(), where: CampaignPlayerWhereInputObjectSchema.optional(), cursor: CampaignPlayerWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([CampaignPlayerScalarFieldEnumSchema, CampaignPlayerScalarFieldEnumSchema.array()]).optional() }).strict();