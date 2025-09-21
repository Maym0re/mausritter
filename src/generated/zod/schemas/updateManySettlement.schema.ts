import { z } from 'zod';
import { SettlementUpdateManyMutationInputObjectSchema } from './objects/SettlementUpdateManyMutationInput.schema';
import { SettlementWhereInputObjectSchema } from './objects/SettlementWhereInput.schema';

export const SettlementUpdateManySchema = z.object({ data: SettlementUpdateManyMutationInputObjectSchema, where: SettlementWhereInputObjectSchema.optional()  })