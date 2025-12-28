import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UserCreateNestedOneWithoutPlayerInInputObjectSchema as UserCreateNestedOneWithoutPlayerInInputObjectSchema } from './UserCreateNestedOneWithoutPlayerInInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  joinedAt: z.coerce.date().optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutPlayerInInputObjectSchema)
}).strict();
export const CampaignPlayerCreateWithoutCampaignInputObjectSchema: z.ZodType<Prisma.CampaignPlayerCreateWithoutCampaignInput> = makeSchema() as unknown as z.ZodType<Prisma.CampaignPlayerCreateWithoutCampaignInput>;
export const CampaignPlayerCreateWithoutCampaignInputObjectZodSchema = makeSchema();
