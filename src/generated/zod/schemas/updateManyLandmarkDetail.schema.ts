import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { LandmarkDetailUpdateManyMutationInputObjectSchema as LandmarkDetailUpdateManyMutationInputObjectSchema } from './objects/LandmarkDetailUpdateManyMutationInput.schema';
import { LandmarkDetailWhereInputObjectSchema as LandmarkDetailWhereInputObjectSchema } from './objects/LandmarkDetailWhereInput.schema';

export const LandmarkDetailUpdateManySchema: z.ZodType<Prisma.LandmarkDetailUpdateManyArgs> = z.object({ data: LandmarkDetailUpdateManyMutationInputObjectSchema, where: LandmarkDetailWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.LandmarkDetailUpdateManyArgs>;

export const LandmarkDetailUpdateManyZodSchema = z.object({ data: LandmarkDetailUpdateManyMutationInputObjectSchema, where: LandmarkDetailWhereInputObjectSchema.optional() }).strict();