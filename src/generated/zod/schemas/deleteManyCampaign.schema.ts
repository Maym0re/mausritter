import { z } from 'zod';
import { CampaignWhereInputObjectSchema } from './objects/CampaignWhereInput.schema';

export const CampaignDeleteManySchema = z.object({ where: CampaignWhereInputObjectSchema.optional()  })