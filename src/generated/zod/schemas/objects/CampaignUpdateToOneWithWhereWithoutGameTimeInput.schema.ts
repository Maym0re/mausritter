import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CampaignWhereInputObjectSchema as CampaignWhereInputObjectSchema } from './CampaignWhereInput.schema';
import { CampaignUpdateWithoutGameTimeInputObjectSchema as CampaignUpdateWithoutGameTimeInputObjectSchema } from './CampaignUpdateWithoutGameTimeInput.schema';
import { CampaignUncheckedUpdateWithoutGameTimeInputObjectSchema as CampaignUncheckedUpdateWithoutGameTimeInputObjectSchema } from './CampaignUncheckedUpdateWithoutGameTimeInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CampaignWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => CampaignUpdateWithoutGameTimeInputObjectSchema), z.lazy(() => CampaignUncheckedUpdateWithoutGameTimeInputObjectSchema)])
}).strict();
export const CampaignUpdateToOneWithWhereWithoutGameTimeInputObjectSchema: z.ZodType<Prisma.CampaignUpdateToOneWithWhereWithoutGameTimeInput> = makeSchema() as unknown as z.ZodType<Prisma.CampaignUpdateToOneWithWhereWithoutGameTimeInput>;
export const CampaignUpdateToOneWithWhereWithoutGameTimeInputObjectZodSchema = makeSchema();
