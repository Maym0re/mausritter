import { z } from 'zod';
import { SettlementWhereInputObjectSchema } from './objects/SettlementWhereInput.schema';

export const SettlementDeleteManySchema = z.object({ where: SettlementWhereInputObjectSchema.optional()  })