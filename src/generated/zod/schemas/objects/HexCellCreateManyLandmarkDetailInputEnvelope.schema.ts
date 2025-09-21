import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { HexCellCreateManyLandmarkDetailInputObjectSchema } from './HexCellCreateManyLandmarkDetailInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => HexCellCreateManyLandmarkDetailInputObjectSchema), z.lazy(() => HexCellCreateManyLandmarkDetailInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const HexCellCreateManyLandmarkDetailInputEnvelopeObjectSchema: z.ZodType<Prisma.HexCellCreateManyLandmarkDetailInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.HexCellCreateManyLandmarkDetailInputEnvelope>;
export const HexCellCreateManyLandmarkDetailInputEnvelopeObjectZodSchema = makeSchema();
