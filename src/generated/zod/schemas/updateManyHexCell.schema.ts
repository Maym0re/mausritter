import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { HexCellUpdateManyMutationInputObjectSchema as HexCellUpdateManyMutationInputObjectSchema } from './objects/HexCellUpdateManyMutationInput.schema';
import { HexCellWhereInputObjectSchema as HexCellWhereInputObjectSchema } from './objects/HexCellWhereInput.schema';

export const HexCellUpdateManySchema: z.ZodType<Prisma.HexCellUpdateManyArgs> = z.object({ data: HexCellUpdateManyMutationInputObjectSchema, where: HexCellWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.HexCellUpdateManyArgs>;

export const HexCellUpdateManyZodSchema = z.object({ data: HexCellUpdateManyMutationInputObjectSchema, where: HexCellWhereInputObjectSchema.optional() }).strict();