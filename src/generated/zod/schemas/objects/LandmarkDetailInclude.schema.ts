import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LandmarkArgsObjectSchema } from './LandmarkArgs.schema';
import { HexCellFindManySchema } from '../findManyHexCell.schema';
import { LandmarkDetailCountOutputTypeArgsObjectSchema } from './LandmarkDetailCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  Landmark: z.union([z.boolean(), z.lazy(() => LandmarkArgsObjectSchema)]).optional(),
  HexCell: z.union([z.boolean(), z.lazy(() => HexCellFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => LandmarkDetailCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const LandmarkDetailIncludeObjectSchema: z.ZodType<Prisma.LandmarkDetailInclude> = makeSchema() as unknown as z.ZodType<Prisma.LandmarkDetailInclude>;
export const LandmarkDetailIncludeObjectZodSchema = makeSchema();
