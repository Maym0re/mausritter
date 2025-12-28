import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { GameTimeUpdateWithoutCampaignInputObjectSchema as GameTimeUpdateWithoutCampaignInputObjectSchema } from './GameTimeUpdateWithoutCampaignInput.schema';
import { GameTimeUncheckedUpdateWithoutCampaignInputObjectSchema as GameTimeUncheckedUpdateWithoutCampaignInputObjectSchema } from './GameTimeUncheckedUpdateWithoutCampaignInput.schema';
import { GameTimeCreateWithoutCampaignInputObjectSchema as GameTimeCreateWithoutCampaignInputObjectSchema } from './GameTimeCreateWithoutCampaignInput.schema';
import { GameTimeUncheckedCreateWithoutCampaignInputObjectSchema as GameTimeUncheckedCreateWithoutCampaignInputObjectSchema } from './GameTimeUncheckedCreateWithoutCampaignInput.schema';
import { GameTimeWhereInputObjectSchema as GameTimeWhereInputObjectSchema } from './GameTimeWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => GameTimeUpdateWithoutCampaignInputObjectSchema), z.lazy(() => GameTimeUncheckedUpdateWithoutCampaignInputObjectSchema)]),
  create: z.union([z.lazy(() => GameTimeCreateWithoutCampaignInputObjectSchema), z.lazy(() => GameTimeUncheckedCreateWithoutCampaignInputObjectSchema)]),
  where: z.lazy(() => GameTimeWhereInputObjectSchema).optional()
}).strict();
export const GameTimeUpsertWithoutCampaignInputObjectSchema: z.ZodType<Prisma.GameTimeUpsertWithoutCampaignInput> = makeSchema() as unknown as z.ZodType<Prisma.GameTimeUpsertWithoutCampaignInput>;
export const GameTimeUpsertWithoutCampaignInputObjectZodSchema = makeSchema();
