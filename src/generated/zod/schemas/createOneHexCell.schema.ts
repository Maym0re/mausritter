import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { HexCellSelectObjectSchema as HexCellSelectObjectSchema } from './objects/HexCellSelect.schema';
import { HexCellIncludeObjectSchema as HexCellIncludeObjectSchema } from './objects/HexCellInclude.schema';
import { HexCellCreateInputObjectSchema as HexCellCreateInputObjectSchema } from './objects/HexCellCreateInput.schema';
import { HexCellUncheckedCreateInputObjectSchema as HexCellUncheckedCreateInputObjectSchema } from './objects/HexCellUncheckedCreateInput.schema';

export const HexCellCreateOneSchema: z.ZodType<Prisma.HexCellCreateArgs> = z.object({ select: HexCellSelectObjectSchema.optional(), include: HexCellIncludeObjectSchema.optional(), data: z.union([HexCellCreateInputObjectSchema, HexCellUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.HexCellCreateArgs>;

export const HexCellCreateOneZodSchema = z.object({ select: HexCellSelectObjectSchema.optional(), include: HexCellIncludeObjectSchema.optional(), data: z.union([HexCellCreateInputObjectSchema, HexCellUncheckedCreateInputObjectSchema]) }).strict();