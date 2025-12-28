import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { HexMapSelectObjectSchema as HexMapSelectObjectSchema } from './objects/HexMapSelect.schema';
import { HexMapIncludeObjectSchema as HexMapIncludeObjectSchema } from './objects/HexMapInclude.schema';
import { HexMapUpdateInputObjectSchema as HexMapUpdateInputObjectSchema } from './objects/HexMapUpdateInput.schema';
import { HexMapUncheckedUpdateInputObjectSchema as HexMapUncheckedUpdateInputObjectSchema } from './objects/HexMapUncheckedUpdateInput.schema';
import { HexMapWhereUniqueInputObjectSchema as HexMapWhereUniqueInputObjectSchema } from './objects/HexMapWhereUniqueInput.schema';

export const HexMapUpdateOneSchema: z.ZodType<Prisma.HexMapUpdateArgs> = z.object({ select: HexMapSelectObjectSchema.optional(), include: HexMapIncludeObjectSchema.optional(), data: z.union([HexMapUpdateInputObjectSchema, HexMapUncheckedUpdateInputObjectSchema]), where: HexMapWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.HexMapUpdateArgs>;

export const HexMapUpdateOneZodSchema = z.object({ select: HexMapSelectObjectSchema.optional(), include: HexMapIncludeObjectSchema.optional(), data: z.union([HexMapUpdateInputObjectSchema, HexMapUncheckedUpdateInputObjectSchema]), where: HexMapWhereUniqueInputObjectSchema }).strict();