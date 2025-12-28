import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CampaignPlayerCreateWithoutUserInputObjectSchema as CampaignPlayerCreateWithoutUserInputObjectSchema } from './CampaignPlayerCreateWithoutUserInput.schema';
import { CampaignPlayerUncheckedCreateWithoutUserInputObjectSchema as CampaignPlayerUncheckedCreateWithoutUserInputObjectSchema } from './CampaignPlayerUncheckedCreateWithoutUserInput.schema';
import { CampaignPlayerCreateOrConnectWithoutUserInputObjectSchema as CampaignPlayerCreateOrConnectWithoutUserInputObjectSchema } from './CampaignPlayerCreateOrConnectWithoutUserInput.schema';
import { CampaignPlayerCreateManyUserInputEnvelopeObjectSchema as CampaignPlayerCreateManyUserInputEnvelopeObjectSchema } from './CampaignPlayerCreateManyUserInputEnvelope.schema';
import { CampaignPlayerWhereUniqueInputObjectSchema as CampaignPlayerWhereUniqueInputObjectSchema } from './CampaignPlayerWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => CampaignPlayerCreateWithoutUserInputObjectSchema), z.lazy(() => CampaignPlayerCreateWithoutUserInputObjectSchema).array(), z.lazy(() => CampaignPlayerUncheckedCreateWithoutUserInputObjectSchema), z.lazy(() => CampaignPlayerUncheckedCreateWithoutUserInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => CampaignPlayerCreateOrConnectWithoutUserInputObjectSchema), z.lazy(() => CampaignPlayerCreateOrConnectWithoutUserInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => CampaignPlayerCreateManyUserInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => CampaignPlayerWhereUniqueInputObjectSchema), z.lazy(() => CampaignPlayerWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const CampaignPlayerCreateNestedManyWithoutUserInputObjectSchema: z.ZodType<Prisma.CampaignPlayerCreateNestedManyWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.CampaignPlayerCreateNestedManyWithoutUserInput>;
export const CampaignPlayerCreateNestedManyWithoutUserInputObjectZodSchema = makeSchema();
