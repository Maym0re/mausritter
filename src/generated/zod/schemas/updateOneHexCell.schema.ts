import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { HexCellSelectObjectSchema as HexCellSelectObjectSchema } from './objects/HexCellSelect.schema';
import { HexCellIncludeObjectSchema as HexCellIncludeObjectSchema } from './objects/HexCellInclude.schema';
import { HexCellUpdateInputObjectSchema as HexCellUpdateInputObjectSchema } from './objects/HexCellUpdateInput.schema';
import { HexCellUncheckedUpdateInputObjectSchema as HexCellUncheckedUpdateInputObjectSchema } from './objects/HexCellUncheckedUpdateInput.schema';
import { HexCellWhereUniqueInputObjectSchema as HexCellWhereUniqueInputObjectSchema } from './objects/HexCellWhereUniqueInput.schema';

export const HexCellUpdateOneSchema: z.ZodType<Prisma.HexCellUpdateArgs> = z.object({ select: HexCellSelectObjectSchema.optional(), include: HexCellIncludeObjectSchema.optional(), data: z.union([HexCellUpdateInputObjectSchema, HexCellUncheckedUpdateInputObjectSchema]), where: HexCellWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.HexCellUpdateArgs>;

export const HexCellUpdateOneZodSchema = z.object({ select: HexCellSelectObjectSchema.optional(), include: HexCellIncludeObjectSchema.optional(), data: z.union([HexCellUpdateInputObjectSchema, HexCellUncheckedUpdateInputObjectSchema]), where: HexCellWhereUniqueInputObjectSchema }).strict();