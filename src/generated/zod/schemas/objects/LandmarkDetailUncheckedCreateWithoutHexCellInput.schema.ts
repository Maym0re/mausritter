import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.string(),
  description: z.string(),
  effect: z.string().optional().nullable(),
  landmarkId: z.string().optional().nullable()
}).strict();
export const LandmarkDetailUncheckedCreateWithoutHexCellInputObjectSchema: z.ZodType<Prisma.LandmarkDetailUncheckedCreateWithoutHexCellInput> = makeSchema() as unknown as z.ZodType<Prisma.LandmarkDetailUncheckedCreateWithoutHexCellInput>;
export const LandmarkDetailUncheckedCreateWithoutHexCellInputObjectZodSchema = makeSchema();
