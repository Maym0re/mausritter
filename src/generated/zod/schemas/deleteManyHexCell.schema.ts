import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { HexCellWhereInputObjectSchema as HexCellWhereInputObjectSchema } from './objects/HexCellWhereInput.schema';

export const HexCellDeleteManySchema: z.ZodType<Prisma.HexCellDeleteManyArgs> = z.object({ where: HexCellWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.HexCellDeleteManyArgs>;

export const HexCellDeleteManyZodSchema = z.object({ where: HexCellWhereInputObjectSchema.optional() }).strict();