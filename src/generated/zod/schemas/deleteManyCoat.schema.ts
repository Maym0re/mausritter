import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { CoatWhereInputObjectSchema as CoatWhereInputObjectSchema } from './objects/CoatWhereInput.schema';

export const CoatDeleteManySchema: z.ZodType<Prisma.CoatDeleteManyArgs> = z.object({ where: CoatWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.CoatDeleteManyArgs>;

export const CoatDeleteManyZodSchema = z.object({ where: CoatWhereInputObjectSchema.optional() }).strict();