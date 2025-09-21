import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CampaignWhereUniqueInputObjectSchema } from './CampaignWhereUniqueInput.schema';
import { CampaignCreateWithoutGameTimeInputObjectSchema } from './CampaignCreateWithoutGameTimeInput.schema';
import { CampaignUncheckedCreateWithoutGameTimeInputObjectSchema } from './CampaignUncheckedCreateWithoutGameTimeInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CampaignWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => CampaignCreateWithoutGameTimeInputObjectSchema), z.lazy(() => CampaignUncheckedCreateWithoutGameTimeInputObjectSchema)])
}).strict();
export const CampaignCreateOrConnectWithoutGameTimeInputObjectSchema: z.ZodType<Prisma.CampaignCreateOrConnectWithoutGameTimeInput> = makeSchema() as unknown as z.ZodType<Prisma.CampaignCreateOrConnectWithoutGameTimeInput>;
export const CampaignCreateOrConnectWithoutGameTimeInputObjectZodSchema = makeSchema();
