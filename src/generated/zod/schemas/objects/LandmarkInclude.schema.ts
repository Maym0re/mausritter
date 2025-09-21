import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { HexTypeArgsObjectSchema } from './HexTypeArgs.schema';
import { LandmarkDetailFindManySchema } from '../findManyLandmarkDetail.schema';
import { HexCellFindManySchema } from '../findManyHexCell.schema';
import { LandmarkCountOutputTypeArgsObjectSchema } from './LandmarkCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  hexType: z.union([z.boolean(), z.lazy(() => HexTypeArgsObjectSchema)]).optional(),
  details: z.union([z.boolean(), z.lazy(() => LandmarkDetailFindManySchema)]).optional(),
  HexCell: z.union([z.boolean(), z.lazy(() => HexCellFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => LandmarkCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const LandmarkIncludeObjectSchema: z.ZodType<Prisma.LandmarkInclude> = makeSchema() as unknown as z.ZodType<Prisma.LandmarkInclude>;
export const LandmarkIncludeObjectZodSchema = makeSchema();
