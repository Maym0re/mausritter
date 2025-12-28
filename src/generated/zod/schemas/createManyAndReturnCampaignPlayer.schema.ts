import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { CampaignPlayerSelectObjectSchema as CampaignPlayerSelectObjectSchema } from './objects/CampaignPlayerSelect.schema';
import { CampaignPlayerCreateManyInputObjectSchema as CampaignPlayerCreateManyInputObjectSchema } from './objects/CampaignPlayerCreateManyInput.schema';

export const CampaignPlayerCreateManyAndReturnSchema: z.ZodType<Prisma.CampaignPlayerCreateManyAndReturnArgs> = z.object({ select: CampaignPlayerSelectObjectSchema.optional(), data: z.union([ CampaignPlayerCreateManyInputObjectSchema, z.array(CampaignPlayerCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.CampaignPlayerCreateManyAndReturnArgs>;

export const CampaignPlayerCreateManyAndReturnZodSchema = z.object({ select: CampaignPlayerSelectObjectSchema.optional(), data: z.union([ CampaignPlayerCreateManyInputObjectSchema, z.array(CampaignPlayerCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();