import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { MapMarkerWhereInputObjectSchema as MapMarkerWhereInputObjectSchema } from './MapMarkerWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => MapMarkerWhereInputObjectSchema).optional()
}).strict();
export const HexMapCountOutputTypeCountMarkersArgsObjectSchema = makeSchema();
export const HexMapCountOutputTypeCountMarkersArgsObjectZodSchema = makeSchema();
