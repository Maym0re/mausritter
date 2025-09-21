import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { HexTypeWhereUniqueInputObjectSchema } from './HexTypeWhereUniqueInput.schema';
import { HexTypeCreateWithoutLandmarksInputObjectSchema } from './HexTypeCreateWithoutLandmarksInput.schema';
import { HexTypeUncheckedCreateWithoutLandmarksInputObjectSchema } from './HexTypeUncheckedCreateWithoutLandmarksInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => HexTypeWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => HexTypeCreateWithoutLandmarksInputObjectSchema), z.lazy(() => HexTypeUncheckedCreateWithoutLandmarksInputObjectSchema)])
}).strict();
export const HexTypeCreateOrConnectWithoutLandmarksInputObjectSchema: z.ZodType<Prisma.HexTypeCreateOrConnectWithoutLandmarksInput> = makeSchema() as unknown as z.ZodType<Prisma.HexTypeCreateOrConnectWithoutLandmarksInput>;
export const HexTypeCreateOrConnectWithoutLandmarksInputObjectZodSchema = makeSchema();
