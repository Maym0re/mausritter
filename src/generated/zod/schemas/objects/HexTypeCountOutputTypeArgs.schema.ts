import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { HexTypeCountOutputTypeSelectObjectSchema as HexTypeCountOutputTypeSelectObjectSchema } from './HexTypeCountOutputTypeSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => HexTypeCountOutputTypeSelectObjectSchema).optional()
}).strict();
export const HexTypeCountOutputTypeArgsObjectSchema = makeSchema();
export const HexTypeCountOutputTypeArgsObjectZodSchema = makeSchema();
