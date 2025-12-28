import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { CoatUpdateManyMutationInputObjectSchema as CoatUpdateManyMutationInputObjectSchema } from './objects/CoatUpdateManyMutationInput.schema';
import { CoatWhereInputObjectSchema as CoatWhereInputObjectSchema } from './objects/CoatWhereInput.schema';

export const CoatUpdateManySchema: z.ZodType<Prisma.CoatUpdateManyArgs> = z.object({ data: CoatUpdateManyMutationInputObjectSchema, where: CoatWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.CoatUpdateManyArgs>;

export const CoatUpdateManyZodSchema = z.object({ data: CoatUpdateManyMutationInputObjectSchema, where: CoatWhereInputObjectSchema.optional() }).strict();