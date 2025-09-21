import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CampaignWhereUniqueInputObjectSchema } from './CampaignWhereUniqueInput.schema';
import { CampaignCreateWithoutWeatherEntryInputObjectSchema } from './CampaignCreateWithoutWeatherEntryInput.schema';
import { CampaignUncheckedCreateWithoutWeatherEntryInputObjectSchema } from './CampaignUncheckedCreateWithoutWeatherEntryInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CampaignWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => CampaignCreateWithoutWeatherEntryInputObjectSchema), z.lazy(() => CampaignUncheckedCreateWithoutWeatherEntryInputObjectSchema)])
}).strict();
export const CampaignCreateOrConnectWithoutWeatherEntryInputObjectSchema: z.ZodType<Prisma.CampaignCreateOrConnectWithoutWeatherEntryInput> = makeSchema() as unknown as z.ZodType<Prisma.CampaignCreateOrConnectWithoutWeatherEntryInput>;
export const CampaignCreateOrConnectWithoutWeatherEntryInputObjectZodSchema = makeSchema();
