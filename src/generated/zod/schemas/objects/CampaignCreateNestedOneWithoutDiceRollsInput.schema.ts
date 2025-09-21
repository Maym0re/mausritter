import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CampaignCreateWithoutDiceRollsInputObjectSchema } from './CampaignCreateWithoutDiceRollsInput.schema';
import { CampaignUncheckedCreateWithoutDiceRollsInputObjectSchema } from './CampaignUncheckedCreateWithoutDiceRollsInput.schema';
import { CampaignCreateOrConnectWithoutDiceRollsInputObjectSchema } from './CampaignCreateOrConnectWithoutDiceRollsInput.schema';
import { CampaignWhereUniqueInputObjectSchema } from './CampaignWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => CampaignCreateWithoutDiceRollsInputObjectSchema), z.lazy(() => CampaignUncheckedCreateWithoutDiceRollsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => CampaignCreateOrConnectWithoutDiceRollsInputObjectSchema).optional(),
  connect: z.lazy(() => CampaignWhereUniqueInputObjectSchema).optional()
}).strict();
export const CampaignCreateNestedOneWithoutDiceRollsInputObjectSchema: z.ZodType<Prisma.CampaignCreateNestedOneWithoutDiceRollsInput> = makeSchema() as unknown as z.ZodType<Prisma.CampaignCreateNestedOneWithoutDiceRollsInput>;
export const CampaignCreateNestedOneWithoutDiceRollsInputObjectZodSchema = makeSchema();
