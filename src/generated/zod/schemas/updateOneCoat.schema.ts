import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { CoatSelectObjectSchema as CoatSelectObjectSchema } from './objects/CoatSelect.schema';
import { CoatIncludeObjectSchema as CoatIncludeObjectSchema } from './objects/CoatInclude.schema';
import { CoatUpdateInputObjectSchema as CoatUpdateInputObjectSchema } from './objects/CoatUpdateInput.schema';
import { CoatUncheckedUpdateInputObjectSchema as CoatUncheckedUpdateInputObjectSchema } from './objects/CoatUncheckedUpdateInput.schema';
import { CoatWhereUniqueInputObjectSchema as CoatWhereUniqueInputObjectSchema } from './objects/CoatWhereUniqueInput.schema';

export const CoatUpdateOneSchema: z.ZodType<Prisma.CoatUpdateArgs> = z.object({ select: CoatSelectObjectSchema.optional(), include: CoatIncludeObjectSchema.optional(), data: z.union([CoatUpdateInputObjectSchema, CoatUncheckedUpdateInputObjectSchema]), where: CoatWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.CoatUpdateArgs>;

export const CoatUpdateOneZodSchema = z.object({ select: CoatSelectObjectSchema.optional(), include: CoatIncludeObjectSchema.optional(), data: z.union([CoatUpdateInputObjectSchema, CoatUncheckedUpdateInputObjectSchema]), where: CoatWhereUniqueInputObjectSchema }).strict();