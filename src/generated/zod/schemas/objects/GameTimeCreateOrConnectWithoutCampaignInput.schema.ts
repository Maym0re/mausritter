import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { GameTimeWhereUniqueInputObjectSchema } from './GameTimeWhereUniqueInput.schema';
import { GameTimeCreateWithoutCampaignInputObjectSchema } from './GameTimeCreateWithoutCampaignInput.schema';
import { GameTimeUncheckedCreateWithoutCampaignInputObjectSchema } from './GameTimeUncheckedCreateWithoutCampaignInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => GameTimeWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => GameTimeCreateWithoutCampaignInputObjectSchema), z.lazy(() => GameTimeUncheckedCreateWithoutCampaignInputObjectSchema)])
}).strict();
export const GameTimeCreateOrConnectWithoutCampaignInputObjectSchema: z.ZodType<Prisma.GameTimeCreateOrConnectWithoutCampaignInput> = makeSchema() as unknown as z.ZodType<Prisma.GameTimeCreateOrConnectWithoutCampaignInput>;
export const GameTimeCreateOrConnectWithoutCampaignInputObjectZodSchema = makeSchema();
