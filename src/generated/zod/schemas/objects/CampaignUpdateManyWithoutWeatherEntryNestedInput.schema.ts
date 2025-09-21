import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CampaignCreateWithoutWeatherEntryInputObjectSchema } from './CampaignCreateWithoutWeatherEntryInput.schema';
import { CampaignUncheckedCreateWithoutWeatherEntryInputObjectSchema } from './CampaignUncheckedCreateWithoutWeatherEntryInput.schema';
import { CampaignCreateOrConnectWithoutWeatherEntryInputObjectSchema } from './CampaignCreateOrConnectWithoutWeatherEntryInput.schema';
import { CampaignUpsertWithWhereUniqueWithoutWeatherEntryInputObjectSchema } from './CampaignUpsertWithWhereUniqueWithoutWeatherEntryInput.schema';
import { CampaignCreateManyWeatherEntryInputEnvelopeObjectSchema } from './CampaignCreateManyWeatherEntryInputEnvelope.schema';
import { CampaignWhereUniqueInputObjectSchema } from './CampaignWhereUniqueInput.schema';
import { CampaignUpdateWithWhereUniqueWithoutWeatherEntryInputObjectSchema } from './CampaignUpdateWithWhereUniqueWithoutWeatherEntryInput.schema';
import { CampaignUpdateManyWithWhereWithoutWeatherEntryInputObjectSchema } from './CampaignUpdateManyWithWhereWithoutWeatherEntryInput.schema';
import { CampaignScalarWhereInputObjectSchema } from './CampaignScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => CampaignCreateWithoutWeatherEntryInputObjectSchema), z.lazy(() => CampaignCreateWithoutWeatherEntryInputObjectSchema).array(), z.lazy(() => CampaignUncheckedCreateWithoutWeatherEntryInputObjectSchema), z.lazy(() => CampaignUncheckedCreateWithoutWeatherEntryInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => CampaignCreateOrConnectWithoutWeatherEntryInputObjectSchema), z.lazy(() => CampaignCreateOrConnectWithoutWeatherEntryInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => CampaignUpsertWithWhereUniqueWithoutWeatherEntryInputObjectSchema), z.lazy(() => CampaignUpsertWithWhereUniqueWithoutWeatherEntryInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => CampaignCreateManyWeatherEntryInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => CampaignWhereUniqueInputObjectSchema), z.lazy(() => CampaignWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => CampaignWhereUniqueInputObjectSchema), z.lazy(() => CampaignWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => CampaignWhereUniqueInputObjectSchema), z.lazy(() => CampaignWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => CampaignWhereUniqueInputObjectSchema), z.lazy(() => CampaignWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => CampaignUpdateWithWhereUniqueWithoutWeatherEntryInputObjectSchema), z.lazy(() => CampaignUpdateWithWhereUniqueWithoutWeatherEntryInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => CampaignUpdateManyWithWhereWithoutWeatherEntryInputObjectSchema), z.lazy(() => CampaignUpdateManyWithWhereWithoutWeatherEntryInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => CampaignScalarWhereInputObjectSchema), z.lazy(() => CampaignScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const CampaignUpdateManyWithoutWeatherEntryNestedInputObjectSchema: z.ZodType<Prisma.CampaignUpdateManyWithoutWeatherEntryNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.CampaignUpdateManyWithoutWeatherEntryNestedInput>;
export const CampaignUpdateManyWithoutWeatherEntryNestedInputObjectZodSchema = makeSchema();
