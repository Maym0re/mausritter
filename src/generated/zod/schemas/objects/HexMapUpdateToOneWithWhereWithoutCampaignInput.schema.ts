import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { HexMapWhereInputObjectSchema as HexMapWhereInputObjectSchema } from './HexMapWhereInput.schema';
import { HexMapUpdateWithoutCampaignInputObjectSchema as HexMapUpdateWithoutCampaignInputObjectSchema } from './HexMapUpdateWithoutCampaignInput.schema';
import { HexMapUncheckedUpdateWithoutCampaignInputObjectSchema as HexMapUncheckedUpdateWithoutCampaignInputObjectSchema } from './HexMapUncheckedUpdateWithoutCampaignInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => HexMapWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => HexMapUpdateWithoutCampaignInputObjectSchema), z.lazy(() => HexMapUncheckedUpdateWithoutCampaignInputObjectSchema)])
}).strict();
export const HexMapUpdateToOneWithWhereWithoutCampaignInputObjectSchema: z.ZodType<Prisma.HexMapUpdateToOneWithWhereWithoutCampaignInput> = makeSchema() as unknown as z.ZodType<Prisma.HexMapUpdateToOneWithWhereWithoutCampaignInput>;
export const HexMapUpdateToOneWithWhereWithoutCampaignInputObjectZodSchema = makeSchema();
