import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CampaignCreateWithoutPlayersInputObjectSchema } from './CampaignCreateWithoutPlayersInput.schema';
import { CampaignUncheckedCreateWithoutPlayersInputObjectSchema } from './CampaignUncheckedCreateWithoutPlayersInput.schema';
import { CampaignCreateOrConnectWithoutPlayersInputObjectSchema } from './CampaignCreateOrConnectWithoutPlayersInput.schema';
import { CampaignUpsertWithoutPlayersInputObjectSchema } from './CampaignUpsertWithoutPlayersInput.schema';
import { CampaignWhereUniqueInputObjectSchema } from './CampaignWhereUniqueInput.schema';
import { CampaignUpdateToOneWithWhereWithoutPlayersInputObjectSchema } from './CampaignUpdateToOneWithWhereWithoutPlayersInput.schema';
import { CampaignUpdateWithoutPlayersInputObjectSchema } from './CampaignUpdateWithoutPlayersInput.schema';
import { CampaignUncheckedUpdateWithoutPlayersInputObjectSchema } from './CampaignUncheckedUpdateWithoutPlayersInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => CampaignCreateWithoutPlayersInputObjectSchema), z.lazy(() => CampaignUncheckedCreateWithoutPlayersInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => CampaignCreateOrConnectWithoutPlayersInputObjectSchema).optional(),
  upsert: z.lazy(() => CampaignUpsertWithoutPlayersInputObjectSchema).optional(),
  connect: z.lazy(() => CampaignWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => CampaignUpdateToOneWithWhereWithoutPlayersInputObjectSchema), z.lazy(() => CampaignUpdateWithoutPlayersInputObjectSchema), z.lazy(() => CampaignUncheckedUpdateWithoutPlayersInputObjectSchema)]).optional()
}).strict();
export const CampaignUpdateOneRequiredWithoutPlayersNestedInputObjectSchema: z.ZodType<Prisma.CampaignUpdateOneRequiredWithoutPlayersNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.CampaignUpdateOneRequiredWithoutPlayersNestedInput>;
export const CampaignUpdateOneRequiredWithoutPlayersNestedInputObjectZodSchema = makeSchema();
