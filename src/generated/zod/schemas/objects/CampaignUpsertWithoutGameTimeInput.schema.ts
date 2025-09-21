import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CampaignUpdateWithoutGameTimeInputObjectSchema } from './CampaignUpdateWithoutGameTimeInput.schema';
import { CampaignUncheckedUpdateWithoutGameTimeInputObjectSchema } from './CampaignUncheckedUpdateWithoutGameTimeInput.schema';
import { CampaignCreateWithoutGameTimeInputObjectSchema } from './CampaignCreateWithoutGameTimeInput.schema';
import { CampaignUncheckedCreateWithoutGameTimeInputObjectSchema } from './CampaignUncheckedCreateWithoutGameTimeInput.schema';
import { CampaignWhereInputObjectSchema } from './CampaignWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => CampaignUpdateWithoutGameTimeInputObjectSchema), z.lazy(() => CampaignUncheckedUpdateWithoutGameTimeInputObjectSchema)]),
  create: z.union([z.lazy(() => CampaignCreateWithoutGameTimeInputObjectSchema), z.lazy(() => CampaignUncheckedCreateWithoutGameTimeInputObjectSchema)]),
  where: z.lazy(() => CampaignWhereInputObjectSchema).optional()
}).strict();
export const CampaignUpsertWithoutGameTimeInputObjectSchema: z.ZodType<Prisma.CampaignUpsertWithoutGameTimeInput> = makeSchema() as unknown as z.ZodType<Prisma.CampaignUpsertWithoutGameTimeInput>;
export const CampaignUpsertWithoutGameTimeInputObjectZodSchema = makeSchema();
