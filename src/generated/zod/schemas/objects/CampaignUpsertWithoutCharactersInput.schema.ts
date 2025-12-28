import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CampaignUpdateWithoutCharactersInputObjectSchema as CampaignUpdateWithoutCharactersInputObjectSchema } from './CampaignUpdateWithoutCharactersInput.schema';
import { CampaignUncheckedUpdateWithoutCharactersInputObjectSchema as CampaignUncheckedUpdateWithoutCharactersInputObjectSchema } from './CampaignUncheckedUpdateWithoutCharactersInput.schema';
import { CampaignCreateWithoutCharactersInputObjectSchema as CampaignCreateWithoutCharactersInputObjectSchema } from './CampaignCreateWithoutCharactersInput.schema';
import { CampaignUncheckedCreateWithoutCharactersInputObjectSchema as CampaignUncheckedCreateWithoutCharactersInputObjectSchema } from './CampaignUncheckedCreateWithoutCharactersInput.schema';
import { CampaignWhereInputObjectSchema as CampaignWhereInputObjectSchema } from './CampaignWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => CampaignUpdateWithoutCharactersInputObjectSchema), z.lazy(() => CampaignUncheckedUpdateWithoutCharactersInputObjectSchema)]),
  create: z.union([z.lazy(() => CampaignCreateWithoutCharactersInputObjectSchema), z.lazy(() => CampaignUncheckedCreateWithoutCharactersInputObjectSchema)]),
  where: z.lazy(() => CampaignWhereInputObjectSchema).optional()
}).strict();
export const CampaignUpsertWithoutCharactersInputObjectSchema: z.ZodType<Prisma.CampaignUpsertWithoutCharactersInput> = makeSchema() as unknown as z.ZodType<Prisma.CampaignUpsertWithoutCharactersInput>;
export const CampaignUpsertWithoutCharactersInputObjectZodSchema = makeSchema();
