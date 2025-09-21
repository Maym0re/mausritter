import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DiceRollLogCreateWithoutCampaignInputObjectSchema } from './DiceRollLogCreateWithoutCampaignInput.schema';
import { DiceRollLogUncheckedCreateWithoutCampaignInputObjectSchema } from './DiceRollLogUncheckedCreateWithoutCampaignInput.schema';
import { DiceRollLogCreateOrConnectWithoutCampaignInputObjectSchema } from './DiceRollLogCreateOrConnectWithoutCampaignInput.schema';
import { DiceRollLogCreateManyCampaignInputEnvelopeObjectSchema } from './DiceRollLogCreateManyCampaignInputEnvelope.schema';
import { DiceRollLogWhereUniqueInputObjectSchema } from './DiceRollLogWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => DiceRollLogCreateWithoutCampaignInputObjectSchema), z.lazy(() => DiceRollLogCreateWithoutCampaignInputObjectSchema).array(), z.lazy(() => DiceRollLogUncheckedCreateWithoutCampaignInputObjectSchema), z.lazy(() => DiceRollLogUncheckedCreateWithoutCampaignInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => DiceRollLogCreateOrConnectWithoutCampaignInputObjectSchema), z.lazy(() => DiceRollLogCreateOrConnectWithoutCampaignInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => DiceRollLogCreateManyCampaignInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => DiceRollLogWhereUniqueInputObjectSchema), z.lazy(() => DiceRollLogWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const DiceRollLogUncheckedCreateNestedManyWithoutCampaignInputObjectSchema: z.ZodType<Prisma.DiceRollLogUncheckedCreateNestedManyWithoutCampaignInput> = makeSchema() as unknown as z.ZodType<Prisma.DiceRollLogUncheckedCreateNestedManyWithoutCampaignInput>;
export const DiceRollLogUncheckedCreateNestedManyWithoutCampaignInputObjectZodSchema = makeSchema();
