import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { HexCellCreateManyHexTypeInputObjectSchema as HexCellCreateManyHexTypeInputObjectSchema } from './HexCellCreateManyHexTypeInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => HexCellCreateManyHexTypeInputObjectSchema), z.lazy(() => HexCellCreateManyHexTypeInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const HexCellCreateManyHexTypeInputEnvelopeObjectSchema: z.ZodType<Prisma.HexCellCreateManyHexTypeInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.HexCellCreateManyHexTypeInputEnvelope>;
export const HexCellCreateManyHexTypeInputEnvelopeObjectZodSchema = makeSchema();
