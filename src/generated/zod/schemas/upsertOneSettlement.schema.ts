import { z } from 'zod';
import { SettlementSelectObjectSchema } from './objects/SettlementSelect.schema';
import { SettlementIncludeObjectSchema } from './objects/SettlementInclude.schema';
import { SettlementWhereUniqueInputObjectSchema } from './objects/SettlementWhereUniqueInput.schema';
import { SettlementCreateInputObjectSchema } from './objects/SettlementCreateInput.schema';
import { SettlementUncheckedCreateInputObjectSchema } from './objects/SettlementUncheckedCreateInput.schema';
import { SettlementUpdateInputObjectSchema } from './objects/SettlementUpdateInput.schema';
import { SettlementUncheckedUpdateInputObjectSchema } from './objects/SettlementUncheckedUpdateInput.schema';

export const SettlementUpsertSchema = z.object({ select: SettlementSelectObjectSchema.optional(), include: SettlementIncludeObjectSchema.optional(), where: SettlementWhereUniqueInputObjectSchema, create: z.union([ SettlementCreateInputObjectSchema, SettlementUncheckedCreateInputObjectSchema ]), update: z.union([ SettlementUpdateInputObjectSchema, SettlementUncheckedUpdateInputObjectSchema ])  })