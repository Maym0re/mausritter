import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { HexTypeCreateWithoutLandmarksInputObjectSchema as HexTypeCreateWithoutLandmarksInputObjectSchema } from './HexTypeCreateWithoutLandmarksInput.schema';
import { HexTypeUncheckedCreateWithoutLandmarksInputObjectSchema as HexTypeUncheckedCreateWithoutLandmarksInputObjectSchema } from './HexTypeUncheckedCreateWithoutLandmarksInput.schema';
import { HexTypeCreateOrConnectWithoutLandmarksInputObjectSchema as HexTypeCreateOrConnectWithoutLandmarksInputObjectSchema } from './HexTypeCreateOrConnectWithoutLandmarksInput.schema';
import { HexTypeUpsertWithoutLandmarksInputObjectSchema as HexTypeUpsertWithoutLandmarksInputObjectSchema } from './HexTypeUpsertWithoutLandmarksInput.schema';
import { HexTypeWhereUniqueInputObjectSchema as HexTypeWhereUniqueInputObjectSchema } from './HexTypeWhereUniqueInput.schema';
import { HexTypeUpdateToOneWithWhereWithoutLandmarksInputObjectSchema as HexTypeUpdateToOneWithWhereWithoutLandmarksInputObjectSchema } from './HexTypeUpdateToOneWithWhereWithoutLandmarksInput.schema';
import { HexTypeUpdateWithoutLandmarksInputObjectSchema as HexTypeUpdateWithoutLandmarksInputObjectSchema } from './HexTypeUpdateWithoutLandmarksInput.schema';
import { HexTypeUncheckedUpdateWithoutLandmarksInputObjectSchema as HexTypeUncheckedUpdateWithoutLandmarksInputObjectSchema } from './HexTypeUncheckedUpdateWithoutLandmarksInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => HexTypeCreateWithoutLandmarksInputObjectSchema), z.lazy(() => HexTypeUncheckedCreateWithoutLandmarksInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => HexTypeCreateOrConnectWithoutLandmarksInputObjectSchema).optional(),
  upsert: z.lazy(() => HexTypeUpsertWithoutLandmarksInputObjectSchema).optional(),
  connect: z.lazy(() => HexTypeWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => HexTypeUpdateToOneWithWhereWithoutLandmarksInputObjectSchema), z.lazy(() => HexTypeUpdateWithoutLandmarksInputObjectSchema), z.lazy(() => HexTypeUncheckedUpdateWithoutLandmarksInputObjectSchema)]).optional()
}).strict();
export const HexTypeUpdateOneRequiredWithoutLandmarksNestedInputObjectSchema: z.ZodType<Prisma.HexTypeUpdateOneRequiredWithoutLandmarksNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.HexTypeUpdateOneRequiredWithoutLandmarksNestedInput>;
export const HexTypeUpdateOneRequiredWithoutLandmarksNestedInputObjectZodSchema = makeSchema();
