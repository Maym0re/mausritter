import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { GameTimeCreateWithoutCampaignInputObjectSchema } from './GameTimeCreateWithoutCampaignInput.schema';
import { GameTimeUncheckedCreateWithoutCampaignInputObjectSchema } from './GameTimeUncheckedCreateWithoutCampaignInput.schema';
import { GameTimeCreateOrConnectWithoutCampaignInputObjectSchema } from './GameTimeCreateOrConnectWithoutCampaignInput.schema';
import { GameTimeUpsertWithoutCampaignInputObjectSchema } from './GameTimeUpsertWithoutCampaignInput.schema';
import { GameTimeWhereInputObjectSchema } from './GameTimeWhereInput.schema';
import { GameTimeWhereUniqueInputObjectSchema } from './GameTimeWhereUniqueInput.schema';
import { GameTimeUpdateToOneWithWhereWithoutCampaignInputObjectSchema } from './GameTimeUpdateToOneWithWhereWithoutCampaignInput.schema';
import { GameTimeUpdateWithoutCampaignInputObjectSchema } from './GameTimeUpdateWithoutCampaignInput.schema';
import { GameTimeUncheckedUpdateWithoutCampaignInputObjectSchema } from './GameTimeUncheckedUpdateWithoutCampaignInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => GameTimeCreateWithoutCampaignInputObjectSchema), z.lazy(() => GameTimeUncheckedCreateWithoutCampaignInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => GameTimeCreateOrConnectWithoutCampaignInputObjectSchema).optional(),
  upsert: z.lazy(() => GameTimeUpsertWithoutCampaignInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => GameTimeWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => GameTimeWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => GameTimeWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => GameTimeUpdateToOneWithWhereWithoutCampaignInputObjectSchema), z.lazy(() => GameTimeUpdateWithoutCampaignInputObjectSchema), z.lazy(() => GameTimeUncheckedUpdateWithoutCampaignInputObjectSchema)]).optional()
}).strict();
export const GameTimeUpdateOneWithoutCampaignNestedInputObjectSchema: z.ZodType<Prisma.GameTimeUpdateOneWithoutCampaignNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.GameTimeUpdateOneWithoutCampaignNestedInput>;
export const GameTimeUpdateOneWithoutCampaignNestedInputObjectZodSchema = makeSchema();
