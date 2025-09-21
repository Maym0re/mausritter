import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CampaignWhereInputObjectSchema } from './CampaignWhereInput.schema';
import { CampaignUpdateWithoutDiceRollsInputObjectSchema } from './CampaignUpdateWithoutDiceRollsInput.schema';
import { CampaignUncheckedUpdateWithoutDiceRollsInputObjectSchema } from './CampaignUncheckedUpdateWithoutDiceRollsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CampaignWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => CampaignUpdateWithoutDiceRollsInputObjectSchema), z.lazy(() => CampaignUncheckedUpdateWithoutDiceRollsInputObjectSchema)])
}).strict();
export const CampaignUpdateToOneWithWhereWithoutDiceRollsInputObjectSchema: z.ZodType<Prisma.CampaignUpdateToOneWithWhereWithoutDiceRollsInput> = makeSchema() as unknown as z.ZodType<Prisma.CampaignUpdateToOneWithWhereWithoutDiceRollsInput>;
export const CampaignUpdateToOneWithWhereWithoutDiceRollsInputObjectZodSchema = makeSchema();
