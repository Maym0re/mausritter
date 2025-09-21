import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { HexCellCreateManyHexMapInputObjectSchema } from './HexCellCreateManyHexMapInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => HexCellCreateManyHexMapInputObjectSchema), z.lazy(() => HexCellCreateManyHexMapInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const HexCellCreateManyHexMapInputEnvelopeObjectSchema: z.ZodType<Prisma.HexCellCreateManyHexMapInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.HexCellCreateManyHexMapInputEnvelope>;
export const HexCellCreateManyHexMapInputEnvelopeObjectZodSchema = makeSchema();
