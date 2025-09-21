import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CampaignPlayerCreateWithoutUserInputObjectSchema } from './CampaignPlayerCreateWithoutUserInput.schema';
import { CampaignPlayerUncheckedCreateWithoutUserInputObjectSchema } from './CampaignPlayerUncheckedCreateWithoutUserInput.schema';
import { CampaignPlayerCreateOrConnectWithoutUserInputObjectSchema } from './CampaignPlayerCreateOrConnectWithoutUserInput.schema';
import { CampaignPlayerCreateManyUserInputEnvelopeObjectSchema } from './CampaignPlayerCreateManyUserInputEnvelope.schema';
import { CampaignPlayerWhereUniqueInputObjectSchema } from './CampaignPlayerWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => CampaignPlayerCreateWithoutUserInputObjectSchema), z.lazy(() => CampaignPlayerCreateWithoutUserInputObjectSchema).array(), z.lazy(() => CampaignPlayerUncheckedCreateWithoutUserInputObjectSchema), z.lazy(() => CampaignPlayerUncheckedCreateWithoutUserInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => CampaignPlayerCreateOrConnectWithoutUserInputObjectSchema), z.lazy(() => CampaignPlayerCreateOrConnectWithoutUserInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => CampaignPlayerCreateManyUserInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => CampaignPlayerWhereUniqueInputObjectSchema), z.lazy(() => CampaignPlayerWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const CampaignPlayerUncheckedCreateNestedManyWithoutUserInputObjectSchema: z.ZodType<Prisma.CampaignPlayerUncheckedCreateNestedManyWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.CampaignPlayerUncheckedCreateNestedManyWithoutUserInput>;
export const CampaignPlayerUncheckedCreateNestedManyWithoutUserInputObjectZodSchema = makeSchema();
