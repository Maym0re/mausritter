import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { HexTypeWhereInputObjectSchema } from './HexTypeWhereInput.schema';
import { HexTypeUpdateWithoutLandmarksInputObjectSchema } from './HexTypeUpdateWithoutLandmarksInput.schema';
import { HexTypeUncheckedUpdateWithoutLandmarksInputObjectSchema } from './HexTypeUncheckedUpdateWithoutLandmarksInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => HexTypeWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => HexTypeUpdateWithoutLandmarksInputObjectSchema), z.lazy(() => HexTypeUncheckedUpdateWithoutLandmarksInputObjectSchema)])
}).strict();
export const HexTypeUpdateToOneWithWhereWithoutLandmarksInputObjectSchema: z.ZodType<Prisma.HexTypeUpdateToOneWithWhereWithoutLandmarksInput> = makeSchema() as unknown as z.ZodType<Prisma.HexTypeUpdateToOneWithWhereWithoutLandmarksInput>;
export const HexTypeUpdateToOneWithWhereWithoutLandmarksInputObjectZodSchema = makeSchema();
