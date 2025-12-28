import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { LandmarkDetailWhereInputObjectSchema as LandmarkDetailWhereInputObjectSchema } from './LandmarkDetailWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => LandmarkDetailWhereInputObjectSchema).optional()
}).strict();
export const LandmarkCountOutputTypeCountDetailsArgsObjectSchema = makeSchema();
export const LandmarkCountOutputTypeCountDetailsArgsObjectZodSchema = makeSchema();
