import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { SettlementSelectObjectSchema as SettlementSelectObjectSchema } from './objects/SettlementSelect.schema';
import { SettlementCreateManyInputObjectSchema as SettlementCreateManyInputObjectSchema } from './objects/SettlementCreateManyInput.schema';

export const SettlementCreateManyAndReturnSchema: z.ZodType<Prisma.SettlementCreateManyAndReturnArgs> = z.object({ select: SettlementSelectObjectSchema.optional(), data: z.union([ SettlementCreateManyInputObjectSchema, z.array(SettlementCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.SettlementCreateManyAndReturnArgs>;

export const SettlementCreateManyAndReturnZodSchema = z.object({ select: SettlementSelectObjectSchema.optional(), data: z.union([ SettlementCreateManyInputObjectSchema, z.array(SettlementCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();