import { z } from 'zod';
import { SettlementSelectObjectSchema } from './objects/SettlementSelect.schema';
import { SettlementIncludeObjectSchema } from './objects/SettlementInclude.schema';
import { SettlementUpdateInputObjectSchema } from './objects/SettlementUpdateInput.schema';
import { SettlementUncheckedUpdateInputObjectSchema } from './objects/SettlementUncheckedUpdateInput.schema';
import { SettlementWhereUniqueInputObjectSchema } from './objects/SettlementWhereUniqueInput.schema';

export const SettlementUpdateOneSchema = z.object({ select: SettlementSelectObjectSchema.optional(), include: SettlementIncludeObjectSchema.optional(), data: z.union([SettlementUpdateInputObjectSchema, SettlementUncheckedUpdateInputObjectSchema]), where: SettlementWhereUniqueInputObjectSchema  })