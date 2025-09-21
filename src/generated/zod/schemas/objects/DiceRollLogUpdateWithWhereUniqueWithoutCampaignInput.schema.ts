import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DiceRollLogWhereUniqueInputObjectSchema } from './DiceRollLogWhereUniqueInput.schema';
import { DiceRollLogUpdateWithoutCampaignInputObjectSchema } from './DiceRollLogUpdateWithoutCampaignInput.schema';
import { DiceRollLogUncheckedUpdateWithoutCampaignInputObjectSchema } from './DiceRollLogUncheckedUpdateWithoutCampaignInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => DiceRollLogWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => DiceRollLogUpdateWithoutCampaignInputObjectSchema), z.lazy(() => DiceRollLogUncheckedUpdateWithoutCampaignInputObjectSchema)])
}).strict();
export const DiceRollLogUpdateWithWhereUniqueWithoutCampaignInputObjectSchema: z.ZodType<Prisma.DiceRollLogUpdateWithWhereUniqueWithoutCampaignInput> = makeSchema() as unknown as z.ZodType<Prisma.DiceRollLogUpdateWithWhereUniqueWithoutCampaignInput>;
export const DiceRollLogUpdateWithWhereUniqueWithoutCampaignInputObjectZodSchema = makeSchema();
