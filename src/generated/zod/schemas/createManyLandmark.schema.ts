import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { LandmarkCreateManyInputObjectSchema as LandmarkCreateManyInputObjectSchema } from './objects/LandmarkCreateManyInput.schema';

export const LandmarkCreateManySchema: z.ZodType<Prisma.LandmarkCreateManyArgs> = z.object({ data: z.union([ LandmarkCreateManyInputObjectSchema, z.array(LandmarkCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.LandmarkCreateManyArgs>;

export const LandmarkCreateManyZodSchema = z.object({ data: z.union([ LandmarkCreateManyInputObjectSchema, z.array(LandmarkCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();