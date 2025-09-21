import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { HexMapWhereInputObjectSchema } from './HexMapWhereInput.schema';
import { HexMapUpdateWithoutCampaignInputObjectSchema } from './HexMapUpdateWithoutCampaignInput.schema';
import { HexMapUncheckedUpdateWithoutCampaignInputObjectSchema } from './HexMapUncheckedUpdateWithoutCampaignInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => HexMapWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => HexMapUpdateWithoutCampaignInputObjectSchema), z.lazy(() => HexMapUncheckedUpdateWithoutCampaignInputObjectSchema)])
}).strict();
export const HexMapUpdateToOneWithWhereWithoutCampaignInputObjectSchema: z.ZodType<Prisma.HexMapUpdateToOneWithWhereWithoutCampaignInput> = makeSchema() as unknown as z.ZodType<Prisma.HexMapUpdateToOneWithWhereWithoutCampaignInput>;
export const HexMapUpdateToOneWithWhereWithoutCampaignInputObjectZodSchema = makeSchema();
