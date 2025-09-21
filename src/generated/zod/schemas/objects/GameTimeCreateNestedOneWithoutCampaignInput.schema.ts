import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { GameTimeCreateWithoutCampaignInputObjectSchema } from './GameTimeCreateWithoutCampaignInput.schema';
import { GameTimeUncheckedCreateWithoutCampaignInputObjectSchema } from './GameTimeUncheckedCreateWithoutCampaignInput.schema';
import { GameTimeCreateOrConnectWithoutCampaignInputObjectSchema } from './GameTimeCreateOrConnectWithoutCampaignInput.schema';
import { GameTimeWhereUniqueInputObjectSchema } from './GameTimeWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => GameTimeCreateWithoutCampaignInputObjectSchema), z.lazy(() => GameTimeUncheckedCreateWithoutCampaignInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => GameTimeCreateOrConnectWithoutCampaignInputObjectSchema).optional(),
  connect: z.lazy(() => GameTimeWhereUniqueInputObjectSchema).optional()
}).strict();
export const GameTimeCreateNestedOneWithoutCampaignInputObjectSchema: z.ZodType<Prisma.GameTimeCreateNestedOneWithoutCampaignInput> = makeSchema() as unknown as z.ZodType<Prisma.GameTimeCreateNestedOneWithoutCampaignInput>;
export const GameTimeCreateNestedOneWithoutCampaignInputObjectZodSchema = makeSchema();
