import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { CampaignWhereInputObjectSchema as CampaignWhereInputObjectSchema } from './objects/CampaignWhereInput.schema';

export const CampaignDeleteManySchema: z.ZodType<Prisma.CampaignDeleteManyArgs> = z.object({ where: CampaignWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.CampaignDeleteManyArgs>;

export const CampaignDeleteManyZodSchema = z.object({ where: CampaignWhereInputObjectSchema.optional() }).strict();