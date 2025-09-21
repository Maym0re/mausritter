import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CampaignScalarWhereInputObjectSchema } from './CampaignScalarWhereInput.schema';
import { CampaignUpdateManyMutationInputObjectSchema } from './CampaignUpdateManyMutationInput.schema';
import { CampaignUncheckedUpdateManyWithoutGmInputObjectSchema } from './CampaignUncheckedUpdateManyWithoutGmInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CampaignScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => CampaignUpdateManyMutationInputObjectSchema), z.lazy(() => CampaignUncheckedUpdateManyWithoutGmInputObjectSchema)])
}).strict();
export const CampaignUpdateManyWithWhereWithoutGmInputObjectSchema: z.ZodType<Prisma.CampaignUpdateManyWithWhereWithoutGmInput> = makeSchema() as unknown as z.ZodType<Prisma.CampaignUpdateManyWithWhereWithoutGmInput>;
export const CampaignUpdateManyWithWhereWithoutGmInputObjectZodSchema = makeSchema();
