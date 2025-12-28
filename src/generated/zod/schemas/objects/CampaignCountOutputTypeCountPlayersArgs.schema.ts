import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CampaignPlayerWhereInputObjectSchema as CampaignPlayerWhereInputObjectSchema } from './CampaignPlayerWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CampaignPlayerWhereInputObjectSchema).optional()
}).strict();
export const CampaignCountOutputTypeCountPlayersArgsObjectSchema = makeSchema();
export const CampaignCountOutputTypeCountPlayersArgsObjectZodSchema = makeSchema();
