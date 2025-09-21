import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { GameTimeWhereInputObjectSchema } from './GameTimeWhereInput.schema';
import { GameTimeUpdateWithoutCampaignInputObjectSchema } from './GameTimeUpdateWithoutCampaignInput.schema';
import { GameTimeUncheckedUpdateWithoutCampaignInputObjectSchema } from './GameTimeUncheckedUpdateWithoutCampaignInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => GameTimeWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => GameTimeUpdateWithoutCampaignInputObjectSchema), z.lazy(() => GameTimeUncheckedUpdateWithoutCampaignInputObjectSchema)])
}).strict();
export const GameTimeUpdateToOneWithWhereWithoutCampaignInputObjectSchema: z.ZodType<Prisma.GameTimeUpdateToOneWithWhereWithoutCampaignInput> = makeSchema() as unknown as z.ZodType<Prisma.GameTimeUpdateToOneWithWhereWithoutCampaignInput>;
export const GameTimeUpdateToOneWithWhereWithoutCampaignInputObjectZodSchema = makeSchema();
