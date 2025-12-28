import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { LandmarkDetailSelectObjectSchema as LandmarkDetailSelectObjectSchema } from './objects/LandmarkDetailSelect.schema';
import { LandmarkDetailIncludeObjectSchema as LandmarkDetailIncludeObjectSchema } from './objects/LandmarkDetailInclude.schema';
import { LandmarkDetailWhereUniqueInputObjectSchema as LandmarkDetailWhereUniqueInputObjectSchema } from './objects/LandmarkDetailWhereUniqueInput.schema';

export const LandmarkDetailFindUniqueSchema: z.ZodType<Prisma.LandmarkDetailFindUniqueArgs> = z.object({ select: LandmarkDetailSelectObjectSchema.optional(), include: LandmarkDetailIncludeObjectSchema.optional(), where: LandmarkDetailWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.LandmarkDetailFindUniqueArgs>;

export const LandmarkDetailFindUniqueZodSchema = z.object({ select: LandmarkDetailSelectObjectSchema.optional(), include: LandmarkDetailIncludeObjectSchema.optional(), where: LandmarkDetailWhereUniqueInputObjectSchema }).strict();