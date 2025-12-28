import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CampaignCreateWithoutDiceRollsInputObjectSchema as CampaignCreateWithoutDiceRollsInputObjectSchema } from './CampaignCreateWithoutDiceRollsInput.schema';
import { CampaignUncheckedCreateWithoutDiceRollsInputObjectSchema as CampaignUncheckedCreateWithoutDiceRollsInputObjectSchema } from './CampaignUncheckedCreateWithoutDiceRollsInput.schema';
import { CampaignCreateOrConnectWithoutDiceRollsInputObjectSchema as CampaignCreateOrConnectWithoutDiceRollsInputObjectSchema } from './CampaignCreateOrConnectWithoutDiceRollsInput.schema';
import { CampaignUpsertWithoutDiceRollsInputObjectSchema as CampaignUpsertWithoutDiceRollsInputObjectSchema } from './CampaignUpsertWithoutDiceRollsInput.schema';
import { CampaignWhereUniqueInputObjectSchema as CampaignWhereUniqueInputObjectSchema } from './CampaignWhereUniqueInput.schema';
import { CampaignUpdateToOneWithWhereWithoutDiceRollsInputObjectSchema as CampaignUpdateToOneWithWhereWithoutDiceRollsInputObjectSchema } from './CampaignUpdateToOneWithWhereWithoutDiceRollsInput.schema';
import { CampaignUpdateWithoutDiceRollsInputObjectSchema as CampaignUpdateWithoutDiceRollsInputObjectSchema } from './CampaignUpdateWithoutDiceRollsInput.schema';
import { CampaignUncheckedUpdateWithoutDiceRollsInputObjectSchema as CampaignUncheckedUpdateWithoutDiceRollsInputObjectSchema } from './CampaignUncheckedUpdateWithoutDiceRollsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => CampaignCreateWithoutDiceRollsInputObjectSchema), z.lazy(() => CampaignUncheckedCreateWithoutDiceRollsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => CampaignCreateOrConnectWithoutDiceRollsInputObjectSchema).optional(),
  upsert: z.lazy(() => CampaignUpsertWithoutDiceRollsInputObjectSchema).optional(),
  connect: z.lazy(() => CampaignWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => CampaignUpdateToOneWithWhereWithoutDiceRollsInputObjectSchema), z.lazy(() => CampaignUpdateWithoutDiceRollsInputObjectSchema), z.lazy(() => CampaignUncheckedUpdateWithoutDiceRollsInputObjectSchema)]).optional()
}).strict();
export const CampaignUpdateOneRequiredWithoutDiceRollsNestedInputObjectSchema: z.ZodType<Prisma.CampaignUpdateOneRequiredWithoutDiceRollsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.CampaignUpdateOneRequiredWithoutDiceRollsNestedInput>;
export const CampaignUpdateOneRequiredWithoutDiceRollsNestedInputObjectZodSchema = makeSchema();
