import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { HexMapWhereInputObjectSchema as HexMapWhereInputObjectSchema } from './objects/HexMapWhereInput.schema';

export const HexMapDeleteManySchema: z.ZodType<Prisma.HexMapDeleteManyArgs> = z.object({ where: HexMapWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.HexMapDeleteManyArgs>;

export const HexMapDeleteManyZodSchema = z.object({ where: HexMapWhereInputObjectSchema.optional() }).strict();