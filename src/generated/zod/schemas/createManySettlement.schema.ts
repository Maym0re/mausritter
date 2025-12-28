import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { SettlementCreateManyInputObjectSchema as SettlementCreateManyInputObjectSchema } from './objects/SettlementCreateManyInput.schema';

export const SettlementCreateManySchema: z.ZodType<Prisma.SettlementCreateManyArgs> = z.object({ data: z.union([ SettlementCreateManyInputObjectSchema, z.array(SettlementCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.SettlementCreateManyArgs>;

export const SettlementCreateManyZodSchema = z.object({ data: z.union([ SettlementCreateManyInputObjectSchema, z.array(SettlementCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();