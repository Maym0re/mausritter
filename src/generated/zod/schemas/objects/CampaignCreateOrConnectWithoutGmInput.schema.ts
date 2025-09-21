import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CampaignWhereUniqueInputObjectSchema } from './CampaignWhereUniqueInput.schema';
import { CampaignCreateWithoutGmInputObjectSchema } from './CampaignCreateWithoutGmInput.schema';
import { CampaignUncheckedCreateWithoutGmInputObjectSchema } from './CampaignUncheckedCreateWithoutGmInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CampaignWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => CampaignCreateWithoutGmInputObjectSchema), z.lazy(() => CampaignUncheckedCreateWithoutGmInputObjectSchema)])
}).strict();
export const CampaignCreateOrConnectWithoutGmInputObjectSchema: z.ZodType<Prisma.CampaignCreateOrConnectWithoutGmInput> = makeSchema() as unknown as z.ZodType<Prisma.CampaignCreateOrConnectWithoutGmInput>;
export const CampaignCreateOrConnectWithoutGmInputObjectZodSchema = makeSchema();
