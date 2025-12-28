import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { HexMapWhereUniqueInputObjectSchema as HexMapWhereUniqueInputObjectSchema } from './HexMapWhereUniqueInput.schema';
import { HexMapCreateWithoutMarkersInputObjectSchema as HexMapCreateWithoutMarkersInputObjectSchema } from './HexMapCreateWithoutMarkersInput.schema';
import { HexMapUncheckedCreateWithoutMarkersInputObjectSchema as HexMapUncheckedCreateWithoutMarkersInputObjectSchema } from './HexMapUncheckedCreateWithoutMarkersInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => HexMapWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => HexMapCreateWithoutMarkersInputObjectSchema), z.lazy(() => HexMapUncheckedCreateWithoutMarkersInputObjectSchema)])
}).strict();
export const HexMapCreateOrConnectWithoutMarkersInputObjectSchema: z.ZodType<Prisma.HexMapCreateOrConnectWithoutMarkersInput> = makeSchema() as unknown as z.ZodType<Prisma.HexMapCreateOrConnectWithoutMarkersInput>;
export const HexMapCreateOrConnectWithoutMarkersInputObjectZodSchema = makeSchema();
