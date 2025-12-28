import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CampaignCreateWithoutGameTimeInputObjectSchema as CampaignCreateWithoutGameTimeInputObjectSchema } from './CampaignCreateWithoutGameTimeInput.schema';
import { CampaignUncheckedCreateWithoutGameTimeInputObjectSchema as CampaignUncheckedCreateWithoutGameTimeInputObjectSchema } from './CampaignUncheckedCreateWithoutGameTimeInput.schema';
import { CampaignCreateOrConnectWithoutGameTimeInputObjectSchema as CampaignCreateOrConnectWithoutGameTimeInputObjectSchema } from './CampaignCreateOrConnectWithoutGameTimeInput.schema';
import { CampaignUpsertWithoutGameTimeInputObjectSchema as CampaignUpsertWithoutGameTimeInputObjectSchema } from './CampaignUpsertWithoutGameTimeInput.schema';
import { CampaignWhereUniqueInputObjectSchema as CampaignWhereUniqueInputObjectSchema } from './CampaignWhereUniqueInput.schema';
import { CampaignUpdateToOneWithWhereWithoutGameTimeInputObjectSchema as CampaignUpdateToOneWithWhereWithoutGameTimeInputObjectSchema } from './CampaignUpdateToOneWithWhereWithoutGameTimeInput.schema';
import { CampaignUpdateWithoutGameTimeInputObjectSchema as CampaignUpdateWithoutGameTimeInputObjectSchema } from './CampaignUpdateWithoutGameTimeInput.schema';
import { CampaignUncheckedUpdateWithoutGameTimeInputObjectSchema as CampaignUncheckedUpdateWithoutGameTimeInputObjectSchema } from './CampaignUncheckedUpdateWithoutGameTimeInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => CampaignCreateWithoutGameTimeInputObjectSchema), z.lazy(() => CampaignUncheckedCreateWithoutGameTimeInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => CampaignCreateOrConnectWithoutGameTimeInputObjectSchema).optional(),
  upsert: z.lazy(() => CampaignUpsertWithoutGameTimeInputObjectSchema).optional(),
  connect: z.lazy(() => CampaignWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => CampaignUpdateToOneWithWhereWithoutGameTimeInputObjectSchema), z.lazy(() => CampaignUpdateWithoutGameTimeInputObjectSchema), z.lazy(() => CampaignUncheckedUpdateWithoutGameTimeInputObjectSchema)]).optional()
}).strict();
export const CampaignUpdateOneRequiredWithoutGameTimeNestedInputObjectSchema: z.ZodType<Prisma.CampaignUpdateOneRequiredWithoutGameTimeNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.CampaignUpdateOneRequiredWithoutGameTimeNestedInput>;
export const CampaignUpdateOneRequiredWithoutGameTimeNestedInputObjectZodSchema = makeSchema();
