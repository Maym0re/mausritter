import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { CampaignCreateManyInputObjectSchema as CampaignCreateManyInputObjectSchema } from './objects/CampaignCreateManyInput.schema';

export const CampaignCreateManySchema: z.ZodType<Prisma.CampaignCreateManyArgs> = z.object({ data: z.union([ CampaignCreateManyInputObjectSchema, z.array(CampaignCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.CampaignCreateManyArgs>;

export const CampaignCreateManyZodSchema = z.object({ data: z.union([ CampaignCreateManyInputObjectSchema, z.array(CampaignCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();