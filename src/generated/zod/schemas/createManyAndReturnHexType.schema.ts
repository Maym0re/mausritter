import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { HexTypeSelectObjectSchema as HexTypeSelectObjectSchema } from './objects/HexTypeSelect.schema';
import { HexTypeCreateManyInputObjectSchema as HexTypeCreateManyInputObjectSchema } from './objects/HexTypeCreateManyInput.schema';

export const HexTypeCreateManyAndReturnSchema: z.ZodType<Prisma.HexTypeCreateManyAndReturnArgs> = z.object({ select: HexTypeSelectObjectSchema.optional(), data: z.union([ HexTypeCreateManyInputObjectSchema, z.array(HexTypeCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.HexTypeCreateManyAndReturnArgs>;

export const HexTypeCreateManyAndReturnZodSchema = z.object({ select: HexTypeSelectObjectSchema.optional(), data: z.union([ HexTypeCreateManyInputObjectSchema, z.array(HexTypeCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();