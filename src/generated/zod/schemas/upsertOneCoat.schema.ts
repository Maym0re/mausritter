import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { CoatSelectObjectSchema as CoatSelectObjectSchema } from './objects/CoatSelect.schema';
import { CoatIncludeObjectSchema as CoatIncludeObjectSchema } from './objects/CoatInclude.schema';
import { CoatWhereUniqueInputObjectSchema as CoatWhereUniqueInputObjectSchema } from './objects/CoatWhereUniqueInput.schema';
import { CoatCreateInputObjectSchema as CoatCreateInputObjectSchema } from './objects/CoatCreateInput.schema';
import { CoatUncheckedCreateInputObjectSchema as CoatUncheckedCreateInputObjectSchema } from './objects/CoatUncheckedCreateInput.schema';
import { CoatUpdateInputObjectSchema as CoatUpdateInputObjectSchema } from './objects/CoatUpdateInput.schema';
import { CoatUncheckedUpdateInputObjectSchema as CoatUncheckedUpdateInputObjectSchema } from './objects/CoatUncheckedUpdateInput.schema';

export const CoatUpsertOneSchema: z.ZodType<Prisma.CoatUpsertArgs> = z.object({ select: CoatSelectObjectSchema.optional(), include: CoatIncludeObjectSchema.optional(), where: CoatWhereUniqueInputObjectSchema, create: z.union([ CoatCreateInputObjectSchema, CoatUncheckedCreateInputObjectSchema ]), update: z.union([ CoatUpdateInputObjectSchema, CoatUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.CoatUpsertArgs>;

export const CoatUpsertOneZodSchema = z.object({ select: CoatSelectObjectSchema.optional(), include: CoatIncludeObjectSchema.optional(), where: CoatWhereUniqueInputObjectSchema, create: z.union([ CoatCreateInputObjectSchema, CoatUncheckedCreateInputObjectSchema ]), update: z.union([ CoatUpdateInputObjectSchema, CoatUncheckedUpdateInputObjectSchema ]) }).strict();