import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CampaignCreateWithoutHexMapInputObjectSchema } from './CampaignCreateWithoutHexMapInput.schema';
import { CampaignUncheckedCreateWithoutHexMapInputObjectSchema } from './CampaignUncheckedCreateWithoutHexMapInput.schema';
import { CampaignCreateOrConnectWithoutHexMapInputObjectSchema } from './CampaignCreateOrConnectWithoutHexMapInput.schema';
import { CampaignUpsertWithoutHexMapInputObjectSchema } from './CampaignUpsertWithoutHexMapInput.schema';
import { CampaignWhereUniqueInputObjectSchema } from './CampaignWhereUniqueInput.schema';
import { CampaignUpdateToOneWithWhereWithoutHexMapInputObjectSchema } from './CampaignUpdateToOneWithWhereWithoutHexMapInput.schema';
import { CampaignUpdateWithoutHexMapInputObjectSchema } from './CampaignUpdateWithoutHexMapInput.schema';
import { CampaignUncheckedUpdateWithoutHexMapInputObjectSchema } from './CampaignUncheckedUpdateWithoutHexMapInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => CampaignCreateWithoutHexMapInputObjectSchema), z.lazy(() => CampaignUncheckedCreateWithoutHexMapInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => CampaignCreateOrConnectWithoutHexMapInputObjectSchema).optional(),
  upsert: z.lazy(() => CampaignUpsertWithoutHexMapInputObjectSchema).optional(),
  connect: z.lazy(() => CampaignWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => CampaignUpdateToOneWithWhereWithoutHexMapInputObjectSchema), z.lazy(() => CampaignUpdateWithoutHexMapInputObjectSchema), z.lazy(() => CampaignUncheckedUpdateWithoutHexMapInputObjectSchema)]).optional()
}).strict();
export const CampaignUpdateOneRequiredWithoutHexMapNestedInputObjectSchema: z.ZodType<Prisma.CampaignUpdateOneRequiredWithoutHexMapNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.CampaignUpdateOneRequiredWithoutHexMapNestedInput>;
export const CampaignUpdateOneRequiredWithoutHexMapNestedInputObjectZodSchema = makeSchema();
