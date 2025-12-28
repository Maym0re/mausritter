import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { MapImageSelectObjectSchema as MapImageSelectObjectSchema } from './objects/MapImageSelect.schema';
import { MapImageIncludeObjectSchema as MapImageIncludeObjectSchema } from './objects/MapImageInclude.schema';
import { MapImageWhereUniqueInputObjectSchema as MapImageWhereUniqueInputObjectSchema } from './objects/MapImageWhereUniqueInput.schema';
import { MapImageCreateInputObjectSchema as MapImageCreateInputObjectSchema } from './objects/MapImageCreateInput.schema';
import { MapImageUncheckedCreateInputObjectSchema as MapImageUncheckedCreateInputObjectSchema } from './objects/MapImageUncheckedCreateInput.schema';
import { MapImageUpdateInputObjectSchema as MapImageUpdateInputObjectSchema } from './objects/MapImageUpdateInput.schema';
import { MapImageUncheckedUpdateInputObjectSchema as MapImageUncheckedUpdateInputObjectSchema } from './objects/MapImageUncheckedUpdateInput.schema';

export const MapImageUpsertOneSchema: z.ZodType<Prisma.MapImageUpsertArgs> = z.object({ select: MapImageSelectObjectSchema.optional(), include: MapImageIncludeObjectSchema.optional(), where: MapImageWhereUniqueInputObjectSchema, create: z.union([ MapImageCreateInputObjectSchema, MapImageUncheckedCreateInputObjectSchema ]), update: z.union([ MapImageUpdateInputObjectSchema, MapImageUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.MapImageUpsertArgs>;

export const MapImageUpsertOneZodSchema = z.object({ select: MapImageSelectObjectSchema.optional(), include: MapImageIncludeObjectSchema.optional(), where: MapImageWhereUniqueInputObjectSchema, create: z.union([ MapImageCreateInputObjectSchema, MapImageUncheckedCreateInputObjectSchema ]), update: z.union([ MapImageUpdateInputObjectSchema, MapImageUncheckedUpdateInputObjectSchema ]) }).strict();