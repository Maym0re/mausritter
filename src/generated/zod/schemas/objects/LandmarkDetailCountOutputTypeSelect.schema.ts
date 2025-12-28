import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { LandmarkDetailCountOutputTypeCountHexCellArgsObjectSchema as LandmarkDetailCountOutputTypeCountHexCellArgsObjectSchema } from './LandmarkDetailCountOutputTypeCountHexCellArgs.schema'

const makeSchema = () => z.object({
  HexCell: z.union([z.boolean(), z.lazy(() => LandmarkDetailCountOutputTypeCountHexCellArgsObjectSchema)]).optional()
}).strict();
export const LandmarkDetailCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.LandmarkDetailCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.LandmarkDetailCountOutputTypeSelect>;
export const LandmarkDetailCountOutputTypeSelectObjectZodSchema = makeSchema();
