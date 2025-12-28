import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { HexCellCreateManyInputObjectSchema as HexCellCreateManyInputObjectSchema } from './objects/HexCellCreateManyInput.schema';

export const HexCellCreateManySchema: z.ZodType<Prisma.HexCellCreateManyArgs> = z.object({ data: z.union([ HexCellCreateManyInputObjectSchema, z.array(HexCellCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.HexCellCreateManyArgs>;

export const HexCellCreateManyZodSchema = z.object({ data: z.union([ HexCellCreateManyInputObjectSchema, z.array(HexCellCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();