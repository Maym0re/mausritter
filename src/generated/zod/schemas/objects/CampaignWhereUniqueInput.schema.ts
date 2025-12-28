import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional()
}).strict();
export const CampaignWhereUniqueInputObjectSchema: z.ZodType<Prisma.CampaignWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.CampaignWhereUniqueInput>;
export const CampaignWhereUniqueInputObjectZodSchema = makeSchema();
