import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { GameTimeCreateWithoutCampaignInputObjectSchema as GameTimeCreateWithoutCampaignInputObjectSchema } from './GameTimeCreateWithoutCampaignInput.schema';
import { GameTimeUncheckedCreateWithoutCampaignInputObjectSchema as GameTimeUncheckedCreateWithoutCampaignInputObjectSchema } from './GameTimeUncheckedCreateWithoutCampaignInput.schema';
import { GameTimeCreateOrConnectWithoutCampaignInputObjectSchema as GameTimeCreateOrConnectWithoutCampaignInputObjectSchema } from './GameTimeCreateOrConnectWithoutCampaignInput.schema';
import { GameTimeUpsertWithoutCampaignInputObjectSchema as GameTimeUpsertWithoutCampaignInputObjectSchema } from './GameTimeUpsertWithoutCampaignInput.schema';
import { GameTimeWhereInputObjectSchema as GameTimeWhereInputObjectSchema } from './GameTimeWhereInput.schema';
import { GameTimeWhereUniqueInputObjectSchema as GameTimeWhereUniqueInputObjectSchema } from './GameTimeWhereUniqueInput.schema';
import { GameTimeUpdateToOneWithWhereWithoutCampaignInputObjectSchema as GameTimeUpdateToOneWithWhereWithoutCampaignInputObjectSchema } from './GameTimeUpdateToOneWithWhereWithoutCampaignInput.schema';
import { GameTimeUpdateWithoutCampaignInputObjectSchema as GameTimeUpdateWithoutCampaignInputObjectSchema } from './GameTimeUpdateWithoutCampaignInput.schema';
import { GameTimeUncheckedUpdateWithoutCampaignInputObjectSchema as GameTimeUncheckedUpdateWithoutCampaignInputObjectSchema } from './GameTimeUncheckedUpdateWithoutCampaignInput.schema'

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
