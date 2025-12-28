import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { HexMapUpdateManyMutationInputObjectSchema as HexMapUpdateManyMutationInputObjectSchema } from './objects/HexMapUpdateManyMutationInput.schema';
import { HexMapWhereInputObjectSchema as HexMapWhereInputObjectSchema } from './objects/HexMapWhereInput.schema';

export const HexMapUpdateManySchema: z.ZodType<Prisma.HexMapUpdateManyArgs> = z.object({ data: HexMapUpdateManyMutationInputObjectSchema, where: HexMapWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.HexMapUpdateManyArgs>;

export const HexMapUpdateManyZodSchema = z.object({ data: HexMapUpdateManyMutationInputObjectSchema, where: HexMapWhereInputObjectSchema.optional() }).strict();