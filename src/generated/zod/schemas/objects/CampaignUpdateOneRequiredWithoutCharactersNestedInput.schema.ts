import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CampaignCreateWithoutCharactersInputObjectSchema as CampaignCreateWithoutCharactersInputObjectSchema } from './CampaignCreateWithoutCharactersInput.schema';
import { CampaignUncheckedCreateWithoutCharactersInputObjectSchema as CampaignUncheckedCreateWithoutCharactersInputObjectSchema } from './CampaignUncheckedCreateWithoutCharactersInput.schema';
import { CampaignCreateOrConnectWithoutCharactersInputObjectSchema as CampaignCreateOrConnectWithoutCharactersInputObjectSchema } from './CampaignCreateOrConnectWithoutCharactersInput.schema';
import { CampaignUpsertWithoutCharactersInputObjectSchema as CampaignUpsertWithoutCharactersInputObjectSchema } from './CampaignUpsertWithoutCharactersInput.schema';
import { CampaignWhereUniqueInputObjectSchema as CampaignWhereUniqueInputObjectSchema } from './CampaignWhereUniqueInput.schema';
import { CampaignUpdateToOneWithWhereWithoutCharactersInputObjectSchema as CampaignUpdateToOneWithWhereWithoutCharactersInputObjectSchema } from './CampaignUpdateToOneWithWhereWithoutCharactersInput.schema';
import { CampaignUpdateWithoutCharactersInputObjectSchema as CampaignUpdateWithoutCharactersInputObjectSchema } from './CampaignUpdateWithoutCharactersInput.schema';
import { CampaignUncheckedUpdateWithoutCharactersInputObjectSchema as CampaignUncheckedUpdateWithoutCharactersInputObjectSchema } from './CampaignUncheckedUpdateWithoutCharactersInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => CampaignCreateWithoutCharactersInputObjectSchema), z.lazy(() => CampaignUncheckedCreateWithoutCharactersInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => CampaignCreateOrConnectWithoutCharactersInputObjectSchema).optional(),
  upsert: z.lazy(() => CampaignUpsertWithoutCharactersInputObjectSchema).optional(),
  connect: z.lazy(() => CampaignWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => CampaignUpdateToOneWithWhereWithoutCharactersInputObjectSchema), z.lazy(() => CampaignUpdateWithoutCharactersInputObjectSchema), z.lazy(() => CampaignUncheckedUpdateWithoutCharactersInputObjectSchema)]).optional()
}).strict();
export const CampaignUpdateOneRequiredWithoutCharactersNestedInputObjectSchema: z.ZodType<Prisma.CampaignUpdateOneRequiredWithoutCharactersNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.CampaignUpdateOneRequiredWithoutCharactersNestedInput>;
export const CampaignUpdateOneRequiredWithoutCharactersNestedInputObjectZodSchema = makeSchema();
