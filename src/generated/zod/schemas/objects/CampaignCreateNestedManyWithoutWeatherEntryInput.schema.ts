import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CampaignCreateWithoutWeatherEntryInputObjectSchema as CampaignCreateWithoutWeatherEntryInputObjectSchema } from './CampaignCreateWithoutWeatherEntryInput.schema';
import { CampaignUncheckedCreateWithoutWeatherEntryInputObjectSchema as CampaignUncheckedCreateWithoutWeatherEntryInputObjectSchema } from './CampaignUncheckedCreateWithoutWeatherEntryInput.schema';
import { CampaignCreateOrConnectWithoutWeatherEntryInputObjectSchema as CampaignCreateOrConnectWithoutWeatherEntryInputObjectSchema } from './CampaignCreateOrConnectWithoutWeatherEntryInput.schema';
import { CampaignCreateManyWeatherEntryInputEnvelopeObjectSchema as CampaignCreateManyWeatherEntryInputEnvelopeObjectSchema } from './CampaignCreateManyWeatherEntryInputEnvelope.schema';
import { CampaignWhereUniqueInputObjectSchema as CampaignWhereUniqueInputObjectSchema } from './CampaignWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => CampaignCreateWithoutWeatherEntryInputObjectSchema), z.lazy(() => CampaignCreateWithoutWeatherEntryInputObjectSchema).array(), z.lazy(() => CampaignUncheckedCreateWithoutWeatherEntryInputObjectSchema), z.lazy(() => CampaignUncheckedCreateWithoutWeatherEntryInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => CampaignCreateOrConnectWithoutWeatherEntryInputObjectSchema), z.lazy(() => CampaignCreateOrConnectWithoutWeatherEntryInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => CampaignCreateManyWeatherEntryInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => CampaignWhereUniqueInputObjectSchema), z.lazy(() => CampaignWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const CampaignCreateNestedManyWithoutWeatherEntryInputObjectSchema: z.ZodType<Prisma.CampaignCreateNestedManyWithoutWeatherEntryInput> = makeSchema() as unknown as z.ZodType<Prisma.CampaignCreateNestedManyWithoutWeatherEntryInput>;
export const CampaignCreateNestedManyWithoutWeatherEntryInputObjectZodSchema = makeSchema();
