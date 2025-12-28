import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { LandmarkSelectObjectSchema as LandmarkSelectObjectSchema } from './objects/LandmarkSelect.schema';
import { LandmarkIncludeObjectSchema as LandmarkIncludeObjectSchema } from './objects/LandmarkInclude.schema';
import { LandmarkCreateInputObjectSchema as LandmarkCreateInputObjectSchema } from './objects/LandmarkCreateInput.schema';
import { LandmarkUncheckedCreateInputObjectSchema as LandmarkUncheckedCreateInputObjectSchema } from './objects/LandmarkUncheckedCreateInput.schema';

export const LandmarkCreateOneSchema: z.ZodType<Prisma.LandmarkCreateArgs> = z.object({ select: LandmarkSelectObjectSchema.optional(), include: LandmarkIncludeObjectSchema.optional(), data: z.union([LandmarkCreateInputObjectSchema, LandmarkUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.LandmarkCreateArgs>;

export const LandmarkCreateOneZodSchema = z.object({ select: LandmarkSelectObjectSchema.optional(), include: LandmarkIncludeObjectSchema.optional(), data: z.union([LandmarkCreateInputObjectSchema, LandmarkUncheckedCreateInputObjectSchema]) }).strict();