import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { CoatSelectObjectSchema as CoatSelectObjectSchema } from './objects/CoatSelect.schema';
import { CoatIncludeObjectSchema as CoatIncludeObjectSchema } from './objects/CoatInclude.schema';
import { CoatCreateInputObjectSchema as CoatCreateInputObjectSchema } from './objects/CoatCreateInput.schema';
import { CoatUncheckedCreateInputObjectSchema as CoatUncheckedCreateInputObjectSchema } from './objects/CoatUncheckedCreateInput.schema';

export const CoatCreateOneSchema: z.ZodType<Prisma.CoatCreateArgs> = z.object({ select: CoatSelectObjectSchema.optional(), include: CoatIncludeObjectSchema.optional(), data: z.union([CoatCreateInputObjectSchema, CoatUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.CoatCreateArgs>;

export const CoatCreateOneZodSchema = z.object({ select: CoatSelectObjectSchema.optional(), include: CoatIncludeObjectSchema.optional(), data: z.union([CoatCreateInputObjectSchema, CoatUncheckedCreateInputObjectSchema]) }).strict();