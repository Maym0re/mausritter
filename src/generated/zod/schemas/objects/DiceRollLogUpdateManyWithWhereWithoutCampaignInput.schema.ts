import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DiceRollLogScalarWhereInputObjectSchema } from './DiceRollLogScalarWhereInput.schema';
import { DiceRollLogUpdateManyMutationInputObjectSchema } from './DiceRollLogUpdateManyMutationInput.schema';
import { DiceRollLogUncheckedUpdateManyWithoutCampaignInputObjectSchema } from './DiceRollLogUncheckedUpdateManyWithoutCampaignInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => DiceRollLogScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => DiceRollLogUpdateManyMutationInputObjectSchema), z.lazy(() => DiceRollLogUncheckedUpdateManyWithoutCampaignInputObjectSchema)])
}).strict();
export const DiceRollLogUpdateManyWithWhereWithoutCampaignInputObjectSchema: z.ZodType<Prisma.DiceRollLogUpdateManyWithWhereWithoutCampaignInput> = makeSchema() as unknown as z.ZodType<Prisma.DiceRollLogUpdateManyWithWhereWithoutCampaignInput>;
export const DiceRollLogUpdateManyWithWhereWithoutCampaignInputObjectZodSchema = makeSchema();
