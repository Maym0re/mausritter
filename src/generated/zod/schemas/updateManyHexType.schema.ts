import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { HexTypeUpdateManyMutationInputObjectSchema as HexTypeUpdateManyMutationInputObjectSchema } from './objects/HexTypeUpdateManyMutationInput.schema';
import { HexTypeWhereInputObjectSchema as HexTypeWhereInputObjectSchema } from './objects/HexTypeWhereInput.schema';

export const HexTypeUpdateManySchema: z.ZodType<Prisma.HexTypeUpdateManyArgs> = z.object({ data: HexTypeUpdateManyMutationInputObjectSchema, where: HexTypeWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.HexTypeUpdateManyArgs>;

export const HexTypeUpdateManyZodSchema = z.object({ data: HexTypeUpdateManyMutationInputObjectSchema, where: HexTypeWhereInputObjectSchema.optional() }).strict();