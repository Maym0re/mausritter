import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { HexMapSelectObjectSchema } from './objects/HexMapSelect.schema';
import { HexMapIncludeObjectSchema } from './objects/HexMapInclude.schema';
import { HexMapWhereUniqueInputObjectSchema } from './objects/HexMapWhereUniqueInput.schema';

export const HexMapFindUniqueSchema: z.ZodType<Prisma.HexMapFindUniqueArgs> = z.object({ select: HexMapSelectObjectSchema.optional(), include: HexMapIncludeObjectSchema.optional(), where: HexMapWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.HexMapFindUniqueArgs>;

export const HexMapFindUniqueZodSchema = z.object({ select: HexMapSelectObjectSchema.optional(), include: HexMapIncludeObjectSchema.optional(), where: HexMapWhereUniqueInputObjectSchema }).strict();