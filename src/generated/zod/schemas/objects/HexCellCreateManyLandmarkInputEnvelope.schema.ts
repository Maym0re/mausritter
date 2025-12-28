import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { HexCellCreateManyLandmarkInputObjectSchema as HexCellCreateManyLandmarkInputObjectSchema } from './HexCellCreateManyLandmarkInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => HexCellCreateManyLandmarkInputObjectSchema), z.lazy(() => HexCellCreateManyLandmarkInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const HexCellCreateManyLandmarkInputEnvelopeObjectSchema: z.ZodType<Prisma.HexCellCreateManyLandmarkInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.HexCellCreateManyLandmarkInputEnvelope>;
export const HexCellCreateManyLandmarkInputEnvelopeObjectZodSchema = makeSchema();
