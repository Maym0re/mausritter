import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { CoatSelectObjectSchema } from './objects/CoatSelect.schema';
import { CoatIncludeObjectSchema } from './objects/CoatInclude.schema';
import { CoatWhereUniqueInputObjectSchema } from './objects/CoatWhereUniqueInput.schema';

export const CoatFindUniqueOrThrowSchema: z.ZodType<Prisma.CoatFindUniqueOrThrowArgs> = z.object({ select: CoatSelectObjectSchema.optional(), include: CoatIncludeObjectSchema.optional(), where: CoatWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.CoatFindUniqueOrThrowArgs>;

export const CoatFindUniqueOrThrowZodSchema = z.object({ select: CoatSelectObjectSchema.optional(), include: CoatIncludeObjectSchema.optional(), where: CoatWhereUniqueInputObjectSchema }).strict();