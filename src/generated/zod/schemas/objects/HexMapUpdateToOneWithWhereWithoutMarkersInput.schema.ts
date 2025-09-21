import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { HexMapWhereInputObjectSchema } from './HexMapWhereInput.schema';
import { HexMapUpdateWithoutMarkersInputObjectSchema } from './HexMapUpdateWithoutMarkersInput.schema';
import { HexMapUncheckedUpdateWithoutMarkersInputObjectSchema } from './HexMapUncheckedUpdateWithoutMarkersInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => HexMapWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => HexMapUpdateWithoutMarkersInputObjectSchema), z.lazy(() => HexMapUncheckedUpdateWithoutMarkersInputObjectSchema)])
}).strict();
export const HexMapUpdateToOneWithWhereWithoutMarkersInputObjectSchema: z.ZodType<Prisma.HexMapUpdateToOneWithWhereWithoutMarkersInput> = makeSchema() as unknown as z.ZodType<Prisma.HexMapUpdateToOneWithWhereWithoutMarkersInput>;
export const HexMapUpdateToOneWithWhereWithoutMarkersInputObjectZodSchema = makeSchema();
