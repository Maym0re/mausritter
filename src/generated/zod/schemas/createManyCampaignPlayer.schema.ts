import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { CampaignPlayerCreateManyInputObjectSchema as CampaignPlayerCreateManyInputObjectSchema } from './objects/CampaignPlayerCreateManyInput.schema';

export const CampaignPlayerCreateManySchema: z.ZodType<Prisma.CampaignPlayerCreateManyArgs> = z.object({ data: z.union([ CampaignPlayerCreateManyInputObjectSchema, z.array(CampaignPlayerCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.CampaignPlayerCreateManyArgs>;

export const CampaignPlayerCreateManyZodSchema = z.object({ data: z.union([ CampaignPlayerCreateManyInputObjectSchema, z.array(CampaignPlayerCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();