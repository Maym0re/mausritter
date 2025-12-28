import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { LandmarkCountOutputTypeCountDetailsArgsObjectSchema as LandmarkCountOutputTypeCountDetailsArgsObjectSchema } from './LandmarkCountOutputTypeCountDetailsArgs.schema';
import { LandmarkCountOutputTypeCountHexCellArgsObjectSchema as LandmarkCountOutputTypeCountHexCellArgsObjectSchema } from './LandmarkCountOutputTypeCountHexCellArgs.schema'

const makeSchema = () => z.object({
  details: z.union([z.boolean(), z.lazy(() => LandmarkCountOutputTypeCountDetailsArgsObjectSchema)]).optional(),
  HexCell: z.union([z.boolean(), z.lazy(() => LandmarkCountOutputTypeCountHexCellArgsObjectSchema)]).optional()
}).strict();
export const LandmarkCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.LandmarkCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.LandmarkCountOutputTypeSelect>;
export const LandmarkCountOutputTypeSelectObjectZodSchema = makeSchema();
