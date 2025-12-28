import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { BackgroundWhereInputObjectSchema as BackgroundWhereInputObjectSchema } from './objects/BackgroundWhereInput.schema';

export const BackgroundDeleteManySchema: z.ZodType<Prisma.BackgroundDeleteManyArgs> = z.object({ where: BackgroundWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.BackgroundDeleteManyArgs>;

export const BackgroundDeleteManyZodSchema = z.object({ where: BackgroundWhereInputObjectSchema.optional() }).strict();