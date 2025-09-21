import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LandmarkFindManySchema } from '../findManyLandmark.schema';
import { HexCellFindManySchema } from '../findManyHexCell.schema';
import { HexTypeCountOutputTypeArgsObjectSchema } from './HexTypeCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  landmarks: z.union([z.boolean(), z.lazy(() => LandmarkFindManySchema)]).optional(),
  HexCell: z.union([z.boolean(), z.lazy(() => HexCellFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => HexTypeCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const HexTypeIncludeObjectSchema: z.ZodType<Prisma.HexTypeInclude> = makeSchema() as unknown as z.ZodType<Prisma.HexTypeInclude>;
export const HexTypeIncludeObjectZodSchema = makeSchema();
