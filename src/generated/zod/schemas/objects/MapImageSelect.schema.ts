import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { HexMapArgsObjectSchema as HexMapArgsObjectSchema } from './HexMapArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  hexMapId: z.boolean().optional(),
  hexMap: z.union([z.boolean(), z.lazy(() => HexMapArgsObjectSchema)]).optional(),
  data: z.boolean().optional(),
  x: z.boolean().optional(),
  y: z.boolean().optional(),
  width: z.boolean().optional(),
  height: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional()
}).strict();
export const MapImageSelectObjectSchema: z.ZodType<Prisma.MapImageSelect> = makeSchema() as unknown as z.ZodType<Prisma.MapImageSelect>;
export const MapImageSelectObjectZodSchema = makeSchema();
