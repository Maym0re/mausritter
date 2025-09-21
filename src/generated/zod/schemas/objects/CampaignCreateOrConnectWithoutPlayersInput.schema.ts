import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CampaignWhereUniqueInputObjectSchema } from './CampaignWhereUniqueInput.schema';
import { CampaignCreateWithoutPlayersInputObjectSchema } from './CampaignCreateWithoutPlayersInput.schema';
import { CampaignUncheckedCreateWithoutPlayersInputObjectSchema } from './CampaignUncheckedCreateWithoutPlayersInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CampaignWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => CampaignCreateWithoutPlayersInputObjectSchema), z.lazy(() => CampaignUncheckedCreateWithoutPlayersInputObjectSchema)])
}).strict();
export const CampaignCreateOrConnectWithoutPlayersInputObjectSchema: z.ZodType<Prisma.CampaignCreateOrConnectWithoutPlayersInput> = makeSchema() as unknown as z.ZodType<Prisma.CampaignCreateOrConnectWithoutPlayersInput>;
export const CampaignCreateOrConnectWithoutPlayersInputObjectZodSchema = makeSchema();
