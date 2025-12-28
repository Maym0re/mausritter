import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { HexMapCreateWithoutCampaignInputObjectSchema as HexMapCreateWithoutCampaignInputObjectSchema } from './HexMapCreateWithoutCampaignInput.schema';
import { HexMapUncheckedCreateWithoutCampaignInputObjectSchema as HexMapUncheckedCreateWithoutCampaignInputObjectSchema } from './HexMapUncheckedCreateWithoutCampaignInput.schema';
import { HexMapCreateOrConnectWithoutCampaignInputObjectSchema as HexMapCreateOrConnectWithoutCampaignInputObjectSchema } from './HexMapCreateOrConnectWithoutCampaignInput.schema';
import { HexMapWhereUniqueInputObjectSchema as HexMapWhereUniqueInputObjectSchema } from './HexMapWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => HexMapCreateWithoutCampaignInputObjectSchema), z.lazy(() => HexMapUncheckedCreateWithoutCampaignInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => HexMapCreateOrConnectWithoutCampaignInputObjectSchema).optional(),
  connect: z.lazy(() => HexMapWhereUniqueInputObjectSchema).optional()
}).strict();
export const HexMapUncheckedCreateNestedOneWithoutCampaignInputObjectSchema: z.ZodType<Prisma.HexMapUncheckedCreateNestedOneWithoutCampaignInput> = makeSchema() as unknown as z.ZodType<Prisma.HexMapUncheckedCreateNestedOneWithoutCampaignInput>;
export const HexMapUncheckedCreateNestedOneWithoutCampaignInputObjectZodSchema = makeSchema();
