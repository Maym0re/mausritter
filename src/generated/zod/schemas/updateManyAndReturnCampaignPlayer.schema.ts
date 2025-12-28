import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { CampaignPlayerSelectObjectSchema as CampaignPlayerSelectObjectSchema } from './objects/CampaignPlayerSelect.schema';
import { CampaignPlayerUpdateManyMutationInputObjectSchema as CampaignPlayerUpdateManyMutationInputObjectSchema } from './objects/CampaignPlayerUpdateManyMutationInput.schema';
import { CampaignPlayerWhereInputObjectSchema as CampaignPlayerWhereInputObjectSchema } from './objects/CampaignPlayerWhereInput.schema';

export const CampaignPlayerUpdateManyAndReturnSchema: z.ZodType<Prisma.CampaignPlayerUpdateManyAndReturnArgs> = z.object({ select: CampaignPlayerSelectObjectSchema.optional(), data: CampaignPlayerUpdateManyMutationInputObjectSchema, where: CampaignPlayerWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.CampaignPlayerUpdateManyAndReturnArgs>;

export const CampaignPlayerUpdateManyAndReturnZodSchema = z.object({ select: CampaignPlayerSelectObjectSchema.optional(), data: CampaignPlayerUpdateManyMutationInputObjectSchema, where: CampaignPlayerWhereInputObjectSchema.optional() }).strict();