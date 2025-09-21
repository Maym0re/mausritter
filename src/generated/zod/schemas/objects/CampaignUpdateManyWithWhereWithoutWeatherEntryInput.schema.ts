import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CampaignScalarWhereInputObjectSchema } from './CampaignScalarWhereInput.schema';
import { CampaignUpdateManyMutationInputObjectSchema } from './CampaignUpdateManyMutationInput.schema';
import { CampaignUncheckedUpdateManyWithoutWeatherEntryInputObjectSchema } from './CampaignUncheckedUpdateManyWithoutWeatherEntryInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CampaignScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => CampaignUpdateManyMutationInputObjectSchema), z.lazy(() => CampaignUncheckedUpdateManyWithoutWeatherEntryInputObjectSchema)])
}).strict();
export const CampaignUpdateManyWithWhereWithoutWeatherEntryInputObjectSchema: z.ZodType<Prisma.CampaignUpdateManyWithWhereWithoutWeatherEntryInput> = makeSchema() as unknown as z.ZodType<Prisma.CampaignUpdateManyWithWhereWithoutWeatherEntryInput>;
export const CampaignUpdateManyWithWhereWithoutWeatherEntryInputObjectZodSchema = makeSchema();
