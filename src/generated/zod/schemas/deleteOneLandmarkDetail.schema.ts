import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { LandmarkDetailSelectObjectSchema as LandmarkDetailSelectObjectSchema } from './objects/LandmarkDetailSelect.schema';
import { LandmarkDetailIncludeObjectSchema as LandmarkDetailIncludeObjectSchema } from './objects/LandmarkDetailInclude.schema';
import { LandmarkDetailWhereUniqueInputObjectSchema as LandmarkDetailWhereUniqueInputObjectSchema } from './objects/LandmarkDetailWhereUniqueInput.schema';

export const LandmarkDetailDeleteOneSchema: z.ZodType<Prisma.LandmarkDetailDeleteArgs> = z.object({ select: LandmarkDetailSelectObjectSchema.optional(), include: LandmarkDetailIncludeObjectSchema.optional(), where: LandmarkDetailWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.LandmarkDetailDeleteArgs>;

export const LandmarkDetailDeleteOneZodSchema = z.object({ select: LandmarkDetailSelectObjectSchema.optional(), include: LandmarkDetailIncludeObjectSchema.optional(), where: LandmarkDetailWhereUniqueInputObjectSchema }).strict();