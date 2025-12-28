import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { LandmarkDetailSelectObjectSchema as LandmarkDetailSelectObjectSchema } from './objects/LandmarkDetailSelect.schema';
import { LandmarkDetailIncludeObjectSchema as LandmarkDetailIncludeObjectSchema } from './objects/LandmarkDetailInclude.schema';
import { LandmarkDetailUpdateInputObjectSchema as LandmarkDetailUpdateInputObjectSchema } from './objects/LandmarkDetailUpdateInput.schema';
import { LandmarkDetailUncheckedUpdateInputObjectSchema as LandmarkDetailUncheckedUpdateInputObjectSchema } from './objects/LandmarkDetailUncheckedUpdateInput.schema';
import { LandmarkDetailWhereUniqueInputObjectSchema as LandmarkDetailWhereUniqueInputObjectSchema } from './objects/LandmarkDetailWhereUniqueInput.schema';

export const LandmarkDetailUpdateOneSchema: z.ZodType<Prisma.LandmarkDetailUpdateArgs> = z.object({ select: LandmarkDetailSelectObjectSchema.optional(), include: LandmarkDetailIncludeObjectSchema.optional(), data: z.union([LandmarkDetailUpdateInputObjectSchema, LandmarkDetailUncheckedUpdateInputObjectSchema]), where: LandmarkDetailWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.LandmarkDetailUpdateArgs>;

export const LandmarkDetailUpdateOneZodSchema = z.object({ select: LandmarkDetailSelectObjectSchema.optional(), include: LandmarkDetailIncludeObjectSchema.optional(), data: z.union([LandmarkDetailUpdateInputObjectSchema, LandmarkDetailUncheckedUpdateInputObjectSchema]), where: LandmarkDetailWhereUniqueInputObjectSchema }).strict();