import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CampaignWhereInputObjectSchema } from './CampaignWhereInput.schema';
import { CampaignUpdateWithoutPlayersInputObjectSchema } from './CampaignUpdateWithoutPlayersInput.schema';
import { CampaignUncheckedUpdateWithoutPlayersInputObjectSchema } from './CampaignUncheckedUpdateWithoutPlayersInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CampaignWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => CampaignUpdateWithoutPlayersInputObjectSchema), z.lazy(() => CampaignUncheckedUpdateWithoutPlayersInputObjectSchema)])
}).strict();
export const CampaignUpdateToOneWithWhereWithoutPlayersInputObjectSchema: z.ZodType<Prisma.CampaignUpdateToOneWithWhereWithoutPlayersInput> = makeSchema() as unknown as z.ZodType<Prisma.CampaignUpdateToOneWithWhereWithoutPlayersInput>;
export const CampaignUpdateToOneWithWhereWithoutPlayersInputObjectZodSchema = makeSchema();
