import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CampaignCreateNestedOneWithoutPlayersInputObjectSchema } from './CampaignCreateNestedOneWithoutPlayersInput.schema';
import { UserCreateNestedOneWithoutPlayerInInputObjectSchema } from './UserCreateNestedOneWithoutPlayerInInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  joinedAt: z.coerce.date().optional(),
  campaign: z.lazy(() => CampaignCreateNestedOneWithoutPlayersInputObjectSchema),
  user: z.lazy(() => UserCreateNestedOneWithoutPlayerInInputObjectSchema)
}).strict();
export const CampaignPlayerCreateInputObjectSchema: z.ZodType<Prisma.CampaignPlayerCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.CampaignPlayerCreateInput>;
export const CampaignPlayerCreateInputObjectZodSchema = makeSchema();
