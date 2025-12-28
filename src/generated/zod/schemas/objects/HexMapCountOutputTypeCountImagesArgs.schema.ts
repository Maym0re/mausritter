import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { MapImageWhereInputObjectSchema as MapImageWhereInputObjectSchema } from './MapImageWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => MapImageWhereInputObjectSchema).optional()
}).strict();
export const HexMapCountOutputTypeCountImagesArgsObjectSchema = makeSchema();
export const HexMapCountOutputTypeCountImagesArgsObjectZodSchema = makeSchema();
