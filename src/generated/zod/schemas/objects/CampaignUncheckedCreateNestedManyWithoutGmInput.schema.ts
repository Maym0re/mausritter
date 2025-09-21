import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CampaignCreateWithoutGmInputObjectSchema } from './CampaignCreateWithoutGmInput.schema';
import { CampaignUncheckedCreateWithoutGmInputObjectSchema } from './CampaignUncheckedCreateWithoutGmInput.schema';
import { CampaignCreateOrConnectWithoutGmInputObjectSchema } from './CampaignCreateOrConnectWithoutGmInput.schema';
import { CampaignCreateManyGmInputEnvelopeObjectSchema } from './CampaignCreateManyGmInputEnvelope.schema';
import { CampaignWhereUniqueInputObjectSchema } from './CampaignWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => CampaignCreateWithoutGmInputObjectSchema), z.lazy(() => CampaignCreateWithoutGmInputObjectSchema).array(), z.lazy(() => CampaignUncheckedCreateWithoutGmInputObjectSchema), z.lazy(() => CampaignUncheckedCreateWithoutGmInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => CampaignCreateOrConnectWithoutGmInputObjectSchema), z.lazy(() => CampaignCreateOrConnectWithoutGmInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => CampaignCreateManyGmInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => CampaignWhereUniqueInputObjectSchema), z.lazy(() => CampaignWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const CampaignUncheckedCreateNestedManyWithoutGmInputObjectSchema: z.ZodType<Prisma.CampaignUncheckedCreateNestedManyWithoutGmInput> = makeSchema() as unknown as z.ZodType<Prisma.CampaignUncheckedCreateNestedManyWithoutGmInput>;
export const CampaignUncheckedCreateNestedManyWithoutGmInputObjectZodSchema = makeSchema();
