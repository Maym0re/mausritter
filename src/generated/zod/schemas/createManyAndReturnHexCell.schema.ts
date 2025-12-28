import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { HexCellSelectObjectSchema as HexCellSelectObjectSchema } from './objects/HexCellSelect.schema';
import { HexCellCreateManyInputObjectSchema as HexCellCreateManyInputObjectSchema } from './objects/HexCellCreateManyInput.schema';

export const HexCellCreateManyAndReturnSchema: z.ZodType<Prisma.HexCellCreateManyAndReturnArgs> = z.object({ select: HexCellSelectObjectSchema.optional(), data: z.union([ HexCellCreateManyInputObjectSchema, z.array(HexCellCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.HexCellCreateManyAndReturnArgs>;

export const HexCellCreateManyAndReturnZodSchema = z.object({ select: HexCellSelectObjectSchema.optional(), data: z.union([ HexCellCreateManyInputObjectSchema, z.array(HexCellCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();