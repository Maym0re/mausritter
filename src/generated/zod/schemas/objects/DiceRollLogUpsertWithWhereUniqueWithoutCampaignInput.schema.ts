import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DiceRollLogWhereUniqueInputObjectSchema } from './DiceRollLogWhereUniqueInput.schema';
import { DiceRollLogUpdateWithoutCampaignInputObjectSchema } from './DiceRollLogUpdateWithoutCampaignInput.schema';
import { DiceRollLogUncheckedUpdateWithoutCampaignInputObjectSchema } from './DiceRollLogUncheckedUpdateWithoutCampaignInput.schema';
import { DiceRollLogCreateWithoutCampaignInputObjectSchema } from './DiceRollLogCreateWithoutCampaignInput.schema';
import { DiceRollLogUncheckedCreateWithoutCampaignInputObjectSchema } from './DiceRollLogUncheckedCreateWithoutCampaignInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => DiceRollLogWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => DiceRollLogUpdateWithoutCampaignInputObjectSchema), z.lazy(() => DiceRollLogUncheckedUpdateWithoutCampaignInputObjectSchema)]),
  create: z.union([z.lazy(() => DiceRollLogCreateWithoutCampaignInputObjectSchema), z.lazy(() => DiceRollLogUncheckedCreateWithoutCampaignInputObjectSchema)])
}).strict();
export const DiceRollLogUpsertWithWhereUniqueWithoutCampaignInputObjectSchema: z.ZodType<Prisma.DiceRollLogUpsertWithWhereUniqueWithoutCampaignInput> = makeSchema() as unknown as z.ZodType<Prisma.DiceRollLogUpsertWithWhereUniqueWithoutCampaignInput>;
export const DiceRollLogUpsertWithWhereUniqueWithoutCampaignInputObjectZodSchema = makeSchema();
