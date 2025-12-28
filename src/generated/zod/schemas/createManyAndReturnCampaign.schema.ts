import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { CampaignSelectObjectSchema as CampaignSelectObjectSchema } from './objects/CampaignSelect.schema';
import { CampaignCreateManyInputObjectSchema as CampaignCreateManyInputObjectSchema } from './objects/CampaignCreateManyInput.schema';

export const CampaignCreateManyAndReturnSchema: z.ZodType<Prisma.CampaignCreateManyAndReturnArgs> = z.object({ select: CampaignSelectObjectSchema.optional(), data: z.union([ CampaignCreateManyInputObjectSchema, z.array(CampaignCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.CampaignCreateManyAndReturnArgs>;

export const CampaignCreateManyAndReturnZodSchema = z.object({ select: CampaignSelectObjectSchema.optional(), data: z.union([ CampaignCreateManyInputObjectSchema, z.array(CampaignCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();