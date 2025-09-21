import { z } from 'zod';
import { SettlementCreateManyInputObjectSchema } from './objects/SettlementCreateManyInput.schema';

export const SettlementCreateManySchema = z.object({ data: z.union([ SettlementCreateManyInputObjectSchema, z.array(SettlementCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() })