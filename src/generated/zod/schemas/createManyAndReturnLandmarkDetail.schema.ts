import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { LandmarkDetailSelectObjectSchema as LandmarkDetailSelectObjectSchema } from './objects/LandmarkDetailSelect.schema';
import { LandmarkDetailCreateManyInputObjectSchema as LandmarkDetailCreateManyInputObjectSchema } from './objects/LandmarkDetailCreateManyInput.schema';

export const LandmarkDetailCreateManyAndReturnSchema: z.ZodType<Prisma.LandmarkDetailCreateManyAndReturnArgs> = z.object({ select: LandmarkDetailSelectObjectSchema.optional(), data: z.union([ LandmarkDetailCreateManyInputObjectSchema, z.array(LandmarkDetailCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.LandmarkDetailCreateManyAndReturnArgs>;

export const LandmarkDetailCreateManyAndReturnZodSchema = z.object({ select: LandmarkDetailSelectObjectSchema.optional(), data: z.union([ LandmarkDetailCreateManyInputObjectSchema, z.array(LandmarkDetailCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();