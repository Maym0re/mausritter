import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { MapImageScalarWhereInputObjectSchema as MapImageScalarWhereInputObjectSchema } from './MapImageScalarWhereInput.schema';
import { MapImageUpdateManyMutationInputObjectSchema as MapImageUpdateManyMutationInputObjectSchema } from './MapImageUpdateManyMutationInput.schema';
import { MapImageUncheckedUpdateManyWithoutHexMapInputObjectSchema as MapImageUncheckedUpdateManyWithoutHexMapInputObjectSchema } from './MapImageUncheckedUpdateManyWithoutHexMapInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => MapImageScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => MapImageUpdateManyMutationInputObjectSchema), z.lazy(() => MapImageUncheckedUpdateManyWithoutHexMapInputObjectSchema)])
}).strict();
export const MapImageUpdateManyWithWhereWithoutHexMapInputObjectSchema: z.ZodType<Prisma.MapImageUpdateManyWithWhereWithoutHexMapInput> = makeSchema() as unknown as z.ZodType<Prisma.MapImageUpdateManyWithWhereWithoutHexMapInput>;
export const MapImageUpdateManyWithWhereWithoutHexMapInputObjectZodSchema = makeSchema();
