import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CampaignCreateWithoutPlayersInputObjectSchema } from './CampaignCreateWithoutPlayersInput.schema';
import { CampaignUncheckedCreateWithoutPlayersInputObjectSchema } from './CampaignUncheckedCreateWithoutPlayersInput.schema';
import { CampaignCreateOrConnectWithoutPlayersInputObjectSchema } from './CampaignCreateOrConnectWithoutPlayersInput.schema';
import { CampaignWhereUniqueInputObjectSchema } from './CampaignWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => CampaignCreateWithoutPlayersInputObjectSchema), z.lazy(() => CampaignUncheckedCreateWithoutPlayersInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => CampaignCreateOrConnectWithoutPlayersInputObjectSchema).optional(),
  connect: z.lazy(() => CampaignWhereUniqueInputObjectSchema).optional()
}).strict();
export const CampaignCreateNestedOneWithoutPlayersInputObjectSchema: z.ZodType<Prisma.CampaignCreateNestedOneWithoutPlayersInput> = makeSchema() as unknown as z.ZodType<Prisma.CampaignCreateNestedOneWithoutPlayersInput>;
export const CampaignCreateNestedOneWithoutPlayersInputObjectZodSchema = makeSchema();
