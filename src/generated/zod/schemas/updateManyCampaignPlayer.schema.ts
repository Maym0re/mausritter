import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { CampaignPlayerUpdateManyMutationInputObjectSchema as CampaignPlayerUpdateManyMutationInputObjectSchema } from './objects/CampaignPlayerUpdateManyMutationInput.schema';
import { CampaignPlayerWhereInputObjectSchema as CampaignPlayerWhereInputObjectSchema } from './objects/CampaignPlayerWhereInput.schema';

export const CampaignPlayerUpdateManySchema: z.ZodType<Prisma.CampaignPlayerUpdateManyArgs> = z.object({ data: CampaignPlayerUpdateManyMutationInputObjectSchema, where: CampaignPlayerWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.CampaignPlayerUpdateManyArgs>;

export const CampaignPlayerUpdateManyZodSchema = z.object({ data: CampaignPlayerUpdateManyMutationInputObjectSchema, where: CampaignPlayerWhereInputObjectSchema.optional() }).strict();