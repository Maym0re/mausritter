import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { HexMapArgsObjectSchema } from './HexMapArgs.schema';
import { HexTypeArgsObjectSchema } from './HexTypeArgs.schema';
import { LandmarkArgsObjectSchema } from './LandmarkArgs.schema';
import { LandmarkDetailArgsObjectSchema } from './LandmarkDetailArgs.schema';
import { SettlementArgsObjectSchema } from './SettlementArgs.schema'

const makeSchema = () => z.object({
  hexMap: z.union([z.boolean(), z.lazy(() => HexMapArgsObjectSchema)]).optional(),
  hexType: z.union([z.boolean(), z.lazy(() => HexTypeArgsObjectSchema)]).optional(),
  landmark: z.union([z.boolean(), z.lazy(() => LandmarkArgsObjectSchema)]).optional(),
  landmarkDetail: z.union([z.boolean(), z.lazy(() => LandmarkDetailArgsObjectSchema)]).optional(),
  settlement: z.union([z.boolean(), z.lazy(() => SettlementArgsObjectSchema)]).optional()
}).strict();
export const HexCellIncludeObjectSchema: z.ZodType<Prisma.HexCellInclude> = makeSchema() as unknown as z.ZodType<Prisma.HexCellInclude>;
export const HexCellIncludeObjectZodSchema = makeSchema();
