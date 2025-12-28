import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { SettlementSelectObjectSchema as SettlementSelectObjectSchema } from './objects/SettlementSelect.schema';
import { SettlementIncludeObjectSchema as SettlementIncludeObjectSchema } from './objects/SettlementInclude.schema';
import { SettlementCreateInputObjectSchema as SettlementCreateInputObjectSchema } from './objects/SettlementCreateInput.schema';
import { SettlementUncheckedCreateInputObjectSchema as SettlementUncheckedCreateInputObjectSchema } from './objects/SettlementUncheckedCreateInput.schema';

export const SettlementCreateOneSchema: z.ZodType<Prisma.SettlementCreateArgs> = z.object({ select: SettlementSelectObjectSchema.optional(), include: SettlementIncludeObjectSchema.optional(), data: z.union([SettlementCreateInputObjectSchema, SettlementUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.SettlementCreateArgs>;

export const SettlementCreateOneZodSchema = z.object({ select: SettlementSelectObjectSchema.optional(), include: SettlementIncludeObjectSchema.optional(), data: z.union([SettlementCreateInputObjectSchema, SettlementUncheckedCreateInputObjectSchema]) }).strict();