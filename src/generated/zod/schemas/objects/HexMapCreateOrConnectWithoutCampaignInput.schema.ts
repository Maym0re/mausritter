import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { HexMapWhereUniqueInputObjectSchema } from './HexMapWhereUniqueInput.schema';
import { HexMapCreateWithoutCampaignInputObjectSchema } from './HexMapCreateWithoutCampaignInput.schema';
import { HexMapUncheckedCreateWithoutCampaignInputObjectSchema } from './HexMapUncheckedCreateWithoutCampaignInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => HexMapWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => HexMapCreateWithoutCampaignInputObjectSchema), z.lazy(() => HexMapUncheckedCreateWithoutCampaignInputObjectSchema)])
}).strict();
export const HexMapCreateOrConnectWithoutCampaignInputObjectSchema: z.ZodType<Prisma.HexMapCreateOrConnectWithoutCampaignInput> = makeSchema() as unknown as z.ZodType<Prisma.HexMapCreateOrConnectWithoutCampaignInput>;
export const HexMapCreateOrConnectWithoutCampaignInputObjectZodSchema = makeSchema();
