import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { HexCellSelectObjectSchema } from './objects/HexCellSelect.schema';
import { HexCellIncludeObjectSchema } from './objects/HexCellInclude.schema';
import { HexCellWhereUniqueInputObjectSchema } from './objects/HexCellWhereUniqueInput.schema';

export const HexCellFindUniqueSchema: z.ZodType<Prisma.HexCellFindUniqueArgs> = z.object({ select: HexCellSelectObjectSchema.optional(), include: HexCellIncludeObjectSchema.optional(), where: HexCellWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.HexCellFindUniqueArgs>;

export const HexCellFindUniqueZodSchema = z.object({ select: HexCellSelectObjectSchema.optional(), include: HexCellIncludeObjectSchema.optional(), where: HexCellWhereUniqueInputObjectSchema }).strict();