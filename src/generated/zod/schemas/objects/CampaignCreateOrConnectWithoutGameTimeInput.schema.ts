import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CampaignWhereUniqueInputObjectSchema as CampaignWhereUniqueInputObjectSchema } from './CampaignWhereUniqueInput.schema';
import { CampaignCreateWithoutGameTimeInputObjectSchema as CampaignCreateWithoutGameTimeInputObjectSchema } from './CampaignCreateWithoutGameTimeInput.schema';
import { CampaignUncheckedCreateWithoutGameTimeInputObjectSchema as CampaignUncheckedCreateWithoutGameTimeInputObjectSchema } from './CampaignUncheckedCreateWithoutGameTimeInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CampaignWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => CampaignCreateWithoutGameTimeInputObjectSchema), z.lazy(() => CampaignUncheckedCreateWithoutGameTimeInputObjectSchema)])
}).strict();
export const CampaignCreateOrConnectWithoutGameTimeInputObjectSchema: z.ZodType<Prisma.CampaignCreateOrConnectWithoutGameTimeInput> = makeSchema() as unknown as z.ZodType<Prisma.CampaignCreateOrConnectWithoutGameTimeInput>;
export const CampaignCreateOrConnectWithoutGameTimeInputObjectZodSchema = makeSchema();
