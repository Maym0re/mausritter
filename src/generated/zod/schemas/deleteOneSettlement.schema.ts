import { z } from 'zod';
import { SettlementSelectObjectSchema } from './objects/SettlementSelect.schema';
import { SettlementIncludeObjectSchema } from './objects/SettlementInclude.schema';
import { SettlementWhereUniqueInputObjectSchema } from './objects/SettlementWhereUniqueInput.schema';

export const SettlementDeleteOneSchema = z.object({ select: SettlementSelectObjectSchema.optional(), include: SettlementIncludeObjectSchema.optional(), where: SettlementWhereUniqueInputObjectSchema  })