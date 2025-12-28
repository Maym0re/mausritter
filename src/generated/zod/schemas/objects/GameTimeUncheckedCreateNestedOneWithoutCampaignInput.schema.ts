import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { GameTimeCreateWithoutCampaignInputObjectSchema as GameTimeCreateWithoutCampaignInputObjectSchema } from './GameTimeCreateWithoutCampaignInput.schema';
import { GameTimeUncheckedCreateWithoutCampaignInputObjectSchema as GameTimeUncheckedCreateWithoutCampaignInputObjectSchema } from './GameTimeUncheckedCreateWithoutCampaignInput.schema';
import { GameTimeCreateOrConnectWithoutCampaignInputObjectSchema as GameTimeCreateOrConnectWithoutCampaignInputObjectSchema } from './GameTimeCreateOrConnectWithoutCampaignInput.schema';
import { GameTimeWhereUniqueInputObjectSchema as GameTimeWhereUniqueInputObjectSchema } from './GameTimeWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => GameTimeCreateWithoutCampaignInputObjectSchema), z.lazy(() => GameTimeUncheckedCreateWithoutCampaignInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => GameTimeCreateOrConnectWithoutCampaignInputObjectSchema).optional(),
  connect: z.lazy(() => GameTimeWhereUniqueInputObjectSchema).optional()
}).strict();
export const GameTimeUncheckedCreateNestedOneWithoutCampaignInputObjectSchema: z.ZodType<Prisma.GameTimeUncheckedCreateNestedOneWithoutCampaignInput> = makeSchema() as unknown as z.ZodType<Prisma.GameTimeUncheckedCreateNestedOneWithoutCampaignInput>;
export const GameTimeUncheckedCreateNestedOneWithoutCampaignInputObjectZodSchema = makeSchema();
