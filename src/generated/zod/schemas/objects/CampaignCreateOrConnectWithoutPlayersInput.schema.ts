import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CampaignWhereUniqueInputObjectSchema as CampaignWhereUniqueInputObjectSchema } from './CampaignWhereUniqueInput.schema';
import { CampaignCreateWithoutPlayersInputObjectSchema as CampaignCreateWithoutPlayersInputObjectSchema } from './CampaignCreateWithoutPlayersInput.schema';
import { CampaignUncheckedCreateWithoutPlayersInputObjectSchema as CampaignUncheckedCreateWithoutPlayersInputObjectSchema } from './CampaignUncheckedCreateWithoutPlayersInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CampaignWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => CampaignCreateWithoutPlayersInputObjectSchema), z.lazy(() => CampaignUncheckedCreateWithoutPlayersInputObjectSchema)])
}).strict();
export const CampaignCreateOrConnectWithoutPlayersInputObjectSchema: z.ZodType<Prisma.CampaignCreateOrConnectWithoutPlayersInput> = makeSchema() as unknown as z.ZodType<Prisma.CampaignCreateOrConnectWithoutPlayersInput>;
export const CampaignCreateOrConnectWithoutPlayersInputObjectZodSchema = makeSchema();
