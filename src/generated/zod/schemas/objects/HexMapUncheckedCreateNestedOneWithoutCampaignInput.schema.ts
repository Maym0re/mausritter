import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { HexMapCreateWithoutCampaignInputObjectSchema } from './HexMapCreateWithoutCampaignInput.schema';
import { HexMapUncheckedCreateWithoutCampaignInputObjectSchema } from './HexMapUncheckedCreateWithoutCampaignInput.schema';
import { HexMapCreateOrConnectWithoutCampaignInputObjectSchema } from './HexMapCreateOrConnectWithoutCampaignInput.schema';
import { HexMapWhereUniqueInputObjectSchema } from './HexMapWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => HexMapCreateWithoutCampaignInputObjectSchema), z.lazy(() => HexMapUncheckedCreateWithoutCampaignInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => HexMapCreateOrConnectWithoutCampaignInputObjectSchema).optional(),
  connect: z.lazy(() => HexMapWhereUniqueInputObjectSchema).optional()
}).strict();
export const HexMapUncheckedCreateNestedOneWithoutCampaignInputObjectSchema: z.ZodType<Prisma.HexMapUncheckedCreateNestedOneWithoutCampaignInput> = makeSchema() as unknown as z.ZodType<Prisma.HexMapUncheckedCreateNestedOneWithoutCampaignInput>;
export const HexMapUncheckedCreateNestedOneWithoutCampaignInputObjectZodSchema = makeSchema();
