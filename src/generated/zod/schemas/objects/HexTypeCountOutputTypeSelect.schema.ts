import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { HexTypeCountOutputTypeCountLandmarksArgsObjectSchema as HexTypeCountOutputTypeCountLandmarksArgsObjectSchema } from './HexTypeCountOutputTypeCountLandmarksArgs.schema';
import { HexTypeCountOutputTypeCountHexCellArgsObjectSchema as HexTypeCountOutputTypeCountHexCellArgsObjectSchema } from './HexTypeCountOutputTypeCountHexCellArgs.schema'

const makeSchema = () => z.object({
  landmarks: z.union([z.boolean(), z.lazy(() => HexTypeCountOutputTypeCountLandmarksArgsObjectSchema)]).optional(),
  HexCell: z.union([z.boolean(), z.lazy(() => HexTypeCountOutputTypeCountHexCellArgsObjectSchema)]).optional()
}).strict();
export const HexTypeCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.HexTypeCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.HexTypeCountOutputTypeSelect>;
export const HexTypeCountOutputTypeSelectObjectZodSchema = makeSchema();
