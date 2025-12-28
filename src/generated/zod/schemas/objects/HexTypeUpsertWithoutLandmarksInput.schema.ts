import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { HexTypeUpdateWithoutLandmarksInputObjectSchema as HexTypeUpdateWithoutLandmarksInputObjectSchema } from './HexTypeUpdateWithoutLandmarksInput.schema';
import { HexTypeUncheckedUpdateWithoutLandmarksInputObjectSchema as HexTypeUncheckedUpdateWithoutLandmarksInputObjectSchema } from './HexTypeUncheckedUpdateWithoutLandmarksInput.schema';
import { HexTypeCreateWithoutLandmarksInputObjectSchema as HexTypeCreateWithoutLandmarksInputObjectSchema } from './HexTypeCreateWithoutLandmarksInput.schema';
import { HexTypeUncheckedCreateWithoutLandmarksInputObjectSchema as HexTypeUncheckedCreateWithoutLandmarksInputObjectSchema } from './HexTypeUncheckedCreateWithoutLandmarksInput.schema';
import { HexTypeWhereInputObjectSchema as HexTypeWhereInputObjectSchema } from './HexTypeWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => HexTypeUpdateWithoutLandmarksInputObjectSchema), z.lazy(() => HexTypeUncheckedUpdateWithoutLandmarksInputObjectSchema)]),
  create: z.union([z.lazy(() => HexTypeCreateWithoutLandmarksInputObjectSchema), z.lazy(() => HexTypeUncheckedCreateWithoutLandmarksInputObjectSchema)]),
  where: z.lazy(() => HexTypeWhereInputObjectSchema).optional()
}).strict();
export const HexTypeUpsertWithoutLandmarksInputObjectSchema: z.ZodType<Prisma.HexTypeUpsertWithoutLandmarksInput> = makeSchema() as unknown as z.ZodType<Prisma.HexTypeUpsertWithoutLandmarksInput>;
export const HexTypeUpsertWithoutLandmarksInputObjectZodSchema = makeSchema();
