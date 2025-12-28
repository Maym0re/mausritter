import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { MapImageSelectObjectSchema as MapImageSelectObjectSchema } from './objects/MapImageSelect.schema';
import { MapImageIncludeObjectSchema as MapImageIncludeObjectSchema } from './objects/MapImageInclude.schema';
import { MapImageCreateInputObjectSchema as MapImageCreateInputObjectSchema } from './objects/MapImageCreateInput.schema';
import { MapImageUncheckedCreateInputObjectSchema as MapImageUncheckedCreateInputObjectSchema } from './objects/MapImageUncheckedCreateInput.schema';

export const MapImageCreateOneSchema: z.ZodType<Prisma.MapImageCreateArgs> = z.object({ select: MapImageSelectObjectSchema.optional(), include: MapImageIncludeObjectSchema.optional(), data: z.union([MapImageCreateInputObjectSchema, MapImageUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.MapImageCreateArgs>;

export const MapImageCreateOneZodSchema = z.object({ select: MapImageSelectObjectSchema.optional(), include: MapImageIncludeObjectSchema.optional(), data: z.union([MapImageCreateInputObjectSchema, MapImageUncheckedCreateInputObjectSchema]) }).strict();