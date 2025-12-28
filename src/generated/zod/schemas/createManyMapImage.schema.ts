import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { MapImageCreateManyInputObjectSchema as MapImageCreateManyInputObjectSchema } from './objects/MapImageCreateManyInput.schema';

export const MapImageCreateManySchema: z.ZodType<Prisma.MapImageCreateManyArgs> = z.object({ data: z.union([ MapImageCreateManyInputObjectSchema, z.array(MapImageCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.MapImageCreateManyArgs>;

export const MapImageCreateManyZodSchema = z.object({ data: z.union([ MapImageCreateManyInputObjectSchema, z.array(MapImageCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();