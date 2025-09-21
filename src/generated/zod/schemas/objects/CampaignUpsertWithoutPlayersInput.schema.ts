import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CampaignUpdateWithoutPlayersInputObjectSchema } from './CampaignUpdateWithoutPlayersInput.schema';
import { CampaignUncheckedUpdateWithoutPlayersInputObjectSchema } from './CampaignUncheckedUpdateWithoutPlayersInput.schema';
import { CampaignCreateWithoutPlayersInputObjectSchema } from './CampaignCreateWithoutPlayersInput.schema';
import { CampaignUncheckedCreateWithoutPlayersInputObjectSchema } from './CampaignUncheckedCreateWithoutPlayersInput.schema';
import { CampaignWhereInputObjectSchema } from './CampaignWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => CampaignUpdateWithoutPlayersInputObjectSchema), z.lazy(() => CampaignUncheckedUpdateWithoutPlayersInputObjectSchema)]),
  create: z.union([z.lazy(() => CampaignCreateWithoutPlayersInputObjectSchema), z.lazy(() => CampaignUncheckedCreateWithoutPlayersInputObjectSchema)]),
  where: z.lazy(() => CampaignWhereInputObjectSchema).optional()
}).strict();
export const CampaignUpsertWithoutPlayersInputObjectSchema: z.ZodType<Prisma.CampaignUpsertWithoutPlayersInput> = makeSchema() as unknown as z.ZodType<Prisma.CampaignUpsertWithoutPlayersInput>;
export const CampaignUpsertWithoutPlayersInputObjectZodSchema = makeSchema();
