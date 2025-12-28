import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { WeatherEntryCreateWithoutCampaignInputObjectSchema as WeatherEntryCreateWithoutCampaignInputObjectSchema } from './WeatherEntryCreateWithoutCampaignInput.schema';
import { WeatherEntryUncheckedCreateWithoutCampaignInputObjectSchema as WeatherEntryUncheckedCreateWithoutCampaignInputObjectSchema } from './WeatherEntryUncheckedCreateWithoutCampaignInput.schema';
import { WeatherEntryCreateOrConnectWithoutCampaignInputObjectSchema as WeatherEntryCreateOrConnectWithoutCampaignInputObjectSchema } from './WeatherEntryCreateOrConnectWithoutCampaignInput.schema';
import { WeatherEntryUpsertWithoutCampaignInputObjectSchema as WeatherEntryUpsertWithoutCampaignInputObjectSchema } from './WeatherEntryUpsertWithoutCampaignInput.schema';
import { WeatherEntryWhereInputObjectSchema as WeatherEntryWhereInputObjectSchema } from './WeatherEntryWhereInput.schema';
import { WeatherEntryWhereUniqueInputObjectSchema as WeatherEntryWhereUniqueInputObjectSchema } from './WeatherEntryWhereUniqueInput.schema';
import { WeatherEntryUpdateToOneWithWhereWithoutCampaignInputObjectSchema as WeatherEntryUpdateToOneWithWhereWithoutCampaignInputObjectSchema } from './WeatherEntryUpdateToOneWithWhereWithoutCampaignInput.schema';
import { WeatherEntryUpdateWithoutCampaignInputObjectSchema as WeatherEntryUpdateWithoutCampaignInputObjectSchema } from './WeatherEntryUpdateWithoutCampaignInput.schema';
import { WeatherEntryUncheckedUpdateWithoutCampaignInputObjectSchema as WeatherEntryUncheckedUpdateWithoutCampaignInputObjectSchema } from './WeatherEntryUncheckedUpdateWithoutCampaignInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => WeatherEntryCreateWithoutCampaignInputObjectSchema), z.lazy(() => WeatherEntryUncheckedCreateWithoutCampaignInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => WeatherEntryCreateOrConnectWithoutCampaignInputObjectSchema).optional(),
  upsert: z.lazy(() => WeatherEntryUpsertWithoutCampaignInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => WeatherEntryWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => WeatherEntryWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => WeatherEntryWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => WeatherEntryUpdateToOneWithWhereWithoutCampaignInputObjectSchema), z.lazy(() => WeatherEntryUpdateWithoutCampaignInputObjectSchema), z.lazy(() => WeatherEntryUncheckedUpdateWithoutCampaignInputObjectSchema)]).optional()
}).strict();
export const WeatherEntryUpdateOneWithoutCampaignNestedInputObjectSchema: z.ZodType<Prisma.WeatherEntryUpdateOneWithoutCampaignNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.WeatherEntryUpdateOneWithoutCampaignNestedInput>;
export const WeatherEntryUpdateOneWithoutCampaignNestedInputObjectZodSchema = makeSchema();
