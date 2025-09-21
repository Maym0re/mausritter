import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LandmarkFindManySchema } from '../findManyLandmark.schema';
import { HexCellFindManySchema } from '../findManyHexCell.schema';
import { HexTypeCountOutputTypeArgsObjectSchema } from './HexTypeCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  color: z.boolean().optional(),
  description: z.boolean().optional(),
  landmarks: z.union([z.boolean(), z.lazy(() => LandmarkFindManySchema)]).optional(),
  HexCell: z.union([z.boolean(), z.lazy(() => HexCellFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => HexTypeCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const HexTypeSelectObjectSchema: z.ZodType<Prisma.HexTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.HexTypeSelect>;
export const HexTypeSelectObjectZodSchema = makeSchema();
