import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { LandmarkWhereInputObjectSchema as LandmarkWhereInputObjectSchema } from './LandmarkWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => LandmarkWhereInputObjectSchema).optional()
}).strict();
export const HexTypeCountOutputTypeCountLandmarksArgsObjectSchema = makeSchema();
export const HexTypeCountOutputTypeCountLandmarksArgsObjectZodSchema = makeSchema();
