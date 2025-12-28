import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { DiceRollLogCreateWithoutCampaignInputObjectSchema as DiceRollLogCreateWithoutCampaignInputObjectSchema } from './DiceRollLogCreateWithoutCampaignInput.schema';
import { DiceRollLogUncheckedCreateWithoutCampaignInputObjectSchema as DiceRollLogUncheckedCreateWithoutCampaignInputObjectSchema } from './DiceRollLogUncheckedCreateWithoutCampaignInput.schema';
import { DiceRollLogCreateOrConnectWithoutCampaignInputObjectSchema as DiceRollLogCreateOrConnectWithoutCampaignInputObjectSchema } from './DiceRollLogCreateOrConnectWithoutCampaignInput.schema';
import { DiceRollLogCreateManyCampaignInputEnvelopeObjectSchema as DiceRollLogCreateManyCampaignInputEnvelopeObjectSchema } from './DiceRollLogCreateManyCampaignInputEnvelope.schema';
import { DiceRollLogWhereUniqueInputObjectSchema as DiceRollLogWhereUniqueInputObjectSchema } from './DiceRollLogWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => DiceRollLogCreateWithoutCampaignInputObjectSchema), z.lazy(() => DiceRollLogCreateWithoutCampaignInputObjectSchema).array(), z.lazy(() => DiceRollLogUncheckedCreateWithoutCampaignInputObjectSchema), z.lazy(() => DiceRollLogUncheckedCreateWithoutCampaignInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => DiceRollLogCreateOrConnectWithoutCampaignInputObjectSchema), z.lazy(() => DiceRollLogCreateOrConnectWithoutCampaignInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => DiceRollLogCreateManyCampaignInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => DiceRollLogWhereUniqueInputObjectSchema), z.lazy(() => DiceRollLogWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const DiceRollLogCreateNestedManyWithoutCampaignInputObjectSchema: z.ZodType<Prisma.DiceRollLogCreateNestedManyWithoutCampaignInput> = makeSchema() as unknown as z.ZodType<Prisma.DiceRollLogCreateNestedManyWithoutCampaignInput>;
export const DiceRollLogCreateNestedManyWithoutCampaignInputObjectZodSchema = makeSchema();
