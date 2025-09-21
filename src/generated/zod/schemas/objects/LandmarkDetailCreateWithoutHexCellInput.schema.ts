import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LandmarkCreateNestedOneWithoutDetailsInputObjectSchema } from './LandmarkCreateNestedOneWithoutDetailsInput.schema'

const makeSchema = () => z.object({
  id: z.string(),
  description: z.string(),
  effect: z.string().optional().nullable(),
  Landmark: z.lazy(() => LandmarkCreateNestedOneWithoutDetailsInputObjectSchema).optional()
}).strict();
export const LandmarkDetailCreateWithoutHexCellInputObjectSchema: z.ZodType<Prisma.LandmarkDetailCreateWithoutHexCellInput> = makeSchema() as unknown as z.ZodType<Prisma.LandmarkDetailCreateWithoutHexCellInput>;
export const LandmarkDetailCreateWithoutHexCellInputObjectZodSchema = makeSchema();
