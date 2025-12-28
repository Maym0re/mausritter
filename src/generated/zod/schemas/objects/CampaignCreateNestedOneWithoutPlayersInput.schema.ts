import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CampaignCreateWithoutPlayersInputObjectSchema as CampaignCreateWithoutPlayersInputObjectSchema } from './CampaignCreateWithoutPlayersInput.schema';
import { CampaignUncheckedCreateWithoutPlayersInputObjectSchema as CampaignUncheckedCreateWithoutPlayersInputObjectSchema } from './CampaignUncheckedCreateWithoutPlayersInput.schema';
import { CampaignCreateOrConnectWithoutPlayersInputObjectSchema as CampaignCreateOrConnectWithoutPlayersInputObjectSchema } from './CampaignCreateOrConnectWithoutPlayersInput.schema';
import { CampaignWhereUniqueInputObjectSchema as CampaignWhereUniqueInputObjectSchema } from './CampaignWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => CampaignCreateWithoutPlayersInputObjectSchema), z.lazy(() => CampaignUncheckedCreateWithoutPlayersInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => CampaignCreateOrConnectWithoutPlayersInputObjectSchema).optional(),
  connect: z.lazy(() => CampaignWhereUniqueInputObjectSchema).optional()
}).strict();
export const CampaignCreateNestedOneWithoutPlayersInputObjectSchema: z.ZodType<Prisma.CampaignCreateNestedOneWithoutPlayersInput> = makeSchema() as unknown as z.ZodType<Prisma.CampaignCreateNestedOneWithoutPlayersInput>;
export const CampaignCreateNestedOneWithoutPlayersInputObjectZodSchema = makeSchema();
