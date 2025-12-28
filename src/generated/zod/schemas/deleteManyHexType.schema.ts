import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { HexTypeWhereInputObjectSchema as HexTypeWhereInputObjectSchema } from './objects/HexTypeWhereInput.schema';

export const HexTypeDeleteManySchema: z.ZodType<Prisma.HexTypeDeleteManyArgs> = z.object({ where: HexTypeWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.HexTypeDeleteManyArgs>;

export const HexTypeDeleteManyZodSchema = z.object({ where: HexTypeWhereInputObjectSchema.optional() }).strict();