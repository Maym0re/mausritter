import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { LandmarkUpdateManyMutationInputObjectSchema as LandmarkUpdateManyMutationInputObjectSchema } from './objects/LandmarkUpdateManyMutationInput.schema';
import { LandmarkWhereInputObjectSchema as LandmarkWhereInputObjectSchema } from './objects/LandmarkWhereInput.schema';

export const LandmarkUpdateManySchema: z.ZodType<Prisma.LandmarkUpdateManyArgs> = z.object({ data: LandmarkUpdateManyMutationInputObjectSchema, where: LandmarkWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.LandmarkUpdateManyArgs>;

export const LandmarkUpdateManyZodSchema = z.object({ data: LandmarkUpdateManyMutationInputObjectSchema, where: LandmarkWhereInputObjectSchema.optional() }).strict();