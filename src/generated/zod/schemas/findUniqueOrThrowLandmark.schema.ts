import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { LandmarkSelectObjectSchema } from './objects/LandmarkSelect.schema';
import { LandmarkIncludeObjectSchema } from './objects/LandmarkInclude.schema';
import { LandmarkWhereUniqueInputObjectSchema } from './objects/LandmarkWhereUniqueInput.schema';

export const LandmarkFindUniqueOrThrowSchema: z.ZodType<Prisma.LandmarkFindUniqueOrThrowArgs> = z.object({ select: LandmarkSelectObjectSchema.optional(), include: LandmarkIncludeObjectSchema.optional(), where: LandmarkWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.LandmarkFindUniqueOrThrowArgs>;

export const LandmarkFindUniqueOrThrowZodSchema = z.object({ select: LandmarkSelectObjectSchema.optional(), include: LandmarkIncludeObjectSchema.optional(), where: LandmarkWhereUniqueInputObjectSchema }).strict();