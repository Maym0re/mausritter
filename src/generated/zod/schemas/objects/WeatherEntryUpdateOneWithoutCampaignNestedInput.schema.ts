import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { WeatherEntryCreateWithoutCampaignInputObjectSchema } from './WeatherEntryCreateWithoutCampaignInput.schema';
import { WeatherEntryUncheckedCreateWithoutCampaignInputObjectSchema } from './WeatherEntryUncheckedCreateWithoutCampaignInput.schema';
import { WeatherEntryCreateOrConnectWithoutCampaignInputObjectSchema } from './WeatherEntryCreateOrConnectWithoutCampaignInput.schema';
import { WeatherEntryUpsertWithoutCampaignInputObjectSchema } from './WeatherEntryUpsertWithoutCampaignInput.schema';
import { WeatherEntryWhereInputObjectSchema } from './WeatherEntryWhereInput.schema';
import { WeatherEntryWhereUniqueInputObjectSchema } from './WeatherEntryWhereUniqueInput.schema';
import { WeatherEntryUpdateToOneWithWhereWithoutCampaignInputObjectSchema } from './WeatherEntryUpdateToOneWithWhereWithoutCampaignInput.schema';
import { WeatherEntryUpdateWithoutCampaignInputObjectSchema } from './WeatherEntryUpdateWithoutCampaignInput.schema';
import { WeatherEntryUncheckedUpdateWithoutCampaignInputObjectSchema } from './WeatherEntryUncheckedUpdateWithoutCampaignInput.schema'

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
