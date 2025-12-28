import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { HexTypeSelectObjectSchema as HexTypeSelectObjectSchema } from './objects/HexTypeSelect.schema';
import { HexTypeIncludeObjectSchema as HexTypeIncludeObjectSchema } from './objects/HexTypeInclude.schema';
import { HexTypeUpdateInputObjectSchema as HexTypeUpdateInputObjectSchema } from './objects/HexTypeUpdateInput.schema';
import { HexTypeUncheckedUpdateInputObjectSchema as HexTypeUncheckedUpdateInputObjectSchema } from './objects/HexTypeUncheckedUpdateInput.schema';
import { HexTypeWhereUniqueInputObjectSchema as HexTypeWhereUniqueInputObjectSchema } from './objects/HexTypeWhereUniqueInput.schema';

export const HexTypeUpdateOneSchema: z.ZodType<Prisma.HexTypeUpdateArgs> = z.object({ select: HexTypeSelectObjectSchema.optional(), include: HexTypeIncludeObjectSchema.optional(), data: z.union([HexTypeUpdateInputObjectSchema, HexTypeUncheckedUpdateInputObjectSchema]), where: HexTypeWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.HexTypeUpdateArgs>;

export const HexTypeUpdateOneZodSchema = z.object({ select: HexTypeSelectObjectSchema.optional(), include: HexTypeIncludeObjectSchema.optional(), data: z.union([HexTypeUpdateInputObjectSchema, HexTypeUncheckedUpdateInputObjectSchema]), where: HexTypeWhereUniqueInputObjectSchema }).strict();