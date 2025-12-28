import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { HexMapCountOutputTypeCountCellsArgsObjectSchema as HexMapCountOutputTypeCountCellsArgsObjectSchema } from './HexMapCountOutputTypeCountCellsArgs.schema';
import { HexMapCountOutputTypeCountImagesArgsObjectSchema as HexMapCountOutputTypeCountImagesArgsObjectSchema } from './HexMapCountOutputTypeCountImagesArgs.schema';
import { HexMapCountOutputTypeCountMarkersArgsObjectSchema as HexMapCountOutputTypeCountMarkersArgsObjectSchema } from './HexMapCountOutputTypeCountMarkersArgs.schema'

const makeSchema = () => z.object({
  cells: z.union([z.boolean(), z.lazy(() => HexMapCountOutputTypeCountCellsArgsObjectSchema)]).optional(),
  images: z.union([z.boolean(), z.lazy(() => HexMapCountOutputTypeCountImagesArgsObjectSchema)]).optional(),
  markers: z.union([z.boolean(), z.lazy(() => HexMapCountOutputTypeCountMarkersArgsObjectSchema)]).optional()
}).strict();
export const HexMapCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.HexMapCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.HexMapCountOutputTypeSelect>;
export const HexMapCountOutputTypeSelectObjectZodSchema = makeSchema();
