import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CampaignWhereInputObjectSchema } from './CampaignWhereInput.schema';
import { CampaignUpdateWithoutHexMapInputObjectSchema } from './CampaignUpdateWithoutHexMapInput.schema';
import { CampaignUncheckedUpdateWithoutHexMapInputObjectSchema } from './CampaignUncheckedUpdateWithoutHexMapInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CampaignWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => CampaignUpdateWithoutHexMapInputObjectSchema), z.lazy(() => CampaignUncheckedUpdateWithoutHexMapInputObjectSchema)])
}).strict();
export const CampaignUpdateToOneWithWhereWithoutHexMapInputObjectSchema: z.ZodType<Prisma.CampaignUpdateToOneWithWhereWithoutHexMapInput> = makeSchema() as unknown as z.ZodType<Prisma.CampaignUpdateToOneWithWhereWithoutHexMapInput>;
export const CampaignUpdateToOneWithWhereWithoutHexMapInputObjectZodSchema = makeSchema();
