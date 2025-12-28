import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { HexTypeArgsObjectSchema as HexTypeArgsObjectSchema } from './HexTypeArgs.schema';
import { LandmarkDetailFindManySchema as LandmarkDetailFindManySchema } from '../findManyLandmarkDetail.schema';
import { HexCellFindManySchema as HexCellFindManySchema } from '../findManyHexCell.schema';
import { LandmarkCountOutputTypeArgsObjectSchema as LandmarkCountOutputTypeArgsObjectSchema } from './LandmarkCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  description: z.boolean().optional(),
  hexTypeId: z.boolean().optional(),
  hexType: z.union([z.boolean(), z.lazy(() => HexTypeArgsObjectSchema)]).optional(),
  details: z.union([z.boolean(), z.lazy(() => LandmarkDetailFindManySchema)]).optional(),
  HexCell: z.union([z.boolean(), z.lazy(() => HexCellFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => LandmarkCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const LandmarkSelectObjectSchema: z.ZodType<Prisma.LandmarkSelect> = makeSchema() as unknown as z.ZodType<Prisma.LandmarkSelect>;
export const LandmarkSelectObjectZodSchema = makeSchema();
