import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { GameTimeWhereInputObjectSchema as GameTimeWhereInputObjectSchema } from './GameTimeWhereInput.schema';
import { GameTimeUpdateWithoutCampaignInputObjectSchema as GameTimeUpdateWithoutCampaignInputObjectSchema } from './GameTimeUpdateWithoutCampaignInput.schema';
import { GameTimeUncheckedUpdateWithoutCampaignInputObjectSchema as GameTimeUncheckedUpdateWithoutCampaignInputObjectSchema } from './GameTimeUncheckedUpdateWithoutCampaignInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => GameTimeWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => GameTimeUpdateWithoutCampaignInputObjectSchema), z.lazy(() => GameTimeUncheckedUpdateWithoutCampaignInputObjectSchema)])
}).strict();
export const GameTimeUpdateToOneWithWhereWithoutCampaignInputObjectSchema: z.ZodType<Prisma.GameTimeUpdateToOneWithWhereWithoutCampaignInput> = makeSchema() as unknown as z.ZodType<Prisma.GameTimeUpdateToOneWithWhereWithoutCampaignInput>;
export const GameTimeUpdateToOneWithWhereWithoutCampaignInputObjectZodSchema = makeSchema();
