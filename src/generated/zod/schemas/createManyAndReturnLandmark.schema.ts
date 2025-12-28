import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { LandmarkSelectObjectSchema as LandmarkSelectObjectSchema } from './objects/LandmarkSelect.schema';
import { LandmarkCreateManyInputObjectSchema as LandmarkCreateManyInputObjectSchema } from './objects/LandmarkCreateManyInput.schema';

export const LandmarkCreateManyAndReturnSchema: z.ZodType<Prisma.LandmarkCreateManyAndReturnArgs> = z.object({ select: LandmarkSelectObjectSchema.optional(), data: z.union([ LandmarkCreateManyInputObjectSchema, z.array(LandmarkCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.LandmarkCreateManyAndReturnArgs>;

export const LandmarkCreateManyAndReturnZodSchema = z.object({ select: LandmarkSelectObjectSchema.optional(), data: z.union([ LandmarkCreateManyInputObjectSchema, z.array(LandmarkCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();