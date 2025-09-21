import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { LandmarkDetailSelectObjectSchema } from './objects/LandmarkDetailSelect.schema';
import { LandmarkDetailIncludeObjectSchema } from './objects/LandmarkDetailInclude.schema';
import { LandmarkDetailWhereUniqueInputObjectSchema } from './objects/LandmarkDetailWhereUniqueInput.schema';

export const LandmarkDetailFindUniqueOrThrowSchema: z.ZodType<Prisma.LandmarkDetailFindUniqueOrThrowArgs> = z.object({ select: LandmarkDetailSelectObjectSchema.optional(), include: LandmarkDetailIncludeObjectSchema.optional(), where: LandmarkDetailWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.LandmarkDetailFindUniqueOrThrowArgs>;

export const LandmarkDetailFindUniqueOrThrowZodSchema = z.object({ select: LandmarkDetailSelectObjectSchema.optional(), include: LandmarkDetailIncludeObjectSchema.optional(), where: LandmarkDetailWhereUniqueInputObjectSchema }).strict();