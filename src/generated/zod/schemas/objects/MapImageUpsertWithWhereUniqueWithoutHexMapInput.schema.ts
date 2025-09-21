import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { MapImageWhereUniqueInputObjectSchema } from './MapImageWhereUniqueInput.schema';
import { MapImageUpdateWithoutHexMapInputObjectSchema } from './MapImageUpdateWithoutHexMapInput.schema';
import { MapImageUncheckedUpdateWithoutHexMapInputObjectSchema } from './MapImageUncheckedUpdateWithoutHexMapInput.schema';
import { MapImageCreateWithoutHexMapInputObjectSchema } from './MapImageCreateWithoutHexMapInput.schema';
import { MapImageUncheckedCreateWithoutHexMapInputObjectSchema } from './MapImageUncheckedCreateWithoutHexMapInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => MapImageWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => MapImageUpdateWithoutHexMapInputObjectSchema), z.lazy(() => MapImageUncheckedUpdateWithoutHexMapInputObjectSchema)]),
  create: z.union([z.lazy(() => MapImageCreateWithoutHexMapInputObjectSchema), z.lazy(() => MapImageUncheckedCreateWithoutHexMapInputObjectSchema)])
}).strict();
export const MapImageUpsertWithWhereUniqueWithoutHexMapInputObjectSchema: z.ZodType<Prisma.MapImageUpsertWithWhereUniqueWithoutHexMapInput> = makeSchema() as unknown as z.ZodType<Prisma.MapImageUpsertWithWhereUniqueWithoutHexMapInput>;
export const MapImageUpsertWithWhereUniqueWithoutHexMapInputObjectZodSchema = makeSchema();
