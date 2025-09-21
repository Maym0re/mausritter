import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LandmarkCreateManyHexTypeInputObjectSchema } from './LandmarkCreateManyHexTypeInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => LandmarkCreateManyHexTypeInputObjectSchema), z.lazy(() => LandmarkCreateManyHexTypeInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const LandmarkCreateManyHexTypeInputEnvelopeObjectSchema: z.ZodType<Prisma.LandmarkCreateManyHexTypeInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.LandmarkCreateManyHexTypeInputEnvelope>;
export const LandmarkCreateManyHexTypeInputEnvelopeObjectZodSchema = makeSchema();
