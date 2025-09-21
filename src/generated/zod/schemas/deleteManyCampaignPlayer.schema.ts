import { z } from 'zod';
import { CampaignPlayerWhereInputObjectSchema } from './objects/CampaignPlayerWhereInput.schema';

export const CampaignPlayerDeleteManySchema = z.object({ where: CampaignPlayerWhereInputObjectSchema.optional()  })