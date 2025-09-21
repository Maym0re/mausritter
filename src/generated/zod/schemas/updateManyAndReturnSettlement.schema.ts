import { z } from 'zod';
import { SettlementSelectObjectSchema } from './objects/SettlementSelect.schema';
import { SettlementUpdateManyMutationInputObjectSchema } from './objects/SettlementUpdateManyMutationInput.schema';
import { SettlementWhereInputObjectSchema } from './objects/SettlementWhereInput.schema';

export const SettlementUpdateManyAndReturnSchema = z.object({ select: SettlementSelectObjectSchema.optional(), data: SettlementUpdateManyMutationInputObjectSchema, where: SettlementWhereInputObjectSchema.optional()  }).strict()