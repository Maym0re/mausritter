import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CampaignPlayerScalarWhereInputObjectSchema } from './CampaignPlayerScalarWhereInput.schema';
import { CampaignPlayerUpdateManyMutationInputObjectSchema } from './CampaignPlayerUpdateManyMutationInput.schema';
import { CampaignPlayerUncheckedUpdateManyWithoutCampaignInputObjectSchema } from './CampaignPlayerUncheckedUpdateManyWithoutCampaignInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CampaignPlayerScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => CampaignPlayerUpdateManyMutationInputObjectSchema), z.lazy(() => CampaignPlayerUncheckedUpdateManyWithoutCampaignInputObjectSchema)])
}).strict();
export const CampaignPlayerUpdateManyWithWhereWithoutCampaignInputObjectSchema: z.ZodType<Prisma.CampaignPlayerUpdateManyWithWhereWithoutCampaignInput> = makeSchema() as unknown as z.ZodType<Prisma.CampaignPlayerUpdateManyWithWhereWithoutCampaignInput>;
export const CampaignPlayerUpdateManyWithWhereWithoutCampaignInputObjectZodSchema = makeSchema();
