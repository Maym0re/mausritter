import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DiceRollLogCreateWithoutCampaignInputObjectSchema } from './DiceRollLogCreateWithoutCampaignInput.schema';
import { DiceRollLogUncheckedCreateWithoutCampaignInputObjectSchema } from './DiceRollLogUncheckedCreateWithoutCampaignInput.schema';
import { DiceRollLogCreateOrConnectWithoutCampaignInputObjectSchema } from './DiceRollLogCreateOrConnectWithoutCampaignInput.schema';
import { DiceRollLogUpsertWithWhereUniqueWithoutCampaignInputObjectSchema } from './DiceRollLogUpsertWithWhereUniqueWithoutCampaignInput.schema';
import { DiceRollLogCreateManyCampaignInputEnvelopeObjectSchema } from './DiceRollLogCreateManyCampaignInputEnvelope.schema';
import { DiceRollLogWhereUniqueInputObjectSchema } from './DiceRollLogWhereUniqueInput.schema';
import { DiceRollLogUpdateWithWhereUniqueWithoutCampaignInputObjectSchema } from './DiceRollLogUpdateWithWhereUniqueWithoutCampaignInput.schema';
import { DiceRollLogUpdateManyWithWhereWithoutCampaignInputObjectSchema } from './DiceRollLogUpdateManyWithWhereWithoutCampaignInput.schema';
import { DiceRollLogScalarWhereInputObjectSchema } from './DiceRollLogScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => DiceRollLogCreateWithoutCampaignInputObjectSchema), z.lazy(() => DiceRollLogCreateWithoutCampaignInputObjectSchema).array(), z.lazy(() => DiceRollLogUncheckedCreateWithoutCampaignInputObjectSchema), z.lazy(() => DiceRollLogUncheckedCreateWithoutCampaignInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => DiceRollLogCreateOrConnectWithoutCampaignInputObjectSchema), z.lazy(() => DiceRollLogCreateOrConnectWithoutCampaignInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => DiceRollLogUpsertWithWhereUniqueWithoutCampaignInputObjectSchema), z.lazy(() => DiceRollLogUpsertWithWhereUniqueWithoutCampaignInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => DiceRollLogCreateManyCampaignInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => DiceRollLogWhereUniqueInputObjectSchema), z.lazy(() => DiceRollLogWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => DiceRollLogWhereUniqueInputObjectSchema), z.lazy(() => DiceRollLogWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => DiceRollLogWhereUniqueInputObjectSchema), z.lazy(() => DiceRollLogWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => DiceRollLogWhereUniqueInputObjectSchema), z.lazy(() => DiceRollLogWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => DiceRollLogUpdateWithWhereUniqueWithoutCampaignInputObjectSchema), z.lazy(() => DiceRollLogUpdateWithWhereUniqueWithoutCampaignInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => DiceRollLogUpdateManyWithWhereWithoutCampaignInputObjectSchema), z.lazy(() => DiceRollLogUpdateManyWithWhereWithoutCampaignInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => DiceRollLogScalarWhereInputObjectSchema), z.lazy(() => DiceRollLogScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const DiceRollLogUpdateManyWithoutCampaignNestedInputObjectSchema: z.ZodType<Prisma.DiceRollLogUpdateManyWithoutCampaignNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.DiceRollLogUpdateManyWithoutCampaignNestedInput>;
export const DiceRollLogUpdateManyWithoutCampaignNestedInputObjectZodSchema = makeSchema();
