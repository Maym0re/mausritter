import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { CoatSelectObjectSchema as CoatSelectObjectSchema } from './objects/CoatSelect.schema';
import { CoatUpdateManyMutationInputObjectSchema as CoatUpdateManyMutationInputObjectSchema } from './objects/CoatUpdateManyMutationInput.schema';
import { CoatWhereInputObjectSchema as CoatWhereInputObjectSchema } from './objects/CoatWhereInput.schema';

export const CoatUpdateManyAndReturnSchema: z.ZodType<Prisma.CoatUpdateManyAndReturnArgs> = z.object({ select: CoatSelectObjectSchema.optional(), data: CoatUpdateManyMutationInputObjectSchema, where: CoatWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.CoatUpdateManyAndReturnArgs>;

export const CoatUpdateManyAndReturnZodSchema = z.object({ select: CoatSelectObjectSchema.optional(), data: CoatUpdateManyMutationInputObjectSchema, where: CoatWhereInputObjectSchema.optional() }).strict();