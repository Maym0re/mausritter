import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CampaignCreateWithoutHexMapInputObjectSchema as CampaignCreateWithoutHexMapInputObjectSchema } from './CampaignCreateWithoutHexMapInput.schema';
import { CampaignUncheckedCreateWithoutHexMapInputObjectSchema as CampaignUncheckedCreateWithoutHexMapInputObjectSchema } from './CampaignUncheckedCreateWithoutHexMapInput.schema';
import { CampaignCreateOrConnectWithoutHexMapInputObjectSchema as CampaignCreateOrConnectWithoutHexMapInputObjectSchema } from './CampaignCreateOrConnectWithoutHexMapInput.schema';
import { CampaignUpsertWithoutHexMapInputObjectSchema as CampaignUpsertWithoutHexMapInputObjectSchema } from './CampaignUpsertWithoutHexMapInput.schema';
import { CampaignWhereUniqueInputObjectSchema as CampaignWhereUniqueInputObjectSchema } from './CampaignWhereUniqueInput.schema';
import { CampaignUpdateToOneWithWhereWithoutHexMapInputObjectSchema as CampaignUpdateToOneWithWhereWithoutHexMapInputObjectSchema } from './CampaignUpdateToOneWithWhereWithoutHexMapInput.schema';
import { CampaignUpdateWithoutHexMapInputObjectSchema as CampaignUpdateWithoutHexMapInputObjectSchema } from './CampaignUpdateWithoutHexMapInput.schema';
import { CampaignUncheckedUpdateWithoutHexMapInputObjectSchema as CampaignUncheckedUpdateWithoutHexMapInputObjectSchema } from './CampaignUncheckedUpdateWithoutHexMapInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => CampaignCreateWithoutHexMapInputObjectSchema), z.lazy(() => CampaignUncheckedCreateWithoutHexMapInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => CampaignCreateOrConnectWithoutHexMapInputObjectSchema).optional(),
  upsert: z.lazy(() => CampaignUpsertWithoutHexMapInputObjectSchema).optional(),
  connect: z.lazy(() => CampaignWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => CampaignUpdateToOneWithWhereWithoutHexMapInputObjectSchema), z.lazy(() => CampaignUpdateWithoutHexMapInputObjectSchema), z.lazy(() => CampaignUncheckedUpdateWithoutHexMapInputObjectSchema)]).optional()
}).strict();
export const CampaignUpdateOneRequiredWithoutHexMapNestedInputObjectSchema: z.ZodType<Prisma.CampaignUpdateOneRequiredWithoutHexMapNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.CampaignUpdateOneRequiredWithoutHexMapNestedInput>;
export const CampaignUpdateOneRequiredWithoutHexMapNestedInputObjectZodSchema = makeSchema();
