import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { LandmarkDetailCreateManyLandmarkInputObjectSchema as LandmarkDetailCreateManyLandmarkInputObjectSchema } from './LandmarkDetailCreateManyLandmarkInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => LandmarkDetailCreateManyLandmarkInputObjectSchema), z.lazy(() => LandmarkDetailCreateManyLandmarkInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const LandmarkDetailCreateManyLandmarkInputEnvelopeObjectSchema: z.ZodType<Prisma.LandmarkDetailCreateManyLandmarkInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.LandmarkDetailCreateManyLandmarkInputEnvelope>;
export const LandmarkDetailCreateManyLandmarkInputEnvelopeObjectZodSchema = makeSchema();
