import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { BirthsignSelectObjectSchema as BirthsignSelectObjectSchema } from './objects/BirthsignSelect.schema';
import { BirthsignUpdateManyMutationInputObjectSchema as BirthsignUpdateManyMutationInputObjectSchema } from './objects/BirthsignUpdateManyMutationInput.schema';
import { BirthsignWhereInputObjectSchema as BirthsignWhereInputObjectSchema } from './objects/BirthsignWhereInput.schema';

export const BirthsignUpdateManyAndReturnSchema: z.ZodType<Prisma.BirthsignUpdateManyAndReturnArgs> = z.object({ select: BirthsignSelectObjectSchema.optional(), data: BirthsignUpdateManyMutationInputObjectSchema, where: BirthsignWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.BirthsignUpdateManyAndReturnArgs>;

export const BirthsignUpdateManyAndReturnZodSchema = z.object({ select: BirthsignSelectObjectSchema.optional(), data: BirthsignUpdateManyMutationInputObjectSchema, where: BirthsignWhereInputObjectSchema.optional() }).strict();