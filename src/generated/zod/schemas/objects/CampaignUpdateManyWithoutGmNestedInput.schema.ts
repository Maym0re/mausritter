import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CampaignCreateWithoutGmInputObjectSchema as CampaignCreateWithoutGmInputObjectSchema } from './CampaignCreateWithoutGmInput.schema';
import { CampaignUncheckedCreateWithoutGmInputObjectSchema as CampaignUncheckedCreateWithoutGmInputObjectSchema } from './CampaignUncheckedCreateWithoutGmInput.schema';
import { CampaignCreateOrConnectWithoutGmInputObjectSchema as CampaignCreateOrConnectWithoutGmInputObjectSchema } from './CampaignCreateOrConnectWithoutGmInput.schema';
import { CampaignUpsertWithWhereUniqueWithoutGmInputObjectSchema as CampaignUpsertWithWhereUniqueWithoutGmInputObjectSchema } from './CampaignUpsertWithWhereUniqueWithoutGmInput.schema';
import { CampaignCreateManyGmInputEnvelopeObjectSchema as CampaignCreateManyGmInputEnvelopeObjectSchema } from './CampaignCreateManyGmInputEnvelope.schema';
import { CampaignWhereUniqueInputObjectSchema as CampaignWhereUniqueInputObjectSchema } from './CampaignWhereUniqueInput.schema';
import { CampaignUpdateWithWhereUniqueWithoutGmInputObjectSchema as CampaignUpdateWithWhereUniqueWithoutGmInputObjectSchema } from './CampaignUpdateWithWhereUniqueWithoutGmInput.schema';
import { CampaignUpdateManyWithWhereWithoutGmInputObjectSchema as CampaignUpdateManyWithWhereWithoutGmInputObjectSchema } from './CampaignUpdateManyWithWhereWithoutGmInput.schema';
import { CampaignScalarWhereInputObjectSchema as CampaignScalarWhereInputObjectSchema } from './CampaignScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => CampaignCreateWithoutGmInputObjectSchema), z.lazy(() => CampaignCreateWithoutGmInputObjectSchema).array(), z.lazy(() => CampaignUncheckedCreateWithoutGmInputObjectSchema), z.lazy(() => CampaignUncheckedCreateWithoutGmInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => CampaignCreateOrConnectWithoutGmInputObjectSchema), z.lazy(() => CampaignCreateOrConnectWithoutGmInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => CampaignUpsertWithWhereUniqueWithoutGmInputObjectSchema), z.lazy(() => CampaignUpsertWithWhereUniqueWithoutGmInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => CampaignCreateManyGmInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => CampaignWhereUniqueInputObjectSchema), z.lazy(() => CampaignWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => CampaignWhereUniqueInputObjectSchema), z.lazy(() => CampaignWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => CampaignWhereUniqueInputObjectSchema), z.lazy(() => CampaignWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => CampaignWhereUniqueInputObjectSchema), z.lazy(() => CampaignWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => CampaignUpdateWithWhereUniqueWithoutGmInputObjectSchema), z.lazy(() => CampaignUpdateWithWhereUniqueWithoutGmInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => CampaignUpdateManyWithWhereWithoutGmInputObjectSchema), z.lazy(() => CampaignUpdateManyWithWhereWithoutGmInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => CampaignScalarWhereInputObjectSchema), z.lazy(() => CampaignScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const CampaignUpdateManyWithoutGmNestedInputObjectSchema: z.ZodType<Prisma.CampaignUpdateManyWithoutGmNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.CampaignUpdateManyWithoutGmNestedInput>;
export const CampaignUpdateManyWithoutGmNestedInputObjectZodSchema = makeSchema();
