import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { CampaignSelectObjectSchema as CampaignSelectObjectSchema } from './objects/CampaignSelect.schema';
import { CampaignUpdateManyMutationInputObjectSchema as CampaignUpdateManyMutationInputObjectSchema } from './objects/CampaignUpdateManyMutationInput.schema';
import { CampaignWhereInputObjectSchema as CampaignWhereInputObjectSchema } from './objects/CampaignWhereInput.schema';

export const CampaignUpdateManyAndReturnSchema: z.ZodType<Prisma.CampaignUpdateManyAndReturnArgs> = z.object({ select: CampaignSelectObjectSchema.optional(), data: CampaignUpdateManyMutationInputObjectSchema, where: CampaignWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.CampaignUpdateManyAndReturnArgs>;

export const CampaignUpdateManyAndReturnZodSchema = z.object({ select: CampaignSelectObjectSchema.optional(), data: CampaignUpdateManyMutationInputObjectSchema, where: CampaignWhereInputObjectSchema.optional() }).strict();