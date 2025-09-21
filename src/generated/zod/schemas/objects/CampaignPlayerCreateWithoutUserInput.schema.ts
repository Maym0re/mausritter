import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CampaignCreateNestedOneWithoutPlayersInputObjectSchema } from './CampaignCreateNestedOneWithoutPlayersInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  joinedAt: z.coerce.date().optional(),
  campaign: z.lazy(() => CampaignCreateNestedOneWithoutPlayersInputObjectSchema)
}).strict();
export const CampaignPlayerCreateWithoutUserInputObjectSchema: z.ZodType<Prisma.CampaignPlayerCreateWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.CampaignPlayerCreateWithoutUserInput>;
export const CampaignPlayerCreateWithoutUserInputObjectZodSchema = makeSchema();
