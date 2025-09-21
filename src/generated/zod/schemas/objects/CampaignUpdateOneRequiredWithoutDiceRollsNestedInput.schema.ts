import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CampaignCreateWithoutDiceRollsInputObjectSchema } from './CampaignCreateWithoutDiceRollsInput.schema';
import { CampaignUncheckedCreateWithoutDiceRollsInputObjectSchema } from './CampaignUncheckedCreateWithoutDiceRollsInput.schema';
import { CampaignCreateOrConnectWithoutDiceRollsInputObjectSchema } from './CampaignCreateOrConnectWithoutDiceRollsInput.schema';
import { CampaignUpsertWithoutDiceRollsInputObjectSchema } from './CampaignUpsertWithoutDiceRollsInput.schema';
import { CampaignWhereUniqueInputObjectSchema } from './CampaignWhereUniqueInput.schema';
import { CampaignUpdateToOneWithWhereWithoutDiceRollsInputObjectSchema } from './CampaignUpdateToOneWithWhereWithoutDiceRollsInput.schema';
import { CampaignUpdateWithoutDiceRollsInputObjectSchema } from './CampaignUpdateWithoutDiceRollsInput.schema';
import { CampaignUncheckedUpdateWithoutDiceRollsInputObjectSchema } from './CampaignUncheckedUpdateWithoutDiceRollsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => CampaignCreateWithoutDiceRollsInputObjectSchema), z.lazy(() => CampaignUncheckedCreateWithoutDiceRollsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => CampaignCreateOrConnectWithoutDiceRollsInputObjectSchema).optional(),
  upsert: z.lazy(() => CampaignUpsertWithoutDiceRollsInputObjectSchema).optional(),
  connect: z.lazy(() => CampaignWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => CampaignUpdateToOneWithWhereWithoutDiceRollsInputObjectSchema), z.lazy(() => CampaignUpdateWithoutDiceRollsInputObjectSchema), z.lazy(() => CampaignUncheckedUpdateWithoutDiceRollsInputObjectSchema)]).optional()
}).strict();
export const CampaignUpdateOneRequiredWithoutDiceRollsNestedInputObjectSchema: z.ZodType<Prisma.CampaignUpdateOneRequiredWithoutDiceRollsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.CampaignUpdateOneRequiredWithoutDiceRollsNestedInput>;
export const CampaignUpdateOneRequiredWithoutDiceRollsNestedInputObjectZodSchema = makeSchema();
