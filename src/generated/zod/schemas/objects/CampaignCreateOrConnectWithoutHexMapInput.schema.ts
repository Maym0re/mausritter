import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CampaignWhereUniqueInputObjectSchema } from './CampaignWhereUniqueInput.schema';
import { CampaignCreateWithoutHexMapInputObjectSchema } from './CampaignCreateWithoutHexMapInput.schema';
import { CampaignUncheckedCreateWithoutHexMapInputObjectSchema } from './CampaignUncheckedCreateWithoutHexMapInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CampaignWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => CampaignCreateWithoutHexMapInputObjectSchema), z.lazy(() => CampaignUncheckedCreateWithoutHexMapInputObjectSchema)])
}).strict();
export const CampaignCreateOrConnectWithoutHexMapInputObjectSchema: z.ZodType<Prisma.CampaignCreateOrConnectWithoutHexMapInput> = makeSchema() as unknown as z.ZodType<Prisma.CampaignCreateOrConnectWithoutHexMapInput>;
export const CampaignCreateOrConnectWithoutHexMapInputObjectZodSchema = makeSchema();
