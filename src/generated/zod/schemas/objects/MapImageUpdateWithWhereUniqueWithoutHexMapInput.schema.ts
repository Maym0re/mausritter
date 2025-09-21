import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { MapImageWhereUniqueInputObjectSchema } from './MapImageWhereUniqueInput.schema';
import { MapImageUpdateWithoutHexMapInputObjectSchema } from './MapImageUpdateWithoutHexMapInput.schema';
import { MapImageUncheckedUpdateWithoutHexMapInputObjectSchema } from './MapImageUncheckedUpdateWithoutHexMapInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => MapImageWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => MapImageUpdateWithoutHexMapInputObjectSchema), z.lazy(() => MapImageUncheckedUpdateWithoutHexMapInputObjectSchema)])
}).strict();
export const MapImageUpdateWithWhereUniqueWithoutHexMapInputObjectSchema: z.ZodType<Prisma.MapImageUpdateWithWhereUniqueWithoutHexMapInput> = makeSchema() as unknown as z.ZodType<Prisma.MapImageUpdateWithWhereUniqueWithoutHexMapInput>;
export const MapImageUpdateWithWhereUniqueWithoutHexMapInputObjectZodSchema = makeSchema();
