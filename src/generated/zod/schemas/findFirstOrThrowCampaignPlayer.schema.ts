import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { CampaignPlayerIncludeObjectSchema as CampaignPlayerIncludeObjectSchema } from './objects/CampaignPlayerInclude.schema';
import { CampaignPlayerOrderByWithRelationInputObjectSchema as CampaignPlayerOrderByWithRelationInputObjectSchema } from './objects/CampaignPlayerOrderByWithRelationInput.schema';
import { CampaignPlayerWhereInputObjectSchema as CampaignPlayerWhereInputObjectSchema } from './objects/CampaignPlayerWhereInput.schema';
import { CampaignPlayerWhereUniqueInputObjectSchema as CampaignPlayerWhereUniqueInputObjectSchema } from './objects/CampaignPlayerWhereUniqueInput.schema';
import { CampaignPlayerScalarFieldEnumSchema } from './enums/CampaignPlayerScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const CampaignPlayerFindFirstOrThrowSelectSchema: z.ZodType<Prisma.CampaignPlayerSelect> = z.object({
    id: z.boolean().optional(),
    campaignId: z.boolean().optional(),
    userId: z.boolean().optional(),
    campaign: z.boolean().optional(),
    user: z.boolean().optional(),
    joinedAt: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.CampaignPlayerSelect>;

export const CampaignPlayerFindFirstOrThrowSelectZodSchema = z.object({
    id: z.boolean().optional(),
    campaignId: z.boolean().optional(),
    userId: z.boolean().optional(),
    campaign: z.boolean().optional(),
    user: z.boolean().optional(),
    joinedAt: z.boolean().optional()
  }).strict();

export const CampaignPlayerFindFirstOrThrowSchema: z.ZodType<Prisma.CampaignPlayerFindFirstOrThrowArgs> = z.object({ select: CampaignPlayerFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => CampaignPlayerIncludeObjectSchema.optional()), orderBy: z.union([CampaignPlayerOrderByWithRelationInputObjectSchema, CampaignPlayerOrderByWithRelationInputObjectSchema.array()]).optional(), where: CampaignPlayerWhereInputObjectSchema.optional(), cursor: CampaignPlayerWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([CampaignPlayerScalarFieldEnumSchema, CampaignPlayerScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.CampaignPlayerFindFirstOrThrowArgs>;

export const CampaignPlayerFindFirstOrThrowZodSchema = z.object({ select: CampaignPlayerFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => CampaignPlayerIncludeObjectSchema.optional()), orderBy: z.union([CampaignPlayerOrderByWithRelationInputObjectSchema, CampaignPlayerOrderByWithRelationInputObjectSchema.array()]).optional(), where: CampaignPlayerWhereInputObjectSchema.optional(), cursor: CampaignPlayerWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([CampaignPlayerScalarFieldEnumSchema, CampaignPlayerScalarFieldEnumSchema.array()]).optional() }).strict();