import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { CampaignPlayerWhereInputObjectSchema as CampaignPlayerWhereInputObjectSchema } from './objects/CampaignPlayerWhereInput.schema';

export const CampaignPlayerDeleteManySchema: z.ZodType<Prisma.CampaignPlayerDeleteManyArgs> = z.object({ where: CampaignPlayerWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.CampaignPlayerDeleteManyArgs>;

export const CampaignPlayerDeleteManyZodSchema = z.object({ where: CampaignPlayerWhereInputObjectSchema.optional() }).strict();