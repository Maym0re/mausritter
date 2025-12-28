import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { CoatSelectObjectSchema as CoatSelectObjectSchema } from './objects/CoatSelect.schema';
import { CoatIncludeObjectSchema as CoatIncludeObjectSchema } from './objects/CoatInclude.schema';
import { CoatWhereUniqueInputObjectSchema as CoatWhereUniqueInputObjectSchema } from './objects/CoatWhereUniqueInput.schema';

export const CoatDeleteOneSchema: z.ZodType<Prisma.CoatDeleteArgs> = z.object({ select: CoatSelectObjectSchema.optional(), include: CoatIncludeObjectSchema.optional(), where: CoatWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.CoatDeleteArgs>;

export const CoatDeleteOneZodSchema = z.object({ select: CoatSelectObjectSchema.optional(), include: CoatIncludeObjectSchema.optional(), where: CoatWhereUniqueInputObjectSchema }).strict();