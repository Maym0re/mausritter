import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CampaignUpdateWithoutHexMapInputObjectSchema as CampaignUpdateWithoutHexMapInputObjectSchema } from './CampaignUpdateWithoutHexMapInput.schema';
import { CampaignUncheckedUpdateWithoutHexMapInputObjectSchema as CampaignUncheckedUpdateWithoutHexMapInputObjectSchema } from './CampaignUncheckedUpdateWithoutHexMapInput.schema';
import { CampaignCreateWithoutHexMapInputObjectSchema as CampaignCreateWithoutHexMapInputObjectSchema } from './CampaignCreateWithoutHexMapInput.schema';
import { CampaignUncheckedCreateWithoutHexMapInputObjectSchema as CampaignUncheckedCreateWithoutHexMapInputObjectSchema } from './CampaignUncheckedCreateWithoutHexMapInput.schema';
import { CampaignWhereInputObjectSchema as CampaignWhereInputObjectSchema } from './CampaignWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => CampaignUpdateWithoutHexMapInputObjectSchema), z.lazy(() => CampaignUncheckedUpdateWithoutHexMapInputObjectSchema)]),
  create: z.union([z.lazy(() => CampaignCreateWithoutHexMapInputObjectSchema), z.lazy(() => CampaignUncheckedCreateWithoutHexMapInputObjectSchema)]),
  where: z.lazy(() => CampaignWhereInputObjectSchema).optional()
}).strict();
export const CampaignUpsertWithoutHexMapInputObjectSchema: z.ZodType<Prisma.CampaignUpsertWithoutHexMapInput> = makeSchema() as unknown as z.ZodType<Prisma.CampaignUpsertWithoutHexMapInput>;
export const CampaignUpsertWithoutHexMapInputObjectZodSchema = makeSchema();
