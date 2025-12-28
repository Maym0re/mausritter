import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { LandmarkDetailCreateManyInputObjectSchema as LandmarkDetailCreateManyInputObjectSchema } from './objects/LandmarkDetailCreateManyInput.schema';

export const LandmarkDetailCreateManySchema: z.ZodType<Prisma.LandmarkDetailCreateManyArgs> = z.object({ data: z.union([ LandmarkDetailCreateManyInputObjectSchema, z.array(LandmarkDetailCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.LandmarkDetailCreateManyArgs>;

export const LandmarkDetailCreateManyZodSchema = z.object({ data: z.union([ LandmarkDetailCreateManyInputObjectSchema, z.array(LandmarkDetailCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();