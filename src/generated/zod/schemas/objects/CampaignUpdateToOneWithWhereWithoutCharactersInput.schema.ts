import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CampaignWhereInputObjectSchema as CampaignWhereInputObjectSchema } from './CampaignWhereInput.schema';
import { CampaignUpdateWithoutCharactersInputObjectSchema as CampaignUpdateWithoutCharactersInputObjectSchema } from './CampaignUpdateWithoutCharactersInput.schema';
import { CampaignUncheckedUpdateWithoutCharactersInputObjectSchema as CampaignUncheckedUpdateWithoutCharactersInputObjectSchema } from './CampaignUncheckedUpdateWithoutCharactersInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CampaignWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => CampaignUpdateWithoutCharactersInputObjectSchema), z.lazy(() => CampaignUncheckedUpdateWithoutCharactersInputObjectSchema)])
}).strict();
export const CampaignUpdateToOneWithWhereWithoutCharactersInputObjectSchema: z.ZodType<Prisma.CampaignUpdateToOneWithWhereWithoutCharactersInput> = makeSchema() as unknown as z.ZodType<Prisma.CampaignUpdateToOneWithWhereWithoutCharactersInput>;
export const CampaignUpdateToOneWithWhereWithoutCharactersInputObjectZodSchema = makeSchema();
