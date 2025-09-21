import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CampaignPlayerCreateWithoutUserInputObjectSchema } from './CampaignPlayerCreateWithoutUserInput.schema';
import { CampaignPlayerUncheckedCreateWithoutUserInputObjectSchema } from './CampaignPlayerUncheckedCreateWithoutUserInput.schema';
import { CampaignPlayerCreateOrConnectWithoutUserInputObjectSchema } from './CampaignPlayerCreateOrConnectWithoutUserInput.schema';
import { CampaignPlayerUpsertWithWhereUniqueWithoutUserInputObjectSchema } from './CampaignPlayerUpsertWithWhereUniqueWithoutUserInput.schema';
import { CampaignPlayerCreateManyUserInputEnvelopeObjectSchema } from './CampaignPlayerCreateManyUserInputEnvelope.schema';
import { CampaignPlayerWhereUniqueInputObjectSchema } from './CampaignPlayerWhereUniqueInput.schema';
import { CampaignPlayerUpdateWithWhereUniqueWithoutUserInputObjectSchema } from './CampaignPlayerUpdateWithWhereUniqueWithoutUserInput.schema';
import { CampaignPlayerUpdateManyWithWhereWithoutUserInputObjectSchema } from './CampaignPlayerUpdateManyWithWhereWithoutUserInput.schema';
import { CampaignPlayerScalarWhereInputObjectSchema } from './CampaignPlayerScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => CampaignPlayerCreateWithoutUserInputObjectSchema), z.lazy(() => CampaignPlayerCreateWithoutUserInputObjectSchema).array(), z.lazy(() => CampaignPlayerUncheckedCreateWithoutUserInputObjectSchema), z.lazy(() => CampaignPlayerUncheckedCreateWithoutUserInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => CampaignPlayerCreateOrConnectWithoutUserInputObjectSchema), z.lazy(() => CampaignPlayerCreateOrConnectWithoutUserInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => CampaignPlayerUpsertWithWhereUniqueWithoutUserInputObjectSchema), z.lazy(() => CampaignPlayerUpsertWithWhereUniqueWithoutUserInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => CampaignPlayerCreateManyUserInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => CampaignPlayerWhereUniqueInputObjectSchema), z.lazy(() => CampaignPlayerWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => CampaignPlayerWhereUniqueInputObjectSchema), z.lazy(() => CampaignPlayerWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => CampaignPlayerWhereUniqueInputObjectSchema), z.lazy(() => CampaignPlayerWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => CampaignPlayerWhereUniqueInputObjectSchema), z.lazy(() => CampaignPlayerWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => CampaignPlayerUpdateWithWhereUniqueWithoutUserInputObjectSchema), z.lazy(() => CampaignPlayerUpdateWithWhereUniqueWithoutUserInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => CampaignPlayerUpdateManyWithWhereWithoutUserInputObjectSchema), z.lazy(() => CampaignPlayerUpdateManyWithWhereWithoutUserInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => CampaignPlayerScalarWhereInputObjectSchema), z.lazy(() => CampaignPlayerScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const CampaignPlayerUpdateManyWithoutUserNestedInputObjectSchema: z.ZodType<Prisma.CampaignPlayerUpdateManyWithoutUserNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.CampaignPlayerUpdateManyWithoutUserNestedInput>;
export const CampaignPlayerUpdateManyWithoutUserNestedInputObjectZodSchema = makeSchema();
