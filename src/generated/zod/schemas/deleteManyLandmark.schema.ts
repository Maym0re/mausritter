import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { LandmarkWhereInputObjectSchema as LandmarkWhereInputObjectSchema } from './objects/LandmarkWhereInput.schema';

export const LandmarkDeleteManySchema: z.ZodType<Prisma.LandmarkDeleteManyArgs> = z.object({ where: LandmarkWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.LandmarkDeleteManyArgs>;

export const LandmarkDeleteManyZodSchema = z.object({ where: LandmarkWhereInputObjectSchema.optional() }).strict();