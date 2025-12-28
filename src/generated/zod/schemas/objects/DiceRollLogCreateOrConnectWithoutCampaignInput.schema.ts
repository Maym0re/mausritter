import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { DiceRollLogWhereUniqueInputObjectSchema as DiceRollLogWhereUniqueInputObjectSchema } from './DiceRollLogWhereUniqueInput.schema';
import { DiceRollLogCreateWithoutCampaignInputObjectSchema as DiceRollLogCreateWithoutCampaignInputObjectSchema } from './DiceRollLogCreateWithoutCampaignInput.schema';
import { DiceRollLogUncheckedCreateWithoutCampaignInputObjectSchema as DiceRollLogUncheckedCreateWithoutCampaignInputObjectSchema } from './DiceRollLogUncheckedCreateWithoutCampaignInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => DiceRollLogWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => DiceRollLogCreateWithoutCampaignInputObjectSchema), z.lazy(() => DiceRollLogUncheckedCreateWithoutCampaignInputObjectSchema)])
}).strict();
export const DiceRollLogCreateOrConnectWithoutCampaignInputObjectSchema: z.ZodType<Prisma.DiceRollLogCreateOrConnectWithoutCampaignInput> = makeSchema() as unknown as z.ZodType<Prisma.DiceRollLogCreateOrConnectWithoutCampaignInput>;
export const DiceRollLogCreateOrConnectWithoutCampaignInputObjectZodSchema = makeSchema();
