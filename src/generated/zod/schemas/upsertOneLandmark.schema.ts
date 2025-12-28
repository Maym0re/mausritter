import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { LandmarkSelectObjectSchema as LandmarkSelectObjectSchema } from './objects/LandmarkSelect.schema';
import { LandmarkIncludeObjectSchema as LandmarkIncludeObjectSchema } from './objects/LandmarkInclude.schema';
import { LandmarkWhereUniqueInputObjectSchema as LandmarkWhereUniqueInputObjectSchema } from './objects/LandmarkWhereUniqueInput.schema';
import { LandmarkCreateInputObjectSchema as LandmarkCreateInputObjectSchema } from './objects/LandmarkCreateInput.schema';
import { LandmarkUncheckedCreateInputObjectSchema as LandmarkUncheckedCreateInputObjectSchema } from './objects/LandmarkUncheckedCreateInput.schema';
import { LandmarkUpdateInputObjectSchema as LandmarkUpdateInputObjectSchema } from './objects/LandmarkUpdateInput.schema';
import { LandmarkUncheckedUpdateInputObjectSchema as LandmarkUncheckedUpdateInputObjectSchema } from './objects/LandmarkUncheckedUpdateInput.schema';

export const LandmarkUpsertOneSchema: z.ZodType<Prisma.LandmarkUpsertArgs> = z.object({ select: LandmarkSelectObjectSchema.optional(), include: LandmarkIncludeObjectSchema.optional(), where: LandmarkWhereUniqueInputObjectSchema, create: z.union([ LandmarkCreateInputObjectSchema, LandmarkUncheckedCreateInputObjectSchema ]), update: z.union([ LandmarkUpdateInputObjectSchema, LandmarkUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.LandmarkUpsertArgs>;

export const LandmarkUpsertOneZodSchema = z.object({ select: LandmarkSelectObjectSchema.optional(), include: LandmarkIncludeObjectSchema.optional(), where: LandmarkWhereUniqueInputObjectSchema, create: z.union([ LandmarkCreateInputObjectSchema, LandmarkUncheckedCreateInputObjectSchema ]), update: z.union([ LandmarkUpdateInputObjectSchema, LandmarkUncheckedUpdateInputObjectSchema ]) }).strict();