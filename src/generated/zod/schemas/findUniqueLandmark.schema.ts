import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { LandmarkSelectObjectSchema as LandmarkSelectObjectSchema } from './objects/LandmarkSelect.schema';
import { LandmarkIncludeObjectSchema as LandmarkIncludeObjectSchema } from './objects/LandmarkInclude.schema';
import { LandmarkWhereUniqueInputObjectSchema as LandmarkWhereUniqueInputObjectSchema } from './objects/LandmarkWhereUniqueInput.schema';

export const LandmarkFindUniqueSchema: z.ZodType<Prisma.LandmarkFindUniqueArgs> = z.object({ select: LandmarkSelectObjectSchema.optional(), include: LandmarkIncludeObjectSchema.optional(), where: LandmarkWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.LandmarkFindUniqueArgs>;

export const LandmarkFindUniqueZodSchema = z.object({ select: LandmarkSelectObjectSchema.optional(), include: LandmarkIncludeObjectSchema.optional(), where: LandmarkWhereUniqueInputObjectSchema }).strict();