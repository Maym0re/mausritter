import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { CoatSelectObjectSchema } from './objects/CoatSelect.schema';
import { CoatIncludeObjectSchema } from './objects/CoatInclude.schema';
import { CoatWhereUniqueInputObjectSchema } from './objects/CoatWhereUniqueInput.schema';

export const CoatFindUniqueSchema: z.ZodType<Prisma.CoatFindUniqueArgs> = z.object({ select: CoatSelectObjectSchema.optional(), include: CoatIncludeObjectSchema.optional(), where: CoatWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.CoatFindUniqueArgs>;

export const CoatFindUniqueZodSchema = z.object({ select: CoatSelectObjectSchema.optional(), include: CoatIncludeObjectSchema.optional(), where: CoatWhereUniqueInputObjectSchema }).strict();