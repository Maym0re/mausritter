import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CampaignCreateWithoutHexMapInputObjectSchema as CampaignCreateWithoutHexMapInputObjectSchema } from './CampaignCreateWithoutHexMapInput.schema';
import { CampaignUncheckedCreateWithoutHexMapInputObjectSchema as CampaignUncheckedCreateWithoutHexMapInputObjectSchema } from './CampaignUncheckedCreateWithoutHexMapInput.schema';
import { CampaignCreateOrConnectWithoutHexMapInputObjectSchema as CampaignCreateOrConnectWithoutHexMapInputObjectSchema } from './CampaignCreateOrConnectWithoutHexMapInput.schema';
import { CampaignWhereUniqueInputObjectSchema as CampaignWhereUniqueInputObjectSchema } from './CampaignWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => CampaignCreateWithoutHexMapInputObjectSchema), z.lazy(() => CampaignUncheckedCreateWithoutHexMapInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => CampaignCreateOrConnectWithoutHexMapInputObjectSchema).optional(),
  connect: z.lazy(() => CampaignWhereUniqueInputObjectSchema).optional()
}).strict();
export const CampaignCreateNestedOneWithoutHexMapInputObjectSchema: z.ZodType<Prisma.CampaignCreateNestedOneWithoutHexMapInput> = makeSchema() as unknown as z.ZodType<Prisma.CampaignCreateNestedOneWithoutHexMapInput>;
export const CampaignCreateNestedOneWithoutHexMapInputObjectZodSchema = makeSchema();
