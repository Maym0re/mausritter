import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { HexTypeCreateManyInputObjectSchema as HexTypeCreateManyInputObjectSchema } from './objects/HexTypeCreateManyInput.schema';

export const HexTypeCreateManySchema: z.ZodType<Prisma.HexTypeCreateManyArgs> = z.object({ data: z.union([ HexTypeCreateManyInputObjectSchema, z.array(HexTypeCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.HexTypeCreateManyArgs>;

export const HexTypeCreateManyZodSchema = z.object({ data: z.union([ HexTypeCreateManyInputObjectSchema, z.array(HexTypeCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();