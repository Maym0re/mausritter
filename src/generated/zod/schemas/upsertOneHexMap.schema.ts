import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { HexMapSelectObjectSchema as HexMapSelectObjectSchema } from './objects/HexMapSelect.schema';
import { HexMapIncludeObjectSchema as HexMapIncludeObjectSchema } from './objects/HexMapInclude.schema';
import { HexMapWhereUniqueInputObjectSchema as HexMapWhereUniqueInputObjectSchema } from './objects/HexMapWhereUniqueInput.schema';
import { HexMapCreateInputObjectSchema as HexMapCreateInputObjectSchema } from './objects/HexMapCreateInput.schema';
import { HexMapUncheckedCreateInputObjectSchema as HexMapUncheckedCreateInputObjectSchema } from './objects/HexMapUncheckedCreateInput.schema';
import { HexMapUpdateInputObjectSchema as HexMapUpdateInputObjectSchema } from './objects/HexMapUpdateInput.schema';
import { HexMapUncheckedUpdateInputObjectSchema as HexMapUncheckedUpdateInputObjectSchema } from './objects/HexMapUncheckedUpdateInput.schema';

export const HexMapUpsertOneSchema: z.ZodType<Prisma.HexMapUpsertArgs> = z.object({ select: HexMapSelectObjectSchema.optional(), include: HexMapIncludeObjectSchema.optional(), where: HexMapWhereUniqueInputObjectSchema, create: z.union([ HexMapCreateInputObjectSchema, HexMapUncheckedCreateInputObjectSchema ]), update: z.union([ HexMapUpdateInputObjectSchema, HexMapUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.HexMapUpsertArgs>;

export const HexMapUpsertOneZodSchema = z.object({ select: HexMapSelectObjectSchema.optional(), include: HexMapIncludeObjectSchema.optional(), where: HexMapWhereUniqueInputObjectSchema, create: z.union([ HexMapCreateInputObjectSchema, HexMapUncheckedCreateInputObjectSchema ]), update: z.union([ HexMapUpdateInputObjectSchema, HexMapUncheckedUpdateInputObjectSchema ]) }).strict();