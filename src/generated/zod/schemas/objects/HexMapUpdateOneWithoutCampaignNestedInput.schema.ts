import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { HexMapCreateWithoutCampaignInputObjectSchema } from './HexMapCreateWithoutCampaignInput.schema';
import { HexMapUncheckedCreateWithoutCampaignInputObjectSchema } from './HexMapUncheckedCreateWithoutCampaignInput.schema';
import { HexMapCreateOrConnectWithoutCampaignInputObjectSchema } from './HexMapCreateOrConnectWithoutCampaignInput.schema';
import { HexMapUpsertWithoutCampaignInputObjectSchema } from './HexMapUpsertWithoutCampaignInput.schema';
import { HexMapWhereInputObjectSchema } from './HexMapWhereInput.schema';
import { HexMapWhereUniqueInputObjectSchema } from './HexMapWhereUniqueInput.schema';
import { HexMapUpdateToOneWithWhereWithoutCampaignInputObjectSchema } from './HexMapUpdateToOneWithWhereWithoutCampaignInput.schema';
import { HexMapUpdateWithoutCampaignInputObjectSchema } from './HexMapUpdateWithoutCampaignInput.schema';
import { HexMapUncheckedUpdateWithoutCampaignInputObjectSchema } from './HexMapUncheckedUpdateWithoutCampaignInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => HexMapCreateWithoutCampaignInputObjectSchema), z.lazy(() => HexMapUncheckedCreateWithoutCampaignInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => HexMapCreateOrConnectWithoutCampaignInputObjectSchema).optional(),
  upsert: z.lazy(() => HexMapUpsertWithoutCampaignInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => HexMapWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => HexMapWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => HexMapWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => HexMapUpdateToOneWithWhereWithoutCampaignInputObjectSchema), z.lazy(() => HexMapUpdateWithoutCampaignInputObjectSchema), z.lazy(() => HexMapUncheckedUpdateWithoutCampaignInputObjectSchema)]).optional()
}).strict();
export const HexMapUpdateOneWithoutCampaignNestedInputObjectSchema: z.ZodType<Prisma.HexMapUpdateOneWithoutCampaignNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.HexMapUpdateOneWithoutCampaignNestedInput>;
export const HexMapUpdateOneWithoutCampaignNestedInputObjectZodSchema = makeSchema();
