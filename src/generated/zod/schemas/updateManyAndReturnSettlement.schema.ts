import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { SettlementSelectObjectSchema as SettlementSelectObjectSchema } from './objects/SettlementSelect.schema';
import { SettlementUpdateManyMutationInputObjectSchema as SettlementUpdateManyMutationInputObjectSchema } from './objects/SettlementUpdateManyMutationInput.schema';
import { SettlementWhereInputObjectSchema as SettlementWhereInputObjectSchema } from './objects/SettlementWhereInput.schema';

export const SettlementUpdateManyAndReturnSchema: z.ZodType<Prisma.SettlementUpdateManyAndReturnArgs> = z.object({ select: SettlementSelectObjectSchema.optional(), data: SettlementUpdateManyMutationInputObjectSchema, where: SettlementWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.SettlementUpdateManyAndReturnArgs>;

export const SettlementUpdateManyAndReturnZodSchema = z.object({ select: SettlementSelectObjectSchema.optional(), data: SettlementUpdateManyMutationInputObjectSchema, where: SettlementWhereInputObjectSchema.optional() }).strict();