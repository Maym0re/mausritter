import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { SettlementUpdateManyMutationInputObjectSchema as SettlementUpdateManyMutationInputObjectSchema } from './objects/SettlementUpdateManyMutationInput.schema';
import { SettlementWhereInputObjectSchema as SettlementWhereInputObjectSchema } from './objects/SettlementWhereInput.schema';

export const SettlementUpdateManySchema: z.ZodType<Prisma.SettlementUpdateManyArgs> = z.object({ data: SettlementUpdateManyMutationInputObjectSchema, where: SettlementWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.SettlementUpdateManyArgs>;

export const SettlementUpdateManyZodSchema = z.object({ data: SettlementUpdateManyMutationInputObjectSchema, where: SettlementWhereInputObjectSchema.optional() }).strict();