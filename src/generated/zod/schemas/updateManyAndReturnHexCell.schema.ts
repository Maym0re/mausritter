import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { HexCellSelectObjectSchema as HexCellSelectObjectSchema } from './objects/HexCellSelect.schema';
import { HexCellUpdateManyMutationInputObjectSchema as HexCellUpdateManyMutationInputObjectSchema } from './objects/HexCellUpdateManyMutationInput.schema';
import { HexCellWhereInputObjectSchema as HexCellWhereInputObjectSchema } from './objects/HexCellWhereInput.schema';

export const HexCellUpdateManyAndReturnSchema: z.ZodType<Prisma.HexCellUpdateManyAndReturnArgs> = z.object({ select: HexCellSelectObjectSchema.optional(), data: HexCellUpdateManyMutationInputObjectSchema, where: HexCellWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.HexCellUpdateManyAndReturnArgs>;

export const HexCellUpdateManyAndReturnZodSchema = z.object({ select: HexCellSelectObjectSchema.optional(), data: HexCellUpdateManyMutationInputObjectSchema, where: HexCellWhereInputObjectSchema.optional() }).strict();