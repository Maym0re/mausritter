import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { HexCellSelectObjectSchema } from './objects/HexCellSelect.schema';
import { HexCellIncludeObjectSchema } from './objects/HexCellInclude.schema';
import { HexCellWhereUniqueInputObjectSchema } from './objects/HexCellWhereUniqueInput.schema';

export const HexCellFindUniqueOrThrowSchema: z.ZodType<Prisma.HexCellFindUniqueOrThrowArgs> = z.object({ select: HexCellSelectObjectSchema.optional(), include: HexCellIncludeObjectSchema.optional(), where: HexCellWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.HexCellFindUniqueOrThrowArgs>;

export const HexCellFindUniqueOrThrowZodSchema = z.object({ select: HexCellSelectObjectSchema.optional(), include: HexCellIncludeObjectSchema.optional(), where: HexCellWhereUniqueInputObjectSchema }).strict();