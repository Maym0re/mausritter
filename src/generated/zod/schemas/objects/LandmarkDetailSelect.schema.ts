import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { LandmarkArgsObjectSchema as LandmarkArgsObjectSchema } from './LandmarkArgs.schema';
import { HexCellFindManySchema as HexCellFindManySchema } from '../findManyHexCell.schema';
import { LandmarkDetailCountOutputTypeArgsObjectSchema as LandmarkDetailCountOutputTypeArgsObjectSchema } from './LandmarkDetailCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  description: z.boolean().optional(),
  effect: z.boolean().optional(),
  Landmark: z.union([z.boolean(), z.lazy(() => LandmarkArgsObjectSchema)]).optional(),
  landmarkId: z.boolean().optional(),
  HexCell: z.union([z.boolean(), z.lazy(() => HexCellFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => LandmarkDetailCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const LandmarkDetailSelectObjectSchema: z.ZodType<Prisma.LandmarkDetailSelect> = makeSchema() as unknown as z.ZodType<Prisma.LandmarkDetailSelect>;
export const LandmarkDetailSelectObjectZodSchema = makeSchema();
