import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CampaignPlayerScalarWhereInputObjectSchema } from './CampaignPlayerScalarWhereInput.schema';
import { CampaignPlayerUpdateManyMutationInputObjectSchema } from './CampaignPlayerUpdateManyMutationInput.schema';
import { CampaignPlayerUncheckedUpdateManyWithoutUserInputObjectSchema } from './CampaignPlayerUncheckedUpdateManyWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CampaignPlayerScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => CampaignPlayerUpdateManyMutationInputObjectSchema), z.lazy(() => CampaignPlayerUncheckedUpdateManyWithoutUserInputObjectSchema)])
}).strict();
export const CampaignPlayerUpdateManyWithWhereWithoutUserInputObjectSchema: z.ZodType<Prisma.CampaignPlayerUpdateManyWithWhereWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.CampaignPlayerUpdateManyWithWhereWithoutUserInput>;
export const CampaignPlayerUpdateManyWithWhereWithoutUserInputObjectZodSchema = makeSchema();
