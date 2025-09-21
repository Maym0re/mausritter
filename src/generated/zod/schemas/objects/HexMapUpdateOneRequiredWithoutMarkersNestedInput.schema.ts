import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { HexMapCreateWithoutMarkersInputObjectSchema } from './HexMapCreateWithoutMarkersInput.schema';
import { HexMapUncheckedCreateWithoutMarkersInputObjectSchema } from './HexMapUncheckedCreateWithoutMarkersInput.schema';
import { HexMapCreateOrConnectWithoutMarkersInputObjectSchema } from './HexMapCreateOrConnectWithoutMarkersInput.schema';
import { HexMapUpsertWithoutMarkersInputObjectSchema } from './HexMapUpsertWithoutMarkersInput.schema';
import { HexMapWhereUniqueInputObjectSchema } from './HexMapWhereUniqueInput.schema';
import { HexMapUpdateToOneWithWhereWithoutMarkersInputObjectSchema } from './HexMapUpdateToOneWithWhereWithoutMarkersInput.schema';
import { HexMapUpdateWithoutMarkersInputObjectSchema } from './HexMapUpdateWithoutMarkersInput.schema';
import { HexMapUncheckedUpdateWithoutMarkersInputObjectSchema } from './HexMapUncheckedUpdateWithoutMarkersInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => HexMapCreateWithoutMarkersInputObjectSchema), z.lazy(() => HexMapUncheckedCreateWithoutMarkersInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => HexMapCreateOrConnectWithoutMarkersInputObjectSchema).optional(),
  upsert: z.lazy(() => HexMapUpsertWithoutMarkersInputObjectSchema).optional(),
  connect: z.lazy(() => HexMapWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => HexMapUpdateToOneWithWhereWithoutMarkersInputObjectSchema), z.lazy(() => HexMapUpdateWithoutMarkersInputObjectSchema), z.lazy(() => HexMapUncheckedUpdateWithoutMarkersInputObjectSchema)]).optional()
}).strict();
export const HexMapUpdateOneRequiredWithoutMarkersNestedInputObjectSchema: z.ZodType<Prisma.HexMapUpdateOneRequiredWithoutMarkersNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.HexMapUpdateOneRequiredWithoutMarkersNestedInput>;
export const HexMapUpdateOneRequiredWithoutMarkersNestedInputObjectZodSchema = makeSchema();
