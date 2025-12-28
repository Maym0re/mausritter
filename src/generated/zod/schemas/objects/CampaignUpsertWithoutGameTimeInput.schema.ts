import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CampaignUpdateWithoutGameTimeInputObjectSchema as CampaignUpdateWithoutGameTimeInputObjectSchema } from './CampaignUpdateWithoutGameTimeInput.schema';
import { CampaignUncheckedUpdateWithoutGameTimeInputObjectSchema as CampaignUncheckedUpdateWithoutGameTimeInputObjectSchema } from './CampaignUncheckedUpdateWithoutGameTimeInput.schema';
import { CampaignCreateWithoutGameTimeInputObjectSchema as CampaignCreateWithoutGameTimeInputObjectSchema } from './CampaignCreateWithoutGameTimeInput.schema';
import { CampaignUncheckedCreateWithoutGameTimeInputObjectSchema as CampaignUncheckedCreateWithoutGameTimeInputObjectSchema } from './CampaignUncheckedCreateWithoutGameTimeInput.schema';
import { CampaignWhereInputObjectSchema as CampaignWhereInputObjectSchema } from './CampaignWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => CampaignUpdateWithoutGameTimeInputObjectSchema), z.lazy(() => CampaignUncheckedUpdateWithoutGameTimeInputObjectSchema)]),
  create: z.union([z.lazy(() => CampaignCreateWithoutGameTimeInputObjectSchema), z.lazy(() => CampaignUncheckedCreateWithoutGameTimeInputObjectSchema)]),
  where: z.lazy(() => CampaignWhereInputObjectSchema).optional()
}).strict();
export const CampaignUpsertWithoutGameTimeInputObjectSchema: z.ZodType<Prisma.CampaignUpsertWithoutGameTimeInput> = makeSchema() as unknown as z.ZodType<Prisma.CampaignUpsertWithoutGameTimeInput>;
export const CampaignUpsertWithoutGameTimeInputObjectZodSchema = makeSchema();
