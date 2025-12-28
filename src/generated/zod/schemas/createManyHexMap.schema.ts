import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { HexMapCreateManyInputObjectSchema as HexMapCreateManyInputObjectSchema } from './objects/HexMapCreateManyInput.schema';

export const HexMapCreateManySchema: z.ZodType<Prisma.HexMapCreateManyArgs> = z.object({ data: z.union([ HexMapCreateManyInputObjectSchema, z.array(HexMapCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.HexMapCreateManyArgs>;

export const HexMapCreateManyZodSchema = z.object({ data: z.union([ HexMapCreateManyInputObjectSchema, z.array(HexMapCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();