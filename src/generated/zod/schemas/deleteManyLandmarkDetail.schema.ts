import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { LandmarkDetailWhereInputObjectSchema as LandmarkDetailWhereInputObjectSchema } from './objects/LandmarkDetailWhereInput.schema';

export const LandmarkDetailDeleteManySchema: z.ZodType<Prisma.LandmarkDetailDeleteManyArgs> = z.object({ where: LandmarkDetailWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.LandmarkDetailDeleteManyArgs>;

export const LandmarkDetailDeleteManyZodSchema = z.object({ where: LandmarkDetailWhereInputObjectSchema.optional() }).strict();