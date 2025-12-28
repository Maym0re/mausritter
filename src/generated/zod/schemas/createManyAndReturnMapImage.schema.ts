import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { MapImageSelectObjectSchema as MapImageSelectObjectSchema } from './objects/MapImageSelect.schema';
import { MapImageCreateManyInputObjectSchema as MapImageCreateManyInputObjectSchema } from './objects/MapImageCreateManyInput.schema';

export const MapImageCreateManyAndReturnSchema: z.ZodType<Prisma.MapImageCreateManyAndReturnArgs> = z.object({ select: MapImageSelectObjectSchema.optional(), data: z.union([ MapImageCreateManyInputObjectSchema, z.array(MapImageCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.MapImageCreateManyAndReturnArgs>;

export const MapImageCreateManyAndReturnZodSchema = z.object({ select: MapImageSelectObjectSchema.optional(), data: z.union([ MapImageCreateManyInputObjectSchema, z.array(MapImageCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();