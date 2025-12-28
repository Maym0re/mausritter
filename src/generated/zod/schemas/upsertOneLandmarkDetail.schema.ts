import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { LandmarkDetailSelectObjectSchema as LandmarkDetailSelectObjectSchema } from './objects/LandmarkDetailSelect.schema';
import { LandmarkDetailIncludeObjectSchema as LandmarkDetailIncludeObjectSchema } from './objects/LandmarkDetailInclude.schema';
import { LandmarkDetailWhereUniqueInputObjectSchema as LandmarkDetailWhereUniqueInputObjectSchema } from './objects/LandmarkDetailWhereUniqueInput.schema';
import { LandmarkDetailCreateInputObjectSchema as LandmarkDetailCreateInputObjectSchema } from './objects/LandmarkDetailCreateInput.schema';
import { LandmarkDetailUncheckedCreateInputObjectSchema as LandmarkDetailUncheckedCreateInputObjectSchema } from './objects/LandmarkDetailUncheckedCreateInput.schema';
import { LandmarkDetailUpdateInputObjectSchema as LandmarkDetailUpdateInputObjectSchema } from './objects/LandmarkDetailUpdateInput.schema';
import { LandmarkDetailUncheckedUpdateInputObjectSchema as LandmarkDetailUncheckedUpdateInputObjectSchema } from './objects/LandmarkDetailUncheckedUpdateInput.schema';

export const LandmarkDetailUpsertOneSchema: z.ZodType<Prisma.LandmarkDetailUpsertArgs> = z.object({ select: LandmarkDetailSelectObjectSchema.optional(), include: LandmarkDetailIncludeObjectSchema.optional(), where: LandmarkDetailWhereUniqueInputObjectSchema, create: z.union([ LandmarkDetailCreateInputObjectSchema, LandmarkDetailUncheckedCreateInputObjectSchema ]), update: z.union([ LandmarkDetailUpdateInputObjectSchema, LandmarkDetailUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.LandmarkDetailUpsertArgs>;

export const LandmarkDetailUpsertOneZodSchema = z.object({ select: LandmarkDetailSelectObjectSchema.optional(), include: LandmarkDetailIncludeObjectSchema.optional(), where: LandmarkDetailWhereUniqueInputObjectSchema, create: z.union([ LandmarkDetailCreateInputObjectSchema, LandmarkDetailUncheckedCreateInputObjectSchema ]), update: z.union([ LandmarkDetailUpdateInputObjectSchema, LandmarkDetailUncheckedUpdateInputObjectSchema ]) }).strict();