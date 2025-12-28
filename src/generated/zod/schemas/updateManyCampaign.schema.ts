import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { CampaignUpdateManyMutationInputObjectSchema as CampaignUpdateManyMutationInputObjectSchema } from './objects/CampaignUpdateManyMutationInput.schema';
import { CampaignWhereInputObjectSchema as CampaignWhereInputObjectSchema } from './objects/CampaignWhereInput.schema';

export const CampaignUpdateManySchema: z.ZodType<Prisma.CampaignUpdateManyArgs> = z.object({ data: CampaignUpdateManyMutationInputObjectSchema, where: CampaignWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.CampaignUpdateManyArgs>;

export const CampaignUpdateManyZodSchema = z.object({ data: CampaignUpdateManyMutationInputObjectSchema, where: CampaignWhereInputObjectSchema.optional() }).strict();