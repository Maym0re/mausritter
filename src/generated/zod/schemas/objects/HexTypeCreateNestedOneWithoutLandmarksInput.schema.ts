import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { HexTypeCreateWithoutLandmarksInputObjectSchema as HexTypeCreateWithoutLandmarksInputObjectSchema } from './HexTypeCreateWithoutLandmarksInput.schema';
import { HexTypeUncheckedCreateWithoutLandmarksInputObjectSchema as HexTypeUncheckedCreateWithoutLandmarksInputObjectSchema } from './HexTypeUncheckedCreateWithoutLandmarksInput.schema';
import { HexTypeCreateOrConnectWithoutLandmarksInputObjectSchema as HexTypeCreateOrConnectWithoutLandmarksInputObjectSchema } from './HexTypeCreateOrConnectWithoutLandmarksInput.schema';
import { HexTypeWhereUniqueInputObjectSchema as HexTypeWhereUniqueInputObjectSchema } from './HexTypeWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => HexTypeCreateWithoutLandmarksInputObjectSchema), z.lazy(() => HexTypeUncheckedCreateWithoutLandmarksInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => HexTypeCreateOrConnectWithoutLandmarksInputObjectSchema).optional(),
  connect: z.lazy(() => HexTypeWhereUniqueInputObjectSchema).optional()
}).strict();
export const HexTypeCreateNestedOneWithoutLandmarksInputObjectSchema: z.ZodType<Prisma.HexTypeCreateNestedOneWithoutLandmarksInput> = makeSchema() as unknown as z.ZodType<Prisma.HexTypeCreateNestedOneWithoutLandmarksInput>;
export const HexTypeCreateNestedOneWithoutLandmarksInputObjectZodSchema = makeSchema();
