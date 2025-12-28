import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CampaignUpdateWithoutPlayersInputObjectSchema as CampaignUpdateWithoutPlayersInputObjectSchema } from './CampaignUpdateWithoutPlayersInput.schema';
import { CampaignUncheckedUpdateWithoutPlayersInputObjectSchema as CampaignUncheckedUpdateWithoutPlayersInputObjectSchema } from './CampaignUncheckedUpdateWithoutPlayersInput.schema';
import { CampaignCreateWithoutPlayersInputObjectSchema as CampaignCreateWithoutPlayersInputObjectSchema } from './CampaignCreateWithoutPlayersInput.schema';
import { CampaignUncheckedCreateWithoutPlayersInputObjectSchema as CampaignUncheckedCreateWithoutPlayersInputObjectSchema } from './CampaignUncheckedCreateWithoutPlayersInput.schema';
import { CampaignWhereInputObjectSchema as CampaignWhereInputObjectSchema } from './CampaignWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => CampaignUpdateWithoutPlayersInputObjectSchema), z.lazy(() => CampaignUncheckedUpdateWithoutPlayersInputObjectSchema)]),
  create: z.union([z.lazy(() => CampaignCreateWithoutPlayersInputObjectSchema), z.lazy(() => CampaignUncheckedCreateWithoutPlayersInputObjectSchema)]),
  where: z.lazy(() => CampaignWhereInputObjectSchema).optional()
}).strict();
export const CampaignUpsertWithoutPlayersInputObjectSchema: z.ZodType<Prisma.CampaignUpsertWithoutPlayersInput> = makeSchema() as unknown as z.ZodType<Prisma.CampaignUpsertWithoutPlayersInput>;
export const CampaignUpsertWithoutPlayersInputObjectZodSchema = makeSchema();
