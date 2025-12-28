import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { HexMapSelectObjectSchema as HexMapSelectObjectSchema } from './objects/HexMapSelect.schema';
import { HexMapIncludeObjectSchema as HexMapIncludeObjectSchema } from './objects/HexMapInclude.schema';
import { HexMapWhereUniqueInputObjectSchema as HexMapWhereUniqueInputObjectSchema } from './objects/HexMapWhereUniqueInput.schema';

export const HexMapFindUniqueOrThrowSchema: z.ZodType<Prisma.HexMapFindUniqueOrThrowArgs> = z.object({ select: HexMapSelectObjectSchema.optional(), include: HexMapIncludeObjectSchema.optional(), where: HexMapWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.HexMapFindUniqueOrThrowArgs>;

export const HexMapFindUniqueOrThrowZodSchema = z.object({ select: HexMapSelectObjectSchema.optional(), include: HexMapIncludeObjectSchema.optional(), where: HexMapWhereUniqueInputObjectSchema }).strict();