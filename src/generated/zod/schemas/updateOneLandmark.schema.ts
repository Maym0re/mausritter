import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { LandmarkSelectObjectSchema as LandmarkSelectObjectSchema } from './objects/LandmarkSelect.schema';
import { LandmarkIncludeObjectSchema as LandmarkIncludeObjectSchema } from './objects/LandmarkInclude.schema';
import { LandmarkUpdateInputObjectSchema as LandmarkUpdateInputObjectSchema } from './objects/LandmarkUpdateInput.schema';
import { LandmarkUncheckedUpdateInputObjectSchema as LandmarkUncheckedUpdateInputObjectSchema } from './objects/LandmarkUncheckedUpdateInput.schema';
import { LandmarkWhereUniqueInputObjectSchema as LandmarkWhereUniqueInputObjectSchema } from './objects/LandmarkWhereUniqueInput.schema';

export const LandmarkUpdateOneSchema: z.ZodType<Prisma.LandmarkUpdateArgs> = z.object({ select: LandmarkSelectObjectSchema.optional(), include: LandmarkIncludeObjectSchema.optional(), data: z.union([LandmarkUpdateInputObjectSchema, LandmarkUncheckedUpdateInputObjectSchema]), where: LandmarkWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.LandmarkUpdateArgs>;

export const LandmarkUpdateOneZodSchema = z.object({ select: LandmarkSelectObjectSchema.optional(), include: LandmarkIncludeObjectSchema.optional(), data: z.union([LandmarkUpdateInputObjectSchema, LandmarkUncheckedUpdateInputObjectSchema]), where: LandmarkWhereUniqueInputObjectSchema }).strict();