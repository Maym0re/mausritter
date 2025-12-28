import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { LandmarkDetailSelectObjectSchema as LandmarkDetailSelectObjectSchema } from './objects/LandmarkDetailSelect.schema';
import { LandmarkDetailIncludeObjectSchema as LandmarkDetailIncludeObjectSchema } from './objects/LandmarkDetailInclude.schema';
import { LandmarkDetailCreateInputObjectSchema as LandmarkDetailCreateInputObjectSchema } from './objects/LandmarkDetailCreateInput.schema';
import { LandmarkDetailUncheckedCreateInputObjectSchema as LandmarkDetailUncheckedCreateInputObjectSchema } from './objects/LandmarkDetailUncheckedCreateInput.schema';

export const LandmarkDetailCreateOneSchema: z.ZodType<Prisma.LandmarkDetailCreateArgs> = z.object({ select: LandmarkDetailSelectObjectSchema.optional(), include: LandmarkDetailIncludeObjectSchema.optional(), data: z.union([LandmarkDetailCreateInputObjectSchema, LandmarkDetailUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.LandmarkDetailCreateArgs>;

export const LandmarkDetailCreateOneZodSchema = z.object({ select: LandmarkDetailSelectObjectSchema.optional(), include: LandmarkDetailIncludeObjectSchema.optional(), data: z.union([LandmarkDetailCreateInputObjectSchema, LandmarkDetailUncheckedCreateInputObjectSchema]) }).strict();