import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { HexTypeWhereUniqueInputObjectSchema as HexTypeWhereUniqueInputObjectSchema } from './HexTypeWhereUniqueInput.schema';
import { HexTypeCreateWithoutLandmarksInputObjectSchema as HexTypeCreateWithoutLandmarksInputObjectSchema } from './HexTypeCreateWithoutLandmarksInput.schema';
import { HexTypeUncheckedCreateWithoutLandmarksInputObjectSchema as HexTypeUncheckedCreateWithoutLandmarksInputObjectSchema } from './HexTypeUncheckedCreateWithoutLandmarksInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => HexTypeWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => HexTypeCreateWithoutLandmarksInputObjectSchema), z.lazy(() => HexTypeUncheckedCreateWithoutLandmarksInputObjectSchema)])
}).strict();
export const HexTypeCreateOrConnectWithoutLandmarksInputObjectSchema: z.ZodType<Prisma.HexTypeCreateOrConnectWithoutLandmarksInput> = makeSchema() as unknown as z.ZodType<Prisma.HexTypeCreateOrConnectWithoutLandmarksInput>;
export const HexTypeCreateOrConnectWithoutLandmarksInputObjectZodSchema = makeSchema();
