import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { HexMapSelectObjectSchema as HexMapSelectObjectSchema } from './objects/HexMapSelect.schema';
import { HexMapUpdateManyMutationInputObjectSchema as HexMapUpdateManyMutationInputObjectSchema } from './objects/HexMapUpdateManyMutationInput.schema';
import { HexMapWhereInputObjectSchema as HexMapWhereInputObjectSchema } from './objects/HexMapWhereInput.schema';

export const HexMapUpdateManyAndReturnSchema: z.ZodType<Prisma.HexMapUpdateManyAndReturnArgs> = z.object({ select: HexMapSelectObjectSchema.optional(), data: HexMapUpdateManyMutationInputObjectSchema, where: HexMapWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.HexMapUpdateManyAndReturnArgs>;

export const HexMapUpdateManyAndReturnZodSchema = z.object({ select: HexMapSelectObjectSchema.optional(), data: HexMapUpdateManyMutationInputObjectSchema, where: HexMapWhereInputObjectSchema.optional() }).strict();