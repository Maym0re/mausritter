import { z } from 'zod';
import { SettlementSelectObjectSchema } from './objects/SettlementSelect.schema';
import { SettlementCreateManyInputObjectSchema } from './objects/SettlementCreateManyInput.schema';

export const SettlementCreateManyAndReturnSchema = z.object({ select: SettlementSelectObjectSchema.optional(), data: z.union([ SettlementCreateManyInputObjectSchema, z.array(SettlementCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict()