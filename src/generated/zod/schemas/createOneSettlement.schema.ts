import { z } from 'zod';
import { SettlementSelectObjectSchema } from './objects/SettlementSelect.schema';
import { SettlementIncludeObjectSchema } from './objects/SettlementInclude.schema';
import { SettlementCreateInputObjectSchema } from './objects/SettlementCreateInput.schema';
import { SettlementUncheckedCreateInputObjectSchema } from './objects/SettlementUncheckedCreateInput.schema';

export const SettlementCreateOneSchema = z.object({ select: SettlementSelectObjectSchema.optional(), include: SettlementIncludeObjectSchema.optional(), data: z.union([SettlementCreateInputObjectSchema, SettlementUncheckedCreateInputObjectSchema])  })