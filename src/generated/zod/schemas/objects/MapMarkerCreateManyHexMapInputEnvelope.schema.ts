import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { MapMarkerCreateManyHexMapInputObjectSchema } from './MapMarkerCreateManyHexMapInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => MapMarkerCreateManyHexMapInputObjectSchema), z.lazy(() => MapMarkerCreateManyHexMapInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const MapMarkerCreateManyHexMapInputEnvelopeObjectSchema: z.ZodType<Prisma.MapMarkerCreateManyHexMapInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.MapMarkerCreateManyHexMapInputEnvelope>;
export const MapMarkerCreateManyHexMapInputEnvelopeObjectZodSchema = makeSchema();
