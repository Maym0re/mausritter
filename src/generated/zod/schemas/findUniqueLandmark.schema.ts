import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { LandmarkSelectObjectSchema } from './objects/LandmarkSelect.schema';
import { LandmarkIncludeObjectSchema } from './objects/LandmarkInclude.schema';
import { LandmarkWhereUniqueInputObjectSchema } from './objects/LandmarkWhereUniqueInput.schema';

export const LandmarkFindUniqueSchema: z.ZodType<Prisma.LandmarkFindUniqueArgs> = z.object({ select: LandmarkSelectObjectSchema.optional(), include: LandmarkIncludeObjectSchema.optional(), where: LandmarkWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.LandmarkFindUniqueArgs>;

export const LandmarkFindUniqueZodSchema = z.object({ select: LandmarkSelectObjectSchema.optional(), include: LandmarkIncludeObjectSchema.optional(), where: LandmarkWhereUniqueInputObjectSchema }).strict();