import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { HexMapCreateWithoutMarkersInputObjectSchema as HexMapCreateWithoutMarkersInputObjectSchema } from './HexMapCreateWithoutMarkersInput.schema';
import { HexMapUncheckedCreateWithoutMarkersInputObjectSchema as HexMapUncheckedCreateWithoutMarkersInputObjectSchema } from './HexMapUncheckedCreateWithoutMarkersInput.schema';
import { HexMapCreateOrConnectWithoutMarkersInputObjectSchema as HexMapCreateOrConnectWithoutMarkersInputObjectSchema } from './HexMapCreateOrConnectWithoutMarkersInput.schema';
import { HexMapWhereUniqueInputObjectSchema as HexMapWhereUniqueInputObjectSchema } from './HexMapWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => HexMapCreateWithoutMarkersInputObjectSchema), z.lazy(() => HexMapUncheckedCreateWithoutMarkersInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => HexMapCreateOrConnectWithoutMarkersInputObjectSchema).optional(),
  connect: z.lazy(() => HexMapWhereUniqueInputObjectSchema).optional()
}).strict();
export const HexMapCreateNestedOneWithoutMarkersInputObjectSchema: z.ZodType<Prisma.HexMapCreateNestedOneWithoutMarkersInput> = makeSchema() as unknown as z.ZodType<Prisma.HexMapCreateNestedOneWithoutMarkersInput>;
export const HexMapCreateNestedOneWithoutMarkersInputObjectZodSchema = makeSchema();
