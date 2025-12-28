import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { BackgroundUpdateManyMutationInputObjectSchema as BackgroundUpdateManyMutationInputObjectSchema } from './objects/BackgroundUpdateManyMutationInput.schema';
import { BackgroundWhereInputObjectSchema as BackgroundWhereInputObjectSchema } from './objects/BackgroundWhereInput.schema';

export const BackgroundUpdateManySchema: z.ZodType<Prisma.BackgroundUpdateManyArgs> = z.object({ data: BackgroundUpdateManyMutationInputObjectSchema, where: BackgroundWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.BackgroundUpdateManyArgs>;

export const BackgroundUpdateManyZodSchema = z.object({ data: BackgroundUpdateManyMutationInputObjectSchema, where: BackgroundWhereInputObjectSchema.optional() }).strict();