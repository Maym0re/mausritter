import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CampaignCreateWithoutPlayersInputObjectSchema as CampaignCreateWithoutPlayersInputObjectSchema } from './CampaignCreateWithoutPlayersInput.schema';
import { CampaignUncheckedCreateWithoutPlayersInputObjectSchema as CampaignUncheckedCreateWithoutPlayersInputObjectSchema } from './CampaignUncheckedCreateWithoutPlayersInput.schema';
import { CampaignCreateOrConnectWithoutPlayersInputObjectSchema as CampaignCreateOrConnectWithoutPlayersInputObjectSchema } from './CampaignCreateOrConnectWithoutPlayersInput.schema';
import { CampaignUpsertWithoutPlayersInputObjectSchema as CampaignUpsertWithoutPlayersInputObjectSchema } from './CampaignUpsertWithoutPlayersInput.schema';
import { CampaignWhereUniqueInputObjectSchema as CampaignWhereUniqueInputObjectSchema } from './CampaignWhereUniqueInput.schema';
import { CampaignUpdateToOneWithWhereWithoutPlayersInputObjectSchema as CampaignUpdateToOneWithWhereWithoutPlayersInputObjectSchema } from './CampaignUpdateToOneWithWhereWithoutPlayersInput.schema';
import { CampaignUpdateWithoutPlayersInputObjectSchema as CampaignUpdateWithoutPlayersInputObjectSchema } from './CampaignUpdateWithoutPlayersInput.schema';
import { CampaignUncheckedUpdateWithoutPlayersInputObjectSchema as CampaignUncheckedUpdateWithoutPlayersInputObjectSchema } from './CampaignUncheckedUpdateWithoutPlayersInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => CampaignCreateWithoutPlayersInputObjectSchema), z.lazy(() => CampaignUncheckedCreateWithoutPlayersInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => CampaignCreateOrConnectWithoutPlayersInputObjectSchema).optional(),
  upsert: z.lazy(() => CampaignUpsertWithoutPlayersInputObjectSchema).optional(),
  connect: z.lazy(() => CampaignWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => CampaignUpdateToOneWithWhereWithoutPlayersInputObjectSchema), z.lazy(() => CampaignUpdateWithoutPlayersInputObjectSchema), z.lazy(() => CampaignUncheckedUpdateWithoutPlayersInputObjectSchema)]).optional()
}).strict();
export const CampaignUpdateOneRequiredWithoutPlayersNestedInputObjectSchema: z.ZodType<Prisma.CampaignUpdateOneRequiredWithoutPlayersNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.CampaignUpdateOneRequiredWithoutPlayersNestedInput>;
export const CampaignUpdateOneRequiredWithoutPlayersNestedInputObjectZodSchema = makeSchema();
