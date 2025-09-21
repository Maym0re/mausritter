import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { HexMapUpdateWithoutMarkersInputObjectSchema } from './HexMapUpdateWithoutMarkersInput.schema';
import { HexMapUncheckedUpdateWithoutMarkersInputObjectSchema } from './HexMapUncheckedUpdateWithoutMarkersInput.schema';
import { HexMapCreateWithoutMarkersInputObjectSchema } from './HexMapCreateWithoutMarkersInput.schema';
import { HexMapUncheckedCreateWithoutMarkersInputObjectSchema } from './HexMapUncheckedCreateWithoutMarkersInput.schema';
import { HexMapWhereInputObjectSchema } from './HexMapWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => HexMapUpdateWithoutMarkersInputObjectSchema), z.lazy(() => HexMapUncheckedUpdateWithoutMarkersInputObjectSchema)]),
  create: z.union([z.lazy(() => HexMapCreateWithoutMarkersInputObjectSchema), z.lazy(() => HexMapUncheckedCreateWithoutMarkersInputObjectSchema)]),
  where: z.lazy(() => HexMapWhereInputObjectSchema).optional()
}).strict();
export const HexMapUpsertWithoutMarkersInputObjectSchema: z.ZodType<Prisma.HexMapUpsertWithoutMarkersInput> = makeSchema() as unknown as z.ZodType<Prisma.HexMapUpsertWithoutMarkersInput>;
export const HexMapUpsertWithoutMarkersInputObjectZodSchema = makeSchema();
