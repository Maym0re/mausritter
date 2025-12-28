import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { HexCellSelectObjectSchema as HexCellSelectObjectSchema } from './objects/HexCellSelect.schema';
import { HexCellIncludeObjectSchema as HexCellIncludeObjectSchema } from './objects/HexCellInclude.schema';
import { HexCellWhereUniqueInputObjectSchema as HexCellWhereUniqueInputObjectSchema } from './objects/HexCellWhereUniqueInput.schema';
import { HexCellCreateInputObjectSchema as HexCellCreateInputObjectSchema } from './objects/HexCellCreateInput.schema';
import { HexCellUncheckedCreateInputObjectSchema as HexCellUncheckedCreateInputObjectSchema } from './objects/HexCellUncheckedCreateInput.schema';
import { HexCellUpdateInputObjectSchema as HexCellUpdateInputObjectSchema } from './objects/HexCellUpdateInput.schema';
import { HexCellUncheckedUpdateInputObjectSchema as HexCellUncheckedUpdateInputObjectSchema } from './objects/HexCellUncheckedUpdateInput.schema';

export const HexCellUpsertOneSchema: z.ZodType<Prisma.HexCellUpsertArgs> = z.object({ select: HexCellSelectObjectSchema.optional(), include: HexCellIncludeObjectSchema.optional(), where: HexCellWhereUniqueInputObjectSchema, create: z.union([ HexCellCreateInputObjectSchema, HexCellUncheckedCreateInputObjectSchema ]), update: z.union([ HexCellUpdateInputObjectSchema, HexCellUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.HexCellUpsertArgs>;

export const HexCellUpsertOneZodSchema = z.object({ select: HexCellSelectObjectSchema.optional(), include: HexCellIncludeObjectSchema.optional(), where: HexCellWhereUniqueInputObjectSchema, create: z.union([ HexCellCreateInputObjectSchema, HexCellUncheckedCreateInputObjectSchema ]), update: z.union([ HexCellUpdateInputObjectSchema, HexCellUncheckedUpdateInputObjectSchema ]) }).strict();