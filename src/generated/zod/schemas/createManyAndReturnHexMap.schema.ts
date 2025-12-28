import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { HexMapSelectObjectSchema as HexMapSelectObjectSchema } from './objects/HexMapSelect.schema';
import { HexMapCreateManyInputObjectSchema as HexMapCreateManyInputObjectSchema } from './objects/HexMapCreateManyInput.schema';

export const HexMapCreateManyAndReturnSchema: z.ZodType<Prisma.HexMapCreateManyAndReturnArgs> = z.object({ select: HexMapSelectObjectSchema.optional(), data: z.union([ HexMapCreateManyInputObjectSchema, z.array(HexMapCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.HexMapCreateManyAndReturnArgs>;

export const HexMapCreateManyAndReturnZodSchema = z.object({ select: HexMapSelectObjectSchema.optional(), data: z.union([ HexMapCreateManyInputObjectSchema, z.array(HexMapCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();