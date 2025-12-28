import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { MapImageWhereUniqueInputObjectSchema as MapImageWhereUniqueInputObjectSchema } from './MapImageWhereUniqueInput.schema';
import { MapImageUpdateWithoutHexMapInputObjectSchema as MapImageUpdateWithoutHexMapInputObjectSchema } from './MapImageUpdateWithoutHexMapInput.schema';
import { MapImageUncheckedUpdateWithoutHexMapInputObjectSchema as MapImageUncheckedUpdateWithoutHexMapInputObjectSchema } from './MapImageUncheckedUpdateWithoutHexMapInput.schema';
import { MapImageCreateWithoutHexMapInputObjectSchema as MapImageCreateWithoutHexMapInputObjectSchema } from './MapImageCreateWithoutHexMapInput.schema';
import { MapImageUncheckedCreateWithoutHexMapInputObjectSchema as MapImageUncheckedCreateWithoutHexMapInputObjectSchema } from './MapImageUncheckedCreateWithoutHexMapInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => MapImageWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => MapImageUpdateWithoutHexMapInputObjectSchema), z.lazy(() => MapImageUncheckedUpdateWithoutHexMapInputObjectSchema)]),
  create: z.union([z.lazy(() => MapImageCreateWithoutHexMapInputObjectSchema), z.lazy(() => MapImageUncheckedCreateWithoutHexMapInputObjectSchema)])
}).strict();
export const MapImageUpsertWithWhereUniqueWithoutHexMapInputObjectSchema: z.ZodType<Prisma.MapImageUpsertWithWhereUniqueWithoutHexMapInput> = makeSchema() as unknown as z.ZodType<Prisma.MapImageUpsertWithWhereUniqueWithoutHexMapInput>;
export const MapImageUpsertWithWhereUniqueWithoutHexMapInputObjectZodSchema = makeSchema();
