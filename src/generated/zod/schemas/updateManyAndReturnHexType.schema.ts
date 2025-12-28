import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { HexTypeSelectObjectSchema as HexTypeSelectObjectSchema } from './objects/HexTypeSelect.schema';
import { HexTypeUpdateManyMutationInputObjectSchema as HexTypeUpdateManyMutationInputObjectSchema } from './objects/HexTypeUpdateManyMutationInput.schema';
import { HexTypeWhereInputObjectSchema as HexTypeWhereInputObjectSchema } from './objects/HexTypeWhereInput.schema';

export const HexTypeUpdateManyAndReturnSchema: z.ZodType<Prisma.HexTypeUpdateManyAndReturnArgs> = z.object({ select: HexTypeSelectObjectSchema.optional(), data: HexTypeUpdateManyMutationInputObjectSchema, where: HexTypeWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.HexTypeUpdateManyAndReturnArgs>;

export const HexTypeUpdateManyAndReturnZodSchema = z.object({ select: HexTypeSelectObjectSchema.optional(), data: HexTypeUpdateManyMutationInputObjectSchema, where: HexTypeWhereInputObjectSchema.optional() }).strict();