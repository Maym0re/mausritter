import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { MapImageCreateManyHexMapInputObjectSchema as MapImageCreateManyHexMapInputObjectSchema } from './MapImageCreateManyHexMapInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => MapImageCreateManyHexMapInputObjectSchema), z.lazy(() => MapImageCreateManyHexMapInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const MapImageCreateManyHexMapInputEnvelopeObjectSchema: z.ZodType<Prisma.MapImageCreateManyHexMapInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.MapImageCreateManyHexMapInputEnvelope>;
export const MapImageCreateManyHexMapInputEnvelopeObjectZodSchema = makeSchema();
