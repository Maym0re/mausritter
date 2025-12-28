import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CampaignCreateWithoutGameTimeInputObjectSchema as CampaignCreateWithoutGameTimeInputObjectSchema } from './CampaignCreateWithoutGameTimeInput.schema';
import { CampaignUncheckedCreateWithoutGameTimeInputObjectSchema as CampaignUncheckedCreateWithoutGameTimeInputObjectSchema } from './CampaignUncheckedCreateWithoutGameTimeInput.schema';
import { CampaignCreateOrConnectWithoutGameTimeInputObjectSchema as CampaignCreateOrConnectWithoutGameTimeInputObjectSchema } from './CampaignCreateOrConnectWithoutGameTimeInput.schema';
import { CampaignWhereUniqueInputObjectSchema as CampaignWhereUniqueInputObjectSchema } from './CampaignWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => CampaignCreateWithoutGameTimeInputObjectSchema), z.lazy(() => CampaignUncheckedCreateWithoutGameTimeInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => CampaignCreateOrConnectWithoutGameTimeInputObjectSchema).optional(),
  connect: z.lazy(() => CampaignWhereUniqueInputObjectSchema).optional()
}).strict();
export const CampaignCreateNestedOneWithoutGameTimeInputObjectSchema: z.ZodType<Prisma.CampaignCreateNestedOneWithoutGameTimeInput> = makeSchema() as unknown as z.ZodType<Prisma.CampaignCreateNestedOneWithoutGameTimeInput>;
export const CampaignCreateNestedOneWithoutGameTimeInputObjectZodSchema = makeSchema();
